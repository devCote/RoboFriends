import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa2 ma2 tc grow bw2 shadow-5">
      <img src={`https://robohash.org/set_set2/${id}?size=200x200`} alt="img" />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
