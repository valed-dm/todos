import Todos from "./Todos";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div style={{marginTop: '20px'}}>
        <h1>todos for Mindbox</h1>
      </div>
      <Todos />
    </div>
  );
}

export default App;
