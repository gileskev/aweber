export const validatePasswordLength = (password, min, max) => {
    let validPassword = false;
    // min length, no max length
    if(min && !max) {
        if(password > min) {
            validPassword = true;
        }
    }

    // no min length, just max length
    if(!min && max) {
        if(password < max) {
            validPassword = true;
        }
    }

    if(min && max) {
        if(password >= min && password <= max) {
            validPassword = true;
        }
    }
    return validPassword;
}

export const validatePasswordUpperCase = (password) => {
    const upperCase = /[A-Z]/g;
    return password.match(upperCase);

}

export const validatePasswordLowerCase = (password) => {
    const lowerCase = /[a-z]/g;
    return password.match(lowerCase);
}

export const validatePasswordSpecialCharacter = (password) => {
    const specialChar = /(!@#$%\^&*()_-+={\[}\]|:;\\"\\'<,>.) /g;
    return password.match(specialChar);
}

export const validatePasswordNumber = (password) => {
    const number =  /[0-9]/g;
    return password.match(number)
}

export const validatePasswordMatch = (password, newpassword) => {
    return password === newpassword;
}