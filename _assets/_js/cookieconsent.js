window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        cookie      : {
            domain      : "edilfimer.gasparesganga.com",
            name        : "cookieconsent",
            expiryDays  : -1
        },
        theme       : "classic",
        palette     : {
            popup       : {
                background    : "#cbbd5c",
                text          : "#001b26"
            },
            button      : {
                background    : "#001b26",
                text          : "#ffffff"
            }
        },
        content     : {
            message   : "Questo sito utilizza dei cookies per migliorare la navigazione, niente di preoccupante!",
            dismiss   : "OK"
        },
        revokable   : false,
        showLink    : false
    });
});