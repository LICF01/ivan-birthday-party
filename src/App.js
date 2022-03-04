import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';

// tsParticles
import Stars from './components/Stars';

function App() {
	return (
			<div className='App bg-space-dark text-slate-300 text-center '>
				<Routes>
					 <Route path='/' element={<Home />} />
					 <Route path='/mercury' element={<Mercury />} />
					 <Route path='/venus' element={<Venus />} />
					 <Route path='/venus' element={<Earth />} />
				</Routes>
				<div className='z-0'>
					<Stars />
				</div>
			</div>
	);
}

export default App;
