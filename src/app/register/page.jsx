/// Register.js
'use client';
import React from 'react';
import './register.css';
import Link from 'next/link';
import { createUserStore } from '@/store/createUserStore';

const Register = () => {
	const { user, setUser, msjToRender, err, setMsjToRender, setErr } =
		createUserStore();

	console.log('User Object:', user);
	const handleUser = (e) => {
		const value =
			e.target.name === 'profile.profile_type'
				? parseInt(e.target.value, 10)
				: e.target.value;
		const name = e.target.name.split('.');
		if (name.length > 1) {
			setUser({
				...user,
				[name[0]]: {
					...user[name[0]],
					[name[1]]: value,
				},
			});
		} else {
			setUser({
				...user,
				[e.target.name]: value,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Envío de datos al backend
			const response = await fetch('/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			});
			if (response.ok) {
				setMsjToRender('Usuario creado con éxito');
				setErr('');
				// Puedes hacer otras cosas aquí, como redirigir al usuario a otra página.
			} else {
				const errorData = await response.json();
				setErr(errorData.message || 'Error al crear el usuario');
			}
		} catch (error) {
			setErr('Error al comunicarse con el servidor');
		}
	};

	return (
		<div className="formRegister">
			<form onSubmit={handleSubmit}>
				<p>Sing in</p>
				<div className="containerform">
					<div className="camposUno">
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.username}
							name="username"
							placeholder="Username"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.lastName}
							name="lastName"
							placeholder="Last Name"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.password}
							name="password"
							type="password"
							placeholder="Password"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.email}
							name="email"
							placeholder="Email"
						/>
						<br />
					</div>
					<div className="camposDos">
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.country}
							name="country"
							placeholder="Country"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.phone}
							name="phone"
							placeholder="Phone"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.profile.profileName}
							name="profile.profileName"
							placeholder="ProfileName"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.profile.profile_type}
							name="profile.profile_type"
							placeholder="profile_type"
						/>
						<br />
					</div>
				</div>

				<button>Submit</button>

				<p className="msjToRender">{err.length > 0 && err}</p>
				{msjToRender.length > 0 && (
					<div>
						<p className="msjToRender">{msjToRender}</p>
						<Link href="/">
							<button>Back Home</button>
						</Link>
					</div>
				)}
			</form>
		</div>
	);
};

export default Register;
