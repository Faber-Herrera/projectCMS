import { z } from 'zod';

export const contactTypeOptions = ['Amigo', 'Familiar', 'Trabajo', 'Otro'] as const;
export const contacSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Nombre requerido' })
    .min(3, { message: 'Longitud mínima de 3' }),
  lastname: z
    .string()
    .min(1, { message: 'Apellido requerido' })
    .min(3, { message: 'Longitud mínima de 3' }),
  email: z
    .string()
    .min(1, { message: 'Correo requerido' })
    .min(3, { message: 'Longitud mínima de 3' })
    .email('Correo inválido'),
  type: z.enum(contactTypeOptions, {
    errorMap: () => ({ message: 'Selecciona un tipo' }),
  }),
});

export type Contact = z.infer<typeof contacSchema> & { id: string };
