import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import RegisterForm from './components/RegisterForm'
import CreatePost from './components/CreatePost'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/create-content" component={CreatePost} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
