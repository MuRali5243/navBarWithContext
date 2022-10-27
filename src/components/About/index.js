import Header from '../Navbar'
import Context from '../../context/ThemeContext'
import './index.css'

const bgLTheme = 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const bgDTheme = 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const backTheme = isDarkTheme ? bgDTheme : bgLTheme
      const classname = isDarkTheme ? 'dark-cont' : 'light-cont'

      console.log(backTheme)

      return (
        <div>
          <Header data={value} fun={toggleTheme} />
          <div className={`home-body-cont ${classname}`}>
            <img className="bg-image" src={backTheme} alt="about" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Home
