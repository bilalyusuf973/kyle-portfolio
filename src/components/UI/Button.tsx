import { cn } from '@/lib/utils'
import { Box, Flex, Text } from '@radix-ui/themes'
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonAndAnchorProps = ButtonHTMLAttributes<HTMLButtonElement> &
	AnchorHTMLAttributes<HTMLAnchorElement>

interface ButtonProps extends ButtonAndAnchorProps {
	children: React.ReactNode
	outline?: boolean
	rightIcon?: React.ReactNode
	textClassName?: string
	fullWidth?: boolean
	size?: 'sm' | 'md' | 'lg'
	as?: React.ElementType
	href?: string
}

const Button = (props: ButtonProps) => {
	const {
		children,
		outline = false,
		rightIcon = null,
		textClassName,
		fullWidth = false,
		className,
		size = 'lg',
		as = 'button',
		href,
		...rest
	} = props

	const Component = as

	return (
		<Component
			className={cn(
				`rounded-5`,
				'inline-block',
				`${fullWidth ? '!w-full' : 'w-max'} 
					${
						outline
							? 'border-2 border-brand-orange bg-transparent'
							: 'border-none bg-orange-gradient'
					}
				${className}`,
				{
					'px-7 py-[14px]': size === 'md',
					'px-5 py-2': size === 'sm',
					'px-7 py-3 md:px-9 md:py-5': size === 'lg',
				}
			)}
			href={href}
			{...rest}
		>
			<Flex gap="3" align="center" justify="center">
				<Text
					className={cn(
						`font-bolder`,
						{
							'text-3': size === 'md',
							'text-2': size === 'sm',
							'text-3 md:!text-5': size === 'lg',
						},
						textClassName
					)}
				>
					{children}
				</Text>

				{rightIcon && <Box>{rightIcon}</Box>}
			</Flex>
		</Component>
	)
}

export default Button
