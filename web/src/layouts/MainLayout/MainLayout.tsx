import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="overflow-x-auto">
      <Header />
      <section>{children}</section>
      <footer>footer</footer>
    </section>
  )
}

export default MainLayout
