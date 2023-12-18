export const validatePasswordLength = (password = 6, min, max) => {
    let validPassword = false;
    // min length, no max length
    if(min && !max) {
        if(password.length >= min) {
            return validPassword = true;
        }
    }

    // no min length, just max length
    if(!min && max) {
        if(password.length <= max) {
            return validPassword = true;
        }
    }

    if(min && max) {
        if(password.length >= min && password.length <= max) {
            return validPassword = true;
        }
    }
    return validPassword;
}

export const validatePasswordUpperCase = (password) => {
    const upperCase = /[A-Z]/g;
    return upperCase.test(password);

}

export const validatePasswordLowerCase = (password) => {
    const lowerCase = /[a-z]/g;
    return lowerCase.test(password);
}

export const validatePasswordSpecialCharacter = (password) => {
    const specialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/g;
    return specialChar.test(password);
}

export const validatePasswordNumber = (password) => {
    const number =  /[0-9]/g;
    return number.test(password);
}

export const validatePasswordMatch = (password, newpassword) => {
    return password === newpassword;
}