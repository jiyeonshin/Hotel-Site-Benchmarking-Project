$(function(){

  //아이디찾기 클릭시 모달 보이기
  $('.findId').on('click',function(){
      $('.modal').show(function(){
        $(".findIdPopUp").show();
      });
  });

  //비밀번호 찾기 클릭시 모달 보이기


  //닫기 버튼 클릭시 전체모달 숨김
  $(".popupClose").on('click',function(){
    $(".modal").hide();
  });

  //아이디찾기에서 '이메일로찾기' 클릭
  $('#contactChoice2').on('click',function(){
    $(".findContentPhone").hide();
    $(".findContentEmail").show();
  })

  //아이디찾기에서 '아이디로찾기' 클릭
  $('#contactChoice1').on('click',function(){
    $(".findContentEmail").hide();
    $(".findContentPhone").show();
  })

  //회원메뉴 클릭
  $('.clickMember').on("click", function(){
      $(".clickMember").addClass("on");
      $(".clickNonMembers").removeClass("on");
      $(".loginType.nonMembers").hide();
      $(".loginType.member").show();
  });

  //비회원(예약확인) 메뉴 클릭
  $('.clickNonMembers').on("click",function(){
      $(".clickNonMembers").addClass("on");
      $(".clickMember").removeClass("on");
      $(".loginType.nonMembers").show();
      $(".loginType.member").hide();
  });

    
    $('.loginInput').focus(function(){
        $(this).val("");
    });
    
  //공백체크
    var $loginForm = $('#loginForm');
    var $idInput = $loginForm.find('input[name="id"]');
    var $pwInput = $loginForm.find('input[name="pw"]');

    var $idErrMsg = $loginForm.find('.idErrMsg');
    var $pwErrMsg = $loginForm.find('.pwErrMsg');
    
    //아이디 공백체크
    $idInput.focusout(function(e){
        //아이디 값 검사 후 안내메시지 출력
        var id = $(this).val();
        if (id === undefined || id == '') {
            $idErrMsg.removeClass('display-none');
        } else {
            $idErrMsg.addClass('display-none');
        }
    });
    
    //비밀번호 공백체크
    $pwInput.focusout(function(e){
        //비밀번호 값 검사 후 안내메시지 출력
        var pw = $(this).val();
        if (pw === undefined || pw == '') {
            $pwErrMsg.removeClass('display-none');
        } else {
            $pwErrMsg.addClass('display-none');
        }
    });
    
  //벨리데이션
  $('#loginForm').submit(function(e){
    e.preventDefault();

    var id = $(this).find('input[name="id"]').val();
    var pw = $(this).find('input[name="pw"]').val();

    if (id === undefined || id == '') {
      alert('아이디를 입력해주세요.');
      return false;
    }
      
    alert('로그인 완료!');
  });



});
