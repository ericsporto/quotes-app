import * as yup from 'yup';
import { parse } from 'date-fns';

const requiredMessage = 'Campo obrigatório';

export const loginFormValidator = yup.object().shape({
  email: yup
    .string()
    .required(requiredMessage)
    .email('E-mail precisa ser valido (exemplo@email.com)')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'E-mail precisa ser válido (exemplo@email.com)'
    ),

  password: yup.string().required(requiredMessage),
});

export const registerFormValidator = yup.object().shape({
  name: yup
    .string()
    .required(requiredMessage)
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'Não é permitido caracteres especiais (ex. @%$#!_)'
    ),
  birthDate: yup
    .string()
    .nullable()
    .transform((_, originalValue) =>
      originalValue === '' ? null : originalValue
    )
    .required(requiredMessage)
    .test('is-valid-format', 'Formato de data inválido', (value) => {
      if (value) {
        const parsedDate = parse(value, 'yyyy-MM-dd', new Date());
        return !isNaN(parsedDate.getTime());
      }
      return false;
    }),
  email: yup
    .string()
    .required(requiredMessage)
    .email('Formato de e-mail inválido'),
  password: yup
    .string()
    .required(requiredMessage)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
    ),
  confirmPassword: yup
    .string()
    .required(requiredMessage)
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});
