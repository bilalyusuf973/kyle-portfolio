'use client'
import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { HappyCustomers } from '../HappyCustomers'
import Button from '../UI/Button'
import { useSpringCarousel } from 'react-spring-carousel'
import { getBreakpoints } from '@/utils/getBreakpoints'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { JS_SIMPLIFIED_COURSES_URL } from '@/lib/constants'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'
import FiveStars from '../UI/FiveStars'
import CTA from '../UI/CTA'
import DPFallback from '../../../public/dp-fallback.svg'

const testimonials = [
	{
		message: `Buying Kyle's JavaScript Simplified course is the best decision I have made in my learning journey. It helped me a lot with the project I am working on and I finally began to love JavaScript after following Kyle's teachings.`,
		name: 'Jinka Ajay',
		profile: '/customer-4.png',
	},
	{
		message: `Wow! I tried other courses before I found JavaScript Simplified and had lots of trouble wrapping my head around concepts like event listeners. I felt like I would never get the hang of JavaScript, and I really considered giving up. Until now! Taking Kyle's course has helped me understand so much already and I am only 25% done. I've seen all these concepts before, but never understand how they fit together until taking JavaScript Simplified.`,
		name: 'Robert Provost',
		profile: '/customer-1.png',
	},
	{
		message: `I've used JavaScript self taught for awhile. For the longest time I defaulted to jQuery, but recently started going back to basics and it's amazing the things you miss when you're self taught. JavaScript Simplified is filing in those gaps for me!`,
		name: 'Andrew Sharpe',
		profile: '/customer-2.png',
	},
	{
		message: `Although I have a fundamental understanding of JavaScript, I learned a lot from the advanced sections of this course. Honestly, it's the most comprehensive JavaScript course I've ever seen.`,
		name: 'Claudio Bernasconi',
		profile: '/claudio.png',
		reviewer: true,
	},

	{
		message: `Kyle's content goes beyond the average in both quality and depth. With his dedication to excellence, there's no better option when it comes to learning web development.`,
		name: 'Caleb Curry',
		profile: '/caleb.png',
		reviewer: true,
	},
	{
		message: `I've not been active in the chat of the course, but after finishing it want to thank you for everything and how you simplified concepts that, at least while self-learning, are so complicated.<br />
		At first, when I opened the before document I was overwhelmed. Then, after 2/3 days of coding in my free time, l've been able to make it work with all the functionalities without watching the video (neither the finished code!).`,
		name: 'Bart Erkamp',
		profile: '/bart.png',
	},

	{
		message: `JavaScript Simplified is concise, to the point, and full of fun projects which constantly had me putting together what I had learned in challenging ways.`,
		name: 'Brent Morton',
		profile: '/customer-5.png',
	},
	{
		message: `Kyle, this is worth the price of admission. That was the best explanation you are ever going to see on array methods.
			There are 15-20 videos on each of those online and its very difficult to grasp.
			Even bootcamps and the like wont do as good as job teaching this
			When you explain something it sticks and it's tangible.`,
		name: 'Sean Barr',
		profile: '/dp-fallback.svg',
	},
	{
		message: `loving and learning a bunch from this course! aside from breaking down concepts in easily digestible bits, you offer fun mini exercises in each subsection and reassurance that some things *are* hard, which are things i haven't experienced with other JS courses. i was about to give up on programming until I found your course!! thank you`,
		name: 'Vera Lam',
		profile: '/dp-fallback-2.svg',
	},
]

const CarouselPrevItemButton = (props: React.ButtonHTMLAttributes<{}>) => {
	return (
		<button
			onClick={props.onClick}
			className={cn('absolute z-10', props.className)}
		>
			<Image src="/carousel-back.svg" alt="arrow" width={36} height={36} />
		</button>
	)
}

const CarouselNextItemButton = (props: React.ButtonHTMLAttributes<{}>) => {
	return (
		<button
			onClick={props.onClick}
			className={cn('absolute z-10', props.className)}
		>
			<Image src="/carousel-next.svg" alt="arrow" width={36} height={36} />
		</button>
	)
}

const Testimonial = ({ showTopThree = false }: { showTopThree?: boolean }) => {
	const [numberOfItemsPerSlide, setNumberOfItemsPerSlide] = useState(1)

	useEffect(() => {
		setNumberOfItemsPerSlide(getNumberOfItemsPerSlide())

		const handleResize = () => {
			setNumberOfItemsPerSlide(getNumberOfItemsPerSlide())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const getNumberOfItemsPerSlide = () => {
		const { xs, sm, md, lg } = getBreakpoints()
		const width = window.innerWidth
		if (width >= lg) return 3
		if (width >= md) return 2
		if (width >= sm) return 2
		if (width >= xs) return 1
	}

	const items = showTopThree ? testimonials.slice(0, 3) : testimonials.slice(3)

	const { carouselFragment, slideToPrevItem, slideToNextItem } =
		useSpringCarousel({
			gutter: 26,
			itemsPerSlide: numberOfItemsPerSlide,
			withLoop: true,
			initialStartingPosition: 'start',
			items: items.map((testimonial) => {
				return {
					id: testimonial.name,
					renderItem: <TestimonialItem testimonial={testimonial} />,
					renderThumb: <div>Thumb</div>,
				}
			}),
		})

	return (
		<Section className="text-brand-text-dark">
			<Container>
				<Flex direction="column">
					<Flex align="center" direction="column">
						<Heading className="capitalize !mb-1" align="center">
							Real Words From Our Satisfied{' '}
							<TextWithCurlyBraces>Devs</TextWithCurlyBraces>
						</Heading>

						<HappyCustomers transparent dpWidth={37} />
					</Flex>
					<div className="relative">
						<div className="pl-px overflow-x-hidden">
							{!showTopThree && (
								<CarouselPrevItemButton
									onClick={slideToPrevItem}
									className="-translate-x-1/2 top-1/2"
								/>
							)}
							<div className="py-[3.75rem]">{carouselFragment}</div>
							{!showTopThree && (
								<CarouselNextItemButton
									onClick={slideToNextItem}
									className="translate-x-1/2 right-0 top-1/2"
								/>
							)}
						</div>
					</div>
				</Flex>

				{!showTopThree && (
					<Flex justify="center" className="text-brand-white">
						<CTA />
					</Flex>
				)}
			</Container>
		</Section>
	)
}

const TestimonialItem = ({
	testimonial,
}: {
	testimonial: (typeof testimonials)[0]
}) => {
	return (
		<div>
			<div className="relative border-[#C3D5E5] border bg-brand-white !rounded-[20px] py-9 px-6 shadow-testimonial-card">
				<Flex align="center" direction="column" className="!gap-[20px]">
					<FiveStars size={14} />
					<Text
						align="center"
						dangerouslySetInnerHTML={{
							__html: `&ldquo;${testimonial.message}&rdquo;`,
						}}
					/>
					<TestimonialAuthor
						name={testimonial.name}
						profile={testimonial.profile}
						reviewer={testimonial.reviewer}
					/>
				</Flex>
			</div>
		</div>
	)
}

export const TestimonialAuthor = ({
	profile,
	name,
	reviewer,
}: {
	profile: string
	name: string
	reviewer?: boolean
}) => {
	return (
		<Flex align="center" gap="4">
			{profile ? (
				<Image
					src={profile || '/profile-fallback.png'}
					alt={name}
					width={52}
					height={52}
					className="!rounded-full border-2 border-brand-blue"
				/>
			) : (
				<Image src={DPFallback} alt="profile" />
			)}
			<Flex direction="column" gap="2">
				<Text className="capitalize" size="4">
					{name}
				</Text>
				<VerifiedBadge>{reviewer ? 'Reviewer' : 'Buyer'}</VerifiedBadge>
			</Flex>
		</Flex>
	)
}

const VerifiedBadge = ({ children }) => {
	return (
		<Flex className="gap-[6px]" align="center">
			<Image
				src="/icons/verified-rounded.svg"
				alt="verified"
				width={14}
				height={14}
			/>
			<Text className="text-gray-11 !text-[8px]">
				<em>Verified {children}</em>
			</Text>
		</Flex>
	)
}

export default Testimonial
