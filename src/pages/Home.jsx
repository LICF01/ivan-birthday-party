import { motion } from 'framer-motion';

import One from '../components/sections/One';
import Two from '../components/sections/Two';
import Three from '../components/sections/Three';

const Home = ({ variants }) => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={variants}
		>
			<One />
			<Two />
			<Three />
		</motion.div>
	);
};

export default Home;
