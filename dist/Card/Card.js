import React from 'react';
import './Card.css';
export const Card = ({
  children
}) => {
  return React.createElement("div", {
    className: "Card"
  }, React.createElement("div", null, "something ", React.createElement("span", null, "something else")), children);
};