var input = "";
$(document).ready(function(){
   $(".normal-number").click(function(){
       if(($(".result").text() != "0") && ($(".result").text() != ".")){
        input = $(".result").text();
        input = input + $(this).text();
       }
    $(".result").text(input);
   });
   
   $(".four-arithmetic-operations").click(function(){
       var result = $(".result").text();
       if(result.length != 0 && result[result.length-1] != "+" && result[result.length-1] != "-" && result[result.length-1] != "*" && result[result.length-1] != "/" && result[result.length-1] != "."){
        input = $(".result").text();
        input = input + $(this).text();
        $(".result").text(input);
       }
       else if($(this).text() == "-" && result.length == 0){
           input = $(".result").text();
           input = input + $(this).text();
        $(".result").text(input);
       }
   });
   
   $(".zero").click(function(){
       if($(".result").text() != "0"){
    　　 input = $(".result").text();
      　 input = input + $(this).text();
       $(".result").text(input);
       }
   });
   
   $(".double-zero").click(function(){
       if($(".result").text().length != 0 && $(".result").text() != "0"){
           input = $(".result").text();
           input = input + $(this).text();
       $(".result").text(input);
       }
   })
   
   $(".point").click(function(){
        var result = $(".result").text();
       if(result.length != 0 && result[result.length-1] != "+" && result[result.length-1] != "-" && result[result.length-1] != "*" && result[result.length-1] != "/" && result[result.length-1] != "."){
        　 input = $(".result").text();
           input = input + $(this).text();
           $(".result").text(input);
       }
   })
   
   $(".all-clear").click(function(){
       $(".result").text("");
   });
   
   $(".equall").click(function() {
       $(".result").text(eval($(".result").text()));
   });
});

