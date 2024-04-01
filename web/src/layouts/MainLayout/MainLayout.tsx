import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="overflow-x-auto bg-main-white">
      <Header />
      <section>{children}</section>
      <Footer />
    </section>
  )
}

export default MainLayout
