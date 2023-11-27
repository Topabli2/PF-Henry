/// Register.js
'use client';
import React from 'react';
import './register.css';
import Link from 'next/link';
import { createUserStore } from '@/store/createUserStore';
import validation from './validation';

const Register = () => {
	const { user, setUser, msjToRender, err, setMsjToRender, setErr } =createUserStore();
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    setIsValid(validation(user) === "");
  }, [user]);


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
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
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
              maxLength="25"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.lastName}
							name="lastName"
							placeholder="Last Name"
              maxLength="25"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.password}
							name="password"
							type="password"
							placeholder="Password"
              maxLength="15"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.email}
							name="email"
							placeholder="Email"
              maxLength="25"
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
              maxLength="20"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.phone}
							name="phone"
							placeholder="Phone"
              maxLength="12"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.profile.profileName}
							name="profile.profileName"
							placeholder="ProfileName"
              maxLength="20"
						/>
						<br />
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.profile.profile_type}
							name="profile.profile_type"
							placeholder="profile_type"
              maxLength="20"
						/>
						<br />
					</div>
				</div>

				<button disabled={!isValid}>Submit</button>

				<p className="msjToRender">{err.length > 0 && err}</p>
				{msjToRender.length > 0 && (<p className="msjToRender">{msjToRender}</p>)}
			</form>
		</div>
	);
};

export default Register;
