// so much empty
const result = document.getElementById("postList");
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');
const postForm = document.getElementById('postForm');
const fetchButton = document.getElementById('fetchButton');

fetchButton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        response.json().then((data) => {
            for(let user in data) {
                result.innerHTML += `<h3>Title: ${data[user].title}</h3>
                <br />
                <p> ${data[user].body}</p>`;
            }
        console.log(data);
        })
    })
})


postForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    let titleInputText = titleInput.value;
    let bodyInputText = bodyInput.value;
    console.log(titleInputText);
    console.log(bodyInputText);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: new URLSearchParams({title: `${titleInputText}`, body: `${bodyInputText}`})
    })
})