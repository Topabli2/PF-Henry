/// Register.js
'use client';
import { useEffect, useState } from 'react';
import './register.css';
import Link from 'next/link';
import { createUserStore } from '@/store/createUserStore';
import validation from './validation';

const Register = () => {
	const { user, setUser, msjToRender, err, setMsjToRender, setErr } =
		createUserStore();
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(false);

	const validateForm = () => {
		const formErrors = validation(user);
		setErrors(formErrors);
		setIsValid(Object.keys(formErrors).length === 0);
	};

	const handleUser = (e) => {
		const value =
			e.target.name === 'profile.profile_type'
				? parseInt(e.target.value, 10)
				: e.target.value;
		const name = e.target.name.split('.');
		const fieldName = name.length > 1 ? name[1] : e.target.name;

		const newErrors = { ...errors };
		delete newErrors[fieldName];

		setErrors(newErrors);

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

		validateForm(); // Validar el formulario en tiempo real
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isValid) {
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
						window.location.href = '/login';
					}, 3000);
				} else {
					const errorData = await response.json();
					setErr(errorData.message || 'Error al crear el usuario');
				}
			} else {
				setErr(
					'Por favor, corrige los errores en el formulario antes de enviar.'
				);
			}
		} catch (error) {
			setErr('Error al comunicarse con el servidor');
		}
	};

	return (
		<div className="formRegister">
			<form onSubmit={handleSubmit}>
				<p>Register</p>
				<p className="descriptionp">It is fast and easy.</p>
				<hr />
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
						{errors['username'] && (
							<p className="error">{errors['username']} </p>
						)}
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.lastName}
							name="lastName"
							placeholder="LastName"
							maxLength="25"
						/>
						<br />
						{errors['lastName'] && (
							<p className="error">{errors['lastName']}</p>
						)}
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.password}
							name="password"
							placeholder="Password"
							maxLength="25"
						/>
						<br />
						{errors['password'] && (
							<p className="error">{errors['password']}</p>
						)}
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.email}
							name="email"
							placeholder="Email"
							maxLength="25"
						/>
						<br />
						{errors['email'] && <p className="error">{errors['email']}</p>}
					</div>
					<div className="camposDos">
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.country}
							name="country"
							placeholder="Country"
							maxLength="25"
						/>
						<br />
						{errors['country'] && <p className="error">{errors['country']}</p>}
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.phone}
							name="phone"
							placeholder="Phone"
							maxLength="15"
						/>
						<br />
						{errors['phone'] && <p className="error">{errors['phone']}</p>}
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.profileName}
							name="profileName"
							placeholder="ProfileName"
							maxLength="25"
						/>
						<br />
						{errors['profileName'] && (
							<p className="error">{errors['profileName']}</p>
						)}
						<input
							autoComplete="off"
							onChange={handleUser}
							value={user.profile_type}
							name="profile_type"
							placeholder="Profile_type"
						/>
						<br />
						{errors['profile_type'] && (
							<p className="error">{errors['profile_type']}</p>
						)}
					</div>
				</div>

				<button disabled={!isValid}>Sing up</button>

				<p className="msjToRender">{err.length > 0 && err}</p>
				{msjToRender.length > 0 && <p className="msjToRender">{msjToRender}</p>}
			</form>
		</div>
	);
};

export default Register;
