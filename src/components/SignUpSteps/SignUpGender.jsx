import { ErrorMessage, Field } from 'formik';
import image from '../../assets/backgroundImages/welcomepage.png';
import { Image } from './Components.styled.js';

const SelectGender = () => {
  return (
    <div>
      <div>
        <Image src={image} alt="Activity tracker" />
      </div>
      <h2>Select gender, Age</h2>
      <p>Choose a goal so that we can help you effectively</p>
      <div role="group" aria-labelledby="gender-group">
        <label>
          <Field type="radio" name="gender" value="Male" />
          Male
        </label>
        <label>
          <Field type="radio" name="gender" value="Female" />
          Female
        </label>
      </div>
      <ErrorMessage name="gender" component="div" />

      <label htmlFor="age">Your age</label>
      <Field id="age" name="age" placeholder="Enter your age" type="number" />
      <ErrorMessage name="age" component="div" />
    </div>
  );
};

export default SelectGender;