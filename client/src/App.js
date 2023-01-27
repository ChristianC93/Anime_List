import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import AnimeForm from './components/AnimeForm';
import AniListPage from './components/AniListPage';
import HomePage from './components/HomePage';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  },[]);

  const navigate = useNavigate();

  // to AniListForm component
  const addUserAnime = (newUserAnime) => {
    setUser({
      ...user,
      user_animes: [...user.user_animes, newUserAnime]
    })
    navigate("/anilist")
  };

  //to AniListPage component
  const deleteUserAnime = (userAnime) => {
    setUser({
      ...user,
      user_animes: [...user.user_animes].filter((ua) => ua.id !== userAnime.id)
    })
  }

  if (!user) {
    return <LoginForm userLogin={setUser} />
  }

  return (
    <div className="App">
      <NavBar userLogin={ setUser } />
      <Routes>
          <Route path='/' element={ <HomePage user={ user } addUserAnime={ addUserAnime } /> } />
          <Route path="/anilist" element={ <AniListPage user={ user } deleteUserAnime={ deleteUserAnime } /> } />
          <Route path='/animeform' element={ <AnimeForm user={ user } /> } />
      </Routes>
    </div>
  );
}

export default App;
