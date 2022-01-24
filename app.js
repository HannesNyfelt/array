let btn = document.getElementById('save');
let users = localStorage.getItem('users')
let parsedUsers = JSON.parse(users)
let userArray = []
userArray.push(parsedUsers)
btn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let name = document.getElementById('name').value;
    userArray.push(name, email, password)
    localStorage.setItem('users', JSON.stringify(userArray))
    console.log(userArray);
})
