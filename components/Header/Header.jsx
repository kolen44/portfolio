import Greeting from './Greeting/Greeting'
import Navbar from './Navbar/Navbar'

export default function Header() {
	return (
		<div className='h-screen'>
			<Navbar />
			<Greeting />
		</div>
	)
}
