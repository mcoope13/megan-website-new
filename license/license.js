$(document).ready(function() {
 
 /*   $("film").on({
        'click': function(){
            $("#film").attr("src", "https://i.ibb.co/bJgMDjY/flim.png");
        }
    }); */
    
    $("#film").hover(function(){
        $("#film").attr("src", "https://i.ibb.co/bJgMDjY/flim.png");
            },
                   function(){
        $("#film").attr("src", "https://i.ibb.co/Xpv1V8t/copyright.png");
        });
    
       $("#book").hover(function(){
        $("#book").attr("src", "https://i.ibb.co/mC33TkK/book.png");
            },
                   function(){
        $("#book").attr("src", "https://i.ibb.co/Nr4wmxK/trademark.png");
        }); 
    
        $("#music").hover(function(){
        $("#music").attr("src", "https://i.ibb.co/Jjjgdrv/music.png");
            },
                   function(){
        $("#music").attr("src", "https://i.ibb.co/NpdZSv5/registered.png");
        });
    
   /* $("#book").mouseenter(function(){
            $("#book").attr("src", "https://i.ibb.co/mC33TkK/book.png");
    });

    $("#book").mouseleave(function(){
            $("#book").attr("https://i.ibb.co/mC33TkK/book.png", "src");
    }); */
    
   /* $("#music").mouseenter(function(){
            $("#music").attr("src", "https://i.ibb.co/Jjjgdrv/music.png");
    });
    
    $("#music").mouseleave(function(){
            $("#music").attr("https://i.ibb.co/Jjjgdrv/music.png", "src");
    }); */
    

});
    
    //$("#film").attr("src", "https://i.ibb.co/bJgMDjY/flim.png");
    
    //$("#book").attr("src", "https://i.ibb.co/mC33TkK/book.png");
    
    //$("#music").attr("src", "https://i.ibb.co/Jjjgdrv/music.png");
                  
                  
                  /*
                  $('#my_image').on({
                        'click': function(){
                        $('#my_image').attr('src','second.jpg');
                        }
                        });
*/