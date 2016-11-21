// Creating the "close" button and adding it to every LI item
var userList = document.getElementsByTagName('LI');
var i;
for (i = 0; i < userList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createElement('img');
  txt.src = "images/delete.png";
  span.className = "done";
  span.appendChild(txt);
  userList[i].appendChild(span);
}

// If List is empty, throw text into the center saying to start at the top
// if (userList.length <= 0) {
//  var sm = document.createElement("H1");
//  var startMessage = document.createTextNode("ENTER SOMETHING UP TOP TO BEGIN A LIST");
//  sm.appendChild(startMessage);
//  document.body.appendChild(sm);
//  console.log("userList is empty");
// }

// Click trash can to delete item
var close = document.getElementsByClassName('done'); // pulling spanned done class name from above function
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add check when a list item is clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(doneToggle) {
  if (doneToggle.target.tagName === 'LI') {
    doneToggle.target.classList.toggle('checked');
  }
}, false);

// Add item to list when add button is clicked
function newItem() {
  var li = document.createElement('LI');
  var inputValue = document.getElementById('userInput').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must have something you have to do..')
  } else {
    document.getElementById("userList").appendChild(li);
  }
  document.getElementById('userInput').value = "";

  // FIX THIS SHIT
  // if (document.getElementsByTagName('li').length) {
  //  document.body.removeChild(sm);
  // } else if (!document.getElementsByTagName('li')) {
  //  document.body.appendChild(sm);
  // }

  // Appending the button to the list when added
  var span = document.createElement('SPAN');
  var txt = document.createElement('img');
  txt.src = "images/delete.png";
  span.className = "done";
  span.appendChild(txt);
  li.appendChild(span);

  // Telling the new list items the remove button has a function
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
