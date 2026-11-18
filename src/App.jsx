import { Route, Routes } from 'react-router';
import Header from './components/Header.jsx';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';
import Music from './pages/Music.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/music" element={<Music />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
