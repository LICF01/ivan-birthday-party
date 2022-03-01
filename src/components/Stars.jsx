import Particles from 'react-tsparticles';

const Stars = () => {
	const particlesInit = (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: true,
					zIndex: 1,
				},
				particles: {
					number: {
						value: 160,
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: '#ffffff',
					},
					shape: {
						type: 'circle',
					},
					opacity: {
						value: 1,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0,
							sync: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: false,
							speed: 4,
							size_min: 0.3,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						distance: 150,
						color: '#ffffff',
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 1,
						direction: 'none',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 600,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
};

export default Stars;
