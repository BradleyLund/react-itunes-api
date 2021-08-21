import "./App.css";
import InputForm from "./Components/inputform";
import Header from "./Components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
