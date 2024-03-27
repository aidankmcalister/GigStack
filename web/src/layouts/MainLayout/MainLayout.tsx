import { useAuth } from 'src/auth'
import Button from 'src/components/Button/Button'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, userMetadata, logOut } = useAuth()

  return (
    <>
      <header>
        <p>Welcome {JSON.stringify(userMetadata)}!</p>
        <Button onClick={logOut}>Log Out</Button>
      </header>
      <section>{children}</section>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
