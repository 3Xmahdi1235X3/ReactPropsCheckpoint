import React from "react";
import Player from "./Player";
import players from "../player";
import { Col, Row } from "react-bootstrap";

const PlayersList = () => {
    const rowsOfPlayers = [];
    for (let i = 0; i < players.length; i += 3) {
      const row = players.slice(i, i + 3);
      rowsOfPlayers.push(row);
    }
  return (
   <>
    {rowsOfPlayers.map((row, rowIndex) => (
        <Row key={rowIndex} className="p-3">
          {row.map((player, index) => (
            <Col md={4} key={index}>
             <Player key={index} {...player} />
             </Col>
      ))}
    </Row>
    ))}
    </>
  );
};

export default PlayersList;


