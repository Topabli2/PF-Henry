"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import "./navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Cerramos el menú de perfil cuando abrimos el menú hamburguesa
    setIsProfileMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    // Cerramos el menú hamburguesa cuando abrimos el menú de perfil
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 h-[20%] p-4 flex items-center justify-between">
      {/* Logo */}
      <div>
        <Link href="/">
          <p>logo</p>
        </Link>
      </div>

      {/* Secciones */}
      <div className={`hidden md:flex space-x-4 ${isMenuOpen ? "hidden" : ""}`}>
        <Link href="/section1">Home</Link>
        <Link href="/section2">Productos</Link>
        <Link href="/section3">Contacto</Link>
        <Link href="/section4">About</Link>
      </div>

      {/* Carrito y Perfil */}
      <div className="iconos-nav">
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-white cursor-pointer" />

          {/* Perfil con menú desplegable */}
          <div className="relative">
            <FaUser
              className="text-dark cursor-pointer"
              onClick={toggleProfileMenu}
            />
          </div>

          {/* Dropdown del perfil */}
          {isProfileMenuOpen && (
            <div className="modal-profile absolute right-0 mt-2 bg-white p-2 rounded shadow text-black flex space-x-4 flex-col">
              <Link href="/profile">Perfil</Link>
              <Link href="/settings">Configuración</Link>
              <Link href="/logout">Cerrar sesión</Link>
            </div>
          )}
        </div>
      </div>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="md:hidden">
        <FaBars
          className="text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute top-[7%] left-0 w-full bg-gray-800 p-4">
            <Link href="/section1">Section 1</Link>
            <Link href="/section2">Section 2</Link>
            <Link href="/section3">Section 3</Link>
            <Link href="/section4">Section 4</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
