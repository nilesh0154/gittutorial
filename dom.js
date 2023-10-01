
// //getelementsbyclassname

// var items = documents.getElementsByClassName('list-group-item');

// console.log(items);

// console.log(items[2]);
// items[2].style.backgroundcolor = 'green';

//getelementsbytagname

var li = documents.getElementsByTagName('li');

console.log(li);

console.log(li[2]);
li[2].style.backgroundcolor = 'green';

//queryselector

var secondItem = document.querySelector('list-group-item:nth-child2');
secondItem.style.backgroundcolor = 'green';

var thirdItem = document.querySelector('list-group-item:nth-child3');
thirdItem.style.font = 'invisible';