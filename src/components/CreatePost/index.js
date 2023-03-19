import {Component} from 'react'
// import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

class FileUpload extends Component {
  state = {selectedFile: null, text: ''}

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  fileUploadHandler = async event => {
    event.preventDefault()
    const {selectedFile, text} = this.state
    // const jwtToken = Cookies.get('jwt_token')
    // console.log(jwtToken)
    console.log('hlo')
    console.log(selectedFile)
    const formData = new FormData()
    formData.append('file', selectedFile, selectedFile.name)
    formData.append('text', text)
    console.log(selectedFile)
    console.log(formData)
    const response = await fetch('http://localhost:3006/posts', {
      //   headers: {
      //     Authorization: `Bearer ${jwtToken}`,
      //   },
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    console.log(data)
    console.log(response)
  }

  onTextContent = event => this.setState({text: event.target.value})

  render() {
    const {text} = this.state
    return (
      <>
        <Header />
        <div className="content-container">
          <form className="content-box" onSubmit={this.fileUploadHandler}>
            <h1 className="create-post-heading">Create Post</h1>
            <input
              className="text-input"
              type="text"
              onChange={this.onTextContent}
              value={text}
            />
            <div className="file-input-field">
              <input
                className="file-input"
                type="file"
                onChange={this.fileSelectedHandler}
              />
            </div>
            <button className="post-btn" type="submit">
              Post
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default FileUpload
