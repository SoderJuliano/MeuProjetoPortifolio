import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export function setNewNotification(data) {
    axios.defaults.baseURL = 'https://abra-api.top';
    return axios.post('/notifications', data).then((response) => {
        // console.log('chamada POST executada');
        // console.log(response.data);
    });
}

export function saveUserInfosInDataBase(user, newUser) {
  let phoneNumbers = [];

  if (user.contact && user.contact.phone !== null) {
    if (typeof user.contact.phone === 'string') {
      phoneNumbers.push(user.contact.phone);
    } else if (Array.isArray(user.contact.phone)) {
      phoneNumbers = phoneNumbers.concat(user.contact.phone.filter(phone => typeof phone === 'string'));
    }
  }

  let emails = [];

  if (user.contact && user.contact.email !== null) {
    if (typeof user.contact.email === 'string') {
      emails.push(user.contact.email);
    } else if (Array.isArray(user.contact.email)) {
      emails = emails.concat(user.contact.email.filter(email => typeof email === 'string'));
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
      return axios.post("http://localhost:5200/user/", data, { headers }).then((response) => {
        console.log('chamada POST executada');
        console.log(response.data);
      }).catch(error => {
          console.log('chamada POST executada');
          console.log(error);
      });
    } else {
      data._id = user.id;
      return axios.put("http://localhost:5200/user/", data, { headers }).then((response) => {
        console.log('chamada PUT executada');
        console.log(response.data);
      }).catch(error => {
          console.log('chamada PUT executada');
          console.log(error);
      });
    }
}
// export function teste2() {
//     const data = {
//         "name": "string",
//         "profession": "string",
//         "resume": "string",
//         "competence": [
//           "string"
//         ],
//         "social": [
//           "string"
//         ],
//         "grade": [
//           "string"
//         ],
//         "ability": "string",
//         "avatarImg": "string",
//         "realImg": "string",
//         "contact": {
//           "email": [
//             "string"
//           ],
//           "phone": [
//             "string"
//           ],
//           "address": {
//             "country": "string",
//             "state": "string",
//             "city": "string",
//             "street": "string",
//             "number": "string",
//             "district": "string"
//           },
//           "adressAsString": "string"
//         }
//       };
//       console.log('req', data)
//       axios.post('http://localhost:5200/user/', data, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       }).then((response) => {
//         console.log('Response:', response.data);
//       }).catch((error) => {
//         console.error('Error:', error);
//       });
// }