import Lottie from 'lottie-react';
import earthOrbitingSun from '../lotties/earthOrbitingSunTransparent.json';

const EarthOrbitingSun = () => {
	return (
		<>
			<Lottie animationData={earthOrbitingSun} loop={true} />
		</>
	);
};

export default EarthOrbitingSun;
