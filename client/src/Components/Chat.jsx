import React from 'react'

const Chat = () => {
	return (
		<main>
			<nav className='chatNav'>
				<button>Back</button>
				<img src='pic.jpg' alt='' />
				<div>
					<h4>Rehan Ali Shah</h4>
					<p>Active Now</p>
				</div>
			</nav>
			<div className='chatBox'>
				<p className='ownMsg'>Hello, how are you?</p>
				<p className='sendMsg'>I am Fine and you?</p>
			</div>
			<div className='sendSection'>
				<input type='text' name='msg' id='msg' placeholder='Enter Your Msg...' />
				<button>Send</button>
			</div>
		</main>
	)
}
export default Chat
