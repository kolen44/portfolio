import Link from 'next/link'

export default function CVButton({ text, link, color, color_text }) {
	return (
		<div
			className={`rounded-lg w-3/12 h-10 flex items-center justify-center bg-${color}
			`}
		>
			<Link className='w-4/12' href={link}>
				<p className={`text-${color_text}`}>{text}</p>
			</Link>
		</div>
	)
}
