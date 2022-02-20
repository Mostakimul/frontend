import { ToastContainer } from 'react-toastify';
import styled, { keyframes } from 'styled-components';

export const H2 = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.color || 'rgba(255,255,255,0.8)'};
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.fontSize || '1.8rem'};
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const P = styled.p`
  font-size: ${(props) => props.fontSize || '1.6rem'};
  margin: 0.5rem 0;
  color: ${(props) => props.color || 'rgba(255,255,255,0.8)'};
`;

export const A = styled.a`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
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

// tostify customization

export const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  /* &&&.Toastify__toast-container {}
  .Toastify__toast {} */
  .Toastify__toast-body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
  }
  /* .Toastify__progress-bar {} */
`;
