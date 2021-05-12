
function initList() {
  // Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createElement('span');
    t.classList.add('value');
    t.innerHTML = inputValue;
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
}


function save() {
  let listElements = document.querySelectorAll('#myUL li');
  let data = [];

  for (let i = 0; i < listElements.length; i++) {
    let element = listElements[i].querySelector('.value');
    data.push({
      content: element.innerText,
      checked: listElements[i].classList.contains('checked')
    });
  }

  localStorage.setItem('data', JSON.stringify(data));
  console.log('save data', data);
}

function load() {
  let dataString = localStorage.getItem('data');
  data = JSON.parse(dataString);
  console.log('loaded data', data);
}


document.addEventListener('DOMContentLoaded', function() {
  initList();

  // save und load müssen noch an die richtigen Stellen gesetzt werden. 
  // Jetzt nutzen wir es gerade noch zum Testen, ob die Daten richtig geladen und gespeichet werden.
  load();
  save();
});

