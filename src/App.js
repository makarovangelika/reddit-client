import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Subreddit } from './components/Subreddit/Subreddit';
import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Subreddit />} />
        <Route path='/:subreddit' element={<Subreddit />} />
        <Route path='/:subreddit/:postId' element={<Post />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
