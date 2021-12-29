import CreateContext from './contextCreate';
import { useState } from 'react';

const CreateState = (props) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <CreateContext.Provider value={{ isShow, setIsShow }}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default CreateState;
