
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import Header from "./Commons/Header/Header";

function App() {
  return (
    <div className="App">
     
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
