let numOfTask = 3;

let input = document.getElementById("new-task");
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addA();
  }
});

function addA() {
  let textnode = document.getElementById("new-task").value;

  if (textnode !== "") {
    numOfTask++;

    let checkBox = document.createElement("I");
    checkBox.className = "material-icons";
    let icon = document.createTextNode("check_box_outline_blank");
    checkBox.appendChild(icon);
    checkBox.id = "checkBox";

    let taskItSelf = document.createElement("SPAN");
    taskItSelf.textContent = textnode;
    let newItem = document.createElement("LI");
    newItem.appendChild(taskItSelf);

    newItem.className = "work";
    document.getElementById("list").appendChild(newItem);
    newItem.id = `item-${numOfTask}`;

    let binIcon = document.createElement("I");
    let iconType = document.createTextNode("delete");

    binIcon.appendChild(iconType);
    newItem.appendChild(binIcon);
    newItem.insertBefore(checkBox, newItem.childNodes[0]);

    binIcon.className = "material-icons";
    binIcon.id = "delete";

    binIcon.addEventListener("click", function () {
      bin(newItem.id);
    });

    checkBox.addEventListener("click", function () {
      check(checkBox);
    });

    newItem.addEventListener("click", function () {
      innerCheck(newItem);
    });

    document.getElementById("new-task").value = "";
  }
}

function bin(work) {
  document.getElementById(work).remove();
}

function check(box) {
  let checkBox = document.createElement("I");
  let iconType = document.createTextNode("check_box");
  checkBox.className = "material-icons";
  checkBox.id = "checkBox";
  checkBox.style.color = " #58b847";

  checkBox.appendChild(iconType);
  box.parentNode.insertBefore(checkBox, box.parentNode.childNodes[0]);

  box.remove();
}

function innerCheck(wholeRow) {
  console.log(wholeRow.childNodes);
  check(wholeRow.childNodes[0]);
  if (wholeRow.childNodes.length == 5) {
    wholeRow.childNodes[1].remove();
  }
  wholeRow.childNodes[1].style.textDecoration = "line-through";
}
