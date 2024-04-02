import ButtonHeader from '../../../widgets/Header/Navbar/Buttons/ButtonHeader'

export default function Navbar() {
	return (
		<div className='flex w-full h-2 justify-between py-10'>
			<div className='w-fit text-#799f9f-300 font-bold text-3xl'>
				<h1>Ilya Sukhan</h1>
			</div>
			<div className='flex gap-20 font-medium text-lg'>
				<ButtonHeader text={'Обо мне'} />
				<ButtonHeader text={'Технологии'} />
				<ButtonHeader text={'Проекты'} />
				<ButtonHeader text={'Контакты'} />
			</div>
		</div>
	)
}
