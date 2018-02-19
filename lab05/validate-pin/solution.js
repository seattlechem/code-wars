function validatePIN (pin) {
  res = /^\d{6}$|^\d{4}$/.test(pin);
  return res;
}