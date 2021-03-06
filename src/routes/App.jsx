import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import swal from 'sweetalert';

import theme from '../assets/style/themeConfig';
import Layout from '../components/layout/Layout';
import { home, search, categories, shared } from './routes.json';

import Main from '../views/Main';
import SearchPage from '../views/SearchPage';
import CategoriesPage from '../views/CategoriesPage';
import RouterScrollToTop from '../utils/RouterScrollToTop';
import NotFound from '../views/NotFound';

const App = () => {
  window.addEventListener('offline', () => {
    swal(
      'Offline Mode!',
      'We detected that your device is offline, probably React Cookbook is not working properly, please check your connection.',
      'warning'
    );
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RouterScrollToTop />
        <Layout>
          <Switch>
            <Route exact path={home} component={Main} />
            <Route exact path={shared} component={Main} />
            <Route exact path={search} component={SearchPage} />
            <Route exact path={categories} component={CategoriesPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
