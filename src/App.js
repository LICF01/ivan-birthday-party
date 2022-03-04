import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import Pluto from './pages/Pluto';

// tsParticles
import Stars from './components/Stars';

function App() {
	return (
			<div className='App bg-space-dark text-slate-300 text-center '>
				<Routes>
					 <Route path='/' element={<Home />} />
					 <Route path='/mercury' element={<Mercury />} />
					 <Route path='/venus' element={<Venus />} />
					 <Route path='/earth' element={<Earth />} />
					 <Route path='/mars' element={<Mars />} />
					 <Route path='/jupiter' element={<Jupiter />} />
					 <Route path='/saturn' element={<Saturn />} />
					 <Route path='/uranus' element={<Uranus />} />
					 <Route path='/neptune' element={<Neptune />} />
					 <Route path='/pluto' element={<Pluto />} />
				</Routes>
				<div className='z-0'>
					<Stars />
				</div>
			</div>
	);
}

export default App;
