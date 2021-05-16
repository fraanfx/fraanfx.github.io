
$(document).ready(function(){  /* esta funcion es el controlador de sliders distintos */
    //Varibles (1 por carousel) Usamos variables de jquery para controlar diferentes sliders
    var owl1 = $("#owl-1");  
    var owl2 = $("#owl-2");
    var owl3 = $("#owl-3");




    //Funciones (1 por cada tipo de carousel distinto que queramos crear)
    owl1.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        pagination: false,
        autoplay: false, //Va en milisegundos
        autoplayTimeout: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        
    });
    //otro slider
    owl2.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        pagination: false,
        autoplay: true, //Va en milisegundos
        autoplayTimeout: 2000,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
        
        
    });
    //otro slider
    owl3.owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        pagination: true,
        items:4
    });
    
    



//Fin sliders
});
//Fin jQuery

/* Usamos solo este codigo "codigo demo" cuando solo queremos insertar un carrousel en toda la página
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    pagination: true,
    autoplay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

*/