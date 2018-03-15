var btn=document.getElementById('btn');
btn.addEventListener('click',JoinChk);

function JoinChk() {  // 데이터 입력유무 확인 스크립트
    
    // 아이디 검사
    var userId=ConradJoin.userID.value;
    if(userId.length<5 || userId.length>=13) {
        alert("아이디는 5글자 이상, 12글자 이하만 가능합니다.");
        userId.focus();
        return false;
    }
    
    // 비밀번호 검사
    var userPw=ConradJoin.userPW.value;
        if(userPw.length<8 || userPw.length>=21) {
        alert("비밀번호는 8글자 이상, 20글자 이하만 가능합니다.");
        userPw.focus();
        return false;
    }

    // 비밀번호 확인 검사
    var userPwOk=ConradJoin.userPWok.value;
        if(userPwOk.length<8 || userPwOk.length>=21) {
        alert("비밀번호는 8글자 이상, 20글자 이하만 가능합니다.");
        userPwOk.focus();
        return false;
    }

    // 비밀번호 일치 여부
    if(userPw!='' && userPwOk!=null) {
        if(userPw==userPwOk) {
            document.getElementsByName('PWcheck').innerHTML="비밀번호가 일치합니다.";
            document.getElementsByName('PWcheck').style.color="#00f";
        } else {
            document.getElementsByName('PWcheck').innerHTML="비밀번호가 일치하지 않습니다.";
            document.getElementsByName('PWcheck').style.color="#f00";
        }
        return false;
    }

    //이름 검사
    var userName=ConradJoin.userNAME.value;
    if(userName=='' || userName==null) {
        alert("성함을 입력하세요") 
        userName.focus(); 
        return false;
    }

    /*$(function(){
    $('select[name=userEmail1]').change(function(){
    if($('select[name=userEmail1]').val() == "1"){
    $("#Email").val(""); //값 초기화
    $("#Email").prop("readonly",false); //활성화
    } else if($('select[name=userEmail1]').val() == ""){
    $("#Email").val(""); //값 초기화
    $("#Email").prop("readonly",true); //textBox 비활성화
    } else {
    $("#Email").val($('select[name=userEmail1]').val()); //선택값 입력
    $("#Email").prop("readonly",true); //비활성화
    }
    });
    });

    $(function(){
    $('input[name=userPhone1]').keyup(function() {   
    $(this).val($(this).val().replace(/[^0-9]/g,""));
    }); //#phone.keyup 
    });
    $(function(){
    $('input[name=userPhone1]').keyup(function() {
    if (event.which && (event.which > 36 && event.which < 58 || event.which > 95 && event.which <106 || event.which == 8 || event.which == 9)){
    //alert("숫자다");
    }else{ 
    alert("숫자만 입력해주세요");
    $('input[name=userPhone1]').val("");
    $('input[name=userPhone1]').focus();
    }
    }); //#phone.keyup 
    });
    */

    document.ConradJoin.submit();
}