
axios({
    method: 'POST',
    url:'http://localhost:3000/posts',
    data: {
        'title': 'react' + Math.round((Math.random() * 10)),
        'author': 'facebook' + Math.round((Math.random() * 10))
    }
}).then(function(res) {

    const wrapper = document.querySelector('#wrapper');

    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(JSON.stringify(res.data));
    newDiv.appendChild(newContent);
    wrapper.appendChild(newDiv);

});
