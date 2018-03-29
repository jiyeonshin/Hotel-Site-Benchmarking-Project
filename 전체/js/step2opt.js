$(function() {
        $("#rsvoption").hide();
            
        $('#optpri_buf').append("원");
        $('#optpri_bed').append("원");
        $('#total').append("원");
                        
        // 옵션 가격과 예약 가격 일치or불일치
        var buffet1 = $('#optpri_buf').text();
        var buffet2 = $('#rsvoptpri_buf').text();
        if(buffet1 !== buffet2) {
            $('#rsvoptpri_buf').text(buffet1);
        }else {
             alert("가격 불일치");
        }
            
        var bed1 = $('#optpri_bed').text();
        var bed2 = $('#rsvoptpri_bed').text();
        if(bed1 !== bed2) {
            $('#rsvoptpri_bed').text(bed1);
        }else {
            alert("가격 불일치");
        }
})
        
function onClick1(check){
    var ischecked = check.checked;
            
    var buffet = $('#optpri_buf').text();
    var total = $('#total').text();
    
    var buffetSplit = buffet.split(","); 
    var totalSplit = total.split(",");
    var buffetStr = parseInt(buffetSplit[0].concat(buffetSplit[1]));
    var totalStr = parseInt(totalSplit[0].concat(totalSplit[1])); 
    
    var sum
            
    if(check.checked){
        $("#rsvoption").show();
        $(".buffet").show();
        
        sum = String(totalStr+buffetStr);
        var sum1 = sum.substr(0,3);
        var sum2 = sum.substr(sum.length-3,3);
        var endSum = sum1.concat(","+sum2);
        $('#total').text(endSum);
        $('#total').append(" 원");
               
        if($('#package2').is(":checked")){
           $(".bed").show();
        }else {
            $(".bed").hide();
        }
    }else{
        if($('#package2').is(":checked")){
            $(".buffet").hide();
        }else {
            $("#rsvoption").hide();
        }
        sum = String(totalStr-buffetStr);
        console.log(sum, typeof sum);
        var sum1 = sum.substr(0,3);
        var sum2 = sum.substr(sum.length-3,3);
        var endSum = sum1.concat(","+sum2);
        
        $('#total').text(endSum);
        $('#total').append(" 원");
    }
}
        
function onClick2(check){
    var ischecked = check.checked;
            
    var bed = $('#optpri_bed').text();
    var total = $('#total').text();
    
    var bedSplit = bed.split(",");
    var totalSplit = total.split(",");
    var bedStr = parseInt(bedSplit[0].concat(bedSplit[1]));
    var totalStr = parseInt(totalSplit[0].concat(totalSplit[1]));
    
    var sum
            
    if(check.checked){
        $("#rsvoption").show();
        $(".bed").show();
               
        sum = String(totalStr+bedStr);
        var sum1 = sum.substr(0,3);
        var sum2 = sum.substr(sum.length-3,3);
        var endSum = sum1.concat(","+sum2);
        
        $('#total').text(endSum);
        $('#total').append(" 원");
           
       if($('#package1').is(":checked")){
           $(".buffet").show();
       }else {
           $(".buffet").hide();
       }
    }else{
        if($('#package1').is(":checked")){
            $(".bed").hide();
        }else {
            $("#rsvoption").hide();
        }
        sum = String(totalStr-bedStr);
        var sum1 = sum.substr(0,3);
        var sum2 = sum.substr(sum.length-3,3);
        var endSum = sum1.concat(","+sum2);
        
        $('#total').text(endSum);
        $('#total').append(" 원");
    }
}