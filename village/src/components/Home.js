import React from "react"
import { Link } from "react-router-dom";
import smurf from '../img/smurf.png';

export default function () {
  return (
    <div>
      <h1>Welcome to All Things Smurf!</h1>
      <p> Yo listen up, here's the story <br />
        About a little guy that lives in a blue world <br />
        And all day and all night and everything he sees is just blue <br />
        <small><a href="https://www.youtube.com/watch?v=HgV1O0X4uXI">Eiffel 65 - I'm Blue</a></small></p>

      <h2>
        <Link to="/smurfs">Smurfs Village</Link>
      </h2>

      <img src={smurf} width="200px" />
    </div>
  )
}