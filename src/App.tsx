import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
