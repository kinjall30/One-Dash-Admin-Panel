import axios from 'axios';
import email from '../pages/project management/email';

const BASE_URL = "http://44.196.105.0:3000/adminusers";

class ApiServices {
    // deleteUser(userId){
    //     return axios.delete(BASE_URL + '/' + userId);
    // }

    deleteUsers(userid) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        return fetch(BASE_URL, {
            method: 'DELETE',
            headers: myHeaders,
            body: JSON.stringify(
                {userid: userid}
            )
        })
    }

    createUsers(first_name, last_name, email, phone, password, role) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        return fetch(BASE_URL + '/' + 'register', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(
                {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    phone: phone,
                    password: password,
                    role: role
                }
            )
        })
    }
}

export default new ApiServices()
