let myul = document.querySelector("#myul");
let form = document.querySelector("#form");
let input = document.querySelector("#inputField");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (input.value == "") {
        alert("empty form")
    }
    else {
        $.ajax({
            
        });
    }
})

render();
function render() {
    $.ajax({
        type: "GET",
        url: "getTodo.php",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                let li = document.createElement("li");
                let cancel = document.createElement("button");
                let complete = document.createElement("button");
                li.innerHTML = data[i].body
                cancel.innerHTML = "❌";
                complete.innerHTML = "✔";
                li.append(cancel, complete);
                myul.append(li);

            }
        }
    });
}

