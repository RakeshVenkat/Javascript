// getElementById() gives back only one element
const imageEl = document.getElementById('image__cracker');

// getElementsByTagName() provides an HTMLCollection[]
const listItems = document.getElementsByTagName('li');
listItems[0].style.color = 'orange';
listItems[1].style.color = 'orange';
listItems[2].style.color = 'orange';
listItems[3].style.color = 'orange';

// QuerySelectorAll gets you the nodeList !!
// nodeList gives a forEach function to iterate over the items now
const nodes = document.querySelectorAll('ol li.pooja-item');
nodes.forEach((node) => {
	node.style.color = 'gold';
	node.style.backgroundColor = 'black';
});

// getElementsByClassName: provides a HTMLCollection array like object
// You need to access the elements within the collection to get the element
const formEl = document.getElementsByClassName('booking');
console.log(formEl); // HTML Collection []
const formElements = [ ...formEl ];
formElements[0].style.border = '2px solid yellow';

// QuerySelector is the swiss knife of all dom selctor functions.
// Select based on the CSS selector
const ul = document.querySelector('ul');
const body = document.querySelector('body');

// Body can be selected directly from the document
const bodyEl = document.body;

const h1 = document.getElementsByTagName('h1')[0];
const form = document.getElementsByTagName('form')[0];

// Innerttext vs textContent
// InnerText : gets all text within all elments (even nested) for that element
// textContent: Almost same as innerText. It also gets the content within script tags, ignore style attributes (ex: display: none)
// textContent is hence slightly faster than innertText.

// gets all the text from all the elements within the body
// minus the script, display: none
const alltextWithinBodyInAllElements = body.innerText;
console.log(alltextWithinBodyInAllElements);

const allElinBodyWithFormatting = bodyEl.textContent;
console.log(allElinBodyWithFormatting);

const listItemsWithinUl = ul.innerText;
console.log(listItemsWithinUl);

imageEl.style.border = '10pc solid purple';
const imageText = imageEl.innerText;
console.log(`The text of an image has be empty: ${imageText} !!`);

const formText = formEl.innerText;
console.log(formText);

// innerHTML: If you want to add elements into an element
let forminnerHTML = form.innerHTML;
console.log(forminnerHTML); // gets all the html with the tags
//forminnerHTML = '<input type="text">'
form.innerHTML = '<input type="text">'; // Overwrites the form elements now!!

console.log(h1.innerHTML);
h1.innerHTML += ' <em>(BOOK HERE)</em>';
h1.innerText += '<b>!!</b>';
// innerHTML parses the HTML elements while innerText doesn't

// value attribute
const bookingForm = document.getElementById('form--booking');
bookingForm.style.padding = '50px';
bookingForm.style.border = '2px solid orange';
const formInputs = bookingForm.getElementsByTagName('input');
formInputs[0].placeholder = 'Provide a valid address';
console.log('The read value from input using value:', formInputs[0].value);
formInputs[1].checked = true;

const a = document.querySelectorAll('a');
a.forEach((el) => {
	const linkName = `${el.innerText}`;
	el.href = `http://www.melbournepoojabooking.com/${linkName}`;
});

// Get Attribute : Get an attribute for attribute that dont have an accessible property
// Set Attribute :
const range = document.querySelector('input[type="range"]');
let min = range.getAttribute('min');
console.log(`The set minimum is: ${min}`);
let max = range.getAttribute('max');
console.log(`The set minimum is: ${max}`);
range.setAttribute('min', '$100');
range.setAttribute('max', '$5000');
min = range.getAttribute('min');
console.log(`The set minimum is: ${min}`);
max = range.getAttribute('max');
console.log(`The set minimum is: ${max}`);

// Traversal: Sibling, parents, children
const poojaItemLi = document.querySelector('.pooja-item');
// Keep tarversing till you get null. Parent of HTML is null
let noOfParentsTillRoot = 0;
let parentEl = poojaItemLi.parentElement;
while (parentEl !== null) {
	noOfParentsTillRoot++;
	parentEl = parentEl.parentElement;
}
console.log(`The total parent elements till the root is : ${noOfParentsTillRoot}`);

const root = poojaItemLi.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
console.log(`The Root element shall always be ${root}`);

// children
const ulChildren = ul.children;

const firstUlChild = ulChildren[0];
// nextElementSibling: gets the sibling element
console.log(`firstUlChild.nextSibling: ${firstUlChild.nextSibling}`);
console.log(`firstUlChild.innerText: ${firstUlChild.innerText}`);
const secondUlChild = firstUlChild.nextElementSibling;
console.log(`2nd element: ${secondUlChild.innerText}`);
const thirdUlChild = secondUlChild.nextElementSibling;
console.log(`3rd element: ${thirdUlChild.innerText}`);
const fourthUlChild = thirdUlChild.nextElementSibling;
console.log(`3rd element: ${fourthUlChild.innerText}`);
// previousElementSibling
console.log(
	`fourthUlChild.previousElementSibling === thirdUlChild: ${fourthUlChild.previousElementSibling === thirdUlChild}`
);

// Selecting Multiple Elements
const allLis = document.querySelectorAll('li');
allLis.forEach((eachLi, i) => {
	console.log(`${i}: ${eachLi.innerText}`);
	eachLi.style.fontSize = '25px';
	//eachLi.innerHTML='<b>We are the champions</b>'
});

// Changing styles using JS:
// 1) use the style property: One at a time : marks those as inline :
h1.style.textTransform = 'uppercase';
console.log(`The style prop will be empty unless it has benn set inline: Like h1.style.color: ${h1.style.color}`);
// Note: in JS the style properties are all camelCased.
//const b-w = 'i' // thats invalid // Uncaught SyntaxError: Missing initializer in const declaration
console.log(h1.style);
// How do you change many properties ?? one at a time?

// 2) getComputedStyle: gets the computed style props (even defaults are captured)
const h1Styles = getComputedStyle(h1);
console.log(`${h1Styles.fontSize} ${h1Styles.color}`);

const menu = document.querySelector('menu');
menu.setAttribute('class', 'background');
//menu.setAttribute('class', 'border') // This overwrites the previous attribute
// GOTCHA !! We need to apply both the classes in one selection
menu.removeAttribute('class', 'background'); // removeAttribute removes the class attribute
menu.setAttribute('class', 'background border'); // need to append both

//3) classList
// Use the classlist to append to the list of classes
const carImages = document.querySelectorAll('#my-cars-wishlist img');
carImages.forEach((el) => {
	el.classList.add('car-image');
	el.nextElementSibling.classList.add('car-name');
});
menu.classList.add('border-radius', 'margin'); // classList.add -> to add classes (append)
menu.classList.remove('margin'); // classList.remove -> to remove the class

// Create element and append
// NOTE: CreateElement creates an object (still not in dom)
// NOTE: Use innerHTML/ innerText / textContent to add content into element ( still not in DOM!!)
const carSpec = document.getElementById('car-specs');
const childP = document.createElement('p');
childP.innerHTML = '<b>Engine Type</b>  <span>Diesel turbo<span>';
const childP1 = document.createElement('p');
childP1.innerHTML = '<b>Variant</b> 7 LS (FWD) (5YR)';
const childP2 = document.createElement('p');
childP2.innerHTML = '<b>Year</b> 2019';
const childP3 = document.createElement('p');
childP3.innerHTML = '<b>Dealer Retail</b> $25,070 - $29,810';
const childP4 = document.createElement('p');
childP4.innerHTML = '<b>Fuel Consumption</b> 7.6L / 100km';

// Insert the dom objects into the DOM by any of :
// append(), appendChild(), insertBefore(), insertAdjacentElement(), insertAdjacentHTML(), insertAdjacentText()
carSpec.appendChild(childP); // format: parentElement.appendChild(<childToInsert>) : Inserts at the end
carSpec.insertBefore(childP1, childP); // format: parentElement.insertBefore(<childToInsert>,<referenceChildToInsert>)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
carSpec.insertAdjacentElement('beforeend', childP3); // beforeEnd adds to first position in siblings
carSpec.insertAdjacentHTML('afterBegin', '<b>Year</b> 2019'); // afterEnd takes it to the end of list
carSpec.append([childP4, childP1, childP3]); // add at end of list
carSpec.insertAdjacentHTML('afterend', '<hr/>');

carSpec.insertAdjacentHTML('beforeend', '<p><b>Towing Capacity</b> Brake:1700  Unbrake:750</p>');
carSpec.insertAdjacentHTML('beforeend', '<p><b>Towing Capacity</b> Brake:1700  Unbrake:750</p>');
carSpec.insertAdjacentHTML('beforeend', '<p><b>Towing Capacity</b> Brake:1700  Unbrake:750</p>');

const removeMe1 = document.querySelector('#car-specs p:nth-child(6)')
carSpec.removeChild(removeMe1) // parentElement.removeChild(childEl) : childEl must be a child of parentEl
const removeMe2 = document.querySelector('#car-specs p:nth-child(7)')
removeMe2.remove() // No need for a parentElement here !!


