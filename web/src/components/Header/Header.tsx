import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Button from '../Button/Button'

const Header = () => {
  const { isAuthenticated, userMetadata, logOut } = useAuth()

  return (
    <header>
      {isAuthenticated ? (
        <div>
          <p>Welcome {JSON.stringify(userMetadata)}!</p>
          <Button onClick={logOut}>Log Out</Button>
        </div>
      ) : (
        <Link className="border rounded-md px-2 py-1" to={routes.login()}>
          Log In
        </Link>
      )}
    </header>
  )
}

export default Header
