import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // version.1
    // const newPeople = people.filter(person => person.id !== id)
    // setPeople(newPeople);

    // version.2
    setPeople(people.filter(person => person.id !== id));
  };

  const clearAllItems = () => {
    setPeople([])
  };

  return (
    <div className="container">
      <ul>
        {people.map((person) => {
          const { id, name } = person;
          // console.log(person);
          return (
            <li key={id}>
              <h4>{name}</h4>
              {/* arrow function added onClick */}
              <button type="button" onClick={()=>removeItem(id)}>Remove</button>
            </li>
          );
        })}
        <button type='button' style={{ marginTop: 20 }} className="btn" onClick={clearAllItems}>Clear Table</button>
        {/* <button type='button' style={{marginTop:20}} className="btn" onClick={()=>setPeople([])}>Clear Table</button> */}
      </ul>
    </div >
  );
};

export default UseStateArray;
