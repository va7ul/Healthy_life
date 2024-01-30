import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { validationSchema } from '../../../schemas/profileUpdateSchema';
import { selectUserData } from '../../../redux/auth/authSelectors';
import { updateUser } from '../../../redux/auth/authOperations';

import sprite from '../../../assets/images/sprite.svg';
import {
  FormWrapper,
  LabelInput,
  FieldStyled,
  Avatar,
  formControlStyled,
  formLabelStyled,
  formControlLabel,
  radioStyled,
  buttonGroupStyled,
  buttonStyled,
  ErrorMessageStyled,
  InputWrapper,
  IconWrapper,
  DownloadButton,
  InputStyled,
  DownloadSpan,
} from './ProfileSettingsCardStyled';

Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-bottom',
  clickToClose: true,
  messageMaxLength: 200,
  timeout: 5000,
  width: '300px',
});

let selectedImage;

export const ProfileSettingsCard = () => {
  const dispatch = useDispatch();

  const currentUserData = useSelector(selectUserData);
  const { name, avatar, birthDate, gender, height, weight, activityLevel } =
    currentUserData;

  const initialValues = {
    name,
    avatar: avatar,
    birthDate,
    gender,
    height,
    weight,
    activityLevel,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.values.activityLevel = Number(values.activityLevel);
      console.log(formik.values.birthDate);
      console.log(typeof formik.values.birthDate);

      let formData = new FormData();
      formData.append('avatar', formik.values.avatar);
      formData.append('name', formik.values.name);
      formData.append('birthDate', formik.values.birthDate);
      formData.append('gender', formik.values.gender);
      formData.append('height', formik.values.height);
      formData.append('weight', formik.values.weight);
      formData.append('activityLevel', formik.values.activityLevel);

      dispatch(updateUser(formData)).then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          Notify.success(`Your profile was updated`);
        } else {
          Notify.failure('Oops! Something went wrong!');
        }
      });
    },
  });

  return (
    <Formik>
      <FormWrapper
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        autoComplete="off"
      >
        <LabelInput htmlFor="name">
          Your name
          <FieldStyled
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <ErrorMessageStyled id="feedback" name="name">
              {formik.errors.name}
            </ErrorMessageStyled>
          )}
        </LabelInput>
        <LabelInput>
          Your photo
          <InputWrapper>
            <Avatar
              src={
                formik.values.avatar
                  ? avatar
                  : URL.createObjectURL(formik.values.avatar)
              }
              alt="user avatar"
              file={formik.values.avatar}
            />
            <DownloadButton type="button" htmlFor="avatar">
              <InputStyled
                id="avatar"
                name="avatar"
                type="file"
                accept="image/png, .svg, .jpg, .gif, .jpeg, .webp"
                onChange={(e) => {
                  if (!e.currentTarget.files) {
                    Notify.failure('Oops! No image selected');
                    return;
                  }
                  selectedImage = e.currentTarget.files[0];
                  formik.setFieldValue('avatar', selectedImage);
                }}
              />
              <IconWrapper>
                <use href={`${sprite}#icon-direct-inbox`} />
              </IconWrapper>
              <DownloadSpan>
                {selectedImage
                  ? formik.values.avatar.name
                  : 'Download new photo'}
              </DownloadSpan>
            </DownloadButton>
          </InputWrapper>
        </LabelInput>
        <LabelInput htmlFor="birthDate">
          Date of birth
          <FieldStyled
            id="birthDate"
            name="birthDate"
            placeholder="00.00.0000"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
          />
          {formik.errors.birthDate && formik.touched.birthDate && (
            <ErrorMessageStyled id="feedback" name="birthDate">
              {formik.errors.birthDate}
            </ErrorMessageStyled>
          )}
        </LabelInput>
        <FormControl sx={formControlStyled}>
          <FormLabel id="gender" sx={formLabelStyled}>
            Gender
          </FormLabel>
          <RadioGroup
            row
            sx={{ gap: '16px' }}
            aria-labelledby="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="male"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="Female"
            />
            {formik.errors.gender && formik.touched.gender && (
              <ErrorMessageStyled id="feedback" name="gender">
                {formik.errors.gender}
              </ErrorMessageStyled>
            )}
          </RadioGroup>
        </FormControl>
        <LabelInput htmlFor="height">
          Height
          <FieldStyled
            id="height"
            name="height"
            type="number"
            value={formik.values.height}
            onChange={formik.handleChange}
          />
          {formik.errors.height && formik.touched.height && (
            <ErrorMessageStyled id="feedback" name="height">
              {formik.errors.height}
            </ErrorMessageStyled>
          )}
          <ErrorMessageStyled name="height" component="span" />
        </LabelInput>
        <LabelInput htmlFor="weight">
          Weight
          <FieldStyled
            id="weight"
            name="weight"
            type="number"
            value={formik.values.weight}
            onChange={formik.handleChange}
          />
          {formik.errors.weight && formik.touched.weight && (
            <ErrorMessageStyled id="feedback" name="weight">
              {formik.errors.weight}
            </ErrorMessageStyled>
          )}
          <ErrorMessageStyled name="weight" component="span" />
        </LabelInput>
        <FormControl sx={{ gap: '12px' }}>
          <FormLabel id="activityLevel" sx={formLabelStyled}>
            Your activity
          </FormLabel>
          <RadioGroup
            row
            sx={{ gap: '16px' }}
            aria-labelledby="activityLevel"
            name="activityLevel"
            type="number"
            value={formik.values.activityLevel}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="1.2"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you do not have physical activity and sedentary work"
            />
            <FormControlLabel
              value="1.375"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you do short runs or light gymnastics 1-3 times a
                  week"
            />
            <FormControlLabel
              value="1.55"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you play sports with average loads 3-5 times a week"
            />
            <FormControlLabel
              value="1.725"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you train fully 6-7 times a week"
            />
            <FormControlLabel
              value="1.9"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program"
            />
            {formik.errors.activityLevel && formik.touched.activityLevel && (
              <ErrorMessageStyled id="feedback" name="activityLevel">
                {formik.errors.activityLevel}
              </ErrorMessageStyled>
            )}
          </RadioGroup>
        </FormControl>
        <ButtonGroup aria-label="button group" sx={buttonGroupStyled}>
          <Button sx={buttonStyled} type="submit">
            Save
          </Button>
          <Button
            sx={buttonStyled}
            type="reset"
            onClick={(selectedImage = null)}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </FormWrapper>
    </Formik>
  );
};
