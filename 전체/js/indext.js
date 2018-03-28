$(function () {    
    
    /*var date = new Date();
    var currentMonth = date.getMonth();
    var currentDate = date.getDate();
    var currentYear = date.getFullYear();

    $('#datepickerIn').datepicker({
        minDate: new Date(currentYear, currentMonth, currentDate),
        dateFormat: 'yy-mm-dd'
    });*/
    
    $('#adult_bt_down').click(function (a) {
        a.preventDefault();
        var numTxt = $('#adultCount').val();
        var num = parseInt(numTxt);
        num--;
        if (num < 1) {
            num = 1;
        }
        $('#adultCount').val(num);
    });
    
    $('#adult_bt_up').click(function (a) {
        a.preventDefault();
        var numTxt = $('#adultCount').val();
        var num = parseInt(numTxt);
        /*console.log(num);*/
        num++;
        if (num > 4) {
            num = 4;
        }
        $('#adultCount').val(num);
    });
    
    $('#kid_bt_down').click(function (a) {
        a.preventDefault();
        var numTxt = $('#kidCount').val();
        var num = parseInt(numTxt);
        num--;
        if (num < 0) {
            num = 0;
        }
        $('#kidCount').val(num);
    });
    
    $('#kid_bt_up').click(function (a) {
        a.preventDefault();
        var numTxt = $('#kidCount').val();
        var num = parseInt(numTxt);
        /*console.log(num);*/
        num++;
        if (num > 4) {
            num = 4;
        }
        $('#kidCount').val(num);
    });
    
    $('#baby_bt_down').click(function (a) {
        a.preventDefault();
        var numTxt = $('#babyCount').val();
        var num = parseInt(numTxt);
        num--;
        if (num < 0) {
            num = 0;
        }
        $('#babyCount').val(num);
    });
    
    $('#baby_bt_up').click(function (a) {
        a.preventDefault();
        var numTxt = $('#babyCount').val();
        var num = parseInt(numTxt);
        /*console.log(num);*/
        num++;
        if (num > 4) {
            num = 4;
        }
        $('#babyCount').val(num);
    });
});
