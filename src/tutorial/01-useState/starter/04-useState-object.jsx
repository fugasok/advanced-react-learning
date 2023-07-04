import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });

  const displayPerson = () => {
    setPerson({
      name: 'john',
      age: 18,
      hobby: 'scream at the computer',
    });
  };

  return (
    <>
      <h3 className='title' style={{ marginTop: 100 }}>{person.name}</h3>
      <h3 className='title'>{person.age}</h3>
      <h4 className='title'>Enjoys: {person.hobby}</h4>

      <button type="button" className='btn' style={{ margin: '0 auto', display: 'block' }} onClick={displayPerson}>Show next</button>
    </>)
};

export default UseStateObject;
