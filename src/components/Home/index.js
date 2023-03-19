import {Component} from 'react'
// import {onAuthStateChanged} from 'firebase/auth'
// import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'
// import {auth} from '../../firebase'
// import Header from '../Header'

class Home extends Component {
  //   componentDidMount() {
  //     this.checkForUser()
  //   }

  render() {
    return (
      <div>
        <Header />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
