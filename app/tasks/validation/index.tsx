import * as yup from "yup";

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required("Это поле должно быть заполнено")
    .matches(/^[а-яА-ЯёЁ]+$/, "Должна использоваться кириллица")
    .min(2, "Используйте не менее 2 символов"),
  userId: yup.number().required("Это поле должно быть заполнено"),
  completed: yup.boolean(),
});
