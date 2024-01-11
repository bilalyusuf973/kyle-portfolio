import { Container, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/UI/popover'

import Hamburger from '../../public/hamburger.svg'
import { JS_SIMPLIFIED_LOGIN } from '@/lib/constants'
import Button from './UI/Button'
import FireIcon from '../../public/fire.svg'
import CTA from './UI/CTA'

const Navbar = () => {
	return (
		<Container className="bg-[#141D25] relative border-b border-[#ffffff21] border-opacity-10 md:px-5 px-8 xl:px-0 !text-brand-white h-[85px] justify-center">
			<div className="flex items-center">
				<div>
					<Image src="/logo.png" width={82} height={62} alt="logo" />
				</div>

				<div className="flex items-center gap-9 ml-auto">
					<LoginButton />
					<div className="hidden sm:block">
						<CTA size="md" />
					</div>
				</div>
			</div>
		</Container>
	)
}

const LoginButton = () => {
	return (
		<Link href={JS_SIMPLIFIED_LOGIN} target="_blank">
			<Text>Login</Text>
		</Link>
	)
}

const navbarLinks = [
	{
		name: 'Home',
		href: '#hero',
	},
	{
		name: 'About',
		href: '#about',
	},
	{
		name: 'Benefits',
		href: '#benefits',
	},
	{
		name: "What's Included",
		href: '#included',
	},
	{
		name: 'Packages',
		href: '#packages',
	},
]

const NavbarLinks = () => {
	return (
		<ul className="flex sm:space-x-8 flex-col sm:flex-row gap-y-4 sm:gap-y-0">
			{navbarLinks.map((link) => (
				<li key={link.name}>
					<Link href={link.href}>
						<Text>{link.name}</Text>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navbar
