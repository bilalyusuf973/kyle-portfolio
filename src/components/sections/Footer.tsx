'use client'

import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Separator,
	Strong,
	Text,
} from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { TextWithCheckMark } from '../TextWithCheckMark'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'
import CTA from '../UI/CTA'
import FiveStars from '../UI/FiveStars'
import { TestimonialAuthor } from './Testimonial'

const Footer = () => {
	return (
		<Section className="text-brand-text-dark bg-blue-gradient-reverse !pt-14 !pb-[60px] md:!pt-36 md:!px-10">
			<Container>
				<Flex align="center" gap="7">
					<Flex className="md:basis-1/2" direction="column" gap="6">
						<Heading>
							A Proven System For JavaScript Mastery With{' '}
							<TextWithCurlyBraces>JavaScript</TextWithCurlyBraces> Simplified
						</Heading>

						<Text
							className="font-semibold"
							size={{
								initial: '3',
								md: '5',
							}}
							as="p"
						>
							Learn gradually, at your own pace, and master each concept until
							you&apos;re capable of crafting complex projects from scratch.
						</Text>

						<div className="block md:hidden">
							<Image
								src="/images/footer.png"
								height={486}
								width={624}
								alt="footer"
							/>
						</div>

						<Flex gap="5" direction="column">
							<TextWithCheckMark>
								All the knowledge you need in one course,{' '}
								<Strong>no matter where you&apos;re starting from</Strong>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Practice concepts through exercises and{' '}
								<Strong>learn how to think like a developer</Strong>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Build a solid foundation for a successful{' '}
								<Strong>career as a frontend developer</Strong>
							</TextWithCheckMark>
						</Flex>

						<div className="text-brand-white">
							<CTA size="md" />
						</div>
					</Flex>

					<div className="hidden md:block basis-1/2">
						<Image
							src="/images/footer.png"
							height={486}
							width={624}
							alt="footer"
						/>
					</div>
				</Flex>

				<div className="mt-14 sm:max-w-[630px]">
					<FergusonTestimonial />
				</div>

				<div className="flex flex-col gap-10 items-center !mt-[50px] md:!mt-[120px]">
					<Separator className="w-full" size="4" />

					<Image src="/logo.png" height={44} width={60} alt="logo" />
				</div>
			</Container>
		</Section>
	)
}

const FergusonTestimonial = () => {
	return (
		<div>
			<div className="mb-2">
				<FiveStars />
			</div>
			<Text size="2">
				&ldquo;Before stumbling upon Kyle&apos;s JavaScript course, I was stuck
				in a not-so-exciting CDL job, dreaming about working with computers.
				After learning HTML & CSS on my own, getting into JavaScript was not
				only hard but a bit discouraging. Finding Kyle&apos;s JavaScript
				Simplified course changed my world and became the key to me landing my
				first gig as a web developer, which I just started yesterday!
				Kyle&apos;s lessons not only helped me get past the starting point of
				HTML and CSS but also taught me JavaScript the correct way while making
				it affordable.{' '}
				<Strong>
					Because of Kyle, I&apos;m not just chasing my dreams; I&apos;m
					actually living them right now!
				</Strong>{' '}
				And it&apos;s not just me—Kyle has a huge impact on my family too. His
				course has opened doors and is helping me build a better future for my
				kid and that means more than words can express. Kyle&apos;s passion for
				this stuff is contagious, and I feel lucky to have learned from
				him.&rdquo;
			</Text>

			<div className="mt-4">
				<TestimonialAuthor
					profile="/images/ferguson.png"
					name="Marcus Ferguson"
				/>
			</div>
		</div>
	)
}

export default Footer
