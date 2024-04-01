import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="items-center overflow-x-auto bg-main-white">
      <Header />
      <section className="flex min-h-screen justify-center">{children}</section>
      <Footer />
    </section>
  )
}

export default MainLayout
