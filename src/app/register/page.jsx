/// Register.js
'use client';
import React from 'react';
import './register.css';
import Link from 'next/link';
import { createUserStore } from '@/store/createUserStore';

const Register = () => {
	const { user, setUser, msjToRender, err, setMsjToRender, setErr } =createUserStore();

    console.log("User Object:", user);
	const handleUser = (e) => {
    const value = e.target.name === 'profile_type' ? parseInt(e.target.value, 10) : e.target.value;
		setUser({
      ...user,
        [e.target.name]: value,
		});
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
				<p>Registrarse</p>
				<div className="campos">
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
						value={user.profileName}
						name="profileName"
						placeholder="ProfileName"
					/>
					<br />
					<input
						autoComplete="off"
						onChange={handleUser}
						value={user.profile_type}
						name="profile_type"
						placeholder="profile_type"
					/>
					<br />
				</div>
				
					<button>Submit</button>
				
				<p className="msjToRender">{err.length > 0 && err}</p>
				{msjToRender.length > 0 && <p className="msjToRender">{msjToRender}</p>}
			</form>
		</div>
	);
};

export default Register;
