import { Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
import About from './pages/About';

import { BsQuestionSquare } from 'react-icons/bs';
import { IoMdArrowRoundBack } from 'react-icons/io';

// tsParticles
import Stars from './components/Stars';

// Page transitions are handled by Framer-Motion
const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

function App() {
	const currentPath = window.location.pathname;
	console.log(currentPath)
	return (
		<div className='App bg-space-dark text-slate-300 text-center relative '>
			<nav>
				<Link to='/about'>
					<div className='absolute top-0 right-10 mt-5 font-bold uppercase cursor-pointer z-[999]'>
						<BsQuestionSquare />
					</div>
				</Link>
				{/* {!currentPath.match('^[\/]') ? ( */}
				{/* 	<Link to='/about'> */}
				{/* 		<div className='absolute top-0 right-10 mt-5 font-bold uppercase cursor-pointer z-[999]'> */}
				{/* 			<IoMdArrowRoundBack /> */}
				{/* 		</div> */}
				{/* 	</Link> */}
				{/* ) : null} */}
			</nav>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route
						path='/'
						element={<Home variants={pageVariants} />}
					/>
					<Route
						path='/mercury'
						element={<Mercury variants={pageVariants} />}
					/>
					<Route
						path='/venus'
						element={<Venus variants={pageVariants} />}
					/>
					<Route
						path='/earth'
						element={<Earth variants={pageVariants} />}
					/>
					<Route
						path='/mars'
						element={<Mars variants={pageVariants} />}
					/>
					<Route
						path='/jupiter'
						element={<Jupiter variants={pageVariants} />}
					/>
					<Route
						path='/saturn'
						element={<Saturn variants={pageVariants} />}
					/>
					<Route
						path='/uranus'
						element={<Uranus variants={pageVariants} />}
					/>
					<Route
						path='/neptune'
						element={<Neptune variants={pageVariants} />}
					/>
					<Route
						path='/pluto'
						element={<Pluto variants={pageVariants} />}
					/>
					<Route
						path='/about'
						element={<About variants={pageVariants} />}
					/>
				</Routes>
			</AnimatePresence>
			<div className='z-0'>
				<Stars />
			</div>
		</div>
	);
}

export default App;
