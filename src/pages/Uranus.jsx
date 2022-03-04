import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Uranus = () => {
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
					<p className='text text-md font-bold absolute top-0 mt-5  uppercase'>
						Atras
					</p>
				</Link>
			</div>

			<div>
				<p className='text text-4xl font-bold'>Hola!</p>
				<p className='text text-5xl font-bold'>Soy Urano</p>
			</div>

			<img
				ref={ref}
				src='./SVG/uranus.svg'
				className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
				alt='uranus'
			/>

			<div className='mb-10'>
				<Player
					src={
						'https://upload.wikimedia.org/wikipedia/commons/9/97/Holst-_uranus.ogg'
					}
				/>
			</div>

			<div className='info  text-center text-2xl'>
				<p className='text  my-5'>
					Soy el primer planeta que fue descubierto usando un
					telescopio, además tengo la temperatura más baja de todo el
					sistema solar, mínima de -224 grados Celsius.
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
						Gustav Holst,{' '}
					</a>
					 soy <i>"El mago"</i>.
				</p>
				<p className='text  my-5'>
					Comenzando con cuatro notas de metal, el movimiento cambia de
					fuertes golpes de timbales a un galope bullicioso.
				</p>
				<p className='text  my-5'>
					La orquesta al completo muestra el impresionante poder de
					este gélido planeta, representado en la mitología griega
					como el dios del cielo.
				</p>
			</div>
		</div>
	);
};

export default Uranus;
