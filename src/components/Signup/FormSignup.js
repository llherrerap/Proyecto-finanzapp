import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
            ¡Comienza ahora esta nueva experiencia financiera! Ingresa tus datos en pocos pasos.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Tipo</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Ingreso o Gasto'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Fecha</label>
          <input
            className='form-input'
            type='date'
            name='email'
            placeholder='Fecha'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Importe</label>
          <input
            className='form-input'
            type='text'
            name='password'
            placeholder='Ingrese el valor'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Forma de Pago</label>
          <input
            className='form-input'
            type='text'
            name='password2'
            placeholder='Forma de Pago'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Ingresar Datos
        </button>
        <span className='form-input-login'>
          <a href='/finance'>Volver</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;