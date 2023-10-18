const wrapper=document.querySelector(".wrapper");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const closeBtn=document.querySelector(".close");
const button=document.querySelector(".btn-login");

registerLink.addEventListener("click",()=>{
    wrapper.classList.add('active');
    console.log("button clicked");
    
});
loginLink.addEventListener("click",()=>{
    wrapper.classList.remove('active');
    console.log("button clicked");

});
button.addEventListener("click",()=>{
   wrapper.classList.add("button-class");
})
closeBtn.addEventListener("click",()=>{
    wrapper.classList.remove('button-class');
})

