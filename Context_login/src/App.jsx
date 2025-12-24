import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Compo/Login'
import Profile from './Compo/Profile'

function App() {
  return (
    <UserContextProvider>
      <div className="auth-wrapper">
        <div className="auth-card">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
