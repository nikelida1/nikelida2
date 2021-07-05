let filterBox = document.querySelectorAll('.box');

    document.querySelector('.categories').addEventListener('click', func);

    function func(event){
        if(event.target.tagName !=='LI') return false;

    let filterClass = event.target.dataset['f'];

     filterBox.forEach(elem=>{
        elem.classList.remove('hide');

     if(!elem.classList.contains(filterClass) && filterClass !=='all'){
        elem.classList.add('hide'); }
    });
    };

console.log(predictions);