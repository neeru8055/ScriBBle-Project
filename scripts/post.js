const container = document.querySelector('.container');
const nm = sessionStorage.getItem('name');
const title = sessionStorage.getItem('title');
const content = sessionStorage.getItem('content');

//title
const h4 = document.createElement("h4");
h4.innerText = title;

//name and edit/save button
const div1 = document.createElement('div');
div1
    .classList
    .add('first');
const h6 = document.createElement('h6');
h6.innerText = nm;
const btn1 = document.createElement('button');
btn1.id = 'edit-save';
btn1
    .classList
    .add('btn');
btn1
    .classList
    .add('btn-pink');
btn1.value = "edit";
btn1.innerHTML = 'Edit';
const edit = document.createElement('i');
edit
    .classList
    .add('fas');
edit
    .classList
    .add('fa-edit');
edit
    .classList
    .add('ml-1');
btn1.appendChild(edit);
div1.appendChild(h6);
div1.appendChild(btn1);

//content
const div2 = document.createElement('div');
div2
    .classList
    .add('content');
div2.setAttribute('contenteditable', 'false');
div2.innerText = content;

//like
const div3 = document.createElement('div');
div3
    .classList
    .add('second');
const btn2 = document.createElement('button');
btn2
    .classList
    .add('btn');
btn2
    .classList
    .add('btn-pink');
btn2.id = "like";
const like = document.createElement('i');
like
    .classList
    .add('fas');
like
    .classList
    .add('fa-thumbs-up');
btn2.appendChild(like);
const span = document.createElement('span');

if (localStorage.getItem(sessionStorage.getItem('postNo')) == 'false') 
    span.innerText = 'Like';
else 
    span.innerText = 'Liked';

span
    .classList
    .add('ml-1');
btn2.appendChild(span);
const p = document.createElement('p');
p.innerText = 'Be the first to like';
p
    .classList
    .add('mt-3');
div3.appendChild(btn2);
div3.appendChild(p);
container.appendChild(h4);
container.appendChild(document.createElement('br'));
container.appendChild(div1);
container.appendChild(document.createElement('br'));
container.appendChild(div2);
container.appendChild(document.createElement('br'));
container.appendChild(div3);
container.appendChild(document.createElement('br'));

const postComment = document.getElementById('post');
postComment.addEventListener('click', () => {
    const div = document.createElement('div');
    const com = document
        .getElementById('comment')
        .value;
    div.innerText = com;
    div
        .classList
        .add('mb-2');
    div.style.backgroundColor = 'whitesmoke';
    div.style.padding = '0.5rem';
    document
        .getElementById('seeComments')
        .appendChild(div);
});

const a = document.getElementById("like");
a.addEventListener('click', () => {
    if (localStorage.getItem(sessionStorage.getItem('postNo')) === 'false') {
        a
            .querySelector("span")
            .innerText = "Liked";
        localStorage.setItem(sessionStorage.getItem('postNo'), true);
        localStorage.setItem('0' + sessionStorage.getItem('postNo'), 1);
        a
            .parentElement
            .querySelector('p')
            .innerText = "1 person has liked this post."
    } else {
        const likes = '0' + sessionStorage.getItem('postNo');
        let c = parseInt(localStorage.getItem(likes));
        c++;
        localStorage.setItem(likes, c);
        console.log();
        a
            .parentElement
            .querySelector('p')
            .innerText = localStorage.getItem(likes) + " people have liked this post."
    }
});

const editBtn = document.getElementById('edit-save');
editBtn.addEventListener('click', () => {
    if (editBtn.value === 'edit') {
        editBtn.value = 'save';
        editBtn.innerText = 'Save';
        const save = document.createElement('i');
        save
            .classList
            .add('fas');
        save
            .classList
            .add('fa-save');
        save
            .classList
            .add('ml-1');
        editBtn.appendChild(save);
        document.querySelector('.content').setAttribute('contenteditable', 'true');
        document.querySelector('.content').focus();
        
    } else {
        editBtn.value = 'edit';
        editBtn.innerText = 'Edit';
        const edit = document.createElement('i');
        edit
            .classList
            .add('fas');
        edit
            .classList
            .add('fa-edit');
        edit
            .classList
            .add('ml-1');
        editBtn.appendChild(edit);
        document.querySelector('.content').setAttribute('contenteditable', 'false');
        document.querySelector('.content').blur();
    }
});