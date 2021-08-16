import "./App.css";
import NativeSelects from "./Components/NativeSelects";
import CustomizedSelects from "./Components/SearchInput";

function App() {
  return (
    <div className="App">
      <CustomizedSelects />
      <NativeSelects />
    </div>
  );
}

export default App;
