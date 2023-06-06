// Raw intial version of cleaning logic
window.addEventListener('scroll', function() {
  
makeInvisible = false;
  
document.querySelectorAll('article') [0].parentElement.childNodes.forEach(el => {
    if (makeInvisible) {
        // console.log(el)
        el.style.visibility = 'hidden'   
    }

    // console.log(el)
    
    if (el.nodeName === 'DIV') {
        const globalRegex = new RegExp('Suggested Posts', 'g')

        if (globalRegex.test(el.textContent)) {
            // console.log(el.textContent)
            makeInvisible = true
        }
    }

})
});
