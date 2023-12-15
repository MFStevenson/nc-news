const Error = ({ status, msg }) => {
  return (
    <div id="error">
      <h2> Error Occurred</h2>
      <p>Status code: {status}</p>
      <p> {msg}</p>
    </div>
  );
};

export default Error;
