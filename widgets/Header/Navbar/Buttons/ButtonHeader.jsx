import Link from 'next/link'

export default function ButtonHeader({ text }) {
	return (
		<div>
			<Link
				href={'/'}
				className='text-#799f9f-300 group transition duration-300 hover:text-sky-200'
			>
				{text}
				<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600'></span>
			</Link>
		</div>
	)
}
