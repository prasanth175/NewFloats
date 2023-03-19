// Write your JS code here
import {Component} from 'react'
import {Audio} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'
import ContentCard from '../ContentCard'

class Products extends Component {
  state = {li: [], isLoading: false}
  //   const getToken = Cookies.get('jwt_token')
  //   const {history} = props
  //   if (getToken === undefined) {
  //     history.replace('/login')
  //   }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    const url = 'http://localhost:3006/posts'
    const response = await fetch(url)
    const data = await response.json()
    console.log(response)
    console.log(data)
    const updatedList = data.dbRes.map(each => ({
      user: each.user,
      id: each.id,
      file: each.file,
      description: each.description,
      fileType: each.file_type,
      time: each.time,
    }))
    this.setState({li: updatedList, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader-container">
      <Audio type="ThreeDots" color="#somecolor" height={80} width={80} />
    </div>
  )

  renderAllProducts = () => {
    const {li} = this.state
    return (
      <div className="all-products">
        <ul>
          {li.map(each => (
            <ContentCard item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {li, isLoading} = this.state
    console.log(li)
    return (
      <>
        <Header />
        {isLoading ? this.renderLoader() : this.renderAllProducts()}
      </>
    )
  }
}

export default Products
