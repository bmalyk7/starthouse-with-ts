import React from 'react';
import {Error} from "../types";

const ErrorPage = ({msg}: Error) => {
  return (
    <div className="error">
      <h1 className="error__msg">{msg}</h1>
    </div>
  );
};

export default ErrorPage;