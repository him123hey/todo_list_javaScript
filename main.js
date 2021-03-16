var time = new Date();
function addlist() {
    let title = document.getElementById("text").value;
    let key = time.getTime();
    console.log(key);
    if (title) {
        localStorage.setItem(key, title);
        location.reload();
    }
}
function remove() {
    let id = document.querySelector("#remove").value;
    localStorage.removeItem(id);
    location.reload();
}
let test = Object.entries(localStorage);
test.sort(function (a, b) {
    return a[0] - b[0];
})
console.log(test);
test.forEach(element => {
    console.log(element[0]);
    document.querySelector(".card").innerHTML += `
        <span><input id="remove" disabled type="checkbox" value='${element[0]}'>${element[1]} <a href="#" onClick="remove()">Remove</a></input></span><br>
    `
});
