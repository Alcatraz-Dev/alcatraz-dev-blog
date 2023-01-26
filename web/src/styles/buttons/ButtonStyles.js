import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  background: ${({ variant }) =>
    variant === buttonTypes.primary
      ? 'linear-gradient(135deg, var(--secondary), var(--primary))'
      : variant === buttonTypes.secondary
      ? 'var(--white-1)'
      : 'transparent'};
  border: ${({ variant }) =>
    variant === buttonTypes.outline ? '2px solid var(--primary)' : 'none'};
  color: ${({ variant }) =>
    variant === buttonTypes.secondary ? 'var(--black-1)' : 'var(--white)'};
    background: ${({ variant }) =>
    variant === buttonTypes.pateron
      ? 'linear-gradient(135deg, #FD3838, #B42727)'
      :''};
      background: ${({ variant }) =>
      variant === buttonTypes.kofi
        ? 'linear-gradient(135deg, #FB9057, #F5BE3E)'
        
        :''};
        background: ${({ variant }) =>
        variant === buttonTypes.coffe
          ? 'linear-gradient(135deg, #a29de0, #d6a3f4)'
        :''};
        background: ${({ variant }) =>
        variant === buttonTypes.paypal
          ? 'linear-gradient(135deg, #0061ff, #60efff)'
        :''};
        background: ${({ variant }) =>
        variant === buttonTypes.telegram
          ? 'radial-gradient( circle farthest-corner at 18% 18.8%,  rgba(4,150,255,0.63) 0%, rgba(4,150,255,1) 90% )'
        :''};
        background: ${({ variant }) =>
        variant === buttonTypes.discord
          ? 'radial-gradient( circle farthest-corner at 20% 25.1%,  rgba(128,102,255,1) 0%, rgba(83,112,243,1) 100.2% )'
        :''};
        background: ${({ variant }) =>
        variant === buttonTypes.reddit
          ? 'linear-gradient(135deg, #f96f20, #fb3f1e)'
        :''};
        background: ${({ variant }) =>
        variant === buttonTypes.youtube
          ? 'linear-gradient(135deg, #9c0719, #861e2e)'
        :''};
  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;
