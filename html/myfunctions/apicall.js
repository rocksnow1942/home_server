function createListNode(data) {
    var node = document.createElement("li");
    node.setAttribute("class", "response-list-item");
    node.appendChild(document.createTextNode(`${new Date().toLocaleTimeString()} > `+JSON.stringify(data)))
    return node
}


const display = document.getElementById('response-display');




document.getElementById('make-call')
.addEventListener('click', () => {
    fetch('http://api.pi.hole/',{
        method: 'GET',
        
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        display.prepend(createListNode(data));
    })
    .catch((error) => {
        console.log(error);
    })
})

document.getElementById('clear')
.addEventListener('click', () => {
    display.innerHTML = '';
})