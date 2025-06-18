import React from "react";

export default function Alert({ message, type }) {
  return (
    <div>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
       <strong>{message}</strong>
      </div>
    </div>
  );
}
