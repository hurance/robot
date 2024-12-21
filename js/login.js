var connect = document.getElementById('connect')
var msg = document.getElementById('message').innerText

connect.onclick = ()=>{
    //var ip = document.getElementById('ip').value
    //var port = document.getElementById('port').value
    // if ( isEmpty(ip) || isEmpty(port))
    // {
    //     //alert("warn: ip or port is null")
    //     document.getElementById("message").innerText = "warn: ip or port is null!!!"
    //     return;
    // }
    // document.getElementById("message").innerText = "waiting loging..."
    // return;
    location.replace("../check/check.html");

    // if (ip == null || port == null)
    // {
    //     console.log("warn: ip or port is null")
    // }
}

function isEmpty(str){
    // 判断是否为空
    if(str == null || str.trim() == "") {
        return true;
    }
    return false;
}