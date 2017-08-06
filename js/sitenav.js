/**
 * Created by 29208 on 2017/7/14.
 */
$(function(){
    $.ajax({
        url: "http://182.254.146.100:3000/api/getsitenav",
        success: function (data) {
            var html = template("getsitenav", data);
            $(".classm").html(html);
        }
    })
})