$(document).ready(function () {
    var nav = document.querySelector('#nav');
    window.onscroll = function () {
        var top = document.documentElement.scrollTop;
        // console.log(top)
        // console.log(document.documentElement.scrollTop)
        top >= 100 ? nav.style.position = 'fixed' : nav.style.position = '';
        // if(top == 100){
        //     act.style.marginLeft = '0px';
        // }else if(top == 708){
        //     console.log(top,act)
        //     act.style.marginLeft = '7.375rem';
        // }else if(top == 1279){
        //     act.style.marginLeft = '14.875rem';
        // }else if(top == 1778){
        //     act.style.marginLeft = '22.5rem';
        // }else if(top == 2344){
        //     act.style.marginLeft = '30rem';
        // }

    }

    var lis = nav.querySelectorAll('li');
    var act = document.querySelector('.active span');
    lis.forEach((element, index) => {
        element.index = index;
        element.onclick = function () {
            if (index == 0) {
                act.style.marginLeft = '0px';
            } else if (index == 1) {
                act.style.marginLeft = '7.375rem';
            }
            else if (index == 2) {
                act.style.marginLeft = '14.875rem';
            } else if (index == 3) {
                act.style.marginLeft = '22.5rem';
            } else if (index == 4) {
                act.style.marginLeft = '30rem';
            }
        }
    })

    $(window).scroll(function(){
        
        var top = $(window).scrollTop();
        console.log(top)
        if(top >= 100 && top < 708){
            act.style.marginLeft = '0px';
        }else if(top >= 708 && top < 1279){
            act.style.marginLeft = '7.375rem';
        }else if(top >= 1279 && top < 1778){
            act.style.marginLeft = '14.875rem';
        }else if(top >= 1778 && top < 2244){
            act.style.marginLeft = '22.5rem';
        }else if(top >= 2244 && top < 2440){
            act.style.marginLeft = '30rem';
        }
        
        })
})