import Passwords from './components/passwords';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <form>
        <Passwords min={8} max={20}/>
      </form>
    </div>
  );
}

export default App;
