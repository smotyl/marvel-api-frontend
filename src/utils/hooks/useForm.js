import { useState, useEffect } from 'react';

export const useForm = (emailRef, passwordRef, email, password) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const inputs = {
      email: emailRef.current ? emailRef.current.value : '',
      password: passwordRef.current ? passwordRef.current.value : '',
    };

    const isEmpty = !(emailRef.current.value || passwordRef.current.value);
    const isFull = Boolean(emailRef.current.value && passwordRef.current.value);
    const isValid = !(
      emailRef.current.required || passwordRef.current.required
    );

    setFormValues({
      empty: isEmpty,
      full: isFull,
      valid: isValid,
      inputs,
    });
  }, [email, password]);

  return formValues;
};

// export const useFormTeste = (refs) => {
//   const [formValues, setFormValues] = useState({});

//   useEffect(() => {
//     const inputArray = refs.map((ref) => {
//       return {
//         name: ref.current.name,
//         value: ref.current.value,
//         required: ref.current.required,
//       };
//     });

//     const isEmpty = inputArray.reduce((result, input) => {
//       if (input.value) result = false;

//       return result;
//     }, true);

//     const isFull = inputArray.reduce((result, input) => {
//       if (!input.value) result = false;

//       return result;
//     }, true);

//     const isValid = inputArray.reduce((result, input) => {
//       if (input.required && !input.value) result = false;

//       return result;
//     }, true);

//     const inputs = inputArray.reduce((result, current) => {
//       result = { ...result, [current.name]: current.value };

//       return result;
//     }, {});

//     setFormValues({
//       empty: isEmpty,
//       full: isFull,
//       valid: isValid,
//       inputs,
//     });
//   }, [refs]);

//   return formValues;
// };
