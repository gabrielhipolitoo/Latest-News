import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
function UseValidationForm() {
  const schema = object({
    email: string().email("Email invalido").required("Digite um email valido"),
  });

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors
  };
}

export default UseValidationForm;
