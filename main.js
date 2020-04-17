const cont = document.getElementsByClassName('cont');

function accordion() {
    for (let item of cont) {
        let first = item.firstElementChild;
        first.addEventListener('click', function() {
            let second = this.nextElementSibling;
            if (second.style.maxHeight) {
                second.style.maxHeight = null;
            } else {
                second.style.maxHeight = second.scrollHeight;
            }
        });
    }
}

accordion();