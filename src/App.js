import One from './sections/One';
import Two from './sections/Two';
import Three from './sections/Three';

// tsParticles
import Stars from './components/Stars';

function App() {
	return (
		<div className='text-center'>
			<One />
			<Two />
			<Three />
			<div className='z-0'>
				<Stars />
			</div>
		</div>
	);
}

export default App;
