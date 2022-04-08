let page = 1;
const container = document.querySelector('.container');


function getData(){
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=25`)
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
    div.innerHTML=`<p>ID:  ${result.id}</p>
          <h3> ${result.title}</h3>
          <p>${result.body}</p>`
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