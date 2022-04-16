var page=1
var container = document.getElementById("container")

function getData(){
    fetch(`https://json-pract.herokuapp.com/images/?_page=${page}&_limit=10`)
    .then((response) => response.json())
		.then((results) => resultsdisplay(results));
}

function resultsdisplay(results) {
	results.map((result) => display(result))
	page++;
}

function display(result){

    const div = document.createElement('div')
    div.className='result'
    const img = document.createElement('img')
    img.src=result.image
    div.append(img)
    container.append(div)      
  }

document.addEventListener('DOMContentLoaded',getData);

window.addEventListener('scroll',()=>{
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement
    if(scrollTop+clientHeight>=scrollHeight){
        setTimeout(()=>{
            getData()
        },500)
    }
})