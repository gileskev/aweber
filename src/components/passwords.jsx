import { useEffect, useRef, useState } from "react";
import { validatePasswordLength,
         validatePasswordLowerCase, 
         validatePasswordUpperCase, 
         validatePasswordNumber, 
         validatePasswordSpecialCharacter,
         validatePasswordMatch } from "../utils/passwordValidation";

const Passwords = ({min, max}) => {
    const [messages, setMessages] = useState({});
    const [passwordValid, setPasswordValid] = useState(true);

    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handlePasswordValidation = (e) => {
        let message = {};
        e.preventDefault();

        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        // check to see if password matches new password
        if(!validatePasswordMatch(password, passwordConfirm)) {
            message.passwordMatch = "Passwords do not match";
        }

        // check to see if passwords contain a number
        if(!validatePasswordNumber(password)) {
            message.passwordNumber = "Password does not contain a number";
        }

        // check to see if password contains lowercase letter
        if(!validatePasswordLowerCase(password)) {
            message.passwordLowerCase = "Password does not contain lowercase letter";
        }

        // check to see if password contains uppercase letter
        if(!validatePasswordUpperCase(password)) {
            message.passwordUpperCase = "Password does not contain uppercase letter";
        }

        // check to see if password contains special character
        if(!validatePasswordSpecialCharacter(password)) {
            message.passwordSC = "Password does not contain special character";
        }

        if(!validatePasswordLength(password, min, max)) {
            message.passwordLength = `Password needs to be greater than ${min} characters and less than ${max}`;
        }

        if(passwordValid) {
            message.success = "Password is Valid";
        }

        setMessages(message);

    }

    useEffect(() => {
        window.addEventListener("submit", handlePasswordValidation);
        return () => {
            window.removeEventListener("submit", handlePasswordValidation);
        }
    })

    return(
    <>
        <label htmlFor="newpassword">New Password:</label>
        <input id="newpassword" type="password" ref={passwordRef} />
        <label htmlFor="newPasswordConfirm">Confirm New Password</label>
        <input id="newPasswordConfirm" type="password" ref={passwordConfirmRef} />
        
           { messages.passwordMatch && <div>{messages.passwordMatch}</div> }
           { messages.passwordNumber && <div>{messages.passwordNumber}</div> }
           { messages.passwordLowerCase && <div>{messages.passwordLowerCase}</div> }
           { messages.passwordUpperCase && <div>{messages.passwordUpperCase}</div> }
           { messages.passwordSC && <div>{messages.passwordSC}</div> }
           { messages.passwordLength && <div>{messages.passwordLength}</div> }
           { messages.success && <div>{messages.success}</div> }
        
        <button type="submit">Submit</button>
    </>
    )
}



export default Passwords;