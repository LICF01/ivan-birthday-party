import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Venus = ({ variants }) => {
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
			<div className='px-10 min-h-screen py-20 relative '>
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
						<p className='text text-5xl font-bold'>Soy Venus</p>
					</div>

					<img
						ref={ref}
						src='./SVG/venus.svg'
						className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
						alt='venus'
					/>

					<div className='mb-10'>
						<Player
							src={
								'https://upload.wikimedia.org/wikipedia/commons/4/4c/Holst-_venus.ogg'
							}
						/>
					</div>

					<div className='info  text-center text-2xl'>
						<p className='text  my-5'>
							Soy el segundo planeta del sistema solar, dicen que
							tengo un gran parecido a la tierra en tamaño y otras
							propiedades por lo que me suelen llamar
							<i>“Hermano de la Tierra”</i>.
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
							, soy <i>"El portador de la paz"</i>.
						</p>
						<p className='text  my-5'>
							La música es lenta y bellamente inquietante, con
							melodías relajantes tocadas con arpas y flautas,
							cuerdas brillantes y pasajes etéreos de violín solo
							para recordar a la diosa romana.
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Venus;
