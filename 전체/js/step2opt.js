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
            
            var buffet3 = $('#optpri_bed').text();
            var buffet4 = $('#rsvoptpri_bed').text();
            if(buffet3 !== buffet4) {
                $('#rsvoptpri_bed').text(buffet3);
            }else {
                alert("가격 불일치");
            }
})
        
function onClick1(check){
           var ischecked = check.checked;
            
            var bufVal = parseInt($('#optpri_buf').text());
            var total = parseInt($('#total').text());

            var sum
            
           if(check.checked){
               $("#rsvoption").show();
               $(".buffet").show();
               
               sum = total+bufVal;
               $('#total').text(sum);
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
               sum = total-bufVal;
               $('#total').text(sum);
               $('#total').append(" 원");
           }
}
        
function onClick2(check){
           var ischecked = check.checked;
            
            var bedVal = parseInt($('#optpri_bed').text());
            var total = parseInt($('#total').text());
            var sum
            
           if(check.checked){
               $("#rsvoption").show();
               $(".bed").show();
               
               sum = total+bedVal;
               $('#total').text(sum);
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
               sum = total-bedVal;
               $('#total').text(sum);
               $('#total').append(" 원");
           }
}