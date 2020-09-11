import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../assets/style/themeConfig';
import Layout from '../components/layout/Layout';
import { home, search, categories } from './routes.json';

import LandingPage from '../views/LandingPage';
import SearchPage from '../views/SearchPage';
import CategoriesPage from '../views/CategoriesPage';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path={home} component={LandingPage} />
            <Route exact path={search} component={SearchPage} />
            <Route exact path={categories} component={CategoriesPage} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
