import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { FoodCard } from './FoodCard/FoodCard';

import {
  Wrapper,
  ContentWrapper,
  List,
  Item,
  Title,
  Calories,
} from './Food.styled';

export const Food = () => {
  // пізніше ці дані приходитимуть з беку
  const caloriesGoal = 2000;
  const caloriesCurrent = 1360;
  //
  const caloriesChartBgColor = '#45FFBC';

  return (
    <Wrapper>
      <Title>Food</Title>
      <ContentWrapper>
        <Calories>
          <DoughnutChart
            dailyGoal={caloriesGoal}
            filledValue={caloriesCurrent}
            bgColor={caloriesChartBgColor}
          />
        </Calories>

        <List>
          <Item>
            <FoodCard />
          </Item>
          <Item>
            <FoodCard />
          </Item>
          <Item>
            <FoodCard />
          </Item>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
};
