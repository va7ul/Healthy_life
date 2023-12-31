import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim('Cannot include leading and trailing spaces')
    .strict()
    .min(2, 'Too short name')
    .max(20, 'Too long name')
    .required('Name should be filled'),
  age: Yup.number('Enter correct number')
    .positive('Age should be positive')
    .integer('Age should be integer')
    .min(16, 'Incorrect data for calculation')
    .max(120, 'Are you serious?')
    .required('Age should be filled'),
  gender: Yup.string().oneOf(['male', 'female']).required(),
  height: Yup.number('Enter correct number')
    .positive('Height should be positive')
    .integer('Height should be integer')
    .min(140, 'Incorrect data for calculation')
    .max(250, 'Incorrect data for calculation')
    .required('Height should be filled'),
  weight: Yup.number('Enter correct number')
    .positive('Weight should be positive')
    .integer('Weight should be integer')
    .min(40, 'Incorrect data for calculation')
    .max(200, 'Incorrect data for calculation')
    .required('Weight should be filled'),
  activityLevel: Yup.number().oneOf([1.2, 1.375, 1.55, 1.725, 1.9]).required(),
});
