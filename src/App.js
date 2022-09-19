import './App.css'
import Button from 'react-bootstrap/Button'

function App() {
	return (
		<div className="App d-flex justify-content-center">
			<div className="text-container d-flex flex-column align-items-center mt-4 p-5">
				<h1 className="display-1">Under Construction</h1>
				<h2>Please check back soon!</h2>
				<div className="d-flex flex-column align-items-center mt-4">
					<p>Want to reach me in the meantime?</p>
					<a
						target="_blank"
						href="mailto:vanessa@vanessalamarque.com"
						rel="noreferrer"
					>
						<Button variant="dark py-2 px-4">Let's chat!</Button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default App
