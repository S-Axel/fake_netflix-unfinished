const validatePassword = (value) => (
  (typeof value === 'string' && value.length >= 4 && value.length <= 60)
  || 'Your password must contain between 4 and 60 characters.'
);

export default validatePassword;
