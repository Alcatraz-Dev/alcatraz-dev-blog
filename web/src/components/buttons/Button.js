import React from 'react';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';
import { buttonTypes } from '../../constants/buttonTypes';

function Button({ children, tag, variant = buttonTypes.primary, ...props }) {
  return (
    <ButtonStyles as={tag} {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
