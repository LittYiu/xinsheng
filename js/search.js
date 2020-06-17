
$(window).scroll(function(){
    var search = document.querySelector('#search');    
    var top = $(window).scrollTop();
    top >= 100 ? search.style.position = 'fixed' : search.style.position = '';
    })

    // 不筛选时，渲染全部数据，
    // 筛选时，清空并重新渲染数据

    