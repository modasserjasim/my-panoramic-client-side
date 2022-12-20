export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch('https://my-panorama.vercel.app/jwt', {
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
            console.log(data.token);
            localStorage.setItem('panorama-token', data.token);
        })
}