import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import baby from '../lotties/26614-baby-mind-logo-v1.json';
import astronautRocket from '../lotties/astronaoutRocket.json'
import EarthOrbitingSun from '../components/EarthOrbitingSun';
import Stars from '../components/Stars';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const One = () => {
	const tl = gsap.timeline();
	const info = useRef(null);
	const babyAnim = useRef(null);
	const earthAnim = useRef(null);
	const cloudLeft = useRef(null);
	const cloudRight = useRef(null);
	const planetSurface = useRef(null);
	const astronaut = useRef(null);

	// this handles the fade effect of all text
	useEffect(() => {
		const textRefs = gsap.utils.toArray('.section');
		textRefs.forEach((el) => {
			tl.current = gsap.timeline().fromTo(
				el.querySelectorAll('.text'),
				{
					opacity: 0,
				},
				{
					opacity: 1,
					ease: 'ease',
					scrollTrigger: {
						trigger: el,
						scrub: true,
						start: 'top center',
						end: 'top top',
					},
				}
			);
		});
	}, []);

	useEffect(() => {
		tl.current.from(babyAnim.current, {
			opacity: 0,
			height: '60rem',
			width: '60rem',
			duration: 3,
		});
	});

	useEffect(() => {
		tl.current.fromTo(
			earthAnim.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: earthAnim.current,
					scrub: true,
					start: 'top center',
					end: 'top top',
				},
			}
		);
	});

	useEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: '.section-3',
				pin: true, // pin the trigger element while active
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: '+=500', // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});
		tl.current
			.from(cloudLeft.current, {
				xPercent: -100,
				ease: 'ease',
				duration: 1,
			})
			.from(cloudRight.current, { x: '150vw', ease: 'ease', duration: 1 })
			.from(planetSurface.current, {
				y: '110vh',
				ease: 'ease',
				duration: 1,
			})
			.from(astronaut.current, {
				y: '110vh',
				ease: 'ease',
				duration: 1,
			});
	});

	return (
		<>
			<div className='section bg-space-dark flex items-center justify-center flex-col  w-[100vw] h-[100vh] text-slate-300'>
				<p className='text text-5xl font-bold'>Hola!</p>
				<p className='text text-7xl font-bold'>Soy Iván</p>
				<div ref={babyAnim} className='baby h-[20rem] w-[20rem]'>
					<Lottie loop={true} animationData={astronautRocket} />
				</div>
				<div className='px-10'>
					<p className='text text-3xl text-slate-300 font-bold'>
						Tengo una gran noticia que compartir!!!
					</p>
				</div>
					<img
						src='./SVG/mercury.svg'
						className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointer'
						alt='mercury'
					/>
					<img
						src='./SVG/venus.svg'
						className='w-[6rem] absolute z-50 top-[130px] right-[20px] cursor-pointer'
						alt='venus'
					/>
					<img
						src='./SVG/earth.svg'
						className='w-[6rem] absolute z-50 bottom-[30px] right-[50%] cursor-pointer'
						alt='venus'
					/>
			</div>
			<div className='section bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh]'>
				<div className='px-10'>
					<p className='text text-3xl text-slate-300 font-bold'>
						Estoy por completar mi primera vuelta al sol
					</p>
				</div>
				<div ref={earthAnim}>
					<EarthOrbitingSun />
				</div>
				<div className='px-10'>
					<p className='text text-3xl text-slate-300 font-bold'>
						Me acompañarías a festejar este momento especial?
					</p>
				</div>
				<Stars />
			</div>
			<div className='section section-3 bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh] relative overflow-hidden'>
				<div className='flex flex-col justify-center items-center text-center px-10 absolute top-[120px]'>
					<p className='text text-3xl text-slate-300 font-bold py-2'>
						Te espero el sábado 12 de Marzo de 2022 en la sucursal 2
						de Navegando a las 17:00
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
					<img
						src='./SVG/astronautWithFlag.svg'
						className='w-[100%]'
					/>
				</div>
			</div>
		</>
	);
};

export default One;
