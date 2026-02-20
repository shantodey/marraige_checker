let button = document.getElementById("button");
button.addEventListener("click", function(e) {
  e.preventDefault();
  let inputValue = document.getElementById("inp").value;
  let number = parseFloat(inputValue);
  let yesText = document.querySelector(".yes");
  let noText = document.querySelector(".no");

  yesText.classList.remove("active");
  noText.classList.remove("active");

  if (number > 18) {
    yesText.classList.add("active"); 
  } 
  else{
    noText.classList.add("active"); 
  } 
});

// document.getElementById('button').addEventListener('click',
//   function(){
//     const age=document.getElementById('inp').value
//     console.log(age);
//     if(age<18){
//       alert('not Eligible for marriage')
//     }else{
//       alert(' Congratulations youre good to be married')
//     }
//   }
// )
