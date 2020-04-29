import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Notification({ isMounted, unmount }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isMounted && visible) {
      setTimeout(() => setVisible(false), 5000);
      setTimeout(() => unmount(), 6000);
    } else {
      setVisible(true);
    }
  }, [isMounted]);

  return (
    <Container visible={visible} mounted={isMounted}>
      <h1>SUCCESS</h1>
      <span>Hero information changed with success!</span>
    </Container>
  );
}

Notification.propTypes = {
  isMounted: PropTypes.bool.isRequired,
  unmount: PropTypes.func.isRequired,
};
