import { useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Mercury = () => {
	const mercury = useRef(null);

	useEffect(() => {
		gsap.to(mercury.current, {
			width: '80%',
			position: 'static',
			duration: 3,
		});
	}, []);

	return (
		<div className='px-10 min-h-screen py-20 relative'>
			<div>
				<Link to='/'>

				<p className='text text-md font-bold absolute top-0 mt-5'>Atras</p>
				</Link>
			</div>

			<div>
				<p className='text text-4xl font-bold'>Hola!</p>
				<p className='text text-5xl font-bold'>Soy Mercurio</p>
			</div>

			<img
				ref={mercury}
				src='./SVG/mercury.svg'
				className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
				alt='mercury'
			/>

			<div className='mb-10'>
				<Player
					src={
						'https://upload.wikimedia.org/wikipedia/commons/8/89/Holst_The_Planets_Mercury.ogg'
					}
				/>
			</div>

			<div className='info  text-center text-2xl'>
				<p className='text  my-5'>
					En la Suite de los planetas de Gustav Holst, me llaman{' '}
					<br /> 'El mensajero alado'
				</p>
				<p className='text  my-5'>
					Soy el último y más corto de los siete movimientos y se
					destacan el violín solista, el arpa aguda, la flauta y el
					glockenspiel.
				</p>

				<p className='text  my-5'>
					Además de ser el más pequeño, soy el primer planeta del
					sistema solar, por lo que soy el más cercano al sol.
				</p>
			</div>
		</div>
	);
};

export default Mercury;
