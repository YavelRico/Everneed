$(function () {

    'use strict';

    // Form

    var contactForm = function () {

        if ($('#contactForm').length > 0) {
            $("#contactForm").validate({
                rules: {
                    fname: "required",
                    lname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: false,
                        minlength: 1
                    }
                },
                messages: {
                    fname: "Por Favor ingrese su nombre",
                    lname: "Por Favor ingrese su apellido",
                    email: "Por Favor ingrese un mail válido",
                },
                /* submit via ajax */
                submitHandler: function (form) {
                    var $submit = $('.submitting'),
                        waitText = 'Submitting...';

                    $.ajax({
                        type: "POST",
                        url: "php/send-email.php",
                        data: $(form).serialize(),

                        beforeSend: function () {
                            $submit.css('display', 'block').text(waitText);
                        },
                        success: function (msg) {
                            if (msg == 'OK') {
                                $('#form-message-warning').hide();
                                setTimeout(function () {
                                    $('#contactForm').fadeOut();
                                }, 1000);
                                setTimeout(function () {
                                    $('#form-message-success').fadeIn();
                                }, 1400);

                            } else {
                                $('#form-message-warning').html(msg);
                                $('#form-message-warning').fadeIn();
                                $submit.css('display', 'none');
                            }
                        },
                        error: function () {
                            $('#form-message-warning').html("Something went wrong. Please try again.");
                            $('#form-message-warning').fadeIn();
                            $submit.css('display', 'none');
                        }
                    });
                }

            });
        }
    };
    contactForm();

});


//wpp
function openRandomWhatsApp() {
    // Generate a random number (0 or 1)
    var randomNumber = Math.floor(Math.random() * 2);

    // Define an array with the WhatsApp links
    var whatsappLinks = [
        "https://wa.me/5491134999347",
        "https://wa.me/5491151069000"
    ];

    // Use the random number to select one of the WhatsApp links
    var selectedLink = whatsappLinks[randomNumber];

    // Open the selected WhatsApp link
    window.open(selectedLink);
}