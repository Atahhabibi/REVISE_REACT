import React from 'react';
import Person from './person';

const List = ({people}) => {
  return (
    <section>
      {
        people.map((person)=>{
          return <Person key={person.id} {...person} />
        })
      }
      
    </section>
  );
};

export default List;
