import axios from 'axios';
import { DRAGONITE_ENV } from '../configs/envs.js';

const apiUrl = DRAGONITE_ENV;

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export function getDragoniteMesseges(key) {
  axios.defaults.baseURL = 'https://abra-api.top';
  return axios.get(`/notifications/retrieve?key=${key}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching messages:', error);
    });
}

export function setNewNotification(data) {
    axios.defaults.baseURL = 'https://abra-api.top';
    return axios.post('/notifications', data).then((response) => {
        // console.log('chamada POST executada');
        // console.log(response.data);
    });
}

export function saveLogin(email, password, userId) {
  const login = {
    "email": email,
    "password":  password,
    "userId": userId
  }
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };
  return axios.post(`${apiUrl}/user/register`, login, { headers }).then((response) => {
    console.log("register newLogin response ", response);
    return response;
  }).catch((error) => {
    console.log("register newLogin error ", error);
    return error;
  });
}

export function loginUser(email, userId, password) {
  const login = {
    "email": email,
    "password":  password,
    "userId": userId
  }
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  return axios.post(`${apiUrl}/user/login`, login, { headers }).then((response) => {
    console.log("register newLogin response ", response);
    return response;
  }).catch((error) => {
    console.log("register newLogin error ", error);
    return error;
  });
}

export function saveUserInfosInDataBase(user, newUser) {
  let phoneNumbers = [];
  let emails = [];

  if (user.contact && user.contact.email !== null) {
    if (typeof user.contact.email === 'string') {
      emails.push(user.contact.email);
    } else if (Array.isArray(user.contact.email)) {
      emails = emails.concat(user.contact.email.filter(email => typeof email === 'string'));
    }
  }else {
    return;
  }
  if (user.contact && user.contact.phone !== null) {
    if (typeof user.contact.phone === 'string') {
      phoneNumbers.push(user.contact.phone);
    } else if (Array.isArray(user.contact.phone)) {
      phoneNumbers = phoneNumbers.concat(user.contact.phone.filter(phone => typeof phone === 'string'));
    }
  }

    let data = {
      "name": user.name,
      "profession": user.profession,
      "resume": user.resume,
      "competence": user.competence,
      "social": user.social,
      "grade": user.grade,
      "ability": user.ability,
      "avatarImg": user.avatarImg,
      "realImg": user.realImg,
      "contact": {
        "email": emails,
        "phone": phoneNumbers,
        "address": {
          "country": user?.contact?.adressObject?.country,
          "state": user?.contact?.adressObject?.state,
          "city": user?.contact?.adressObject?.city,
          "street": user?.contact?.adressObject?.street,
          "number": user?.contact?.adressObject?.number,
          "district": user?.contact?.adressObject?.district
        },
        "adressAsString": user?.contact?.addressObject ? JSON.stringify(user.contact.addressObject) : null,
      },
    }

    const headers = {
      Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
      'Content-Type': 'application/json',
    };

    if(newUser) {
      return axios.post(`${apiUrl}/user`, data, { headers }).then((response) => {
        // console.log('chamada POST executada');
        // console.log(response.data);
        return response;
      }).catch(error => {
          // console.log('chamada POST executada');
          // console.log(error);
          return error.response;
      });
    } else {
      data._id = user.id;
      return axios.put(`${apiUrl}/user`, data, { headers }).then((response) => {
        // console.log('chamada PUT executada');
        // console.log(response.data);
        return response;
      }).catch(error => {
          // console.log('chamada PUT executada');
          // console.log(error);
          return error.response;
      });
    }
}


export function updateUser(name, email) {
  const data = {
    name,
    email,
  };

  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  const params = {
    name,
    email,
  };

  return axios.patch(`${apiUrl}/user`, data, { headers, params }).then((response) => {
    // console.log('chamada PATCH executada');
    // console.log(response.data);
    return response;
  }).catch(error => {
      // console.log('chamada PATCH executada');
      // console.log(error);
      return error.response;
  });
}

export function requestDelete(id) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  return axios.patch(`${apiUrl}/user/request/${id}/delete`, null, { headers }).then((response) => {
    // console.log('chamada DELETE executada');
    // console.log(response.data);
    return response;
  }).catch(error => {
    console.error('Erro during request delete', error);
  });
}

export function deleteUser(id, token) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  return axios.delete(`${apiUrl}/user/delete/${id}/${token}`, { headers }).then((response) => {
    // console.log('chamada DELETE executada');
    // console.log(response.data);
    return response;
  }).catch(error => {
    console.error('Erro durante delete user', error);
  });
}

export function activateAccount(id, token, email) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };
// /activate/{id}/{code}
  return axios.patch(`${apiUrl}/user/activate/${id}/${token}/${email}`, null, { headers }).then((response) => {
    return response;
  }).catch(error => {
    console.error('Erro durante delete user', error);
    throw error;
  });
}
