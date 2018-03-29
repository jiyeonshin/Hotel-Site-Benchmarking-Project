$(function () {    
    
    /*느낌표 이미지 설명글*/
    var kidimg=$('.kid_pic>img');
        var ballon1=$('.ballon1>span.ballonbox');
        var babyimg=$('.baby_pic>img');
        var bollon=$('.bollon>span.bollonbox');
   
        kidimg.hover(
            function(e){
                /*e.preventDefault();
                console.log("in");*/
                kidimg.css({'cursor':'pointer'});
                 ballon1.css({'display':'block'});
            } 
        );
        
        kidimg.mouseout(
            function(e) {
                ballon1.css({'display':'none'});
            }
        )
        
        babyimg.hover(
            function(e){
                /*e.preventDefault();
                console.log("in");*/
                babyimg.css({'cursor':'pointer'});
                 bollon.css({'display':'block'});
            } 
        );
        
        babyimg.mouseout(
            function(e) {
                bollon.css({'display':'none'});
            }
        )
    
    
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
        
        // 전부 입력해야 다음 페이지로 넘어간다
        
        var datepickerIn = frm.datepickerIn.value;
        if (datepickerIn == '' || datepickerIn == null) {
            alert("체크인 날짜를 선택해주세요")
            return false;
        }
        
        var datepickerOut = frm.datepickerOut.value;
        if (datepickerOut == '' || datepickerOut == null) {
            alert("체크아웃 날짜를 선택해주세요")
            return false;
        }

        
        /*$('.section>p').css({'display':'none','height':'auto'});
        $('iframe').css({'display':'block'});*/
        /*$('.section').add('#box').css({'width':'1200px','height':'1000px'});*/
        
    });
});






