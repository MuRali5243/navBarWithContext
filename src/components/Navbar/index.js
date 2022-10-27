import {Link} from 'react-router-dom'
import './index.css'

const webDark =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
const webLight =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

const darkThe = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const lightThe = 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Header = props => {
  const {data, fun} = props
  const {isDarkTheme, toggleTheme} = data
  const logo = isDarkTheme ? webDark : webLight
  const Theme = isDarkTheme ? lightThe : darkThe
  const classname = isDarkTheme ? 'dark-cont' : 'light-cont'
  return (
    <ul className={`nav-header ${classname}`}>
      <li>
        <button
          onClick={() => {
            fun()
          }}
        >
          <img className="header-image" alt="website logo" src={logo} />
        </button>
      </li>
      <li className="link-cont">
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <button
          testid="theme"
          onClick={() => {
            fun()
          }}
        >
          <img className="header-image" alt="theme" src={Theme} />
        </button>
      </li>
    </ul>
  )
}

export default Header
