import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
