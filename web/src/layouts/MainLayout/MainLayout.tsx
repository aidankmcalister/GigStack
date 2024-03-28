import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
