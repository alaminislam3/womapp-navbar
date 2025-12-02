import Home from "./components/pages/Home";
import "./App.css";
import { ThemeProvider } from "./components/ThemeToggle/ThemeContext";

function App() {
  return <>
        <ThemeProvider>

        <Home></Home>
        </ThemeProvider>
  </>;
}

export default App;
