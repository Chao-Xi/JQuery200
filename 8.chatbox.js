
    var username="";
   
    function send_message(message)
    {  
        var prevState=$("#container").html();
       //console.log(prevState.length);=>13 the first empty line's length is 13
        if(prevState.length>13)
        {
          prevState=prevState+"<br/>";
        }   

        $("#container").html(prevState+"<span class='current_message'>"+"<span class='bot'>chatbot: </span>" + message+"</span>");
        $(".current_message").hide();
        $(".current_message").delay(1500).fadeIn();
        $(".current_message").removeClass('current_message');
    }
    
     function get_username()
    {
     send_message("Hello, I'm your chatbot, What's your name?");
    }

    function ai(message)
    {
       if(username.length<3)
        {
           username=message;
           send_message("Nice to meet you "+username+", how are you doing?"); 
        }	else{

        if(message.indexOf("how are you")>=0 || message.indexOf("what's up")>=0 )
         {
          send_message("Thanks, I'm good!");
         } 

         if(message.indexOf("time")>=0 || message.indexOf("hours")>=0 )
         {
           var date=new Date();
           var h=date.getHours();
           var m=date.getMinutes();
           send_message("current time is: "+h+":"+m);
         } 

          if(message.indexOf("video")>=0 || message.indexOf("videos")>=0)
         {
            var url="https://www.youtube.com/";
            var link="<a href='"+url+"' target='_blank'>"+url+"</a>";
            send_message("You may find your videos in this webiste "+link);
         } 
         
          if(message.indexOf("weather")>=0 )
         {
            var url="https://weather.com/";
            var link="<a href='"+url+"' target='_blank'>"+url+"</a>";
            send_message("You may find the weather in your location "+link);
         } 
       }
    }

    $(function(){
      
      get_username(); 

     $("#textbox").keypress(function(event) {
     	//keeppress check every key press action
     	/* Act on the event */
     	if(event.which==13)//enter
       { 
       	if($("#enter").prop("checked"))  //property
       {
       	event.preventDefault();//prevent the enter key change to next line
        $("#send").click();
       }
       }		
     });
      

      $("#send").click(function(){
       
        var username="<span class='username' = >You: </span>"  
      	var newMessage=$("#textbox").val();

        var prevState=$("#container").html();
        if(prevState.length>13)
        {
          prevState=prevState+"<br/>";
        } 

        $("#container").html(prevState + username + newMessage);         

      	$('#textbox').val("");
        $('#container').scrollTop($('#container').prop("scrollHeight"));
        //scroll bar goes bottom automatically
        ai(newMessage); 
      });

    })