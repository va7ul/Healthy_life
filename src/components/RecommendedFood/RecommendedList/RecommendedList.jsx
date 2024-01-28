import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
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
  SeeMoreBtn,
  BtnWrapper,
  ListWrapper,
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

  const [page, setPage] = useState(0);
  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(10);
  const isNotDesktop = useMediaQuery({ maxWidth: 2440 });

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

  const count = Math.floor(recommendedFoods.length / 10);

  const handleSeeMoreClick = () => {
    setNumberOfCardsToRender((prevNumberOfCards) => prevNumberOfCards + 10);
    setPage(page + 1);
  };

  return (
    <ListWrapper>
      <RecList>
        {recommendedFoods.slice(0, numberOfCardsToRender).map((item) => (
          <RecommendedCard key={item.name} {...item} />
        ))}
      </RecList>
      {isNotDesktop && (
        <BtnWrapper>
          {page !== count && (
            <SeeMoreBtn onClick={handleSeeMoreClick}>Load more</SeeMoreBtn>
          )}
        </BtnWrapper>
      )}
    </ListWrapper>
  );
};
