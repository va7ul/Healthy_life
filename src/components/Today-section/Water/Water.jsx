import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/images/sprite.svg';
import {
  Wrapper,
  Title,
  ContentWrapper,
  ProgressBar,
  ClearButton,
  // TrashIcon,
  AddIcon,
  SecondTitle,
  Text,
  Amount,
  Button,
  Span,
  Percentage,
} from './Water.styled';

import { AddWaterModal } from '../AddWaterModal/AddWaterModal';
import { WaterChart } from './WaterChart';
import { selectConsumedWaterId } from '../../../redux/dailyStatistics/dailySelectors';
import { deleteWater } from '../../../redux/dailyStatistics/dailyOperations';

export const Water = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const _id = useSelector(selectConsumedWaterId);
  const dispatch = useDispatch();

  // дані з беку
  const waterGoal = 1500;
  const waterFilled = 1050;

  const waterPercentage =
    waterFilled <= waterGoal
      ? Math.round((waterFilled * 100) / waterGoal)
      : 100;

  const left = waterGoal - waterFilled;

  return (
    <Wrapper>
      <Title>Water</Title>
      <ContentWrapper>
        <ClearButton
          type="button"
          onClick={() => {
            console.log(_id);
            dispatch(deleteWater(_id));
          }}
          // onClick={(e) => console.log(e.target)}
        >
          <svg width="20px" height="20px">
            <use href={`${sprite}#trash-delete`}></use>
          </svg>
        </ClearButton>
        <ProgressBar>
          <WaterChart waterIntake={waterPercentage} />
          <Percentage>{`${waterPercentage}%`}</Percentage>
        </ProgressBar>
        <div>
          <SecondTitle>Water consumption</SecondTitle>

          <Text>
            <Amount>{waterFilled}</Amount>ml
          </Text>
          <Text>
            <Span>left:</Span> {`${left} ml`}
          </Text>

          <Button type="button" onClick={() => setIsModalOpen(true)}>
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
            Add water intake
          </Button>
        </div>
      </ContentWrapper>
      {isModalOpen && <AddWaterModal setIsModalOpen={setIsModalOpen} />}
    </Wrapper>
  );
};
