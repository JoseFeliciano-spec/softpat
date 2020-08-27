export default function validarCorreo(correo) {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let prueba = false;
  if (emailRegex.test(correo)) {
    prueba = true;
  }
  return prueba;
}
