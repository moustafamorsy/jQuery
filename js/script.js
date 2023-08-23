$('textarea').text('');
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},100)
   $("#home-content").animate({marginLeft :'250px'},100)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},100)
   $("#home-content").animate({marginLeft :'0px'},100)
})



$("#leftMenu a").click(function(){
    
    var sectionData= $(this).attr("href");
    
    var position = $(sectionData).offset().top;
    
    $("html , body").animate({scrollTop:position},1500);
    
})




$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(250);
    $(this).next().slideToggle(250);
});




window.onload = function() {
   
    countDownToTime("25 august 2023 12:00:00");
  }

  function countDownToTime(count) {
  
        let timeD = new Date(count);
    timeD = (timeD.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

   difference = (timeD- now);
        
   let days = Math.floor( difference / (24*60*60));
   let hours = Math.floor((difference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((difference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((difference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(count); }, 1000);
  }



  var Length = 100;
  $('textarea').keyup(function() {
    var length = $(this).val().length;
    var amount = Length-length;
    if(amount<=0)
              {
                   $("#chars").text("you can't add any more character").css("color", "red");
                
              }
          else{
           
          $("#chars").text(`${amount} : Character Reamining`).css("color", "green");
         
          }
  });


