const Image =
  "https://st3.depositphotos.com/16030310/18317/v/450/depositphotos_183172678-stock-illustration-letters-logo-initial-logo-identity.jpg";

const Input = ({ label, type, state, setState }) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
        autoComplete="on"
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );  
};

export { Image };
export default Input;
