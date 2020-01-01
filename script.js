$(document).ready(function(){

    $(".fa-bars").click(function(){
        $(".modal-content").show();
    })

    $(".fa-times").click(function(){
        $(".modal-content").fadeOut();
    })

            var speed = 500;
            var autoswitch = true;
            var autoswicth_speed = 5000;
            var $counter = 0;
            var txtArray = ['.text_1','.text_2','.text_3','.text_4','.text_5','.text_6'];
            //console.log(imgArray);
            var $new_ctn = 0;
     
            var $call = $(".call");
     
            $(".down").on('click',banner);
            function banner(){
                $counter++;
                if($counter >= txtArray.length) $counter = 0;
                $(".caption_text").hide();
                $.each(txtArray, function(){
                    $new_ctn++;
                    if($new_ctn >= txtArray.length) $new_ctn = 0;
                    
                    if($counter === $new_ctn){
                        console.log("Count is " + $counter+ " and new count is : " + $new_ctn);
                        $(txtArray[$new_ctn]).fadeIn(500);
                    }
                });
                
                
            }
            $(".up").on('click',function(){
                
                $counter--;
                console.log($counter);
                if($counter < 0) $counter = txtArray.length - 1;
                
                $(".caption_text").hide();
                $.each(txtArray, function(){
                    $new_ctn--;
                    if($new_ctn < 0) $new_ctn = txtArray.length - 1;
                    
                    if($counter === $new_ctn){
                        console.log("Count is " + $counter+ " and new count is : " + $new_ctn);
                       
                        $(txtArray[$new_ctn]).fadeIn(500);
                    }
                }); 
            });
            
            if(autoswitch == true){
               setInterval(banner, autoswicth_speed); }



                $(".expgroup").hide();
            $(".share").click(function(){
                $(".expgroup").animate({height:'toggle'});
            });

             /* activate jquery isotope */
            var $container = $('#posts').isotope({
                itemSelector : '.item',
                isFitWidth: true
            });

            $(window).smartresize(function(){
                $container.isotope({
                columnWidth: '.col-sm-3'
                });
            });
            
            $container.isotope({ filter: '*' });

                // filter items on button click
            $('#filters').on( 'click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $container.isotope({ filter: filterValue });
            });
             
  
});

var folder = "";
var pictures=["images/Cozy.jpg","images/Dine.jpg","images/DipPool.jpg","images/SleepInGrandStyle.jpg","images/LoungeInExtravagance.jpg","images/WorkOut.jpg"];
var num = 0;
function main(){
    var slider = document.getElementsByTagName("section")[0];
        if (num == 5) num = 0;
        else num++;
        
         slider.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("+pictures[num]+")"  ;
     }
         
     setInterval('main()', 5000);


