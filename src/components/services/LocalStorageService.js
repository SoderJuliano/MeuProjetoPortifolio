
export function setAccActived(email, id) {
    const emailActived = {
        'email': email,
        'id': id
    }
    const encodedData = btoa(JSON.stringify(emailActived));
    localStorage.setItem('actived', encodedData);
}

export function getAccActived() {
    const encodedData = localStorage.getItem('actived');
    if (encodedData) {
        const decodedData = atob(encodedData); // Decode the Base64 string
        return JSON.parse(decodedData); // Parse the JSON string back into an object
    }
    return null; // Return null if no data is found
}

export function getAccActivedId() {
    const actived = getAccActived();
    if (actived) {
        return actived.id;
    }
    return null;
}

export function getAccActivedEmail() {
    const actived = getAccActived();
    if (actived) {
        return actived.email;
    }
    return null;
}

export function setNoNewUser() {
    localStorage.setItem('notNew', true);
}

export function setNewUser() {
    localStorage.removeItem('notNew');
}

export function isNOTANewUser() {
    return localStorage.getItem('notNew')
}

export function getUserPT() {
    return JSON.parse(localStorage.getItem('user-pt'));
}

export function getUserEN() {
    return JSON.parse(localStorage.getItem('user-en'));
}
