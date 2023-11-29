'use client';
import React, { useState } from 'react';
import '../register/register.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

const Login = () => {
	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});
	const handlerChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};
	console.log(userData);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await fetch(`/api/users/login?username=${userData.username}&password=${userData.password}`, {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			},
		  });
	  
		  const data = await response.json();
	  
		  if (response.ok) {
			setTimeout(() => {
			  window.location.href = '/'; 
			}, 3000);
		  } else {
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: data.error || 'An error occurred during login. Please try again later.',
			});
		  }
		} catch (error) {
		  Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'An error occurred during login. Please try again later.',
		  });
		}
	  };
	  
	  

	return (
		<div className="formRegister">
			<form action="" onSubmit={handleSubmit}>
				<p>Log in</p>
				<div className="camposUno">
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={userData.username}
						onChange={handlerChange}
						maxLength="25"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={userData.password}
						onChange={handlerChange}
						maxLength="25"
					/>
				</div>

				<div className="ContainerLogin">
					<button>Log in</button>
					<Link href="/register">
						<button className="createAccount">Create new account</button>
					</Link>
					<span>Did you forget your password?</span>
				</div>
			</form>
		</div>
	);
};
export default Login;
