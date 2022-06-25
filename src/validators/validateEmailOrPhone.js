const validateEmailOrPhone = (value) => (
  (typeof value === 'string' && value.length > 0)
  || 'Please enter a valid email or phone number.'
);

export default validateEmailOrPhone;
