$(document).ready(function () {
    // 비밀번호 일치 확인
    $('input[name=userPWok]').keyup(function () {
        if ($('input[name=userPW]').val() == $('input[name=userPWok]').val()) {
            document.getElementById('PWcheck').innerText = "비밀번호가 일치합니다.";
            document.getElementById('PWcheck').style.color = "#00f";
        } else {
            document.getElementById('PWcheck').innerText = "비밀번호가 일치하지 않습니다.";
            document.getElementById('PWcheck').style.color = "#f00";
        }
    });

    // 아이디 영문/숫자만 가능
    $('input[name=userID]').keydown(function () {
        $(this).val($(this).val().replace(/[^0-9\x20a-zA-Z]/g, ""));
    });

    // 성명 한글만 가능
    $('input[name=userNAME]').keydown(function () {
        $(this).val($(this).val().replace(/[^가-힣]/g, ""));
    });

    // 이메일 숫자/영문만 가능
    $('#Email1').keydown(function () {
        $(this).val($(this).val().replace(/[^0-9\x20a-zA-Z]/g, ""));
    });

    // 이메일 영문/. 만 가능
    $('#Email2').keydown(function () {
        $(this).val($(this).val().replace(/[^.\x20a-zA-Z]/g, ""));
    });

    // 핸드폰 숫자만 가능
    $('input[name=userPhone]').keydown(function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
    });

    // 이메일 선택박스
    $('#Email3').change(function () {
        $('#Email2').val($(this).val());
    });
});

// 우편번호 가져오기
function Address() {
    new daum.Postcode({
        oncomplete: function (data) {
            console.log(data);
            console.log(data.address);
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            $('#POST_CODE').val(data.zonecode);
            $('#ADDRESS2').val(data.roadAddress + " " + data.buildingName);
        }
    }).open();
}

function JoinChk() { // 데이터 입력유무 확인 스크립트

    // 아이디 검사
    var userId = ConradJoin.userID.value;
    if (userId.length < 5 || userId.length >= 13) {
        alert("아이디는 5글자 이상, 12글자 이하만 가능합니다.");
        ConradJoin.userID.focus();
        return false;
    }

    // 비밀번호 검사
    var userPw = ConradJoin.userPW.value;
    if (userPw.length < 8 || userPw.length >= 21) {
        alert("비밀번호는 8글자 이상, 20글자 이하만 가능합니다.");
        ConradJoin.userPW.focus();
        return false;
    }

    // 비밀번호 확인 검사
    var userPwOk = ConradJoin.userPWok.value;
    if (userPwOk.length < 8 || userPwOk.length >= 21) {
        alert("비밀번호는 8글자 이상, 20글자 이하만 가능합니다.");
        ConradJoin.userPWok.focus();
        return false;
    } else {
        var userPwOK = ConradJoin.userPWok.value;
        if ($('input[name=userPW]').val() != $('input[name=userPWok]').val()) {
            alert("비밀번호가 일치하지 않습니다.");
            return false;
        }
    }

    //이름 검사
    var userName = ConradJoin.userNAME.value;
    if (userName == '' || userName == null) {
        alert("성함을 입력하세요")
        ConradJoin.userNAME.focus();
        return false;
    }

    // 이메일 검사
    var userEamil1 = ConradJoin.Email1.value;
    if (userEamil1 == '' || userEamil1 == null) {
        alert("이메일을 입력하세요")
        ConradJoin.Email1.focus();
        return false;
    }

    // 핸드폰 검사
    var userPhone1 = ConradJoin.Phone1.value;
    var userPhone2 = ConradJoin.Phone2.value;

    if (userPhone1.length < 4 || userPhone2.length < 4) {
        alert("핸드폰번호를 입력하세요")
        ConradJoin.Phone1.focus();
        return false;
    } else {
        if (userPhone1 == '' || userPhone1 == null || userPhone2 == '' || userPhone2 == null) {
            alert("핸드폰번호를 입력하세요")
            return false;
        }
    }

    // 주소 검사
    var Address1 = ConradJoin.userAddress[0].value;
    var Address2 = ConradJoin.userAddress[2].value;
    if (Address1 == '' || Address1 == null || Address2 == '' || Address2 == null) {
        alert("주소를 입력하세요")
        ConradJoin.userAddress[0].focus();
        return false;
    }
    location.href="JoinOkPage.html";
    /*document.ConradJoin.submit();*/
}
