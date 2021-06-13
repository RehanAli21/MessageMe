import React from 'react'

const SignIn = () => {
	return (
		<main>
			<h1 className='loginH1'>Message</h1>
			<input type='text' name='username' id='login-username' className='loginInput loginUserName' placeholder='Username' />
			<input type='password' name='password' id='password' className='loginInput loginPassword' placeholder='Password' />
			<p className='forgetPassword'>FORGET PASSWORD?</p>
			<button className='loginButton'>LOGIN</button>
			<p className='loginSignUp'>Sign Up</p>
		</main>
	)
}

export default SignIn
