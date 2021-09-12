var makeCall = document.getElementById('make-call');
makeCall.addEventListener('click', () => {
    fetch('http://api.pi.hole/',{
        method: 'GET',
        
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
})