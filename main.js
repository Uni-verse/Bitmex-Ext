var bitmext = (function(){

    //Selectors
    var result1 = $('#result');
    var slider1 = $("input[type='text']");
    slider1.on("keyup", display1, false);

    //Method to display result
    var display1 = function(e){
        result1.text(e.target.innerText);
        instance.init.x = Number(e.target.innerText);
    };

    //Init Method
    function init(){
        // x represents the size to be highlighted
        var x = 99999;
        var mutationObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
        
                switch(mutation.target.className) {
                    case "highlightWrapper":
                        var c = mutation.target.children;
                        
                        for (var i = 0; i < c.length; i++) {
                            var limit = c[1].innerText;
                            limit = limit.replace(',', '');
                            if(Number(limit) > x){
                                if (c[3].innerText == "S"){
                                    mutation.target.style.backgroundColor = "Red";
                                    mutation.target.style.color = "white";
                                }else{
                                    mutation.target.style.backgroundColor = "Green";
                                    mutation.target.style.color = "white";
                                }
            //                    Enable for logging mutation
            //                    console.log(mutation);
            //                    console.log(limit);
                                
                                // playSound();
                                break;
                                } 
                            }
            //            console.log(mutation);
                    default: 
                        break;
                }
                
            });
        });
        return mutationObserver;
    };
    return {
        init: init
    };
})();

//Start when document loads
$(document).ready(function(){

    //invoke init, instantiate MutationObserver
    //Assign to instance var
    var instance = bitmext.init();

    //Select Node to be scanned for mutations
    var targetNode = document.getElementById('content');

    //Begin mutation scans
    instance.observe(targetNode, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
        });
}); 