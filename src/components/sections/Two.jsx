import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

// Lottie animation
import EarthOrbitingSun from '../lotties/earthOrbitingSunTransparent.json';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Two = () => {
	const navigate = useNavigate();
	// ref needed by Gsap
	const earthAnim = useRef(null);

	// Gsap animation
	useEffect(() => {
		gsap.timeline().fromTo(
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

	return (
		<div className='section bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh] font-bold text-2xl px-10 relative'>
			<p className='text absolute top-[20vh] z-[999]'>
				Estoy por completar mi primera vuelta al sol
			</p>
			<div ref={earthAnim}>
				<Lottie animationData={EarthOrbitingSun} loop={true} />
			</div>
			<p className='text absolute bottom-[20vh] z-[999]'>
				Me acompañarías a festejar este momento especial?
			</p>
			<img
				src='./SVG/mars.svg'
				className='w-[5.5rem] absolute z-50 top-[-100px] right-[20vw] cursor-pointer'
				alt='mercury'
				onClick={() => navigate('/mars')}
			/>
			<img
				src='./SVG/jupiter.svg'
				className='w-[10rem] absolute z-[0] top-[-10px] left-[10vw] cursor-pointer'
				alt='jupiter'
				onClick={() => navigate('/jupiter')}
			/>
			<img
				src='./SVG/saturn.svg'
				className='w-[12.5rem] absolute z-50 bottom-[5px] left-[10vw] cursor-pointer'
				alt='venus'
				onClick={() => navigate('/saturn')}
			/>
		</div>
	);
};

export default Two;
