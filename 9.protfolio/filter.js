$(function(){
   
   $("#filter li").click(function(event) {
   	/* Act on the event */
   	var category=$(this).html();
    // console.log(category);

    if(category!="|")
    {
    $("#filter li").removeClass('active'); 	
    $(this).addClass('active');  

   	// $("#portfolio li").fadeOut('fast');
   	$("#portfolio li").hide();

   	$("#portfolio li").each(function()
   	{
   		if($(this).hasClass(category))
   		{
   		  // $(this).fadeIn('fast');
   		  $(this).show();

   		}	
   	});
    }

   });
})