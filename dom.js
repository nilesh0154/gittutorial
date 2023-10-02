
// //getelementsbyclassname

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';

// console.log(items[2]);
// items[2].style.backgroundColor = 'green';

// //getelementsbytagname

// var li = document.getElementsByTagName('li');

// console.log(li);

// console.log(li[2]);
// li[2].style.backgroundColor = 'green';

// // QuerySelector

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// //QuerySelectorAll

// var secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
// for (var i = 0; i < secondItem.length; i++) {
//   secondItem[i].style.color = 'green';
// }

// var oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for (var i = 0; i < oddItems.length; i++) {
//   oddItems[i].style.backgroundColor = 'green';
// }


//parentElement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//lastelementchild
console.log(itemList.lastElementChild);

//lastchild
console.log(itemList.lastChild);


//firstelementchild
console.log(itemList.firstElementChild);

//firstchild
console.log(itemList.firstChild);

//nextsibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);


//hello world before item lister
//createelement
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//setAttribute
newDiv.setAttribute('title', 'Hello Div');


//createtesxtnode
var newDivText = document.createTextNode('Hello World');

//appendchild
newDiv.appendChild(newDivText);


var container = document.querySelector('.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);





//hello world before item 1

//createelement
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello2';

//setAttribute
newDiv.setAttribute('title', 'Hello Div');


//createtesxtnode
var newDivText = document.createTextNode('Hello World');

//appendchild
newDiv.appendChild(newDivText);


var list = document.querySelector('.list-group');

var item1 = document.querySelector('.list-group-item:first-child');

console.log(newDiv);

list.insertBefore(newDiv, item1);