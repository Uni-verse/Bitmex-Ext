var targetNode = document.getElementById('content');

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
//      console.log(mutation);
    switch(mutation.target.nodeName) {
        case "text":
            if((Number(mutation.target.innerHTML)) > 7650){
                console.log(mutation)
                ;}
            break;
            
        default: 
            break;
    }
    
  });
});

// Starts listening for changes in the root HTML element of the page.
mutationObserver.observe(targetNode, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});