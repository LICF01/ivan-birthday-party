import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Lottie from 'lottie-react';
import WorkingAstronaut from '../components/lotties/workingAstronaut.json';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = ({ variants }) => {
	const ref = useRef(null);

	useEffect(() => {
		gsap.to(ref.current, {
			width: '20rem',
			position: 'static',
			duration: 3,
		});
	}, []);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={variants}
		>
			<div className='px-10 flex justify-center items-center flex-col min-h-screen py-20 relative'>
				<p className='text text-5xl font-bold'>Para Iván y Asu</p>

				<div ref={ref} className='h-[20rem] w-[20rem] mx-10 '>
					<Lottie loop={true} animationData={WorkingAstronaut} />
				</div>

				<div className='info  text-center text-2xl font-bold'>
					<p className='text  my-5'>
						Hecho por
						<a
							href='https://github.com/LICF01'
							className='text-blue-400 visited:text-purple-400 ...'
						>
							{' '}
							Lucas Cubilla{' '}
						</a>
						con React, TailwindCSS y Gsap
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
