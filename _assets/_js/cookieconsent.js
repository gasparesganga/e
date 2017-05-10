window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        cookie      : {
            //domain      : "edilfimer.it",
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
            message     : "Questo sito utilizza dei cookie per migliorare la navigazione.",
            dismiss     : "OK",
            link        : "Più informazioni",
            href        : "/informativa_cookie/"
        },
        revokable   : false
    });
});