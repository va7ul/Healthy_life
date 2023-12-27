import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { openHandler } from '../../redux/dailyFoodStatistics/foodSlice';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/PlannerCard/PlannerCard.styled';
import {
  BackDrop,
  Button,
  ButtonBlock,
  ContentBlock,
  InputBlock,
  RecordInputBig,
  SubInput,
  SubInputBlock,
  Title,
  CancelButton,
} from './Reacord.styled';

export const Record = ({ type, secondType }) => {
  const dispatch = useDispatch();
  const iconPath = 'src/assets/images/sprite.svg';

  const [name, setName] = useState('');
  const [calories, setColories] = useState('');
  const [carbogidrate, setCarbogidrate] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const onCloseHandler = () => {
    dispatch(openHandler(false));
  };
  const arr = {
    typeFood: type === undefined ? secondType : type,
    userFood: [
      {
        name,
        calories,
        nutrition: { carbogidrate, protein, fat },
      },
    ],
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addFood(arr));
    onCloseHandler();
  };

  return (
    <BackDrop>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          <MealImage src="src/assets/images/Breakfast.png" />
          <MealTitle>{secondType === undefined ? secondType : type}</MealTitle>
        </MealContainer>
        <form onSubmit={formHandler}>
          <InputBlock>
            <RecordInputBig
              value={name}
              placeholder="The name of the product or dish"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <RecordInputBig
              type={'number'}
              min={1}
              onChange={(e) => {
                setCarbogidrate(e.target.value);
              }}
              value={carbogidrate}
              placeholder="Carbonoh"
            />
            <RecordInputBig
              min={1}
              type={'number'}
              onChange={(e) => {
                setProtein(e.target.value);
              }}
              value={protein}
              placeholder="Protein"
            />
            <SubInputBlock>
              <SubInput
                min={1}
                type={'number'}
                onChange={(e) => {
                  setFat(e.target.value);
                }}
                value={fat}
                placeholder="Fat"
              />
              <SubInput
                min={1}
                type={'number'}
                onChange={(e) => {
                  setColories(e.target.value);
                }}
                value={calories}
                placeholder="Calories"
              />
              <svg
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: ' 20px',
                  fill: 'white',
                }}
              >
                <use href={`${iconPath}#trash-delete`}></use>
              </svg>
            </SubInputBlock>
          </InputBlock>
          <ButtonBlock>
            <Button type="submit">Confirm</Button>
            <CancelButton onClick={onCloseHandler} type="button">
              Cancel
            </CancelButton>
          </ButtonBlock>
        </form>
      </ContentBlock>
    </BackDrop>
  );
};
