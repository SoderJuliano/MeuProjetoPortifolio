export function setNewNotification(data) {
    return axios.post('/notifications', data).then((response) => 
    {
        console.log(response)
    })
}
