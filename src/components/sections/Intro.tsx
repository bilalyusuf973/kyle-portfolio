import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Section,
	Text,
} from '@radix-ui/themes'
import React from 'react'
import RightArrow from '../../../public/right-arrow.svg'

import { HappyCustomers } from '../HappyCustomers'
import Button from '../UI/Button'
import Image from 'next/image'
import FiveStars from '../UI/FiveStars'
import Link from 'next/link'
import {
	JS_SIMPLIFIED_BASE_URL,
	JS_SIMPLIFIED_COURSES_URL,
	WEB_DEV_SIMPLIFIED_YOUTUBE,
} from '@/lib/constants'
import CTA from '../UI/CTA'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'

const Intro = () => {
	return (
		<section
			className="relative text-brand-text-dark layer flex flex-col lg:flex-row justify-between items-center lg:items-end !pt-[78px]"
			id="about"
		>
			<div
				className="block md:hidden h-[calc(100vw)] w-full relative"
				style={{
					background:
						'linear-gradient(180deg, rgba(16, 30, 40, 0.00) 0%, #101E28 100%)',
				}}
			>
				<Image src="/kyle3.png" alt="Kyle Image" fill />
			</div>
			<div className="w-full z-10 md:px-10 px-5 md:pt-10 md:pb-20 pb-0 relative -top-[80px] md:top-0">
				<div className="md:w-[50%]">
					<Flex direction="column" gap="6" className="">
						<Box>
							<HappyCustomers />
							<Heading weight="bold" mt="5">
								How I Stopped Getting Stuck and Mastered{' '}
								<TextWithCurlyBraces>JavaScript</TextWithCurlyBraces>
							</Heading>
						</Box>

						<Text
							as="p"
							size={{
								initial: '3',
								md: '5',
							}}
							className="font-semibold"
						>
							Hi! I&apos;m Kyle Cook. And not too long ago, I walked in your
							shoes - constantly grinding to bring my coding dreams to life.
							After investing countless hours, I started questioning if coding
							was really for me. I was stuck, constantly Googling basic issues,
							thinking I was the problem.
						</Text>

						<Text>
							<p>
								Something was off... I realised that the tutorials I followed
								lacked the essential concepts I needed to truly grasp
								JavaScript. My practice methods were even worse, causing 99%
								frustration and 1% progress.
							</p>
							<br />
							<p>
								Then in 2015, something clicked. Unlike typical tutorials
								drowning in JavaScript theory, I found a method which solved the
								root problem. For 9 years now, I have refined my method with
								concept based, practical projects and mindset development.
							</p>
							<br />
							<p>
								On YouTube, my coding videos have 130 million views and
								counting, earning the trust of 1.5 million subscribers. In the
								process, 40,000+ devs have signed up for 1 of my courses on all
								things{' '}
								<Link
									href={WEB_DEV_SIMPLIFIED_YOUTUBE}
									target="_blank"
									className="underline text-brand-blue-dark"
								>
									Web Dev Simplified.
								</Link>
							</p>
						</Text>
						<CTA />
					</Flex>
				</div>
				{/* <div className="basis-[830px] shrink-0 relative">
					<Image src={KyleProfileImage} alt="Kyle" />
					<TestimonialBox
					profile="/test-dp.png"
					className="bg-[#EEF9FF] absolute top-[433px] right-[127px]"
					>
					“When I watch tutorials it all makes sense, but when I try to do it
					on my own I get stuck.”
					</TestimonialBox>
					
					<TestimonialBox
					profile="/kyle-dp.png"
					className="bg-[#FFF] absolute top-[540px] bottom-[88px]"
					>
					“When I watch tutorials it all makes sense, but when I try to do it
					on my own I get stuck.”
					</TestimonialBox>
				</div> */}
			</div>
		</section>
	)
}

const TestimonialBox = ({
	profile,
	children,
	className,
}: {
	profile: string
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={`flex rounded-[10px] gap-[10px] p-5 ${className} max-w-[462px] drop-shadow-lg`}
		>
			<div className="shrink-0">
				<Image src={profile} alt="profile" width={55} height={55} />
			</div>
			<div className="flex flex-col gap-1.5">
				<FiveStars size={12} />
				<Text size="1" className="!text-[#5D514F]">
					{children}
				</Text>
			</div>
		</div>
	)
}

export default Intro
