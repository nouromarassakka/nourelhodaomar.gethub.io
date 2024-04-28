let inputs = document.getElementsByClassName('border');//it doesnt work with js , so i made it with css
window.onload = function(){
  inputs.focus();
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(){
        inputs[i].style.border = '2px solid #383848';
    });

    inputs[i].addEventListener('blur', function(){
        inputs[i].style.border = 'none';
    });
}


function myFunction() { //POPUP ALERT
    var txt;
    if (confirm("WELCOME TO GINO'S")) {
      txt = "";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("noo").innerHTML = txt;
  }
// var x = document.getElementById("btn"); 
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);

// function myFunction() {
//   alert ("WELCOME TO GINO'S");
// }
// function someOtherFunction() {
//   alert ("ENJOY!");
// }

  function mOver(obj) { //to change login button
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "login"
  }
  function changeText(id) {
    id.innerHTML = "Ur homee!!";
  }
   function upperCase() { //making the inputs in usermane be uppercasas onlyyyy
   const x = document.getElementById("border");
   x.value = x.value.toUpperCase();
   }
  
   function dark(){
    let styleLink = document.getElementById('styleLink');
    var currentStyle = styleLink.getAttribute('href');
  
    if (currentStyle === 'style.css') {
      styleLink.setAttribute('href', 'style2.css');
    } else {
      styleLink.setAttribute('href', 'style.css');
    }
  };