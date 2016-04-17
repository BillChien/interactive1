$(function() {

       $topIndex = 0;

       $( ".ui-draggable" ).draggable().css({"position": "absolute","margin":"auto","top":"300px","left":"47%" });;

        $(".ui-draggable").click(function(){
            $topIndex=$topIndex+1;
            $(this).css("z-index",$topIndex);
        });

   });


        $(function(){
          $.okvideo({ source: 'https://www.youtube.com/watch?v=RBTiTcHm_ac',
                    volume: 100})
        });
