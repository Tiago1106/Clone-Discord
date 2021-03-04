import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/logo.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  hasNotification,
  isHome,
  mentions,
  selected,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
