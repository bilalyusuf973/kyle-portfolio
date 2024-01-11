import { Strong, Text } from '@radix-ui/themes'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const HappyCustomers = ({
	transparent,
	dpWidth,
}: {
	transparent?: boolean
	dpWidth?: number
}) => {
	return (
		<div
			className={`flex items-center flex-wrap ${
				transparent ? 'bg-transparent' : 'bg-brand-bg-light'
			} w-max px-[14px] py-[11px] rounded-[7px] gap-[7px]`}
		>
			<CustomerImages width={dpWidth} />
			<Text
				className={`${transparent ? 'text-brand-text-dark' : 'text-brand-white'}
				${dpWidth ? 'text-[14px] sm:text-[20px]' : 'text-[14px]'}
				`}
			>
				{' '}
				Trusted By <Strong>2,400+</Strong> Students
			</Text>
		</div>
	)
}

const CustomerImages = ({ width = 22 }: { width?: number }) => {
	return (
		<div className="flex flex-wrap">
			{new Array(5).fill(0).map((_, i) => (
				<Image
					className={cn(
						'!rounded-full border border-brand-white',
						width <= 22 ? 'clubbed-customers' : 'clubbed-customers-lg'
					)}
					height={width}
					width={width}
					alt="customer"
					src={`/customer-${i + 1}.png`}
					key={i}
				/>
			))}
		</div>
	)
}
