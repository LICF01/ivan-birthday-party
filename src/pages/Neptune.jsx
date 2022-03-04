import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Neptune = () => {
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
				<p className='text text-5xl font-bold'>Soy Neptuno</p>
			</div>

			<img
				ref={ref}
				src='./SVG/neptune.svg'
				className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
				alt='neptune'
			/>

			<div className='info  text-center text-2xl'>
				<p className='text  my-5'>
					Mi nombre hace referencia al dios griego Poseidón, soy el
					planeta <em>gemelo</em> de Urano, fuí descubierto
					oficialmente en 1846, más tarde se descubrió que Galileo ya
					me había observado pero me confundió con una estrella.
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
					soy <i>"El místico"</i>.
				</p>
				<p className='text  my-5'>
					Cuando Holst compuso esta obra como una pieza para dúo de
					piano, usó un órgano para representar este planeta, pensó
					que el piano, no podría representar un planeta tan
					misterioso como Neptuno.
				</p>

				<p className='text  my-5'>
					Hermosas melodías de arpa y cuerdas
					se deslizan unas sobre otras, hasta que Holst saca a relucir
					la gloria suprema: un coro místico, que le da a la música
					una cualidad de otro mundo.
				</p>
			</div>
		</div>
	);
};

export default Neptune;
