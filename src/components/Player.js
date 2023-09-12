import React from "react";
import { Card } from "react-bootstrap";

const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageURL,
}) => {
    console.log(imageURL)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Define default props for players without a team
Player.defaultProps = {
  team: "N/A",
  jerseyNumber:"N/A"
};

export default Player;
