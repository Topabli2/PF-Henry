// Register.js
"use client"
import React from 'react';
import './register.css';
import validation from './validation';
import Link from 'next/link';
import { createUserStore } from '@/store/createUserStore';

const Register = () => {
  const { user, setUser, msjToRender, err, setMsjToRender, setErr } = createUserStore();

  const handleUser = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación
    const validationError = validation(user);
    if (validationError) {
      setErr(validationError);
      return;
    }

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

  const handleDisabled = () => {
    return (
      err.length > 0 ||
      Object.values(user).some((value) => value.length === 0)
    );
  };

  return (
    <div className="formRegister">
      <form onSubmit={handleSubmit}>
	  <p>Registrarse</p>
                <div className="campos">
                    <input
                        autoComplete="off"
                        onChange={handleUser}
                        value={user.userName}
                        name="userName"
                        placeholder="Username"
                    />
                    <br />
                    <input
                        autoComplete="off"
                        onChange={handleUser}
                        value={user.email}
                        name="email"
                        placeholder="email"
                    />
                    <br />
                    <input
                        type="password"
                        autoComplete="off"
                        onChange={handleUser}
                        value={user.password}
                        name="password"
                        placeholder="password"
                    />
                    <br />
                    <input
                        type="password"
                        autoComplete="off"
                        onChange={handleUser}
                        value={user.repeatPassword}
                        name="repeatPassword"
                        placeholder="Repeat password"
                    />
                    <br />
                </div>
                <Link href={'/'}>
                    <button disabled={handleDisabled()}>Submit</button>
                </Link>
                <p className="msjToRender">{err.length > 0 && err}</p>
                {msjToRender.length > 0 && <p className="msjToRender">{msjToRender}</p>}
           

      </form>
    </div>
  );
};

export default Register;
