let email = prompt('Your email?');
let minEmail = 5;
let minPass = 6;
let pass;
let question;
if (email === null || email === '') {
    alert('Canceled');
} else if (email.length < minEmail) {
    alert(`I don't know any emails having name length less than 5 symbols`);
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
    alert('I don’t know you');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    pass = prompt('Your password?');
    if (pass === null || pass === '') {
        alert('Canceled');
    } else if (pass!=='UserPass'&&email==='user@gmail.com'||pass!=='AdminPass'&&email==='admin@gmail.com') {
        alert('Wrong password');
    } else if (pass==='UserPass'&&email==='user@gmail.com'||pass==='AdminPass'&&email==='admin@gmail.com') {
        question = confirm('Do you want to change your password?');
        if(!question) {
            alert('You have failed the change.');
        } else if (question) {
            pass = prompt('Your old password?');
            if (pass !== 'UserPass' && pass !=='AdminPass') {
                alert('Wrong password');
            }else if(pass==='UserPass'&&email==='user@gmail.com'||pass==='AdminPass'&&email==='admin@gmail.com'){
                pass = prompt('Your new password?');
                if (pass === null || pass === '') {
                    alert('Canceled');
                } else if (pass < minPass) {
                    alert('It’s too short password. Sorry.');
                } else {
                     if (pass===prompt('repeat new password')) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }
        }
    }
}