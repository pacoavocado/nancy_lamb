import React from 'react';

export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <p>
        <img class="homeimg" src={process.env.PUBLIC_URL + ""}></img>
      </p>
    </div>
  );
}
