$(document).ready(function () {
    //inputs masks
    $("#inputPhone").mask("+7(999)999-99-99");
    $("#inputEmail").inputmask("email")
    //inputs masks end

    //date picker
    $('#inputDate').datepicker({
        dateFormat: "dd-mm-yy",
        defaultDate: +1,
        minDate: 0,
        showOtherMonths: true
    })

    .mask("99-99-9999");

    //inputs validation
    $('#mainForm').submit(function (e) {
        e.preventDefault();

        $(".error").remove();

        var name = $('#textarea').val(),
            taxNumber = $('#taxNumber').val(),
            email = $('#inputEmail').val(),
            phone = $('#inputPhone').val(),
            date = $('#inputDate').val();

        //name validation
        if (name.length < 1) {
            $('#textarea').after('<span class="error">Пожалуйста, укажите имя</span>');
        }

        //taxNumber validation
        if (taxNumber.length != 10 && taxNumber.length != 12 && taxNumber.length != 0) {
            $('#taxNumber').after('<span class="error">Вы где-то ошиблись, проверьте ИНН</span>');
        }

        //email validation
        if (email.length < 1) {
            $('#inputEmail').after('<span class="error">Пожалуйста, укажите Emal</span>');
        } else {
            var regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regExEmail.test(email);
            if (!validEmail) {
                $('#inputEmail').after('<span class="error">Вы где-то ошиблись, проверьте email</span>');
            }
        }

        //phone validation
        if (phone.length < 1) {
            $('#inputPhone').after('<span class="error">Пожалуйста, укажите телефон</span>');
        } else {
            var regExPhone = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/;
            var validPhone = regExPhone.test(phone);
            if (!validPhone) {
                $('#inputPhone').after('<span class="error">Вы где-то ошиблись, проверьте номер</span>');
            }
        }

        //date validation
        if (date.length < 1) {
            $('#inputDate').after('<span class="error">Пожалуйста, укажите дату</span>');
        }


        //make object

        var formData = {};

        $('#mainForm').find('input, textarea').each(function () {
            formData[this.name] = $(this).val();
        });

        var str = JSON.stringify(formData, "", 4);

        console.log(str);
    });
});