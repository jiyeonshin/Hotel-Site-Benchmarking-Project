$(function () {    
    
    /*체크인,체크아웃 선택 달력*/
    $( "#datepickerIn" ).datepicker({
        defaultDate: "+1w",
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        minDate: 0,
        numberOfMonths: 1,
        onClose: function(selectedDate) {
            $("#datepickerOut").datepicker("option", "minDate", selectedDate);
        }
    });
    $( "#datepickerOut" ).datepicker({
        defaultDate: "+1w",
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        numberOfMonths: 1,
        onClose: function(selectedDate) {
            $("##datepickerIn").datepicker("option", "maxDate", selectedDate);
        }
    });
    
    /*증가,감소 버튼*/
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
                
    $('.search').click(function(){
        $('.section>p').css({'display':'none','height':'800px'});
        $('.section').add('#box').css({'width':'1200px','height':'1000px','background':'#ff0'});
        $('#box').load('reservation2.html');
        return false;
    });
});






