import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  children: ReactNode;
  options: readonly string[];
  defaultMessage: string;
};

function Select({ name, children, options, defaultMessage }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label'>
        {children}
      </label>
      <select {...register(name)} id={name} className='form-select'>
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message && <div className='text-danger'>{error?.message}</div>}
    </div>
  );
}

export default Select;
