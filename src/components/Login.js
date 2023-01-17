import React from 'react';
import { Listado } from './Listado';
import { useState } from 'react';

export const Login = () => {

  const [estado,setEstado] = useState(false);

  const usuario = {
    email: 'iglesiasj273@gmail.com',
    password: '123456'
  }

  const iniciarSesion = e => {
    e.preventDefault();

    let target = e.target;

    let persona = {
      email: target.email.value,
      password: target.password.value
    }

    if (persona.email === usuario.email && persona.password === usuario.password) {
      setEstado(true);
    }

  }

  return (
    <>
      {
        estado === false ?

        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={iniciarSesion}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Bienvenido</h3>
              <div className="form-group mt-3">
                <label>Correo Eléctronico</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Correo Eléctronico"
                  name='email'
                />
              </div>
              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Contraseña"
                  name='password'
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn-continue" name='continuar'>
                  Continuar
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
              </p>
            </div>
          </form>
        </div>
        : <Listado />
      }

    </>
  )
}
