export function showHome (parent){
    let tableContainer = document.querySelector('.table-container');
    tableContainer.innerHTML = '';
    let homeSection = document.querySelector('.home-display-only');
    console.log(homeSection);
    if (homeSection.classList.contains('no-display')){
        console.log('showing the center container');
        homeSection.classList.remove('no-display');
    } else {
        console.log('classlsit doesnt container the no display');
    }
    
}

export function hideHome (){
    let homeSection = document.querySelector('.home-display-only');
    homeSection.classList.add('no-display');
    console.log("hiding the center container");
}
 