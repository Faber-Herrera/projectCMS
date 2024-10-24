import { useForm } from 'react-hook-form';
import { User } from '../types/User';

type Props = {
  send: (user: User) => void;
};

function Form({ send }: Props) {
  const { register, handleSubmit, reset } = useForm<User>();

  return (
    <form onSubmit={handleSubmit((user: User) => send(user))}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Nombre
        </label>
        <input {...register('name')} id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='lastname' className='form-label'>
          Apellido
        </label>
        <input {...register('lastname')} id='lastname' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Correo
        </label>
        <input {...register('email')} id='email' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='type' className='form-label'>
          Tipo
        </label>
        <select {...register('type')} className='form-select'>
          <option value='' disabled selected>
            -- Selecciona tipo --
          </option>
          <option value='Amigo'>Amigo</option>
          <option value='Familiar'>Familiar</option>
          <option value='Trabajo'>Trabajo</option>
        </select>
      </div>

      <button type='submit' className='btn btn-primary'>
        Enviar
      </button>

      <button type='button' className='btn btn-secondary' onClick={() => reset()}>
        Limpiar
      </button>
    </form>
  );
}

export default Form;
