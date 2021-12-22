import { useState } from 'react';
import ContextCreate from './contextCreate';

export const createState = (props) => {
  const isShow = 'rrr';
  return (
    <ContextCreate.Provider value={{ isShow }}>
      {props.children}
    </ContextCreate.Provider>
  );
};
