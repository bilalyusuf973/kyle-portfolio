import React from 'react'
import Image from 'next/image'
import { AspectRatio, Strong, Text } from '@radix-ui/themes'
import TimLogo from '../../public/tim-logo.png'

import FiveStars from './UI/FiveStars'
import Link from 'next/link'
import { TIM_YOUTUBE_URL } from '@/lib/constants'

const TimTestimonial = () => {
	return (
		<div className="pb-[105px]">
			<div className="flex relative flex-col sm:flex-row gap-9 p-[18px] items-center bg-brand-gray-blue border border-[#141D25]/10 rounded-3 lg:w-[932px]">
				<Image
					src="/tim-photo.png"
					alt="tim"
					width={240}
					height={240}
					className="rounded-3"
				/>
				<div>
					<FiveStars />
					<Text className="!mt-2 !mb-6" as="p" size="2">
						&ldquo;Kyle is a phenomenal instructor with an&nbsp;
						<Strong>
							unmatched ability to break down complex projects
						</Strong>{' '}
						and make even the most challenging problems digestible. Not only
						does he teach you the theory but he tests you every step of the way
						with&nbsp;
						<Strong>practical projects</Strong> and exercises that are fun and
						challenging. Seeing how Kyle designs his courses blew me away, the
						amount of&nbsp;
						<Strong>
							effort and thought into the student&apos;s experience
						</Strong>
						&nbsp;is next to none.&rdquo;
					</Text>

					<div className="flex flex-col xs:flex-row gap-3 xs:gap-[18px] items-start xs:items-center">
						<div className="flex !gap-3 items-center">
							<Image src={TimLogo} width={26} height={26} alt="Tim Logo" />
							<Link href={TIM_YOUTUBE_URL}>
								<Text
									className="font-semibold underline underline-offset-4"
									size="1"
								>
									Tim Ruscica, YouTuber
								</Text>
							</Link>
						</div>

						<Text>
							<Strong>1.4M+</Strong>&nbsp;Subscribers
						</Text>
					</div>
				</div>

				{/* <div className="absolute top-2 -z-10 left-1/2 -translate-x-1/2 aspect-auto">
					<BackgroundBlob />
				</div> */}
			</div>
		</div>
	)
}

const BackgroundBlob = () => {
	return (
		<svg
			width="1203"
			height="50vw"
			viewBox="0 0 1203 634"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.5" filter="url(#filter0_f_151_2055)">
				<path
					d="M602.758 178.959C835.911 181.146 1024.25 253.856 1023.43 341.362C1022.61 428.869 750.964 457.226 517.811 455.04C284.658 452.853 178.29 420.951 179.11 333.444C179.931 245.938 369.604 176.772 602.758 178.959Z"
					fill="url(#paint0_angular_151_2055)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_151_2055"
					x="0.465485"
					y="0.268463"
					width="1201.61"
					height="633.528"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="89.3201"
						result="effect1_foregroundBlur_151_2055"
					/>
				</filter>
				<radialGradient
					id="paint0_angular_151_2055"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(601.27 337.404) rotate(0.53732) scale(422.18 158.451)"
				>
					<stop offset="0.119792" stop-color="#01A8F5" stop-opacity="0" />
					<stop offset="1" stop-color="#0043AB" />
				</radialGradient>
			</defs>
		</svg>
	)
}

export default TimTestimonial
