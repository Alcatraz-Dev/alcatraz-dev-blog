import styled from 'styled-components';

export const PaginationStyles = styled.div`
  text-align: center;
  margin-top: 5rem;
 
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      background: linear-gradient(150deg, #99B833 , #21A63E );
      padding: 0.8rem;
      border-radius: 4px;
      
      svg {
        padding: 0;
        margin: 0;
      }
      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
`;
