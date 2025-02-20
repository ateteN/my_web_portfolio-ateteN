const cursor = document.querySelector(".cursor");
// start to follow the mouse movement
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block"
});

function mouseStopped(){
    cursor.style.display = "none";
}

const form = document.querySelector('form');
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "portfolio@gmail.com",
        Password : "0ee19456-5cf5-4deb-9d14-2e1005d787c9",
        To : 'portfolio@gmail.com',
        From : "portfolio@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
});
