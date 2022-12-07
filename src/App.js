import logo from './logo.svg'
import './App.css'
import FontFaceObserver from 'fontfaceobserver'
import { useEffect, useState } from 'react'

function App() {
	const [opacity, setOpacity] = useState(0)
	useEffect(() => {
		const font = new FontFaceObserver('BMYEONSUNG')
		font.load().then(() => {
			setOpacity(1)
		})
	}, [setOpacity])
	const style = { opacity, transition: 'opacity 6s ease' }

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p style={style}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					style={style}
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
