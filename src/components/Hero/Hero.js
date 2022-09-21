import React from 'react'
import './Hero.css'

function Hero() {
	return (
		<div className="hero d-flex justify-content-center">
			<div className="container bg-light shadow position-absolute ">
				<div className="hero-inner-container container d-flex flex-column justify-content-center align-items-center">
					<div className="container w-75">
						<h1 className="display-1">
							Hello, <span className="d-block">I'm Vanessa Lamarque</span>
						</h1>
						<p className="hero-caption">
							I'm a Full-Stack Web Developer focused on Front-end Development.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
