const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

var signIn = document.getElementById("signIn");
var emailvalue = document.querySelector(".emailvalue");
signIn.onclick = function() {
    sessionStorage.setItem("email", emailvalue.value);
}
