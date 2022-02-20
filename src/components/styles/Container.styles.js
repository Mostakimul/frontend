import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #fff;
  max-width: 120rem;
  margin: 1rem auto;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(11px) saturate(129%);
  -webkit-backdrop-filter: blur(11px) saturate(129%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const TasksContainer = styled.section`
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem 1rem;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  width: 70%;
  margin: 2rem auto;
`;

export const SingleTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  & h4 {
    width: 50%;
    text-align: left;
  }
`;
