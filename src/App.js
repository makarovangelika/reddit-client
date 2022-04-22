import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Subreddit } from './components/Subreddit';
import { Post } from './components/Post';

function App() {
  return (
    <div className="App">
      <h1>Reddit client</h1>
      <Routes>
        <Route path='/' element={<Subreddit />} />
        <Route path='/:subreddit' element={<Subreddit />} />
        <Route path='/post/:postId' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
