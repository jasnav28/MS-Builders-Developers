'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function PortfolioDemo() {
	React.useEffect(() => {
		const lenis = new Lenis()
		
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
		return () => {
			lenis.destroy()
		}
	}, [])

	const images = [
		{
			src: '/pot/1.png',
			alt: 'Residential building construction G+2 @ Budigere',
		},
		{
			src: '/pot/2.png',
			alt: 'Restaurant construction @ Chikkaballapur',
		},
		{
			src: '/pot/3.png',
			alt: 'Motorcycle showroom @ Sullibelle',
		},
		{
			src: '/pot/4.png',
			alt: 'Residential building construction G+2 at Avathi',
		},
		{
			src: '/pot/5.png',
			alt: 'Residential building Interior G+2 @ Avathi',
		},
		{
			src: '/pot/6.png',
			alt: 'Commercial building G+4 @ Hosa Road',
		},
		{
			src: '/pot/7.png',
			alt: 'Residential project G+3 @ Jigani',
		},
	];

	return (
		<main className="min-h-fit w-full bg-black text-white">
			<div className="relative flex h-[35vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight uppercase">
					Our portfolio
				</h1>
			</div>
			<ZoomParallax images={images} />
			
			{/* Projects Done / Ongoing List */}
			<div className="max-w-5xl mx-auto px-6 pt-2 pb-16 text-left relative z-10 bg-black">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 text-white uppercase tracking-wider border-l-4 border-indigo-500 pl-4">
					Projects Done / Ongoing
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-300">
					{/* Left Column (1-5) */}
					<div className="flex flex-col gap-y-4">
						{[
							"Residential building construction G+2 @ Budigere",
							"Restaurant construction @ Chikkaballapur",
							"Motorcycle showroom @ Sullibelle",
							"Residential building construction G+2 at Avathi",
							"Residential building Interior G+2 @ Avathi"
						].map((project, i) => (
							<div key={i} className="flex items-start gap-3 text-base md:text-lg">
								<span className="text-indigo-400 font-semibold">{i + 1}.</span>
								<span>{project}</span>
							</div>
						))}
					</div>
					{/* Right Column (6-9) */}
					<div className="flex flex-col gap-y-4">
						{[
							"Commercial building G+4 @ Hosa Road",
							"Residential project G+3 @ Jigani",
							"Interior project of commercial building @ APMC market Chikkaballapur",
							"Muddenahalli 600 bed Hospital 5th wing construction"
						].map((project, i) => (
							<div key={i} className="flex items-start gap-3 text-base md:text-lg">
								<span className="text-indigo-400 font-semibold">{i + 6}.</span>
								<span>{project}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
