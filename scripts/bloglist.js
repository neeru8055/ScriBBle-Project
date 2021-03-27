const a = document.querySelectorAll('.fa-ellipsis-h');
a.forEach((val) => {
    val.addEventListener('click', () => {
        const grandparent = val.parentElement;
        const name = grandparent.querySelector('.poster').innerText;
        const title = grandparent.querySelector('h6').innerText;
        const content = grandparent.querySelector('p').innerText;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('title', title);
        sessionStorage.setItem('content', content);
        sessionStorage.setItem('postNo', grandparent.id);
        window.location.href = '../html/post.html';
    });
    const parent = val.parentElement;
    if(!localStorage.getItem(parent.id)) {
        localStorage.setItem(parent.id, false);
    }
});