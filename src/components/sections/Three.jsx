import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Three = () => {
	const navigate = useNavigate();
	// refs needed by Gsap
	const cloudLeft = useRef(null);
	const cloudRight = useRef(null);
	const planetSurface = useRef(null);
	const astronaut = useRef(null);

	// Gsap animation
	useEffect(() => {
		gsap.timeline({
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
		<div className='section section-3 flex items-center justify-center flex-col w-[100vw] h-[100vh] relative overflow-hidden font-bold text-2xl'>
			<div className='flex flex-col justify-center items-center text-center px-10 absolute top-[120px] z-[999]'>
				<p className='text py-2'>
					Te espero el sábado 12 de Marzo de 2022 a las 17:00
				</p>
				<p className='text py-2'>
					En el local de
					<a
						href='https://g.page/navegandoparque?share'
						class='text-blue-400 visited:text-purple-400 ...'
					>
						{' '}
						<i>Navegando</i> sucursal 2{' '}
					</a>
				</p>
				<p className='text  py-2'>Cap. Oscar Ortellado Nº 277</p>
				<p className='text  py-2'>Nos vemos!</p>
			</div>

			<img
				src='./SVG/uranus.svg'
				className='w-[8rem] absolute z-50 top-[0] right-10 cursor-pointer'
				alt='uranus'
				onClick={() => navigate('/uranus')}
			/>
			<img
				src='./SVG/neptune.svg'
				className='w-[7rem] absolute z-[0] top-[370px] left-[20px] cursor-pointer'
				alt='neptune'
				onClick={() => navigate('/neptune')}
			/>
			<img
				src='./SVG/pluto.svg'
				className='w-[2.5rem] absolute z-50 bottom-[200px] right-[40px] cursor-pointer'
				alt='pluto'
				onClick={() => navigate('/pluto')}
			/>
			<div
				ref={cloudLeft}
				className='absolute w-[50vw] h-[50vw] bottom-[-10vw] left-[-10vw] z-30'
			>
				<img src='./SVG/cloudLeft.svg' className='w-[100%]' alt='' />
			</div>
			<div
				ref={cloudRight}
				className='absolute w-[50vw] h-[50vw] bottom-[-10vw] right-[-10vw] z-20'
			>
				<img src='./SVG/cloudRight.svg' className='w-[100%]' alt='' />
			</div>
			<div
				ref={planetSurface}
				className='absolute w-[100vw] bottom-[0] z-10'
			>
				<img
					src='./SVG/planetSurface.svg'
					className='w-[50rem] mx-auto'
					alt=''
				/>
			</div>
			<div
				ref={astronaut}
				className='absolute w-[15rem] bottom-[80px] z-10'
			>
				<img
					src='./SVG/astronautWithFlag.svg'
					className='w-[100%]'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Three;
