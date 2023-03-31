document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('mensagem').addEventListener('click', exibirMensagem);
}

function exibirMensagem() {
    document.getElementById('texto').innerHTML="Boa noite!"
}