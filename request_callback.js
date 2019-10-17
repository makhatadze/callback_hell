function request(url,callback) {
    var req = new XMLHttpRequest();
    req.open("GET",url,true);
    req.onreadystatechange= function () {
        if(req.readyState===4){
            if(req.status ===200){
                callback(JSON.parse(req.responseText))
            }
        }
        
    };
    req.setRequestHeader("Content-Type","application/json");
    req.send();    
}