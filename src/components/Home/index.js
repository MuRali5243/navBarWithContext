import Header from '../Navbar'
import Context from '../../context/ThemeContext'
import './index.css'

const bgLTheme = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const bgDTheme = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const backTheme = isDarkTheme ? bgDTheme : bgLTheme
      const classname = isDarkTheme ? 'dark-cont' : 'light-cont'

      return (
        <div>
          <Header data={value} fun={toggleTheme} />
          <div className={`home-body-cont ${classname}`}>
            <img className="bg-image" src={backTheme} alt="home" />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Home
