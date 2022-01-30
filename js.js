
// drop down btn -show and hide menus--desktop
$(".drop-down-btns").click(()=>{
    var activeId = event.target.id;
    $(".drop-down-btns").each((id,btn)=>{
        var x = $(btn).attr("id");
        if (x===activeId){
            $("#menu-"+id).toggleClass("show")
            $("#i-"+id).toggleClass("fa-angle-up")
            console.log(x)
            $("#"+x).toggleClass("under-line") 
        }
        else {
            $("#menu-"+id).removeClass("show")
            $("#i-"+id).removeClass("fa-angle-up")
            $("#"+x).removeClass("under-line")
        }

    })
       

})


// for mobile

$(".drop-down-btns-m").click(()=>{
    var activeId = event.target.id;
    $(".drop-down-btns-m").each((id,btn)=>{
        var x = $(btn).attr("id");
        if (x===activeId){
            $("#menu-m-"+id).toggleClass("show")
            $("#i-m-"+id).toggleClass("fa-angle-up")
            
            
        }
        else {
            $("#menu-m-"+id).removeClass("show")
            $("#i-m-"+id).removeClass("fa-angle-up")
            
        }

    })
       

})
// hide all menus if click outside
$(document).on("click", function(event){
    var trigger = $(".dropdown");
    if(trigger !== event.target && !trigger.has(event.target).length){
        $(".dropdown-menu").removeClass("show");
        $(".drop-down-btns").removeClass("under-line")
        $("i").removeClass("fa-angle-up")
    }            
});



$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.nav').removeClass('transparent');
    } else {
      $('.nav').addClass('transparent');
    }
  });

$(".menu-btn").click(()=>{
    $(".menu-btn").toggleClass("opened");
    $(".mobile-nav-container").toggleClass("hidden")
    $(".dropdown-menu-m").removeClass("show")
    $(".fas").removeClass("fa-angle-up");
})