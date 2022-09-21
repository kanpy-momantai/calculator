var input = "";
var point_input = false;
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
        point_input = false;
       }
       else if($(this).text() == "-" && result.length == 0){
        input = $(".result").text();
        input = input + $(this).text();
        $(".result").text(input);
        point_input = false;
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
   });
   
   $(".point").click(function(){
       var result = $(".result").text();
       if(result.length != 0 && result[result.length-1] != "+" && result[result.length-1] != "-" && result[result.length-1] != "*" && result[result.length-1] != "/" && result[result.length-1] != "." && point_input == false){
         input = $(".result").text();
         input = input + $(this).text();
         point_input = true;
         $(".result").text(input);
       }
    });
   
   $(".all-clear").click(function(){
       $(".result").text("");
       point_input = false;
   });
   
   $(".equall").click(function() {
       $(".result").text(eval($(".result").text()));
   });
});

