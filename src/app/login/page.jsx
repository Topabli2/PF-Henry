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
			if (isValid) {
				const response = await fetch('/api/users', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(user),
				});
			}
			if (response.ok) {
				setTimeout(() => {
					window.location.href = '/';
				}, 3000);
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Username or password incorrect!',
				footer: 'Do you want to change your password?',
			});
		}
	};

	return (
		<div className="formRegister">
			<form action="" onSubmit={handleSubmit}>
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
				<button>Log in</button>
				<Link href="/register">
					<button>Sing in</button>
				</Link>
			</form>
		</div>
	);
};
export default Login;
