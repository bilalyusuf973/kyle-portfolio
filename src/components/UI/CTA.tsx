import { JS_SIMPLIFIED_COURSES_URL } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import FireIcon from '../../../public/fire.svg'

const CTA = ({ size }: { size?: 'md' | 'sm' | 'lg' }) => {
	return (
		<Button
			as="a"
			href="#pricing"
			size={size}
			rightIcon={<Image src={FireIcon} alt="fire" />}
			textClassName="uppercase"
		>
			get instant access now
		</Button>
	)
}

export default CTA
