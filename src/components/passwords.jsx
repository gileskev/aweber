import { useState } from "react";
import { validatePasswordLength,
         validatePasswordLowerCase, 
         validatePasswordUpperCase, 
         validatePasswordNumber, 
         validatePasswordSpecialCharacter,
         validatePasswordMatch } from "../utils/passwordValidation";

const Passwords = () => {
    const [messages, setMessages] = useState([]);
    const [passwordValid, setPassordValid] = useState(true);

    const handlePasswordValidation = (password, newpassword) => {
        // check to see if password matches new password
        if(!validatePasswordMatch(password, newpassword)) {
            setMessages([...messages, "Passwords do not match"])
            setPassordValid(false);
        }

        // check to see if passwords contain a number
        if(!validatePasswordNumber(password)) {
            if(!validatePasswordNumber(password)) {
                setMessages([...messages, "Password does not contain a number"])
                setPassordValid(false);
            }
        }

        // check to see if password contains lowercase letter
        if(!validatePasswordLowerCase(password)) {
            setMessages([...messages, "Password does not contain lowercase letter"])
            setPassordValid(false);
        }

        // check to see if password contains uppercase letter
        if(!validatePasswordUpperCase(password)) {
            setMessages([...messages, "Password does not contain uppercase letter"])
            setPassordValid(false);
        }

        // check to see if password contains special character
        if(!validatePasswordSpecialCharacter(password)) {
            setMessages([...messages, "Password does not contain special character"])
        }

    }

    return(
    <>
        <label htmlFor="newpassword">New Password:</label>
        <input id="newpassword" type="password" />
        <label htmlFor="newPasswordConfirm">Confirm New Password</label>
        <input id="newPasswordConfirm" type="password" />
        <input type="submit" value="submit"/>
    </>
    )
}



export default Passwords;