import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Info from './pages/info';
import Galeria from './pages/galeria';
import Blog from './pages/blog';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/blog" element={<Blog />}>
              <Route index element={<BlogList />} />
              <Route path=":id" element={<BlogDetail />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
