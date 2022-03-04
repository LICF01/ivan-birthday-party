import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Pluto = () => {
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
				<p className='text text-5xl font-bold'>Soy Plutón</p>
			</div>

			<img
				ref={ref}
				src='./SVG/pluto.svg'
				className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
				alt='pluto'
			/>

			<div className='info  text-center text-2xl'>
				<p className='text  my-5'>
					Soy uno de los planetas enanos del sistema solar, mi nombre
					hace referencia al dios griego Hades
				</p>
				<p className='text  my-5'>
					Por mi pequeño tamaño y gran distancia respecto al sol,
					recién en 2015 la sonda
					<a
						href='https://www.wikiwand.com/es/Los_planetas_(suite)'
						class='text-blue-400 visited:text-purple-400 ...'
					>
						{' '}
						<i>New Horizons</i>{' '}
					</a>
					permitió apreciar por primera vez de forma nítida mi aspecto
					real
				</p>
				<p className='text  my-5'>
					No poseo un movimiento en la 
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
						Gustav Holst,{' '}
					</a>
					ya que aún no había sido descubierto cuando fué escrita
				</p>
			</div>
		</div>
	);
};

export default Pluto;
