import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/navbar'
import 'materialize-css'
import { Loader } from './components/loader'

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if(!ready) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <div className="container">
        <BrowserRouter>
          {isAuthenticated && <Navbar />}
          { routes }
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
    
  )
}

export default App
