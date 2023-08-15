function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    const encriptado = texto.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
    document.getElementById('texto').value = '';
    document.getElementById('mensaje').value = encriptado
}
function desencriptarTexto() {
    const texto = document.getElementById('texto').value;
    const desencriptado = texto.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
    document.getElementById('texto').value = '';
    document.getElementById('mensaje').value = desencriptado
}
function copiarTexto() {
    const mensaje = document.getElementById('mensaje');
    mensaje.select();
    document.execCommand('copy');
  }
  