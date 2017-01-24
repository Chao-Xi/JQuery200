$(function(){
      
      var current_li; 
      
       $("#search").keyup(function(){
          
          var current_query=$("#search").val();

          if(current_query!="")//all show all
          {  
          $("#portfolio li").hide();

          $("#portfolio li").each(function(){
              
              var current_keyword=$(this).attr("data-keywords");
              
              if(current_keyword.indexOf(current_query)>=0)
              {
                $(this).show();
              } 
          });
        }else
        {
         $("#portfolio li").show(); 
        }

       });
  

      $("#portfolio").sortable({stop: 
      function(){
        // console.log("it was dragged!!!!");
        var list_content=$("#portfolio").html();
        $.post("change.php", {list:list_content});
      }});//jquery ui
      
      function setImg(src, id)
      {
      	$("#main").attr("src", src);
        var path="txt/"+id+".txt";
      	$.get(path, function(data){ 
         //console.log(data);
         //data is call back function
         $("#description p").html(data);
      	})
      } 

      $("#portfolio img").click(function(event) {
      	/* Act on the event */
      	var src=$(this).attr("src");//this is image(img)
      	var id=$(this).attr("id");
      	current_li=$(this).parent();
      	//image parent is <li></li>
      	setImg(src, id);
      	$("#frame").fadeIn();
      	$("#overlay").fadeIn();
      });
      
      $("#overlay").click(function(event) {
        $(this).fadeOut('slow');
        $("#frame").fadeOut('slow');
     });
      
      //ESC fadeout the overlay and frame
      $(document).keydown(function(event) {        
        if (event.keyCode == 27) {
          $("#overlay").fadeOut('slow');
          $("#frame").fadeOut('slow');
         }
       });
  
      $("#right").click(function(event) {

        if(current_li.is(":last-child"))
        {
         var next_li=$("#portfolio li").first();
           //back to the first
        }else
        {
         var next_li=current_li.next();
        }	

        var next_src=next_li.children('img').attr('src');
        var id=next_li.children('img').attr('id');
        //get next image's src
        // $('#main').attr("src", next_src);
        setImg(next_src, id);
        //assign the next image's src to the #main
        current_li=next_li;
        //next_li become to current_li
     });

       $("#left").click(function(event) {

         if(current_li.is(":first-child"))
        {
         var prev_li=$("#portfolio li").last();
           //back to the first
        }else
        {
         var prev_li=current_li.prev();
        }	
        var prev_src=prev_li.children('img').attr('src');
        var id=prev_li.children('img').attr('id');
        //get next image's src
        // $('#main').attr("src", prev_src);
        setImg(prev_src, id);
        //assign the next image's src to the #main
        current_li=prev_li;
        //next_li become to current_li
     });


       $("#right, #left").mouseover(function(event) {
       	/* Act on the event */
       	$(this).css("opacity","0.75")
       });

       $("#right, #left").mouseleave(function(event) {
       	/* Act on the event */
       	$(this).css("opacity","0.3")
       });
   });

