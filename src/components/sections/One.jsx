import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

// lottie animation
import astronautRocket from '../lotties/astronaoutRocket.json';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const One = () => {
	const navigate = useNavigate();
	// ref needed by Gsap
	const astroRocketAnim = useRef(null);

	// this handles the fade effect of all text
	useEffect(() => {
		const textRefs = gsap.utils.toArray('.section');
		textRefs.forEach((el) => {
			gsap.timeline().fromTo(
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
		gsap.timeline().from(astroRocketAnim.current, {
			opacity: 0,
			// width: '60rem',
			// height: '60rem',
			duration: 3,
		});
	});

	return (
		<>
			<div className='section  flex items-center justify-center flex-col  w-[100vw] h-[100vh]  relative px-10  font-bold text-2xl '>
					{/* <div className='absolute top-[20vh] z-[999]'> */}
						<p className='text text-3xl absolute top-[15vh]'>Hola!</p>
						<p className='text text-5xl absolute top-[20vh]'>Soy Iván</p>

				{/* </div> */}
				<div ref={astroRocketAnim} className='h-[20rem] w-[20rem] mt-[0]'>
					<Lottie loop={true} animationData={astronautRocket} />
				</div>
					<p className='text absolute bottom-[20vh] z-[999] '>
						Tengo una gran noticia que compartir!!!
					</p>
				<img
					src='./SVG/mercury.svg'
					className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointer'
					alt='mercury'
					onClick={() => navigate('/mercury')}
				/>
				<img
					src='./SVG/venus.svg'
					className='w-[6rem] absolute z-50 top-[200px] right-[20px] cursor-pointer'
					alt='venus'
					onClick={() => navigate('/venus')}
				/>
				<img
					src='./SVG/earth.svg'
					className='w-[6rem] absolute z-50 bottom-[150px] left-[20px] cursor-pointer'
					alt='venus'
					onClick={() => navigate('/earth')}
				/>
			</div>
		</>
	);
};

export default One;
