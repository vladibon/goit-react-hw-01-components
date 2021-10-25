import './App.css';
import Profile from './components/Profile/Profile';
import user from './user.json';

const { name, tag, location, avatar, stats } = user;

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        profileUrl={avatar}
        stats={stats}
      />
    </div>
  );
}

export default App;
