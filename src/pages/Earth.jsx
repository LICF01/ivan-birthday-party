import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Earth = () => {
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
					<p className='text text-md font-bold absolute top-0 mt-5 uppercase'>
						Atras
					</p>
				</Link>
			</div>

			<div>
				<p className='text text-4xl font-bold'>Hola!</p>
				<p className='text text-5xl font-bold'>Soy Tierra</p>
			</div>

			<img
				ref={ref}
				src='./SVG/earth.svg'
				className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
				alt='Earth'
			/>

			<div className='info  text-center text-2xl'>
				<p className='text  my-5'>
					Soy el mayor de los denominados planetas rocosos, gracias a
					que poseo gran cantidad de agua se pudo formar vida, mi
					nombre proviene del latín “Terra”.
				</p>
				<p className='text  my-5'>
					No poseo un tema en la
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
					, esto se debe a que la suite representa a los planetas que
					se podían ver desde la tierra en esa época.
				</p>
			</div>
		</div>
	);
};

export default Earth;
