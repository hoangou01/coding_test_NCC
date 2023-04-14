import logo from "./logo.svg";
import "./App.css";
import ContentRight from "./layouts/ContentRight";
import NavLeft from "./layouts/NavLeft";
function App() {
  return (
    <>
      
        <div className="row">
          <NavLeft />
          <ContentRight />
        </div>
      
    </>
  );
}

export default App;
