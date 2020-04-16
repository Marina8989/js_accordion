const container = document.getElementsByClassName('container_question');

function x() {
    for (let item of container) {
        item.addEventListener("click", function() {
            console.log(item);
        });
    }

}
console.log(x());