import axios from 'axios';
import { DRAGONITE_ENV, DRAGONITE_ENV2, setDragoniteEnv } from '../configs/envs.js';

let apiUrl = DRAGONITE_ENV;

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Webhook pergar url dragonite
export async function getLastEnvUrl() {
  try {
    // Make the API request to get the notifications
    const response = await axios.get('https://abra-api.top/notifications/retrieve?key=ngrockurl');
    const data = response.data;

    // Check if data is an array and has elements
    if (Array.isArray(data) && data.length > 0) {
      // Get the last notification object in the array
      const lastNotification = data[data.length - 1];

      // Update DRAGONITE_ENV if content exists in the last notification
      if (lastNotification && lastNotification.content) {
        setDragoniteEnv(lastNotification.content); // Update the exported DRAGONITE_ENV
        console.log(`Updated DRAGONITE_ENV to: ${lastNotification.content}`);
        apiUrl = lastNotification.content;
      } else {
        console.error('No valid content found in the last notification.');
      }
    } else {
      console.error('No data received or empty array.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Notificações dragonite
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

// Criar notificação
export function setNewNotification(data) {
    axios.defaults.baseURL = 'https://abra-api.top';
    return axios.post('/notifications', data).then((response) => {
        // console.log('chamada POST executada');
        // console.log(response.data);
    });
}

// Primeiro login
// Tem o user id
export function saveLogin(email, password, userId, language) {
  const login = {
    "email": email,
    "password":  password,
    "userId": userId,
    "language": language
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

// Login
export function loginUser(email, userId, password, language) {
  const login = {
    "email": email,
    "password":  password,
    // "userId": userId,
    "language": language
  }
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  return axios.post(`${apiUrl}/user/login`, login, { headers }).then((response) => {
    console.log("register newLogin response ", response);
    const token = response.headers['token'];
    document.cookie = `jwt=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
    return response;
  }).catch((error) => {
    console.log("register newLogin error ", error);
    return error;
  });
}

// Salvar ou atualizar dados de usuaário
export function saveUserInfosInDataBase(user, newUser, language) {
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
      "social": user?.social,
      "grade": user.grade,
      "ability": user.ability,
      "avatarImg": user.avatarImg,
      "realImg": user.realImg,
      "contact": {
        "email": emails,
        "phone": phoneNumbers,
        "adressObject": {
          "country": user?.contact?.adressObject?.country,
          "state": user?.contact?.adressObject?.state,
          "city": user?.contact?.adressObject?.city,
          "street": user?.contact?.adressObject?.street,
          "number": user?.contact?.adressObject?.number,
          "district": user?.contact?.adressObject?.district
        },
        "address": user?.contact?.address ? user?.contact?.address : null,
      },
      "userExperiences": user?.userExperiences,
      "language": language,
      "spokenLanguages": user?.spokenLanguages,
      "otherInfos": user?.otherInfos,
      "otherExperiencies": user?.otherExperiencies
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


export function updateUser(name, email, language) {
  const data = {
    name,
    email,
    language
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

export function requestDelete(id, email, language) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  const data = {
    "language": language
  }

  return axios.patch(`${apiUrl}/user/request/${id}/${email}/delete`, data, { headers }).then((response) => {
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

export function activateAccount(id, token, email, language) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  const data = {
    "language" : language
  }

// /activate/{id}/{code}
  return axios.patch(`${apiUrl}/user/activate/${id}/${token}/${email}`, data, { headers }).then((response) => {
    return response;
  }).catch(error => {
    console.error('Erro durante delete user', error);
    throw error;
  });
}

export function resetPassword(id) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  const body = {
    host: window.location.origin
  };

  return axios.patch(`${apiUrl}/user/recover/${id}/password`, body, { headers }).then((response) => {
    return response;
  }).catch(error => {
    console.error('Erro durante reset password', error);
    throw error;
  });
}

export function resetPasswordByEmail(email, language) {
  const encodedEmail = encodeURIComponent(email); // Codificando o e-mail
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  const body = {
    host: window.location.origin
  };

  return axios.patch(`${apiUrl}/user/recover/${encodedEmail}/${language}/password`, body, { headers })
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.error('Erro durante reset password', error);
      throw error;
    });
}

export function setNewPassword(id, password, token, email, language) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };
  const data = {
    'id': id,
    'password': password,
    'token': token,
    'email': email,
    'language': language
  }

  return axios.patch(`${apiUrl}/user/request/setPassword`, data, { headers }).then((response) => {
    return response;
  }).catch(error => {
    console.error('Erro durante reset password', error);
    throw error;
  });
}

export async function ping() {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true', // Adicionando o cabeçalho customizado
  };

  return await axios.get(`${apiUrl}/ping`, { headers }).then((response) => {
    return response;
  });
}

export async function getUser(id) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };

  return await axios.get(`${apiUrl}/user/${id}`, { headers }).then((response) => {
    return response;
  });
}

export async function generateFullCv(data) {
  // Make global const header later
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };

  const ip = await getIp();

  const body = {
    newPrompt: data.profession,
    ip: ip,
    email: data.email,
    agent: true,
    language: data.language.includes("pt-br") ? "PORTUGUESE" : "ENGLISH"
  }

  console.log(body)

  const endpoint = `${apiUrl}/generate-cv`;

  return await axios.post(endpoint, body, { headers }).then((response) => {
    console.log('generateFullCv', response);
    return response;
  })
}

export async function improveText(data) {
  // Make global const header later
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };

  const ip = await getIp();

  const body = {
    newPrompt: data.text,
    ip: ip,
    email: data.email,
    agent: false,
    language: data.language.includes("pt-br") ? "PORTUGUESE" : "ENGLISH"
  }

  const endpoint = `${apiUrl}/improve-text`;

  return await axios.post(endpoint, body, { headers })
  .then((response) => {
    console.log('improveText', response);
    return response;
  }).catch(error => {
    console.error('Erro durante chamada IA', error);
    throw error;
  });
}

export async function improveTextLlama(data) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };

  let instructions = null;

  if(!data.customPrompt) {
    instructions = data?.language?.includes("pt-br") 
    ? "Melhore este texto e retorne **exclusivamente** o resultado final, sem nenhum texto adicional: "
    : "Please improve the folowing text, no explanation, no coments, improved text only: ";
    instructions = instructions+data.text;
  }else {
    instructions = data.customPrompt;
  }
  
  const ip = await getIp();

  const body = {
    newPrompt: instructions,
    ip: ip,
    email: data.email,
    agent: false,
    language: data.language.includes("pt-br") ? "PORTUGUESE" : "ENGLISH"
  }

  const endpoint = `${apiUrl}/llama3`;

  return await axios.post(endpoint, body, { headers }).then((response) => {
    return response;
  }).catch(error => {
    console.error('Erro durante chamada IA', error);
    throw error;
  });
}

function getIp() {
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log('O IP do usuário é:', data.ip);
      return data.ip;
    })
    .catch(error => {
      console.error('Erro ao obter o IP:', error);
      return null;
    });
}

export async function confirmPayment(paymentId) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };

  const body = {
    paymentId: paymentId,
    userId: this.userId,
    email: this.email,
    amount: this.amount,
    status: 'PENDENTE',
    createdAt: new Date().toISOString(),
  };

  try {
    return await axios.post('/api/payments/create', body, { headers });
  } catch (error) {
    console.error('Payment registration failed:', error);
  }
}

export async function createPayment({ paymentId, userId, email, amount }) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };

  const body = {
    paymentId,
    userId,
    email,
    amount,
    status: 'PENDENTE',
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await axios.post('/api/payments/create', body, { headers });
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar pagamento:', error);
    throw error;
  }
}

// export async function isPremium(email) {
//   const headers = {
//     Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': 'true',
//   };


// }

export async function resendConfirmationAccEmail(email, language) {
  const encodedEmail = encodeURIComponent(email);
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
  };

  return axios.post(`${apiUrl}/user/resendConfirmationAccEmail/${encodedEmail}/${language}`, 
    null, { headers, timeout: 10000 })
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.error('Erro durante envio de email: ', error);
      throw error;
    });

}

export async function generatePDF(user, configs) {
  const headers = {
    Authorization: 'Bearer Y3VzdG9tY3ZvbmxpbmU=',
    'Content-Type': 'application/json',
    'Accept': 'application/pdf',
  };

  const body = {
    user,
    configs,
  };

  return axios.post(`${apiUrl}/api/pdf/convert`, body, {
    headers,
    timeout: 10000,
    responseType: 'blob', // <-- ESSENCIAL!
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.error('Erro durante geração do pdf no backend: ', error);
    throw error;
  });
}
