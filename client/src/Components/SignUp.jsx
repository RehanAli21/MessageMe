import React from 'react'

const SignUp = () => {
	return (
		<main>
			<h1 className='signupH1'>Sign Up</h1>
			<input type='text' name='name' id='signup-name' className='signupInput' placeholder='Name' />
			<input type='text' name='username' id='signup-username' className='signupInput' placeholder='Username' />
			<input type='email' name='email' id='signup-email' className='signupInput' placeholder='Email' />
			<input type='password' name='password' id='signup-password' className='signupInput' placeholder='Password' />
			<input type='text' name='recoverText' id='signup-recoverText' className='signupInput' placeholder='Recovering Text' />
			<input type='file' name='img' id='signup-img' className='signupInput' placeholder='img for profile pic' />
			<button className='signupButton'>SignUp</button>
			<p className='loginSignUp'>Already has an Account? Go to Sign In</p>
		</main>
	)
}

export default SignUp
