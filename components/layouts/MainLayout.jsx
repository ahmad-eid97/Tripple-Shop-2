import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import MobileBar from './../Navbar/MobileBar/MobileBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
      <MobileBar />
    </>
  )
}

export default MainLayout;