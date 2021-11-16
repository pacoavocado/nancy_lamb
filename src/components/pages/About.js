import React from "react";

export default function About() {
  return (
    <div class="center">
      {/* <h1>About Page</h1> */}
      <img class="abtPic" src={process.env.PUBLIC_URL + ""} alt="Avatar" />
      <p id="description">
       info about nancy lamb
      </p>
      <a id="description1" href="">
        R_E_S_U_M_E_/_C_V
      </a>
    </div>
  );
}
