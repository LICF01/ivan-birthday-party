import { useRef, useEffect } from 'react';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Three = () => {
	// refs needed by Gsap
	const cloudLeft = useRef(null);
	const cloudRight = useRef(null);
	const planetSurface = useRef(null);
	const astronaut = useRef(null);

	// Gsap animation
	useEffect(() => {
		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.section-3',
					scrub: 5,
					pin: true,
					start: 'top top',
					end: 'top top',
				},
			})
			.from(cloudLeft.current, {
				opacity: 0,
				xPercent: -100,
				ease: 'ease',
				duration: 1,
			})
			.from(cloudRight.current, {
				opacity: 0,
				x: '150vw',
				ease: 'ease',
				duration: 1,
			})
			.from(planetSurface.current, {
				opacity: 0,
				y: '110vh',
				ease: 'ease',
				duration: 1,
			})
			.from(astronaut.current, {
				opacity: 0,
				y: '110vh',
				ease: 'ease',
				duration: 1,
			});
	});

	return (
		<div className='section section-3 bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh] relative overflow-hidden'>
			<div className='flex flex-col justify-center items-center text-center px-10 absolute top-[120px]'>
				<p className='text text-3xl text-slate-300 font-bold py-2'>
					Te espero el sábado 12 de Marzo de 2022 en la sucursal 2 de
					Navegando a las 17:00
				</p>
				<p className='text text-3xl text-slate-300 font-bold py-2'>
					Tte. 1º Porfirio Saldivar Nº 277
				</p>
				<p className='text text-3xl text-slate-300 font-bold py-2'>
					Nos vemos!
				</p>
			</div>
			<div
				ref={cloudLeft}
				className='absolute w-[50vw] h-[50vw] bottom-[-10vw] left-[-10vw] z-30'
			>
				<img src='./SVG/cloudLeft.svg' className='w-[100%]' />
			</div>
			<div
				ref={cloudRight}
				className='absolute w-[50vw] h-[50vw] bottom-[-10vw] right-[-10vw] z-20'
			>
				<img src='./SVG/cloudRight.svg' className='w-[100%]' />
			</div>
			<div
				ref={planetSurface}
				className='absolute w-[100vw] bottom-[0] z-0'
			>
				<img src='./SVG/planetSurface.svg' className='w-[100%]' />
			</div>
			<div
				ref={astronaut}
				className='absolute w-[40vw] bottom-[80px] z-0'
			>
				<img src='./SVG/astronautWithFlag.svg' className='w-[100%]' />
			</div>
		</div>
	);
};

export default Three;
