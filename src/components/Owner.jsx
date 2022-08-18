import React from "react";

const Owner = ({ owner, rating }) => {
  const starsRating = [];

  for (let i = 0; i < rating; i++) {
    starsRating.push(
      <svg
        className="rating__star rating__star--colored"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z"
          fill="#FF6060"
        />
      </svg>
      /*   <img
        src={`${process.env.PUBLIC_URL}/star-colored.svg`}
        alt={"star icon - rating" + rating}
        className="rating__star rating__star--colored"
      /> */
    );
  }

  for (let i = 0; i < 5 - rating; i++) {
    starsRating.push(
      <svg
        className="rating__star rating__star--gray"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z"
          fill="#E3E3E3"
        />
      </svg>
      /*  <img
        src={`${process.env.PUBLIC_URL}/star-gray.svg`}
        alt={"star icon - rating " + rating}
        className="rating__star rating__star--gray"
      /> */
    );
  }

  return (
    <div className="host">
      <div className="host-container">
        <p className="host__name">{owner.name}</p>
        <div className="host-img-container">
          <img
            src={owner.picture}
            alt={"Photo " + owner.name}
            className="host__img"
          />
        </div>
      </div>
      <div className="host__rating">{starsRating}</div>
    </div>
  );
};

export default Owner;
