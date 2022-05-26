$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');

        if (value == 'all'){
            $('.items').show('1000');
        }

        else{
            $('.items').filter('.' + value).show('1000');
            $('.items').not('.' + value).hide('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})

// $("span").click(function(){
//         $(".ice").slideToggle();
//     })