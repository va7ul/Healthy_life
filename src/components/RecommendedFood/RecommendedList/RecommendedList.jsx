import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import PuffLoader from 'react-spinners/PuffLoader';
import sprite from 'assets/images/sprite.svg';
import { RecommendedCard } from '../RecommendedCard/RecommendedCard';
import {
  selectRecFoods,
  selectIsLoading,
  selectError,
} from '../../../redux/recomendedFoods/recSelectors';
import {
  RecList,
  RecLink,
  Image,
  RecLinkWrapper,
  RecForMainWrapper,
  RecListTitle,
} from './RecommendedList.styled';

export const RecommendedList = () => {
  const recommendedFoods = useSelector(selectRecFoods);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 834) {
        setNumberOfCardsToRender(4);
      } else {
        setNumberOfCardsToRender(2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isLoading) {
    return (
      <PuffLoader
        color="var(--primary-color-green-lite)"
        cssOverride={{ margin: '30vh auto 0 auto' }}
      />
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <RecForMainWrapper>
      <RecListTitle>Recommended food</RecListTitle>
      <RecList className="rec-list">
        {recommendedFoods.slice(0, numberOfCardsToRender).map((item) => (
          <RecommendedCard key={item.name} {...item} />
        ))}
      </RecList>
      <RecLinkWrapper>
        <RecLink to="/recommended-food">
          See more
          <Image>
            <use href={`${sprite}#icon-arrowright`}></use>
          </Image>
        </RecLink>
      </RecLinkWrapper>
    </RecForMainWrapper>
  );
};

export const RecommendedPageList = () => {
  const recommendedFoods = useSelector(selectRecFoods);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return (
      <PuffLoader
        color="var(--primary-color-green-lite)"
        cssOverride={{ margin: '30vh auto 0 auto' }}
      />
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <RecList>
      {recommendedFoods.map((item) => (
        <RecommendedCard key={item.name} {...item} />
      ))}
    </RecList>
  );
};
