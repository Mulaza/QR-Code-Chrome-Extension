

let main = document.getElementById('main');


chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;

    // use `url` here inside the callback because it's asynchronous!


    qrOptions = {
        text: url,
        width: 190,
        height: 190,
        colorDark: "#000000",
        colorLight: "#f0f1f6ff",
        correctLevel: QRCode.CorrectLevel.H
    }


    var qrcode = new QRCode(document.getElementById("qrcode"), qrOptions);

    document.getElementById("qrcode").style.opacity = 1.0; // Reduce QR opacity



    //--------------- After the QR is created
    let downloadButton = document.getElementById("download-btn");
    let myImage = document.getElementsByTagName('img');


    downloadButton.addEventListener('click', () => {


        let dataURI = myImage[0]['src'];
        console.log(dataURI)


        // Stack overflow Thanks***
        function saveBase64AsFile(base64, fileName) {
            var link = document.createElement("a");

            document.body.appendChild(link); // for Firefox

            link.setAttribute("href", base64);
            link.setAttribute("download", fileName);
            link.click();
        }


        saveBase64AsFile(dataURI, "QR-Code.png")


    });

    //--
});


//------------------------------------------ testing


// qrOptions = {
//     text: "Sup Bruh",
//     width: 190,
//     height: 190,
//     colorDark: "#000000",
//     colorLight: "#f0f1f6ff",
//     correctLevel: QRCode.CorrectLevel.H
// }



// let qrcode = new QRCode(document.getElementById("qrcode"), qrOptions);

// document.getElementById("qrcode").style.opacity = 1.0; // Reduce QR opacity




// let downloadButton = document.getElementById("download-btn");
// let myImage = document.getElementsByTagName('img');




// downloadButton.addEventListener('click', () => {


//     let dataURI = myImage[0]['src'];
//     console.log(dataURI)


//     // Stack overflow Thanks***
//     function saveBase64AsFile(base64, fileName) {
//         var link = document.createElement("a");

//         document.body.appendChild(link); // for Firefox

//         link.setAttribute("href", base64);
//         link.setAttribute("download", fileName);
//         link.click();
//     }


//     saveBase64AsFile(dataURI, "QR-Code.png")


// });






