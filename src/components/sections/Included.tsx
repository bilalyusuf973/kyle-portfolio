import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/UI/tabs'
import Button from '../UI/Button'
import Image from 'next/image'
import {
	ADVANCED_COURSE_URL,
	BEGINNER_COURSE_URL,
	INTERVIEW_LIST,
	MULTIPLE_PROJECTS,
	QUOKKA_JS,
} from '@/lib/constants'
import Link from 'next/link'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'

const tabsData = [
	{
		value: 'Beginner Course',
		heading: 'Beginner Course',
		description: [
			'A complete video course with over <Strong>13 hours</Strong> of content spread across <Strong>74 videos</Strong> and <Strong>10 modules</Strong>.',
			'This course covers every single important JavaScript concept that you need to understand in order to become a JavaScript developer and it shows you how to connect them.',
			'This can take you from literally no programming experience all the way to a proficient JavaScript developer. Even if you already have JavaScript knowledge, this course is perfect for helping you connect all the pieces together.',
			'While 13 hours may not seem like a lot if you are used to long Udemy courses, I can assure you this course is packed with information. Each minute is as condensed as possible with knowledge, projects, and exercises which means not a single second of your time with the course is wasted.',
			'Also, if you plan to get through this course in only 13 hours, good luck. With all the projects and exercises in this course it will easily <Strong>take you over a month</Strong> to get through everything, and that is if you work on the course every single day!',
		],
		CTALink: BEGINNER_COURSE_URL,
		CTAText: 'Learn More',
	},
	{
		value: 'Advance Course',
		heading: 'Advance Course',
		description: [
			`Once you become a proficient JavaScript developer then it is time to start diving into the advanced JavaScript ecosystem.`,
			`This course will take you from junior to mid-level developer with just under <Strong>14 hours</Strong> of content spread across <Strong>65 videos</Strong> and <Strong>9 modules.</Strong>`,
			`This course covers not only <Strong>advanced JavaScript features</Strong>, but more importantly covers concepts like <Strong>security, testing</Strong>, and <Strong>how to write clean code</Strong>.`,
			`The skills in this course will <Strong>set you apart from all other job applicants</Strong> as most developers never learn any of these concepts until after landing their first job. I personally didn't even know what 90% of the concepts in this course were when I landed my first job and was forced to learn them on the job.`,
			`I can only imagine how much <Strong>easier</Strong> it would have been <Strong>to land my first job</Strong> if I knew these skills before applying.`,
		],
		CTALink: ADVANCED_COURSE_URL,
		CTAText: 'Learn More',
	},
	{
		value: 'Multiple Projects',
		heading: 'Multiple Projects',
		description: [
			'Learning how to connect JavaScript concepts is the only way to become a JavaScript developer and one of the best ways to do that is through projects.',
			'JavaScript Simplified includes tons of projects of various difficulty and scale which are perfectly crafted to help you slowly build up your JavaScript skills <Strong>without overwhelming you.</Strong>',
			'There are never more than a few concepts introduced at a time in between projects. This ensures you are able to fully comprehend each concept and how to connect it to other concepts.',
			'This course also includes <Strong>6 large bonus projects</Strong> that combine together all the concepts in this course. These projects are perfect for practicing your JavaScript skills and are also great additions to your resume. Best of all, these projects are crafted with specific ways you can build upon them which will help further deepen your project building skills.',
		],
		CTALink: MULTIPLE_PROJECTS,
		CTAText: 'Learn More',
	},
	{
		value: 'Countless Exercises',
		heading: 'Countless Exercises',
		description: [
			'This is where <Strong>JavaScript Simplified really shines.</Strong>',
			'In order to learn JavaScript you must practice a lot! That is why in JavaScript Simplified there are tons of exercises throughout nearly every video in the course.',
			'Not a single concept is introduced without specific exercises also being introduced with it. These exercises vary drastically in scale, from simple commands to full projects, but they all serve the same purpose. <Strong>Teaching you how to connect JavaScript concepts.</Strong>',
			'These exercises are what separate JavaScript Simplified from other JavaScript courses and ensures that you learn not only JavaScript, but also <Strong>how to think like a developer.</Strong>',
		],
	},
	{
		value: 'Helpful Community',
		heading: 'Helpful Community',
		description: [
			'When you get stuck, sometimes the best help is simply another person. This is why I have a <Strong>private Discord community</Strong> specifically for the members of JavaScript Simplified.',
			'In this community you can ask other course members as well as me any of your JavaScript questions, and since the community is fairly active you will almost always get a quick response.',
			'Nothing beats one-on-one communication with another person.',
		],
	},
	{
		value: 'Tips For Landing A Job',
		heading: 'Tips For Landing A Job',
		description: [
			"Landing your first job as a web developer is <Strong>really hard</Strong> and being self-taught doesn't make it any easier. That is why I interviewed incredible developers like <a href='https://twitter.com/DThompsonDev' target='_blank' class='font-bold text-brand-blue underline'>Danny Thompson</a>, and <a href='https://twitter.com/eddiejaoude' target='_blank' class='font-bold text-brand-blue underline'>Eddie Jaoude</a> to figure out how they landed their first developer jobs.",
			'These talks cover so many different tips and tricks that you can use to get yourself into <Strong>more interviews</Strong> and successfully ace those interviews. The topics we cover will truly <Strong>change the way you look at applying for jobs.</Strong>',
		],
		CTALink: INTERVIEW_LIST,
		CTAText: 'View Interview List',
	},

	{
		value: 'Free Quokka.js Pro For 3 Months',
		heading: 'Free Quokka.js Pro For 3 Months',
		description: [
			'One of the <Strong>hardest parts of learning JavaScript</Strong> is understanding how the code works and seeing any mistakes you make. Text editors are great at helping you with this, but they are <Strong>not ideal</Strong>. This is where Quokka.js comes in.',
			'Quokka.js is a developer <Strong>productivity tool specifically built for JavaScript</Strong> that shows you exactly what is happening in the code at each line. It also has robust error reporting that makes learning JavaScript <Strong>quicker and easier.</Strong>',
		],
		CTALink: QUOKKA_JS,
		CTAText: 'Learn more about Quokka.js',
	},
]

const Included = () => {
	return (
		<Section
			className="text-brand-white bg-brand-bg-dark"
			id="included"
			style={{
				backgroundImage: 'url(/backgrounds/included-bg.png)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Container>
				<Box>
					<Heading align="center" className="!mb-[18px] md:!mb-8">
						What&apos;s <TextWithCurlyBraces>Included?</TextWithCurlyBraces>
					</Heading>

					<Text as="div" align="center" className="md:!mb-20">
						No fluff, just the good stuff. Get actionable insights and instant
						support in your journey for JavaScript mastery.
					</Text>
				</Box>

				{/* TABS */}
				<Flex justify="center">
					<Tabs
						defaultValue={tabsData[0].value}
						className="text-2 flex flex-col md:flex-row w-full items-center justify-center relative"
						orientation="vertical"
					>
						<TabsList
							className="justify-between flex flex-row md:flex-col gap-2 px-0 py-5 h-fit m-5 w-full md:w-[22%]"
							data--orientation="vertical"
						>
							<>
								{tabsData.map((t) => (
									<TabsTrigger key={t.heading} value={t.value}>
										{t.heading}
									</TabsTrigger>
								))}
							</>
						</TabsList>
						<div className="block md:hidden border-b border-b-[rgba(255,255,255,0.2)] w-full absolute top-[97.5px]"></div>
						{tabsData.map((t) => (
							<TabsContent key={t.value} value={t.value}>
								<TabItem t={t} />
							</TabsContent>
						))}
					</Tabs>
				</Flex>
			</Container>
		</Section>
	)
}

const TabItem = ({ t }: { t: (typeof tabsData)[number] }) => {
	return (
		<Box className="bg-brand-white md:p-10 p-5 rounded-7">
			<Flex
				direction="column"
				gap={{
					initial: '4',
					md: '6',
				}}
			>
				<Text className="text-brand-blue" size="6" weight="bold">
					{t.heading}
				</Text>

				<Flex direction="column" gap="2">
					{t.description.map((d, index) => (
						<Text
							key={d.substring(0, 10)}
							dangerouslySetInnerHTML={{ __html: t.description[index] }}
							className="text-brand-text-dark"
						/>
					))}
				</Flex>

				{t.CTALink && (
					<Button
						href={t.CTALink}
						target="_blank"
						as={Link}
						outline
						rightIcon={
							<Image
								src="/right-arrow-orange.svg"
								alt="arrow"
								width={20}
								height={20}
							/>
						}
						textClassName="text-brand-orange font-regular underline underline-offset-[2px]"
						className="!py-3 !px-10"
					>
						{t.CTAText}
					</Button>
				)}
			</Flex>
		</Box>
	)
}

export default Included
