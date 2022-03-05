import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Saturn = ({ variants }) => {
	const ref = useRef(null);

	useEffect(() => {
		gsap.to(ref.current, {
			width: '80%',
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
			<div className='px-10 min-h-screen py-20 relative'>
				<div>
					<Link to='/'>
						<p className='text text-md font-bold absolute top-0 mt-5  uppercase'>
							Atras
						</p>
					</Link>
				</div>

				<div className='max-w-xl mx-auto'>
					<div>
						<p className='text text-4xl font-bold'>Hola!</p>
						<p className='text text-5xl font-bold'>Soy Saturno</p>
					</div>

					<img
						ref={ref}
						src='./SVG/saturn.svg'
						className='w-[5rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
						alt='saturn'
					/>

					<div className='mb-10'>
						<Player
							src={
								'https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3290/05.mp3'
							}
						/>
					</div>

					<div className='info  text-center text-2xl'>
						<p className='text  my-5'>
							Soy famoso por el imponente brillo procedente de mis
							anillos y fui descubierto por Galileo en el año
							1610.
						</p>
						<p className='text  my-5'>
							En la
							<a
								href='https://www.wikiwand.com/es/Los_planetas_(suite)'
								className='text-blue-400 visited:text-purple-400 ...'
							>
								{' '}
								<i>Suite de los planetas</i>{' '}
							</a>
							de
							<a
								href='https://www.wikiwand.com/es/Gustav_Holst'
								className='text-blue-400 visited:text-purple-400 ...'
							>
								{' '}
								Gustav Holst{' '}
							</a>
							, soy <br /> <i>"El portador de la vejez"</i>.
						</p>
						<p className='text  my-5'>
							El movimiento favorito de Holst, lento e inquietante
							que se eleva a un clímax aterrador antes de
							desvanecerse como si fuera en los confines del
							espacio exterior.
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Saturn;
