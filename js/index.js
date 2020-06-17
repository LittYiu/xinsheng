$(document).ready(function () {
    // $('#banner .main').height($('#banner img:first-child').height());

    var $banimgs = $('#banner .car img');
    var $banlis = $('#banner .but li');

    function banner() {
        var index = 0;
        $($banimgs).eq(index).fadeIn().siblings().fadeOut();
        $($banlis).click(function () {
            index = $(this).index()
            $($banimgs).eq(index).fadeIn().siblings().fadeOut();
            $($banlis).eq(index).addClass('cli').siblings().removeClass('cli');

        })
        $('#banner .r-arr').click(function () {
            index < $banimgs.length-1 ? index++ : index = 0;
            $($banimgs).eq(index).fadeIn(500).siblings().fadeOut(500);
            $($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
            console.log(index)
        })
        $('#banner .l-arr').click(function () {
            index > 0 ? index-- : index = $banimgs.length-1;
            $($banimgs).eq(index).fadeIn(100).siblings().fadeOut(100);
            $($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
            console.log(index)
        })
        function caruso() {
            var clear = setInterval(function () {
                index > $banimgs.length-1 ? index = 0 : index;
                $($banimgs).eq(index).fadeIn().siblings().fadeOut();
                $($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
                index++;
            }, 3000)
        }
        caruso();
    }
    banner();
    $('#header .yw::after').css('pointer-events', 'none');
    function menuBusiness(){
        //     $('#header .yw').hover(function(){
        //         setTimeout(() => {
        //             $('#header .menu-business a').css('display','block');
        //             console.log(111)
        //         }, 500);
        //     },function(){
        //         $('#header .menu-business a').css('display','none');
        //         console.log(222) 
        // })
        $('#header .yw').mouseenter (function(){
            setTimeout(() => {
                $('#header .menu-business a').css('display','block');
                console.log(111)
            }, 0);
        })
        $('#header .yw').mouseleave(function(){
                $('#header .menu-business a').css('display','none');
                console.log(222)
        })
    }
    menuBusiness();
})

