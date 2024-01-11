import {
	Container,
	Flex,
	Heading,
	Section,
	Text,
	Box,
	Grid,
} from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Button from '../UI/Button'

import { JS_SIMPLIFIED_COURSES_URL } from '@/lib/constants'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'
import BuildIcon from '../../../public/icons/build.svg'
import MindIcon from '../../../public/icons/mind.svg'
import ThumbIcon from '../../../public/icons/thumb.svg'
import CoderIcon from '../../../public/icons/coder.svg'
import JobIcon from '../../../public/icons/job.svg'
import AdvantageIcon from '../../../public/icons/advantage.svg'
import CTA from '../UI/CTA'

const benefits = [
	{
		title: 'Master The Art Of Building',
		description:
			'Get unstuck immediately and build complex projects with confidence. No more Googling or watching YouTube tutorials for basic gaps.',
		icon: BuildIcon,
	},
	{
		title: 'Learn How to Think Like a Developer',
		description:
			'The best devs know how to deconstruct complex projects into fundamentals truths. You will learn how to think like an unstoppable dev.',
		icon: MindIcon,
	},
	{
		title: 'Improve Your Quality Of Life',
		description:
			'The best devs can not only open doors to high-paying tech jobs but they also have more free time with their friends and families.',
		icon: ThumbIcon,
	},
	{
		title: 'Join Our Tribe Of 14,000+ devs',
		description:
			'Find your co-builders for life and grow your network in our tribe of 14,000+ devs. Get unstuck in minutes by receiving instant support.',
		icon: CoderIcon,
	},
	{
		title: 'Stack Skills For Your Dream Job',
		description:
			'Build high-value skills for senior dev roles like mindset, clean code, testing, dev interviews, and JavaScript mastery.',
		icon: JobIcon,
	},
	{
		title: 'Build your Unfair Advantage',
		description:
			"This course goes beyond the typical JavaScript course. You will learn concepts that most people don't discover until years into their first job.",
		icon: AdvantageIcon,
	},
	// {
	// 	title: 'Enjoy More Flexibility',
	// 	description:
	// 		'Choose how and where you work and shape a professional life that aligns with your own schedule and preferences.',
	// 	icon: '/calendar.svg',
	// },
	// {
	// 	title: 'Join a Thriving Community',
	// 	description:
	// 		'Interact with over 14,000 developers, expand your professional network, and unlock opportunities for collaboration and mentorship.',
	// 	icon: '/community.svg',
	// },
]

const Benefits = () => {
	return (
		<Section
			className="bg-blue-gradient text-brand-text-dark !pt-[100px] !pb-[55px]"
			id="benefits"
		>
			<Container>
				<Flex
					direction="column"
					gap={{
						initial: '6',
						md: '9',
					}}
				>
					<Box>
						<Heading
							className="mb-5 md:!mb-[1.875rem] capitalize"
							align="center"
						>
							land your dream{' '}
							<TextWithCurlyBraces>tech job</TextWithCurlyBraces>
						</Heading>

						<Text
							align="center"
							weight="bold"
							size={{
								initial: '3',
								md: '5',
							}}
							as="div"
						>
							This program is designed to evolve you into a dream candidate with
							the right skills.
						</Text>
					</Box>

					<Grid
						columns={{
							initial: '1',
							xs: '2',
						}}
						width="auto"
						className="gap-y-[30px] gap-x-[46px] lg:gap-y-[1.875rem] lg:gap-x-[2.875rem]"
					>
						{benefits.map((b) => (
							<BenefitItem benefit={b} key={b.title} />
						))}
					</Grid>

					<Flex justify="center" className="text-brand-white">
						<CTA />
					</Flex>
				</Flex>
			</Container>
		</Section>
	)
}

const BenefitItem = ({ benefit }: { benefit: (typeof benefits)[number] }) => {
	return (
		<Flex
			className="md:p-5 p-4 rounded-7 border border-border-defaut"
			align="center"
		>
			<Flex
				className="gap-[.625rem] flex-col md:flex-row"
				align={{
					initial: 'start',
					md: 'center',
				}}
			>
				<Image
					src={benefit.icon}
					height={100}
					width={100}
					alt={benefit.title}
				/>
				<Box>
					<Text as="p" mb="4" className="text-heading4 font-semibold">
						{benefit.title}
					</Text>
					<Text
						size={{
							initial: '2',
							md: '3',
						}}
					>
						{benefit.description}
					</Text>
				</Box>
			</Flex>
		</Flex>
	)
}

export default Benefits
