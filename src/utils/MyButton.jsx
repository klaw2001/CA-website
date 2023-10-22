import { Button } from "bootstrap";
import React from "react";

const MyButton = ({ buttonText }) => {
  return (
    <>
      <Button variant="primary">{buttonText}</Button>
    </>
  );
};

export default MyButton;
