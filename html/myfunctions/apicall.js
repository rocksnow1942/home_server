function createListNode(data,error) {
    var node = document.createElement("li");
    node.setAttribute("class", error?"response-list-item error":"response-list-item");
    node.appendChild(document.createTextNode(`${new Date().toLocaleTimeString()} > `+JSON.stringify(data)))
    return node
}

function fetchAPI(url,method,data) {
    let status;
    fetch(url,{
        method: method,
        ...data
    })
    .then(response => {
        status = response.status;
        return response.json()})
    .then(data => {
        if (status !== 200) {
            throw new Error(`Status code ${status}, ${JSON.stringify(data)}`);
        } else {
            display.prepend(createListNode(data));
        }   
    })
    .catch(error => {
        display.prepend(createListNode(`${error}`,true));
    })
    

}



const display = document.getElementById('response-display');




document.getElementById('make-call')
.addEventListener('click', () => {
    fetchAPI('http://api.pi.hole/','GET',{});    
})



document.getElementById('cause-error')
.addEventListener('click', () => {
    fetchAPI('http://api.pi.hole/errorasdf','GET',{});
})




/*clear message*/
document.getElementById('clear')
.addEventListener('click', () => {
    display.innerHTML = '';
})