import React from 'react';

const Card = () => {
  return (
    <div className="bg-light-green dib br3 pa2 ma2 tc grow bw2 shadow-5">
      <img src="https://robohash.org/set_set5/test?size=200x200" alt="img" />
      <div>
        <h2>John Doe</h2>
        <p>email@mail.com</p>
      </div>
    </div>
  );
};

export default Card;
