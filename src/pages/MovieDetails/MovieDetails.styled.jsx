import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 16px;
  margin-bottom: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-weight: 500;

  &:hover {
    background-color: #63c5da;
  }
`;

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 14px;
`;

export const MovieBox = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`;

export const MovieInfo = styled.div`
  padding: 20px 40px;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;

export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: solid 1px grey;
`;
