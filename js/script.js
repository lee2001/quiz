/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
       var score = lit(q1Result);
       var score2 = lit2(q2Result);
       var score3 = lit3(q3Result)
        var totalScore = score + score2 + score3;
       

});

function lit(question1){
    
    var rather;
    if (question1 === "singing"){
        return 30
      }else if (question1 === "dancing"){
        return 40
}       else if (question1 === "designing clothing"){
        return 20
}
}

function lit2(question2){
    
    var rather2;
    if (question2 === "pancakes"){
        return 40
}   else if (question2 === "waffles"){
        return 30
}   else if (question2 === "french toast"){
        return 20
}
        
}

function lit3(question3){
    
    var rather3;
    if (question3 === "dog"){
        return 50
}   else if (question3 ==="cat"){
        return 25
}   else if(question3 === "fish"){
        return 35
}   else{
        return 45
}
}

if (totalScore <= 130 && totalScore >= 95){
    $(".result").html(Beyonce);
} else if (totalScore <= 95 && totalScore >=75){
    $(".result").html(Kelly);
} else if (totalScore <=75 && totalScore >= 25){
    $(".result").html(Michelle)
}




 