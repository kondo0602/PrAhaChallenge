import React from "react";

const FormPresentational = (props) => {
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...props.registerFirstName}
        />
        <input
          type="text"
          placeholder="Last name"
          {...props.registerLastName}
        />
        <input type="text" placeholder="Email" {...props.registerEmail} />
        <input
          type="text"
          placeholder="Mobile number"
          {...props.registerMobileNumber}
        />
        <select {...props.registerTitle}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <input type="radio" value="Yes" {...props.registerDeveloper} />
        <input type="radio" value="No" {...props.registerDeveloper} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormPresentational;
