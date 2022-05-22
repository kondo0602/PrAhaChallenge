import React from "react";
import { useForm } from "react-hook-form";
import FormPresentational from "./form-presentational";

export default function FormContainer() {
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
      <FormPresentational
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
