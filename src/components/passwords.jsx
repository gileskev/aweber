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
            setPasswordValid(false);
        }

        // check to see if passwords contain a number
        else if(!validatePasswordNumber(password)) {
            message.passwordNumber = "Password does not contain a number";
            setPasswordValid(false);
        }

        // check to see if password contains lowercase letter
        else if(!validatePasswordLowerCase(password)) {
            message.passwordLowerCase = "Password does not contain lowercase letter";
            setPasswordValid(false);
        }

        // check to see if password contains uppercase letter
        else if(!validatePasswordUpperCase(password)) {
            message.passwordUpperCase = "Password does not contain uppercase letter";
            setPasswordValid(false);
        }

        // check to see if password contains special character
        else if(!validatePasswordSpecialCharacter(password)) {
            message.passwordSC = "Password does not contain special character";
            setPasswordValid(false);
        }
        // check to see if password is valid length
        else if(!validatePasswordLength(password, min, max)) {
            message.passwordLength = `Password needs to be greater than ${min} characters and less than ${max}`;
            setPasswordValid(false);
        } else {
            message.success = "Password is valid";
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
           { messages.success  && <div>{messages.success}</div> }
        
        <button type="submit">Submit</button>
    </>
    )
}



export default Passwords;