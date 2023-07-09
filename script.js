const search=()=>{
    let searchbox=document.getElementById("search-item").value.toUpperCase()
    console.log(searchbox)
    let storeItems=document.getElementById("product-list")
    let product=document.querySelectorAll(".product")
    let pname=storeItems.getElementsByTagName("h2")

    for(let i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName("h2")[0];
        if(match){
           let textValue= match.textContent || match.innerHTML;
           if(textValue.toUpperCase().indexOf(searchbox)> -1){
            product[i].style.display="";
           }
           else{
            product[i].style.display="none";
           }
        }
    }
}