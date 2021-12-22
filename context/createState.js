import CreateContext from './contextCreate';
import { useState } from 'react';

const CreateState = (props) => {
  const s1 = {
    name: 'Harry',
    class: '5b',
  };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: 'Larry',
        class: '10b',
      });
    }, 1000);
  };
  return (
    <CreateContext.Provider value={{ state: state, update: update }}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default CreateState;
