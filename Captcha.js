let captcha = document.querySelector('.container .captcha-box h3');
let userInput = document.querySelector('.container .userInput');
let checkBtn = document.querySelector('.container .check-btn');
let generateBtn = document.querySelector('.container .generate-btn');
let message = document.querySelector('.container .message');

let captchacharacter = ['A','B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];

let generateCaptcha =()=>{
 captcha.innerHTML = '';
 for(let i=0;i<6;i++){
 let randomCaptcha = captchacharacter[Math.floor(Math.random() * captchacharacter.length)];
 captcha.innerHTML += ' ' + randomCaptcha;
 }
 message.style.display = 'none';    
 userInput.value = '';
}

let check =()=>{
 let userCaptcha = userInput.value;
 let rightCaptcha = captcha.innerHTML;
 
 if(userCaptcha.replaceAll(' ','') == rightCaptcha.replaceAll(' ','')){
 message.style.display = 'block';    
  message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Captcha matched. You are not a robot';
 message.classList.remove('incorrect');
 message.classList.add('correct');
 }else{
 message.style.display = 'block';    
 message.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Captcha not matched. please try again!';
 message.classList.remove('correct');  
 message.classList.add('incorrect');
 }
}

checkBtn.addEventListener('click',()=>{
  if(userInput.value != ''){
     check();   
  }else{
    alert('Please enter captcha!')       
  }     
});

generateCaptcha();
generateBtn.addEventListener('click',generateCaptcha)
