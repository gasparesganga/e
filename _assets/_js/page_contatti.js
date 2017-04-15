$(function(){
    if (_CURRENT_PAGE !== "contatti") return false;
    
    
    var form = $("#contatti_form");
    
    form.on("blur", "input, textarea", function(event){
        $(event.currentTarget).val($.trim($(event.currentTarget).val()));
    });
    
    
    $("#contatti_form_send").on("click", function(event){
        if ($("#contatti_form_verify").val() !== "") {
            form.remove();
            return false;
        }
        
        form.find("fieldset").removeClass("error");
        $("#contatti_form_error").empty().hide();
        
        var inputs = {
            name    : $("#contatti_form_name"),
            email   : $("#contatti_form_email"),
            phone   : $("#contatti_form_phone"),
            message : $("#contatti_form_message")
        };
        $.each(inputs, function(key, element){
            element.val($.trim(element.val()));
        });
        var values = {
            name    : $("#contatti_form_name").val(),
            email   : $("#contatti_form_email").val(),
            phone   : $("#contatti_form_phone").val(),
            message : $("#contatti_form_message").val()
        };
        
        var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (values.name === "")             return Errore(inputs.name,    "Inserisci correttamente il tuo nome");
        if (!reEmail.test(values.email))    return Errore(inputs.email,   "Inserisci correttamente il tuo indirizzo email");
        if (values.phone === "")            return Errore(inputs.name,    "Inserisci correttamente il tuo numero di telefono");
        if (values.message === "")          return Errore(inputs.message, "Inserisci correttamente il messaggio");
        
        form.LoadingOverlay("show");
        $.ajax({
            data        : values,
            dataType    : "json",
            method      : "post",
            url         : "https://hooks.zapier.com/hooks/catch/2155994/1sr8rg/"
        }).done(function(){
            $.each(inputs, function(key, element){
                element.prop("readonly", true);
            });
            $("#contatti_form_send").hide();
            $("#contatti_form_success").text("Messaggio inviato con successo, grazie!").slideDown();
        }).fail(function(data){
            Errore(false, "Impossibile inviare il messaggio, si prega di riprovare più tardi.");
        }).always(function(){
            form.LoadingOverlay("hide");
        });
    });

    
    function Errore(element, messaggio){
        if (element) $(element).closest("fieldset").addClass("error");
        $("#contatti_form_error").text(messaggio).slideDown();
        return false;
    }
});