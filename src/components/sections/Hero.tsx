import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button'
// import TimDP from '../../../public/tim-dp.png'
import { HappyCustomers } from '../HappyCustomers'
import { TextWithCheckMark } from '../TextWithCheckMark'
import Link from 'next/link'
import { JS_SIMPLIFIED_COURSES_URL, TIM_YOUTUBE_URL } from '@/lib/constants'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'
import FireIcon from '../../../public/fire.svg'
import CTA from '../UI/CTA'

const Hero = () => {
	return (
		<Section
			id="hero"
			style={{
				backgroundImage: 'url(/backgrounds/hero-bg.png)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
			className="!pb-[58px] !pt-[30px] md:!pt-[90px] md:!pb-[45px] text-brand-white"
		>
			<Container>
				{/* <Flex gap="8" align="center"> */}
				<Box>
					<Flex
						mb={{
							initial: '4',
							sm: '7',
						}}
						justify={{
							initial: 'start',
							sm: 'center',
						}}
					>
						<HappyCustomers />
					</Flex>

					<Flex justify="center" className="!mb-8 md:!mb-[50px]">
						<Heading
							align={{
								initial: 'left',
								sm: 'center',
							}}
							className="capitalize w-full sm:w-[750px]"
							size="9"
						>
							Build any&nbsp;
							<TextWithCurlyBraces>JavaScript</TextWithCurlyBraces> project and
							land your dream tech job
						</Heading>
					</Flex>

					<iframe
						className="w-full aspect-video rounded-4 max-w-[512px] !block sm:!hidden mb-[42px]"
						src="https://www.youtube-nocookie.com/embed/5H2_bBtmDBE?si=I9K3vfwrgDBy26Cu&amp;controls=0"
						title="24 hour sale"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>

					<Flex justify="center">
						<Text
							className="font-semibold w-full sm:w-[700px] !mb-8 md:!mb-[50px]"
							size={{
								initial: '3',
								md: '5',
							}}
							as="p"
							align={{
								initial: 'left',
								sm: 'center',
							}}
						>
							JavaScript Simplified is a multi-step system for my community of
							14,000+ developers to build their dream projects and land their
							dream jobs.
						</Text>
					</Flex>

					<Flex
						gap="4"
						direction={{
							initial: 'column',
							sm: 'row',
						}}
						className="!mb-12 md:!mb-[60px]"
					>
						<TextWithCheckMark checkType="circle">
							Get instant results with
							<Text className="font-bolder"> easy-to-implement </Text>
							training and projects
						</TextWithCheckMark>

						<TextWithCheckMark checkType="circle">
							Cut the guesswork in our community of
							<Text className="font-bolder"> 14,000 developers</Text>
						</TextWithCheckMark>

						<TextWithCheckMark checkType="circle">
							Save time and money with{' '}
							<Text className="font-bolder">
								proven workflows and&nbsp;expert guidance
							</Text>
						</TextWithCheckMark>
					</Flex>

					{/* <Flex justify="center" className="!mb-10">
						<Image
							src="/hero-video-poster.svg"
							height={322}
							width={572}
							alt="hero video"
						/>
					</Flex> */}
					<Flex justify="center" className="!mb-10 !hidden sm:!block">
						<iframe
							className="w-full aspect-video rounded-4 max-w-[512px] hidden sm:!block mx-auto"
							src="https://www.youtube-nocookie.com/embed/5H2_bBtmDBE?si=I9K3vfwrgDBy26Cu&amp;controls=0"
							title="24 hour sale"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</Flex>

					<Flex justify="center" className="">
						<CTA />
					</Flex>

					{/* <HeroTestimonial /> */}
				</Box>

				{/* <Box className="hidden lg:block min-w-[45%]">
					<AspectRatio ratio={690 / 700}>
						<Image src="/hero-image.png" height={700} width={690} alt="hero" />
					</AspectRatio>
				</Box> */}
				{/* </Flex> */}
			</Container>
		</Section>
	)
}

// const HeroTestimonial = () => {
// 	return (
// 		<Flex gap="4" className="flex-col md:flex-row">
// 			<Flex
// 				className="shrink-0"
// 				align={{
// 					initial: 'center',
// 					md: 'start',
// 				}}
// 				gap="5"
// 			>
// 				<Link href={TIM_YOUTUBE_URL} target="_blank">
// 					{/* <Image src={TimDP} alt="tim" /> */}
// 				</Link>
// 				<div className="block md:hidden">
// 					<Flex gap="3">
// 						<Image src="/youtube.svg" alt="youtube" width={19} height={19} />
// 						<Text size="1">
// 							<Text weight="bold">1.3M+</Text> Subscribers
// 						</Text>
// 					</Flex>
// 				</div>
// 			</Flex>

// 			<Box>
// 				{/* <Flex justify="between" className="mb-[6px]"> */}
// 				{/* <FiveStars /> */}
// 				<div className="hidden md:block">
// 					<Flex gap="3">
// 						<Image src="/youtube.svg" alt="youtube" width={19} height={19} />
// 						<Text size="1">
// 							<Text weight="bold">1.3M+</Text> Subscribers
// 						</Text>
// 					</Flex>
// 				</div>
// 				{/* </Flex> */}
// 				<Text size="1">
// 					&#34;Kyle is a phenomenal instructor with an unmatched ability to
// 					break down complex topics and make even the most challenging problems
// 					digestible. Not only does he teach you the theory but he tests you
// 					every step of the way with practical projects and exercises that are
// 					fun and challenging. Seeing how Kyle designs his courses blew me away,
// 					the amount of effort and thought into the students experience is next
// 					to none.&#34;
// 				</Text>
// 				<p className="text-[9px] mt-[6px]">Tim Ruscica, YouTuber</p>
// 			</Box>
// 		</Flex>
// 	)
// }

export default Hero
