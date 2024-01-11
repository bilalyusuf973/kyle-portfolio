import React from 'react'
import Image from 'next/image'
import {
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Separator,
	Text,
} from '@radix-ui/themes'
import Button from '../UI/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { JS_SIMPLIFIED_PRICING } from '@/lib/constants'

const packages = [
	{
		name: 'basic',
		price: 149,
		discountedPrice: 127,
		features: [
			'Entire <Strong>JavaScript Simplified - Beginner</Strong> course',
			'Over <Strong>13 hours</Strong> of content across <Strong>74 videos</Strong>',
			'Before and after source code for all projects',
			'Exclusive access to private Discord community',
			'All future updates',
			'3 months of Quokka.js Pro',
			'Lifetime access',
		],
		CTAProps: {
			outline: true,
			rightIcon: (
				<Image
					src="/right-arrow-orange.svg"
					alt="arrow"
					width={20}
					height={20}
				/>
			),
			textClassName: 'uppercase text-brand-orange font-semibold',
		},
	},
	{
		name: 'premium',
		price: 399,
		discountedPrice: 297,
		badge: 'most popular',
		badgeBG: 'bg-brand-blue',
		features: [
			'<Strong>Everything in the Complete Package</Strong>',
			'Just under <Strong>40 hours</Strong> of content across <Strong>150 videos</Strong>',
			'<Strong>Six large bonus projects</Strong>',
			'Four interviews with successful self-taught developers on <Strong>how to land your first job</Strong>',
			'Download all videos for <Strong>offline access</Strong>',
			'Before and after source code for all projects',
			'Exclusive access to private Discord community',
			'All future updates',
			'3 months of Quokka.js Pro',
			'Lifetime access',
		],
		CTAProps: {
			rightIcon: (
				<Image src="/right-arrow.svg" alt="arrow" width={20} height={20} />
			),
			textClassName: 'uppercase text-brand-white',
		},
	},
	{
		name: 'complete',
		price: 299,
		discountedPrice: 197,
		badgeBG: 'bg-brand-bg-light',
		features: [
			'<Strong>Everything in the Basic Package</Strong>',
			'Entire <Strong>JavaScript Simplified - Advanced</Strong> course',
			'Over <Strong>27 hours</Strong> of content across <Strong>140 videos</Strong>',
			'Download all videos for <Strong>offline access</Strong>',
			'Before and after source code for all projects',
			'Exclusive access to private Discord community',
			'All future updates',
			'3 months of Quokka.js Pro',
			'Lifetime access',
		],
		CTAProps: {
			outline: true,
			rightIcon: (
				<Image
					src="/right-arrow-orange.svg"
					alt="arrow"
					width={20}
					height={20}
				/>
			),
			textClassName: 'uppercase text-brand-orange font-semibold',
		},
	},
]

const Pricing = () => {
	return (
		<Section
			className="!py-10 md:!py-[100px] text-brand-text-dark bg-blue-gradient-reverse"
			id="pricing"
		>
			<Container>
				<Heading className="!mb-[46px] md:!mb-20" align="center">
					Everything You Need To Build At Any Level
				</Heading>

				<Flex
					align="center"
					className={cn(
						'[&>*:nth-child(odd)]:bg-default-gray [&>*:nth-child(2)]:bg-brand-white [&>*:nth-child(2)]:border-4 md:[&>*:nth-child(2)]:border-8 [&>*:nth-child(2)]:border-brand-blue [&>*:nth-child(2)]:shadow-blue-shadow',
						'flex-col-reverse md:flex-row gap-8 md:gap-7',
						'[&>*:nth-child(2)]:order-1 md:[&>*:nth-child(2)]:order-none'
					)}
				>
					{packages.map((p) => (
						<PricingCard p={p} key={p.name} />
					))}
				</Flex>
			</Container>
		</Section>
	)
}

const PricingCard = ({ p }: { p: (typeof packages)[number] }) => {
	return (
		<Box
			className={`border 
			border-border-defaut
			rounded-7
			shadow-testimonial-card
			pt-12 md:px-6 px-3 pb-[1.75rem] flex-1 relative w-full sm:w-auto max-w-[400px]
			`}
		>
			<Text as="p" align="center" className="uppercase" mb="4" weight="bold">
				{p.name} package
			</Text>

			<Flex direction="column" className="gap-[1.75rem]" justify="between">
				<Flex align="center" justify="center" gap="3">
					<Text className="text-placeholder line-through">${p.price}</Text>
					<Text className="text-brand-blue text-[2.265rem]" weight="bold">
						${p.discountedPrice}
					</Text>
				</Flex>

				<Separator className="!w-full" />

				<Box className="min-h-[27rem]">
					<Flex className="gap-5" direction="column">
						{p.features.map((f) => (
							<>
								<Flex gap="4">
									<Image src="/tick.svg" alt="check" width={20} height={20} />
									<Text
										as="p"
										size="3"
										dangerouslySetInnerHTML={{ __html: f }}
									/>
								</Flex>
							</>
						))}
					</Flex>
				</Box>

				<Button
					as="a"
					href={JS_SIMPLIFIED_PRICING}
					target="_blank"
					fullWidth
					{...p.CTAProps}
				>
					buy now
				</Button>
			</Flex>

			{/* BADGE */}
			{p.badge && (
				<div
					className={`py-2 px-6 text-[17px] w-max font-bold ${p.badgeBG} inline-block rounded-3 uppercase text-brand-white absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2`}
				>
					{p.badge}
				</div>
			)}
		</Box>
	)
}

export default Pricing
