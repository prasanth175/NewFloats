import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const ContentCard = props => {
  //   const getToken = Cookies.get('jwt_token')
  //   const {history} = props
  //   if (getToken === undefined) {
  //     history.replace('/login')
  //   }
  const {item} = props
  const {user, id, file, description, fileType, time} = item
  console.log(item)
  const checkFileType = fileType.includes('image')
  console.log(checkFileType)
  return (
    <>
      <div className="content-card">
        <div className="content-txt">
          <div className="content-top">
            <h1>{user}</h1>
            <p>{time}</p>
          </div>

          <p>{description}</p>
        </div>
        {checkFileType ? (
          <img className="content-img" src={file} alt="products" />
        ) : (
          <video width="320" height="240" controls>
            <source src={file} type={fileType} />
            <track kind="captions" src="captions.vtt" label="English" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </>
  )
}

export default ContentCard
