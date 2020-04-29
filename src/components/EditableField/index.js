import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

export default function EditableField({
  children,
  editable,
  isTitle,
  onChange,
}) {
  const [childrenText, setChildrenText] = useState(children);

  const ChildrenComponent = () =>
    isTitle ? <h1>{children}</h1> : <p>{children}</p>;

  return editable ? (
    <Input
      isTitle={isTitle}
      value={childrenText}
      onChange={(event) => {
        setChildrenText(event.target.value);
        onChange(event.target.value);
      }}
      placeholder={isTitle ? 'Name' : 'Add description...'}
    />
  ) : (
    <ChildrenComponent />
  );
}

EditableField.defaultProps = {
  isTitle: false,
  onChange: () => {},
};

EditableField.propTypes = {
  children: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  isTitle: PropTypes.bool,
  onChange: PropTypes.func,
};
