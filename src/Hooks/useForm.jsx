import { useState } from "react";
import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa conter 8 caracteres, uma letra maiúscula, uma letra minúscula e um número",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate(value) {
    if (type === false) {
      return true;
    }

    if (value.length === 0) {
      setError("Campo obrigatório");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
