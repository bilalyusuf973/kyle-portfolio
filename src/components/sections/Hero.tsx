import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Text,
} from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button'
import TimDP from '../../../public/tim-dp.png'
import { HappyCustomers } from '../HappyCustomers'
import { TextWithCheckMark } from '../TextWithCheckMark'

const Hero = () => {
	return (
		<Section
			style={{
				backgroundImage: 'url(/hero-bg.png)',
				backgroundSize: 'cover',
			}}
		>
			<Container>
				<Flex gap="8" align="center">
					<Box>
						<Box mb="5">
							<HappyCustomers />
						</Box>
						<div className="flex flex-col gap-9 text-brand-white">
							<Heading
								className="text-brand-white capitalize !leading-[110%] !text-[2.75rem]"
								size="9"
							>
								Gain the confidence to build
								<br /> any{' '}
								<span className="text-brand-blue">
									&#123; JavaScript &#125;
								</span>{' '}
								project and
								<br /> land your dream job
							</Heading>

							<Box className="w-4/5">
								<Text className="font-semibold" size="5">
									JavaScript Simplified is a multi-step system for my community
									of 14,000+ developers to build their dream projects and land
									their dream jobs.
								</Text>

								<Flex direction="column" gap="4" mt="7">
									<TextWithCheckMark>
										Get instant results with
										<Text className="font-bolder"> easy-to-implement </Text>
										training and projects
									</TextWithCheckMark>

									<TextWithCheckMark>
										Cut the guesswork in our community of
										<Text className="font-bolder"> 14,000 developers</Text>
									</TextWithCheckMark>

									<TextWithCheckMark>
										Save time and money with{' '}
										<Text className="font-bolder">
											proven workflows and expert guidance
										</Text>
									</TextWithCheckMark>
								</Flex>
							</Box>

							<Button
								rightIcon={
									<Image
										src="/right-arrow.svg"
										alt="arrow"
										width={20}
										height={20}
									/>
								}
								textClassName="uppercase"
							>
								start leaning now
							</Button>

							<HeroTestimonial />
						</div>
					</Box>

					<Box width="100%">
						<AspectRatio ratio={690 / 700}>
							<Image
								src="/hero-image.png"
								height={700}
								width={690}
								alt="hero"
							/>
						</AspectRatio>
					</Box>
				</Flex>
			</Container>
		</Section>
	)
}

const HeroTestimonial = () => {
	return (
		<Flex gap="4">
			<Box className="shrink-0">
				<Image src={TimDP} alt="tim" />
			</Box>
			<Box>
				{/* <Flex justify="between" className="mb-[6px]"> */}
				{/* <FiveStars /> */}
				<Flex gap="3">
					<Image src="/youtube.svg" alt="youtube" width={19} height={19} />
					<Text size="1">
						<Text weight="bold">1.3M+</Text> Subscribers
					</Text>
				</Flex>
				{/* </Flex> */}
				<Text size="1">
					&#34;Kyle is a phenomenal instructor with an unmatched ability to
					break down complex topics and make even the most challenging problems
					digestible. Not only does he teach you the theory but he tests you
					every step of the way with practical projects and exercises that are
					fun and challenging. Seeing how Kyle designs his courses blew me away,
					the amount of effort and thought into the students experience is next
					to none.&#34;
				</Text>
				<p className="text-[9px] mt-[6px]">Tim Ruscica, YouTuber</p>
			</Box>
		</Flex>
	)
}

export default Hero