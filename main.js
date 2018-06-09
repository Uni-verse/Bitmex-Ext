var targetNode = document.getElementById('content');

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

    switch(mutation.target.className) {
        case "highlightWrapper":
            var c = mutation.target.children;
            
            for (var i = 0; i < c.length; i++) {
                var limit = c[1].innerText;
                limit = limit.replace(',', '');
                if(Number(limit) > 99999){
//                    Enable for logging mutation
//                    console.log(mutation);
//                    console.log(limit);
                    mutation.target.style.backgroundColor = "Blue";
                    mutation.target.style.color = "white";
                    break;
                    } 
                }
//            console.log(mutation);
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