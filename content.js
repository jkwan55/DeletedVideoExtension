const url = window.location.href;
var myStorage = window.localStorage;
var delStorage = window.localStorage;

if(myStorage.getItem(url) === null || myStorage.getItem(url) == []){
    myStorage.setItem(savePlaylist(url));
} else {
    var current = returnPlaylist(url);
    var check = myStorage.getItem(url);
    if(!matching(current, check)){
        
    }
    
}

function returnPlaylist(currentURL){
    var vidArray = []
    var videos = document.querySelectorAll("#video-title");
    for (var i = 0; i < videos.length; i++){
        if(videos[i].innerHTML.trim() != "[Private video]" &&
        videos[i].innerHTML.trim() != "[Deleted video]"){
            vidArray.push(videos[i].innerHTML.trim());
        }
    }
    return vidArray;
}

function matching(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}