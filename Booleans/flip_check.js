function login(username, password) {
    if (username === 'user') {
        if (password === '123') {
            console.log('credentials correct, login');
            return true;
        } else {
            console.error('Wrong password');
            return false;
        }
    } else {
        console.error('wrong username');
        return false;
    }
}

function login2(username, password) {
    if (username !== 'user') {
        console.error('wrong username');
        return false;
    }

    if (password !== '123') {
        console.error('Wrong password');
        return false;
    }

    console.log('credentials correct, login');
    return true;
}