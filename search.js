
function active (){
    var searchFld = document.getElementById("search_fld");
    if( searchFld.value == "Search..." ){
        searchFld.value = "";
        searchFld.placeholder = "Search...";
    }
}
function inactive (){
    var searchFld = document.getElementById("search_fld");
    if( searchFld.value == "" ){
        searchFld.value = "Search...";
        searchFld.placeholder = "";
    }
}
function searchHighlight (){

    var text = document.getElementById("search_fld").value;
    var regExp = new RegExp( "\\b" + text + "\\b", "gim" );

    var currentContent = document.getElementById("listing_items").innerHTML;

    var newContent = currentContent.replace(regExp, "<span>$&</span>");//$& - вставляет сопоставившуются подстроку
    document.getElementById("listing_items").innerHTML = newContent;

}

