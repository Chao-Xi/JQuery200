1.jQUERY
  1)$().keyup(function(){});

  2)var current_query=$("#search").val();//form

  3)$("li").each({});

  4)var current_keyword=$(this).attr("data-keywords");

  5)current_keyword.indexOf(current_query)>=0

  6)show()

  7)$("#portfolio").sortable({stop: 
     function(){
      var list_content=$("#portfolio").html();
       $.post("change.php", {list:list_content});

      //$.post("change.php",{{list:list_content}});
      //$.post("change.php", data);

    }});

  8)$.get(path, function(data){ 
      $("#description p").html(data);
      	}) 

    $.get(path, function(data){});
    
  9)current_li=$(this).parent();
   //image parent is <li></li>  

  10)//Esc fadeout the overlay and frame
      $(document).keydown(function(event) {        
        if (event.keyCode == 27) {
          $("#overlay").fadeOut('slow');
          $("#frame").fadeOut('slow');
         }
       }); 
     //object is $(document)
  
  11) if(current_li.is(":last-child"))
        {
         var next_li=$("#portfolio li").first();
           //back to the first
        }else
        {
         var next_li=current_li.next();
        }	

      is()
      :last-child
      first()
      next()
      var next_src=next_li.children('img').attr('src');
      current_li=next_li;

12)     if(current_li.is(":first-child"))
        {
         var prev_li=$("#portfolio li").last();
           //back to the first
        }else
        {
         var prev_li=current_li.prev();
        }

         is()
         :first-child
         is(":first-child")
         prev()
         var prev_src=prev_li.children('img').attr('src');
         current_li=prev_li;

13)     $("#right, #left").mouseover(function(event) {
       	$(this).css("opacity","0.75")
       });

       $("#right, #left").mouseleave(function(event) {
       	$(this).css("opacity","0.3")
       });  

14)    var category=$(this).html();
       removeClass()

15)    	$("#portfolio li").each(function()
   	{
   		if($(this).hasClass(category))
   		{
   		  // $(this).fadeIn('fast');
   		  $(this).show();

   		}	
   	});
CSS

1)list-style-type: none;
2)display: inline-block;
3)opacity: 0.7;
4)#overlay:hover
  {
	cursor: pointer;
  }
5)display: inline;
6)font-style: italic;
7)text-decoration: underline;  
   	
