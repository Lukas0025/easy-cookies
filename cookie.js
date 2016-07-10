function setCookie(name, value, expire, path) {
    if (expire != null){
        var d = new Date();
        d.setTime(d.getTime() + (expire*24*60*60*1000));
        var expires = "; expires="+ d.toUTCString();
    }else{
        expires = "";
    }
    if (path != null){
        path = "; path=" + path;
    }else{
        path = "";
    }
    if (name == null || value == null){
        console.error("Name or value is not defined");
    }else{
        document.cookie = name + "=" + value + expires + path;
    }
}

function getCookie(name){
    if (name == null){
        console.error("Name is not defined");
    }else{
	    name += '=';
        for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--){
            if (!ca[i].indexOf(name)){
                return ca[i].replace(name, '');
            }
        }
    }
}

function allCookie(){
    var allcookies = document.cookie;
    return allcookies;
}

function deleteCookie(name) {
    if (name == null){
        console.error("Name is not defined");
    }else{
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

function deleteallCookie(){
	var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){   
        var cookie = cookies[i].split("=");
        document.cookie = cookie[0] + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';                                
    }
}