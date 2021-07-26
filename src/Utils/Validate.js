const vnphoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/;
const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$/;


export const validatePhone = (phone) => {
    return vnphoneRegex.test(phone)
}
export const validateEmail = (email ) => {
    return emailRegex.test(email)
}
export const validatePassword = (password ) => {
    return passwordRegex.test(password)
}