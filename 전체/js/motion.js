$(function(){
    
    // 회원 비회원 메뉴 클릭
    $(".clickMember").addClass("on");
    
    $('.clickMember').on("click", function(){
        $(".clickMember").addClass("on");
        $(".clickNonMembers").removeClass("on");
        $(".loginType.nonMembers").hide();
        $(".loginType.member").show();
    });
    
    $('.clickNonMembers').on("click",function(){
        $(".clickNonMembers").addClass("on");
        $(".clickMember").removeClass("on");
        $(".loginType.nonMembers").show();
        $(".loginType.member").hide();
    });
    
    //공백체크
    
    
    
});