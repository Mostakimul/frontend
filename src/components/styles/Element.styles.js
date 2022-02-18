import styled, { keyframes } from 'styled-components';

export const H2 = styled.h2`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const P = styled.p`
  font-size: 1.6rem;
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
`;

export const A = styled.a`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.8);
`;

// spinner
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
