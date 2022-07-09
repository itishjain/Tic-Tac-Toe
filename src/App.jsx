import React from "react";

// {/* Note => A component always return a single element. Inside <>...</>  */}
const Application = () => {
  return (
    <>
      {/* <></> This is called react-fragment can also be written as <React.Fragment></React.Fragment>  */}
      {/* It looks like HTML syntax but it is not. It's jsx and its a react syntax.
              It is backword compatible with HTML*/}
      <h1>Welcome to React Vite Micro App!</h1>
      <p>Ooooo bete bann gyii!!</p>
      <h2>Kya hum isme Html likh k chala lein?</h2>
      <button>Mauj aagyi</button>
    </>
  );
};

export default Application;
