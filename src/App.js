import './App.css';
import Profile from './components/Profile/Profile';
import user from './db/user.json';

function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
