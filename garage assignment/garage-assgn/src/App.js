import { Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Forums from './components/Forums';
import FullCard from './components/FullCard'

function App() {
  return (
    <>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/forum' component={Forums}/>
        <Route exact path='/fullcard/:Id' component={FullCard}/>
        </Switch>
      </>
  );
}

export default App;
