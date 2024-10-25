import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { contacSchema, Contact, contactTypeOptions } from '../schemas/Contact';
import Button from './Button';
import Input from './Input';
import Select from './Select';

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(contacSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((c) => onSubmit(c))}>
        <Input name='name'>Nombre</Input>
        <Input name='lastname'>Apellido</Input>
        <Input name='email'>Correo</Input>
        <Select name='type' options={contactTypeOptions} defaultMessage='-- Selecciona tipo --'>
          Tipo
        </Select>
        <Button type='submit'>Enviar</Button>
        <Button variant='secondary' onClick={() => methods.reset()}>
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
