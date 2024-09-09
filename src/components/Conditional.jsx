import React from 'react';

const Conditional = () => {
  // if else condition upon 21 age
  let age = 21;
  
//   if (age === 21) {
//     return <p>You are 21 years old or older.</p>;
//   } else {
//     return <p>You are not 21 years old.</p>;
//   }

  // ternary operator
  return (
    <p>{age === 21 ? 'You are 21 years old or older.' : 'You are not 21 years old.'}</p>
  );
};

export default Conditional;
