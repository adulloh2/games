let btns = document.querySelectorAll('button');
//console.log(btns);

btns.forEach(item => {
    item.addEventListener("click", () => {
        localStorage.setItem('CarsName',item.parentElement.parentElement.children[1].innerHTML);
        localStorage.setItem('CarsInfo',item.parentElement.parentElement.children[3].children[0].innerHTML);
        localStorage.setItem('CarsImage', item.parentElement.parentElement.children[2].children[0].src);
        localStorage.setItem('CarsPrice',item.parentElement.parentElement.children[4].children[0].innerHTML);
        location = 'page.html';
    });
});