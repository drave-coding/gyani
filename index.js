const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('keydown' , function(event){

     if(event.code === "Enter"){
        search();
     }   
})

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+input+"&sxsrf=AB5stBgz3SvZR9IHcVnbWskPdBfAItsbSA%3A1689234284466&source=hp&ei=bKuvZIiAGtzX2roPu4SZwAY&iflsig=AD69kcEAAAAAZK-5fMlm88fNBOw9gBuw27ATcKXTiP6x&ved=0ahUKEwiI5tyLmIuAAxXcq1YBHTtCBmgQ4dUDCAo&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEIoFELEDEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEMyCAgAEIAEELEDMgUIABCABDILCAAQgAQQsQMQgwE6BwgjEOoCECc6DQguEMcBENEDEOoCECc6BAgjECc6BwgjEIoFECc6DQgAEIoFELEDEIMBEENQlw9YqhFgwxNoAXAAeACAAdsBiAHeBJIBBTAuMS4ymAEAoAEBsAEK&sclient=gws-wiz"
}