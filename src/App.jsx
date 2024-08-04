// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home';
import Info from './pages/info';
import Galeria from './pages/galeria';
import Blog from './pages/blog';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/header';

const App = () => {
  return (
    <Router>
      <> 
        <Header />
        <main className="flex-grow bg-[#f1f7fe]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/blog" element={<Blog />}>
              <Route index element={<BlogList />} />
              <Route path=":id" element={<BlogDetail />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
