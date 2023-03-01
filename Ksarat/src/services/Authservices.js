import Axiosservices from "./Axiosservices";
const axiosservices = new Axiosservices();
export default class Authservices {
 
    SignUp(data){
        return axiosservices.post('http://localhost:5054/api/State/register', data,false)
    }

    SignIn(data){
        return axiosservices.post('http://localhost:5054/api/State/login',data,false)
    }
}