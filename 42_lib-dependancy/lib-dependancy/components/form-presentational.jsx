import React from "react";
import { useForm } from "react-hook-form";
import FormContainer from "./form-container";

export default function FormPresentational() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const registerFirstName = {
    ...register("First name", { required: true, maxLength: 80 }),
  };
  const registerLastName = {
    ...register("Last name", { required: true, maxLength: 100 }),
  };
  const registerEmail = {
    ...register("Email", { required: true, pattern: /^\S+@\S+$/i }),
  };
  const registerMobileNumber = {
    ...register("Mobile number", {
      required: true,
      minLength: 6,
      maxLength: 12,
    }),
  };
  const registerTitle = { ...register("Title", { required: true }) };
  const registerDeveloper = { ...register("Developer", { required: true }) };

  return (
    <div>
      <FormContainer
        handleSubmit={handleSubmit}
        registerFirstName={registerFirstName}
        registerLastName={registerLastName}
        registerEmail={registerEmail}
        registerMobileNumber={registerMobileNumber}
        registerTitle={registerTitle}
        registerDeveloper={registerDeveloper}
      />
    </div>
  );
}
