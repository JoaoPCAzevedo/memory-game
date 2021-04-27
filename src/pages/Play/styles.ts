/**
 * Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * StyledComponents
 */
const Faces = css`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  line-height: 125px;
  font-size: 78px;
`;

const Front = styled.div`
  ${Faces}
  transform: rotateY(180deg);
`;

const Back = styled.div`
  ${Faces}
`;

const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const Tile = styled.div`
  height: 150px;
  perspective: 1000px;

  &.is-flipped ${Card} {
    transform: rotateY(180deg);
  }
`;

export { Front, Back, Card, Tile };
