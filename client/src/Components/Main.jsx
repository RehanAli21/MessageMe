import React from 'react'

const Main = () => {
	return (
		<main>
			<nav className='appNav'>
				<div>
					<img src='pic.jpg' alt='profile-pic' className='profilepic' />
					<div>
						<h3>Rehan Ali Shah</h3>
						<span>Active Now</span>
					</div>
				</div>
				<div className='two'>
					<span className='icon'>Add</span>
					<span className='icon'>Setting</span>
				</div>
			</nav>
			<hr />
			<div className='friendsback'>
				<div className='friends'>
					<button className='friendsclose'>CLOSE</button>
					<h3>Requests</h3>
					<div className='friends-div'>
						<div className='request'>
							<p>Ali</p>
							<button>Add</button>
							<button>Remove</button>
						</div>
					</div>
					<hr className='rfHr' />
					<h3>Add Friends</h3>
					<div className='friends-div'>
						<div className='search'>
							<input type='text' placeholder='Enter username...' />
							<button>S</button>
						</div>
						<div className='searchfriends'>
							<p>Feroz</p>
							<button>Send Requests</button>
						</div>
					</div>
				</div>
			</div>
			<div className='usercard-div'>
				<div className='usercard'>
					<img src='pic.jpg' alt='profile-pic' className='profilepic' />
					<div>
						<h4>Aliyan Shah</h4>
						<span>Hello, How are you?</span>
					</div>
					<div className='statusIndicate active'></div>
				</div>
				<div className='usercard'>
					<img src='pic.jpg' alt='profile-pic' className='profilepic' />
					<div>
						<h4>Jawaid Shah</h4>
						<span>Active Now</span>
					</div>
					<div className='statusIndicate notActive'></div>
				</div>
			</div>
		</main>
	)
}

export default Main
