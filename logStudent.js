function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getQueryStrings() {
    document.getElementById("username").innerHTML = getParameterByName("username");
    document.getElementById("username").style.color = "#ff0000";
    document.getElementById("userID").innerHTML = getParameterByName("userID");
    document.getElementById("userID").style.color = "#ff0000";
}