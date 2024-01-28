import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { RecommendedPageList } from './RecommendedList/RecommendedList';
import { fetchRecFoods } from '../../redux/recomendedFoods/recOperations';
import { selectRecFoods } from '../../redux/recomendedFoods/recSelectors';

import image from '../../assets/images/recommendedPage.png';
import sprite from '../../assets/images/sprite.svg';
import {
  RecImage,
  RecPageContentWrapper,
  TitleWrap,
  RecPageWrapper,
  Title,
  SeeMoreBtn,
  Btnwrapp,
  BackIcon,
} from './RecommendedFood.styled';

export const RecommendedFood = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(10);
  const isNotDesktop = useMediaQuery({ maxWidth: 2440 });

  useEffect(() => {
    dispatch(fetchRecFoods());
  }, [dispatch]);

  const recommendedFoods = useSelector(selectRecFoods);
  const [page, setPage] = useState(0);

  const count = Math.floor(recommendedFoods.length / 10);

  const handleSeeMoreClick = () => {
    setNumberOfCardsToRender((prevNumberOfCards) => prevNumberOfCards + 10);
    setPage(page + 1);
  };

  return (
    <RecPageContentWrapper>
      <TitleWrap>
        <Link to={backLinkLocationRef.current}>
          <BackIcon>
            <use href={`${sprite}#icon-arrowright`}></use>
          </BackIcon>
        </Link>
        <Title>Recommended food</Title>
      </TitleWrap>

      <RecPageWrapper>
        <RecImage src={image} alt="Page image" />
        <RecommendedPageList numberOfCardsToRender={numberOfCardsToRender} />
      </RecPageWrapper>
      {isNotDesktop && (
        <Btnwrapp>
          {page !== count && (
            <SeeMoreBtn onClick={handleSeeMoreClick}>Load more</SeeMoreBtn>
          )}
        </Btnwrapp>
      )}
    </RecPageContentWrapper>
  );
};
