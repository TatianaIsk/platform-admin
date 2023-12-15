import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Это поле должно быть заполнено')
    .matches(/^[а-яА-ЯёЁ]+$/, 'Должна использоваться кириллица')
    .min(2, 'Используйте не менее 2 символов'),
  email: yup.string().required('Это поле должно быть заполнено').email('Введите верный email'),
  phone: yup.string().matches(/^^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]+$/gm, 'Введите корректные данные'),
});
