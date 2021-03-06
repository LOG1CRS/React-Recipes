import { useState, useEffect } from 'react';
import getLikes from '../utils/getLikes';

const useGetSearchedRecipe = (searchValue, setLoading) => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [likesValues, lastMaxValue] = getLikes(100, 25000, 500);
  const { REACT_APP_API_KEY } = process.env;

  useEffect(() => {
    setLoading(true);
    getSearchedRecipe(searchValue);
  }, [searchValue]);

  const getSearchedRecipe = async (searchValue) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&addRecipeInformation=true&fillIngredients=true&query=${searchValue}&number=100`
    );
    const data = await response.json();

    if (!data.code || data === undefined) {
      setSearchedRecipes(data.results);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return [searchedRecipes, likesValues, lastMaxValue];
};

export default useGetSearchedRecipe;
