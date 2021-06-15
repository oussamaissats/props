
import './App.css';
import Profile from './Profile/profile';
import ProfileImg from '../src/Profile/images/profile.jpg';

function App() {
  const handleName = (props) => alert(fullName);

  const fullName = "Oussama Ben Jazia";
  const bio = "La vie est belle, ";
  const profession = "IT  Enginner";

  return (
    <div className="App">
      <div className="card-container">
        <Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          handleName={handleName}
        >
          <img
            src={ProfileImg}
            alt=""
            style={{ height: "100px", width: "100px" }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;