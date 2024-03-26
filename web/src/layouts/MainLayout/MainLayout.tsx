type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>header</header>
      <section>{children}</section>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
