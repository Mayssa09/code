import React from "react";
import { Card } from "react-bootstrap";
import "./UserCard.css";
const UserCard = ({ user }) => {
  return (
    <Card className="mb-2">
      <Card.Header>{user.name}</Card.Header>
      <Card.Body>
        <Card.Title>{user.email}</Card.Title>
        <Card.Text>
          <span>{user.id}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default UserCard;
