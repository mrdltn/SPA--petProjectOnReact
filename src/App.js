import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
// import { Movie } from './pages/Movie';
// import { Drink } from './components/Drink';
import { Category } from './pages/Category';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contact />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
