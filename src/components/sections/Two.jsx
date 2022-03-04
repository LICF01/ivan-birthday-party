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
		<div className='section bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh] font-bold text-2xl px-10'>
				<p className='text '>
					Estoy por completar mi primera vuelta al sol
				</p>
			<div ref={earthAnim}>
				<Lottie animationData={EarthOrbitingSun} loop={true} />
			</div>
			<div className='px-10'>
				<p className='text '>
					Me acompañarías a festejar este momento especial?
				</p>
			</div>
		</div>
	);
};

export default Two;
