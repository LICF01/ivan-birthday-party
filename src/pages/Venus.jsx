import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Venus = () => {
	const ref = useRef(null);

	useEffect(() => {
		gsap.to(ref.current, {
			width: '80%',
			position: 'static',
			duration: 3,
		});
	}, []);

	return (
		<div className='px-10 min-h-screen py-20 relative'>
			<div>
				<Link to='/'>
					<p className='text text-md font-bold absolute top-0 mt-5'>
						Atras
					</p>
				</Link>
			</div>

			<div>
				<p className='text text-4xl font-bold'>Hola!</p>
				<p className='text text-5xl font-bold'>Soy Mercurio</p>
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
					Soy el segundo planeta del sistema solar, dicen que tengo un
					gran parecido a la tierra en tamaño y otras propiedades por
					lo que me suelen llamar
					<i>“Hermano de la Tierra”</i>
				</p>
				<p className='text  my-5'>
					En la
					<a
						href='https://www.wikiwand.com/es/Los_planetas_(suite)'
						class='text-blue-400 visited:text-purple-400 ...'
					>
						{' '}
						<i>Suite de los planetas</i>{' '}
					</a>
					de
					<a
						href='https://www.wikiwand.com/es/Gustav_Holst'
						class='text-blue-400 visited:text-purple-400 ...'
					>
						{' '}
						Gustav Holst{' '}
					</a>
					, soy <br /> 'El portador de la paz'
				</p>
				<p className='text  my-5'>
					Me abro camino con un tema de trompa solista respondido
					suavemente por las flautas y los oboes, seguido de un solo
					de violín. Acompañados con acordes de flautas y arpas
					decorados por una celesta
				</p>
			</div>
		</div>
	);
};

export default Venus;
