window.onload = function (event) {
    
    let page = document.querySelector('.chapter-page')
    let mangapage = document.querySelector('.page-container img')
    setTimeout(() => {
    //     mangapage.classList.remove('is-entering')
        // mangapage.classList.add('is-leaving');
        mangapage.classList.add('is-entering')
    }, 500);


    let pageNavigator = document.querySelectorAll('.page-nav a')
    pageNavigator.forEach( (el) => {

        el.addEventListener('click', (e) => {

            e.preventDefault();
            const target = e.currentTarget.href;

            mangapage.classList.add('is-leaving');
            mangapage.classList.remove('is-entering');

            setInterval(() => {
                window.location.href = target;
            }, 500);
        })
    })

}