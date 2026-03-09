document.getElementById('login')
    .addEventListener('click', () => {
  
    const getUserName = document.getElementById('userName');
    const userName = getUserName.value;

    const getUserPassword = document.getElementById('userPassword');
    const userPassword = getUserPassword.value;

    if (userName === 'admin' && userPassword === 'admin123') {
        window.location.assign('mainpage.html');
    } 
    else {
        alert('Invalid username or password');
    }

})