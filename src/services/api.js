import axios from "axios"

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyCS0uSRumJQY4fw30Dx1wTmHiHFx7MjHzg"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `accounts:signInWithPassword?key=${API_KEY}`;
export const RegisterApi = (inputs)=>{
        let data ={displayName:inputs.name,email:inputs.email,password:inputs.password};
        return axios.post(REGISTER_URL,data)
}
export const LoginApi = (inputs)=>{
        let data ={email:inputs.email,password:inputs.password};
        return axios.post(LOGIN_URL,data)
}