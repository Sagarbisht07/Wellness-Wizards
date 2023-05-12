import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./Routes/Router";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global";
import { theme } from "./components/styles/Theme";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Navbar />
          <Router />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
