import React from 'react';
import { node, bool } from 'prop-types';

const ConditionalComponent = ({ children, condition }) => {
  if (!condition) return <h2>Nenhum item encontrado</h2>;
  return (
    [children]
  );
};

ConditionalComponent.propTypes = {
  children: node.isRequired,
  condition: bool.isRequired,
};

export default ConditionalComponent;
