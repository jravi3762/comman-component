import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./routers/RouteComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
