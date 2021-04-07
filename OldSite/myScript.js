

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// document.getElementById('btnEqual').addEventListener('click', function() {
//   if (gameRun) {
//       let myRandomePhrase = Math.round(Math.random() * 4);
//       if (myRandomePhrase == 1) {
//           answerField.innerText = `Я  угадываю\n\u{1F60E}`
//           gameRun = false;
//       } else if (myRandomePhrase == 2) {
//           answerField.innerText = `я думаю что я угадываю\n\u{1F60E}`
//           gameRun = false;
//       } else if (myRandomePhrase == 3) {
//           answerField.innerText = `Я иногда угадываю\n\u{1F60E}`
//           gameRun = false;
//       } else if (myRandomePhrase == 4) {
//           answerField.innerText = ` бывает Я  угадываю\n\u{1F60E}`
//           gameRun = false;
//       } else {
//           answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
//           gameRun = false;

//       };

//   }
// })