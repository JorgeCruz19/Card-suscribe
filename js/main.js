const btn = document.getElementById('btn');
const inputEmail = document.getElementById('input-email');
const messageError = document.getElementById('message-error');
btn.addEventListener('click', () => {
   if(inputEmail.value == ""){
      messageError.style.opacity = '1';
   }
});