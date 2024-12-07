import './App.css';
import { BrowserRouter as _, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cards from './components/Cards/Cards';
import CreateCard from './components/CreateCard/CreateCard';
import CardDetails from './components/Cards/CardDetails/CardDetails';
import Footer from './components/Footer/Footer';
import EditCard from './components/EditCard/EditCard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { AuthProvider } from './contexts/AuthContext';
import { CardsProvider } from './contexts/CardsContext';
import ScrollToTop from './components/common/ScrollToTop';
import { RouteGuard } from './components/common/RouteGuard';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<>
			<AuthProvider>
				<CardsProvider>
					<Header />
					<ScrollToTop />
					<main id='main'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cards' element={<Cards />} />
							<Route path='/cart' element={<Cart />} />
							<Route
								path='/details/:cardId'
								element={<CardDetails />}
							/>
							<Route element={<RouteGuard />}>
								<Route
									path='/edit/:cardId'
									element={<EditCard />}
								/>
								<Route
									path='/create'
									element={<CreateCard />}
								/>
								<Route path='/logout' element={<Logout />} />
							</Route>
							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Routes>
					</main>
					<Footer />
				</CardsProvider>
			</AuthProvider>
		</>
	);
}

export default App;
