import styled from 'styled-components';

import { costColorMapper } from '../../utils/constants';

const ChampionBox = ({ name, kr_name, cost, scrollable }) => {
  if (name === 'ChoGath') name = 'Chogath';
  const champImgSrc = `${process.env.REACT_APP_CHAMP_IMG_SRC}/${name}.png`;
  const color = costColorMapper[cost];

  return (
    <Wrapper scrollable={scrollable}>
      <ChampionContainer borderColor={color}>
        <ChampionImg src={champImgSrc} />
        <ChampionCost bgColor={color}>${cost}</ChampionCost>
        <ChampionName>{kr_name}</ChampionName>
      </ChampionContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-width: ${({ scrollable }) => (scrollable ? '52px' : '56px')};
  height: 100%;
  padding: 1px;
  @media (max-width: 1200px) {
    width: 40px;
    min-width: 40px;
    height: 40px;
  }
`;

const ChampionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const ChampionImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;

const ChampionCost = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  font-size: 0.8rem;
`;

const ChampionName = styled.div`
  position: absolute;
  color: white;
  bottom: 0.3rem;
  font-size: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 1px black;
  @media (max-width: 1200px) {
    font-size: 7px;
  }
`;

export default ChampionBox;
