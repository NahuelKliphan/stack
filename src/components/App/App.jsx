import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Layout from '../Layout/Layout.jsx';
import NotFound from '../NotFound/NotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} /> */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
