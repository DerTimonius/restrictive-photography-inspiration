import './App.css';
import Description from './Components/Description';
import Introduction from './Components/Introduction';
import Restrictions from './Components/Restrictions';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Restrictions />
      <Description />
    </div>
  );
}

export default App;
