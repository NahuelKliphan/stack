import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Layout from '../Layout/Layout.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import '../../../node_modules/mdb-ui-kit/css/mdb.min.css';
import '../../../node_modules/mdb-ui-kit/js/mdb.min.js';
import ProductList from '../Product/ProductList/ProductList';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={ProductList} />
          {/* <Route exact path="/badges/new" component={BadgeNew} /> */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
