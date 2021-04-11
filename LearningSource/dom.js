var Part1;
/*
 *   EXAMINE THE DOCUMENT OBJECT 
 */

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = "ITEM LISTER" //change title
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)      //return an array or an HTML collection of all 
// console.log(document.all[10])  //but it is deprecated, not useful
// console.log(document.forms)    // collection of all form
// console.log(document.forms[1])
// console.log(document.links)
// console.log(document.images)
// etc many more to go


/*
 *   GETELEMENTBYID 
 */

// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// console.log(headerTitle) // same result
// headerTitle.textContent = "Item Lister 1"
// headerTitle.innerText = "Item Lister 2" // same as textContent, but pays attention to the styling
// headerTitle.innerHTML = "<h3>Item Lister 3</3h>"
// header.style.borderBottom = "solid 3px #000"


/*
 *   GETELEMENTBYCLASSNAME
 */

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow";
// for(let i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
// }


/*
 *   GETELEMENTBYTAGNAME
 */

// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// for(let i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = "#f4f4f4"
// }


/*
 *   QUERYSELECTOR
 */

// var header = document.querySelector("#main-header")
// header.style.borderbottom = "solid 4px #ccc"

// var input = document.querySelector("input") // althgouth there are 2 input, but it only take the first one
// input.value = "Hellow World"

// var submit = document.querySelector('input[type="submit"]')
// submit.value='SEND'

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue' 

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral' 


/*
 *   QUERYSELECTORALL 
 */

// var titles = document.querySelectorAll('.title')
// console.log(titles) //get nodeList
// titles[0].textContent = 'QuerySelectorAll'
// var odd = document.querySelectorAll('li:nth-child(odd')
// for (let i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
// }


var Part2;
/*
 *   TRAVERSING THE DOM 
 */

// var itemList = document.querySelector('#items')

/** parentNode */ 
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)

/** parentElement */ 
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement)

/** childNodes */ 
// console.log(itemList.childNodes) 
// inside childNodes, if you look at the console
// the "text" is just the <br> inside your HTML code

/** children */
// console.log(itemList.children) 
// console.log(itemList.children[1]) 
// itemList.children[1].style.backgroundColor = 'yellow'

/** firstChild */
// console.log(itemList.firstChild) 
//same 'text' problem with childNodes, hard to access becase it has "text"

/** firstElementChild */
// console.log(itemList.firstElementChild) 
// itemList.firstElementChild.style.backgroundColor = 'yellow'

/** lastChild */
// same 'text' problem with chilNodes
/** lastElementChild */
// console.log(itemList.lastElementChild) 
// itemList.lastElementChild.style.backgroundColor = 'yellow'

/** nextSibling */
/** nextElementSibling */
/** previousSibling */
/** previousElementSibling */

/** createElement */

// create a div
// var newDiv = document.createElement('div');

// // add class
// newDiv.className = 'hello'
// // add id
// newDiv.id = "world"
// // add attribute
// newDiv.setAttribute('title','Hello Div')
// //result: <div class="hello" id="world" title="Hello Div"></div>

// // create a text node
// var newDivText = document.createTextNode('Hello World')
// // add(append) text to div
// newDiv.appendChild(newDivText)
// //result: <div class="hello" id="world" title="Hello Div">Hello World</div>

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)

// // add to index.HTML page
// container.insertBefore(newDiv, h1)


var Part3
/*
 *   Events Handling
 */

// //can be onclick inside <button>
// function buttonClick(e){
    // // simple test
    // console.log('Button clicked')

    // // try change HTML element
    // document.getElementById('header-title').textContent = "Changed"
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    
    // // get / manipulate mouse event details
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // var output = document.getElementById('output')
    // output.innerHTML = '<h3>'+e.target.id+'</h3>'
    // console.log(e.type)
    // console.log('cX '+e.clientX)
    // console.log('cY '+e.clientY)
    // console.log('offx '+e.offsetX)
    // console.log('offy '+e.offsetY)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
//}

// var button = document.getElementById('button').addEventListener(
//     'click', buttonClick //use function
    // or manually write the function inside
    // function() {
    //     console.log('button click')
    // }
// )

//var button = document.getElementById('button')
// button.addEventListener( 'click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// var box = document.getElementById('box')
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// mouseover, mouseout // same as enter, but this also includes inner element
// box.addEventListener('mousemove', runEvent)

// var itemInput = document.querySelector('input[type="text"]')
// var form = document.querySelector('form')
// itemInput.addEventListener('keydown', runEvent)
// use e.target.value to access what you keydowned
// keyup. keypress, focus, blur, cut, paste, input, change, 
// submit (e.preventDefault)


// function runEvent(e){
//     console.log('Event Type: '+e.type)

    // output.innerHTML = 
    //     '<h3>MouseX: ' +e.offsetX+ 
    //     '</h3><h3>MouseY: ' +e.offsetY+
    //     '</h3>'

    // document.body.style.backgroundColor =
    //     "rgb("+e.offsetX+","+e.offsetY+", 40)"
// }


