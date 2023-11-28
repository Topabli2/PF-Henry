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
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/users/autotenticacion', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});

			if (response.status === 200) {
				setTimeout(() => {
					window.location.href = '/';
				}, 3000);
			}
			else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Username or password incorrect!',
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
						type="text"
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
