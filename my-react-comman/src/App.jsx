import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./routers/RouteComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
        <ToastContainer position="top-right" />
    </>
  );
}

export default App;
