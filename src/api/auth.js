export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch('http://localhost:4000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log('my data', data);
            //save the token to local storage
            localStorage.setItem('panorama-token', data.token);
        })
}