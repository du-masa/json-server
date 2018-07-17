
axios.get('http://localhost:3000/posts').then(function(res) {

    const wrapper = document.querySelector('#wrapper');

    res.data.forEach(function(data) {
        const newDiv = document.createElement("p");
        const newContent = document.createTextNode(JSON.stringify(data));
        newDiv.appendChild(newContent);
        wrapper.appendChild(newDiv);
    });

});
