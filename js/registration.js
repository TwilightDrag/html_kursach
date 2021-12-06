function addphone() {
    var node = document.createElement("input");
    node.name = "phone";
    node.placeholder = "Enter phone number";
    node.type = "text";
    var span = document.createElement("div");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    document.getElementsByClassName("phone")[0].appendChild(node).appendChild(span);
}

function Complete() {
    var Elem = "Email: " + document.Sel1.Email.value +
        "\nПароль: " + document.Sel1.psw.value +
        "\nповтор пароля: " + document.Sel1.pswrepeat.value +
        "\nТелефон: " + document.Sel1.phone.value;
    if(document.Sel1.psw.value != document.Sel1.pswrepeat.value)
        alert("Пароли не совпадают!");
    else alert(Elem);
}


