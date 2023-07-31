import "./App.css";
import Assets from './assets/assets.png'
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>React Avançado</h1>
      <div>
        <img src="/img.png" alt="Foto" />
      </div>
      <div>
        <img src={Assets} alt="Assets" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
