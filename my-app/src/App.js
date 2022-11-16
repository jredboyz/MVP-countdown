import './App.css';
import UserForm from './components/Form.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {
  return (
    <div className="App">
      <h1>
        Countdown!
      </h1>
      <div className='top-container'>
        <UserForm />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
