import { Outlet } from "react-router-dom";
import { ThemeProvider } from "context/ThemeContext"
import Footer from "components/footer/footer";
import Header from "components/header/header";
import 'styles/global.css'

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>

    </ThemeProvider>
  );
}
export default Layout;