$('#burger').click(function () {
    $('#menu').addClass('open');
});

$('#menu *').click(() => {
    $('#menu').removeClass('open');
});


const phone = $('#phone');
const macaroonChoose = $('#macaroon-choose');
const name = $('#name');


phone.inputmask({"mask": "+ 7 (999) 999-9999"});
const buttonChoose = $('.btn__choose');
const success = $('.success');
const loader = $('.loader');


buttonChoose.click((e) => {
    macaroonChoose.val($(e.target).parents('.item__choose').find('.title_item__choose').text().trim());
    macaroonChoose[0].scrollIntoView({behavior: "smooth"});
})


$('#submit_button').click(() => {

    $('.error-input').hide();

    let hasError = false;

    if (!macaroonChoose.val()) {
        macaroonChoose.next().show();
        hasError = true;
        macaroonChoose.css({
            "box-shadow": "0 0 9px 0px red",
            "border-color": "red"
        });
    } else {
        macaroonChoose.css({"box-shadow": "0 0 9px 0px green", "border-color": "green"});
    }

    if (!name.val()) {
        name.next().show();
        hasError = true;
        name.css({
            "box-shadow": "0 0 9px 0px red",
            "border-color": "red"
        });
    } else {
        name.css({"box-shadow": "0 0 9px 0px green", "border-color": "green"});
    }

    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        phone.css({
            "box-shadow": "0 0 9px 0px red",
            "border-color": "red"
        });
    } else {
        phone.css({"box-shadow": "0 0 9px 0px green", "border-color": "green"});
    }


    if (!hasError) {
        loader.css("display", "flex");
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {product: macaroonChoose.val(), name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                console.log(msg);
                if (msg.success) {
                    $('.text__order').css("display", "none");
                    success.css({
                        "display": "flex"});
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
})



