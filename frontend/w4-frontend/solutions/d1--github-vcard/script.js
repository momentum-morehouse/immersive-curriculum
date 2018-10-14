import request from 'superagent';

const _id = document.getElementById.bind(document);

request('https://api.github.com/users/cndreisbach')
    .then(response => response.body)
    .then(body => {
        _id("name-header").innerText = body.name;
        _id("name").innerText = body.name;
        _id("github-url").innerHTML = `<a href="${body.html_url}">${body.login}</a>`;
        _id("company").innerText = body.company;
        _id("website").innerHTML = `<a href="${body.blog}">${body.blog}</a>`;
        _id("avatar-image").src = body.avatar_url;
        _id("bio").innerText = body.bio || "not available";
    })
