if (localStorage.getItem('myList') == null) {
    var myList = {};
} else {
    myList = JSON.parse(localStorage.getItem('myList'));
}

updateList();

function updateList(myList) {
    let points_str = document.getElementById('points');
    let points = JSON.parse(localStorage.getItem('myList'));
    points_str.innerHTML = points;
}

/*document.querySelectorAll('.addNewBtn').forEach(item => {
    item.addEventListener('click', event => {
        let points = JSON.parse(localStorage.getItem('myList'));
        points += 1;
        localStorage.setItem('myList', JSON.stringify(points));
        updateList();
    })
});*/

$('.addSection').on('click', 'button.addNewBtn', function () {
    let points = JSON.parse(localStorage.getItem('myList'));
    points += 1;
    localStorage.setItem('myList', JSON.stringify(points));
    updateList();
});

$('.addSection').on('click', 'button.resetBtn', function () {
    localStorage.clear();
    window.location.reload();
});