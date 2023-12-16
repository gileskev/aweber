import { validatePasswordLength,
         validatePasswordLowerCase, 
         validatePasswordUpperCase, 
         validatePasswordNumber, 
         validatePasswordSpecialCharacter,
         validatePasswordMatch } from "../utils/passwordValidation";

const Passwords = () => {
    <>
        <label htmlFor="newpassword">
            New Password:
            <input id="newpassword" type="password" />
        </label>
        <label htmlFor="newPasswordConfirm">
            Confirm New Password
            <input id="newPasswordConfirm" type="password" />
        </label>
    </>
}



export default Passwords;