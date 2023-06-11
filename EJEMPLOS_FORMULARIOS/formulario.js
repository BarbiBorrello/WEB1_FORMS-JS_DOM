document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form');
    const pelicula = document.getElementById('peli');
    const puntua = document.getElementById('puntuacion');
    const comentar = document.getElementById('comentario');
    const reviewsList = document.getElementById('reviews');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      limpiarErores();
  
      const pelis = pelicula.value.trim();
      const puntuacion = puntua.value;
      const comentarios = comentar.value.trim();
  
      let isValid = true;
  
      if (pelis === '') {
        isValid = false;
        mostrarError(pelicula, 'Por favor, ingresa el título de la película.');
        
      } else if (pelis.length > 30) {
        isValid = false;
        mostrarError(pelicula, 'El título de la película debe tener como máximo 30 caracteres.');
      }
  
      if (puntuacion === '') {
        isValid = false;
        mostrarError(puntua, 'Por favor, selecciona una puntuación.');
      }
  
      if (comentarios === '') {
        isValid = false;
        mostrarError(comentar, 'Por favor, Ingrese un comentario');
      }

      else if (comentarios.length < 10 || comentarios.length > 200) {
        isValid = false;
        mostrarError(comentar, 'El comentario debe tener entre 10 y 200 caracteres.')
      }
  
      if (isValid) {
        const l1 = document.createElement('li');
        l1.innerHTML = `<strong>Película:</strong> ${pelis}<br>`;
        const l2 = document.createElement('li');
        l2.innerHTML = `<strong>Puntuación:</strong> ${puntuacion}<br>`;
        const l3 = document.createElement('li');
        l3.innerHTML = `<strong>Comentario:</strong> ${comentarios}<br> <br>`;
  
        reviewsList.appendChild(l1);
        reviewsList.appendChild(l2);
        reviewsList.appendChild(l3);
        limpiarForm();
        pelicula.focus();
      }
    });
  
    function mostrarError(input, message) {
      input.classList.add('error');
      const parrafo = document.createElement('p');
      parrafo.classList.add('errormsj');
      parrafo.innerText = message;
      input.parentNode.insertBefore(parrafo, input.nextSibling);
    }
  
    function limpiarErores() {
      const errorMessages = document.getElementsByClassName('errormsj');
      while (errorMessages.length > 0) {
        errorMessages[0].parentNode.removeChild(errorMessages[0]);
      }
  
      pelicula.classList.remove('error');
      puntua.classList.remove('error');
      comentar.classList.remove('error');
    }
  
    function limpiarForm() {
      pelicula.value = '';
      puntua.value = '';
      comentar.value = '';
    }
  });
  