const getButton = document.querySelector('.share-button')
const getShare =document.querySelector('.share')


getButton.addEventListener('click', () => {
    if(getShare.style.display == 'inline-flex'){
        getShare.style.display = 'none';
    }else {
       getShare.style.display = 'inline-flex' 
    }
    
})

