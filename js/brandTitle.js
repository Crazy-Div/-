/**
 * Created by 29208 on 2017/7/14.
 */
$(function () {
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandtitle",
        success:function(data){
            var html = template("getbrandtitle",data);
            $("#section").html(html);
        }
    });

    $("#recomend").find(".one>a").on("click",function () {
        this.href = "index.html";
    })
});