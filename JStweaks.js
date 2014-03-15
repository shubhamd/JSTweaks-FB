
function open(){

document.getElementsByClassName("_42ft _42fu fbEventInviteButton uiToolbarItem")[0].click();
setInterval(control,500) ;
}

function control(){

a = document.getElementsByTagName("input");
document.getElementsByClassName("uiScrollableArea hideSummary fade hiddenList")[0].style.display = "none";

for(i=0;i<a.length; i++ ){

	a[i].checked = true ; 
}


}