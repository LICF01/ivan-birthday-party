import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';

// Lottie animation
import EarthOrbitingSun from '../lotties/earthOrbitingSunTransparent.json';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Two = () => {
	// ref needed by Gsap
	const earthAnim = useRef(null);

	// Gsap animation
	useEffect(() => {
		const tl = gsap.timeline().fromTo(
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
		<div className='section bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh]'>
			<div className='px-10'>
				<p className='text text-3xl text-slate-300 font-bold'>
					Estoy por completar mi primera vuelta al sol
				</p>
			</div>
			<div ref={earthAnim}>
				<Lottie animationData={EarthOrbitingSun} loop={true} />
			</div>
			<div className='px-10'>
				<p className='text text-3xl text-slate-300 font-bold'>
					Me acompañarías a festejar este momento especial?
				</p>
			</div>
		</div>
	);
};

export default Two;
