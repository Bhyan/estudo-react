import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpssions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpssions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
