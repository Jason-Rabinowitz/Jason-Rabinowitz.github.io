function generateQRPython() {
    document.getElementById("qrCode").innerHTML = "";
    // window.alert("Generating QR Code");
    // var qrcode = new QRCode("qrCode", "file:///Users/jasonrabinowitz/Desktop/BLLC%20Test/index.html?firstName=Jason&lastName=Rabinowitz");
    // var qrcode = new QRCode("qrCode", "https://www.google.com/?firstName=Jason&lastName=Rabinowitz");
    // window.alert("https://www.google.com/?username="+document.getElementById("username").value+"&userID="+document.getElementById("userID").value);
    var qrcode = new QRCode("qrCode", "https://jason-rabinowitz.github.io/logStudent.html?username="+document.getElementById("username").value+"&userID="+document.getElementById("userID").value);
    // var qrcode = new QRCode("qrCode", "https://www.google.com/?username="+document.getElementById("username").value+"&userID="+document.getElementById("userID").value);
    // window.alert("Done");
}