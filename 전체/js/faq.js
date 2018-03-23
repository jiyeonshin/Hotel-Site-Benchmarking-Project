$(function(){
    
        //자주 묻는 질문 리스트 클릭 
        $('.faqQuestionList ul>li').on('click',function(){
        $(this).children(".explanation").toggle();

        var $arrow = $(this).children(".listTitle");
        if ($arrow.attr('class') == 'listTitle arrow_down') {
            $arrow.removeClass('arrow_down');
            $arrow.addClass('arrow_up');
        } else {
            $arrow.removeClass('arrow_up');
            $arrow.addClass('arrow_down');
        }

        });
});
