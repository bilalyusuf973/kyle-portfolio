import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import LearningSteps from '@/components/sections/LearningSteps'
import Intro from '@/components/sections/Intro'
import SimplifiedJS from '@/components/sections/SimplifiedJS'
import Testimonial from '@/components/sections/Testimonial'
import Benefits from '@/components/sections/Benefits'

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<LearningSteps />
			<Intro />
			<Benefits />
			<SimplifiedJS />
			<Testimonial />
		</div>
	)
}