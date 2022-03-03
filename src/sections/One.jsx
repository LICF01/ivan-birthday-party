import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';

// lottie animation
import astronautRocket from '../lotties/astronaoutRocket.json';

// TsParticles
import Stars from '../components/Stars';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const One = () => {
	// ref needed by Gsap
	const astroRocketAnim = useRef(null);

	// this handles the fade effect of all text
	useEffect(() => {
		const textRefs = gsap.utils.toArray('.section');
		textRefs.forEach((el) => {
			const tl = gsap.timeline().fromTo(
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

	// This handles the lottie animation
	useEffect(() => {
		const tl = gsap.timeline().from(astroRocketAnim.current, {
			opacity: 0,
			height: '60rem',
			width: '60rem',
			duration: 3,
		});
	});

	return (
		<>
			<div className='section bg-space-dark flex items-center justify-center flex-col  w-[100vw] h-[100vh] text-slate-300 relative'>
				<p className='text text-5xl font-bold'>Hola!</p>
				<p className='text text-7xl font-bold'>Soy Iván</p>
				<div ref={astroRocketAnim} className='baby h-[20rem] w-[20rem]'>
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
		</>
	);
};

export default One;
