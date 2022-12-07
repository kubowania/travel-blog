import '../styles/globals.css'
import NavBar from '../components/NavBar'

const MyApp = ({ Component, pageProps }) => {
  return (
      <div className="app-container">
        <NavBar/>
        <Component {...pageProps} />
      </div>
      )

}

export default MyApp
