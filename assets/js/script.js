const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const data = formDataToText(new FormData(form));
  console.log(data)
  window.location.href = 'https://wa.me/628970455703?text='+data;
});

function formDataToText(formData) {
    let text = 'Kak Gersom mau daftar Heroes Camp nih!%0aIni dataku yaa%0a%0a';
    
    for (let pair of formData.entries()) {
      const [name, value] = pair;
      text += `${name}: ${value}%0a`;
    }
    
    return text;
  }
  