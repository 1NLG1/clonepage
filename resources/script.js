let $menuTriggerButton = document.getElementById('GoogleAppsTriggerButton');
let $googleAppsMenu = document.getElementById('GoogleAppsMenu');
$menuTriggerButton.addEventListener('click', () => {
     $googleAppsMenu.classList.toggle('active');
     $menuTriggerButton.classList.toggle('active');
 }, true);


// this one does exactly what the one above does plus it closes the googleAppsMenu when you click on the document(except when clicking within the menu).
 /* function showDropDown(e){
    document.getElementById('GoogleAppsTriggerButton').onclick = function(){}; 
    if(e.stopPropagation) {
    e.stopPropagation();
    }  // W3C model
    else
    e.cancelBubble = true; // IE model

    document.getElementById('GoogleAppsMenu').style.display = "block"; 
    document.onclick = function(e){
    var ele = document.elementFromPoint(e.clientX, e.clientY); 
    if(ele == document.getElementById('GoogleAppsTriggerButton')){  
        hideDropDown();
        return;
    }
    do{
        if(ele == document.getElementById('GoogleAppsMenu')) 
        return;
    }while(ele == ele.parentNode);  
    hideDropDown();
    };
}

function hideDropDown(){
   document.onclick = function(){}; 
   document.getElementById('GoogleAppsMenu').style.display = "none";  
   document.getElementById('GoogleAppsTriggerButton').onclick = showDropDown;  
}

*/