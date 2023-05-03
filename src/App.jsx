import "./App.css";
import { FormApp } from "./components/FormApp";
import { UlList } from "./components/UlList";

function App() {
  return (
    <>
      <div className="container">
        <div className="cover">
          <FormApp />
          <UlList />
        </div>
      </div>
    </>
  );
}

export default App;
