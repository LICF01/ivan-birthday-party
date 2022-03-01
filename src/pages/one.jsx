import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import baby from '../lotties/26614-baby-mind-logo-v1.json';
import EarthOrbitingSun from '../components/EarthOrbitingSun';
import Stars from '../components/Stars'

import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { motion } from 'framer-motion';

gsap.registerPlugin(Flip);

const One = () => {
	const hello = useRef();
	const text2 = useRef();
	const babyLottie = useRef();
	const earth = useRef();
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.to(babyLottie.current, {
				opacity: 1,
				height: '19rem',
				width: '20rem',
				duration: 2,
			})
			.to(hello.current, { opacity: 1, ease: 'ease', duration: 1 })
			.to(text2.current, { opacity: 1, ease: 'ease', duration: 1 });
	});

	return (
		<>
			<div className='flex items-center justify-center flex-col  w-[100vw] h-[100vh]'>
				<p ref={hello} className='text-7xl font-bold opacity-0'>
					Hola!
				</p>
				<div ref={babyLottie} className='opacity-0 h-[50rem] w-[50rem]'>
					<Lottie loop={true} animationData={baby} />
				</div>
				<div ref={text2} className='p-10 opacity-0'>
					<p className='text-3xl'>
						Tengo una gran noticia que compartir contigo
					</p>
				</div>
			</div>
			<div className='bg-space-dark flex items-center justify-center flex-col w-[100vw] h-[100vh]'>
				<div className='px-10'>
					<p className='text-3xl text-slate-300 font-bold'>
						Estoy por completar mi primera vuelta al sol
					</p>
				</div>
				<div ref={earth}>
					<EarthOrbitingSun />
				</div>
				<div className='px-10'>
					<p className='text-3xl text-slate-300 font-bold'>
						Me acompanaras a festejar este momento especial?
					</p>
				</div>
				<Stars />
			</div>
		</>
	);
};

export default One;
