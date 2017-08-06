
$(function(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcoupon",
        success:function(data){
            var html = template("quan",data);
            $(".quan").html(html);
        }
    })
    $("#header>.logo").on("click",function () {
        this.href="index.html";
    })
});