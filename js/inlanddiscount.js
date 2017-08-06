
$(function(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getinlanddiscount",
        success:function(data){
            var html = template("discount",data);
            $(".section").html(html);
        }
    });
    $("#header>.logo").on("click",function () {
        this.href="index.html";
    })
});