import Image from 'next/image'
import CVButton from '../../../widgets/Header/Greeting/CVButton'

export default function Greeting() {
	return (
		<div className='h-full w-screen items-center flex justify-center gap-x-10'>
			<div className=''>
				<Image
					className='rounded-full'
					src='/armstrong.jpg'
					width={200}
					height={150}
					fill={false}
					alt='Picture of the author'
				/>
			</div>

			<div className='gap-10 text-center w-6/12'>
				<h3>Привет , я</h3>
				<h1>Илья</h1>
				<h2>Fullstack developer</h2>
				<div className='flex flex-row justify-center gap-5'>
					<CVButton
						text={'CV'}
						color_text={'black-600'}
						color={'white'}
						link={'http://google.com'}
					/>
					<CVButton
						text={'CV'}
						color={'black'}
						link={'http://google.com'}
						color_text={'neutral-50'}
					/>
				</div>
			</div>
		</div>
	)
}
