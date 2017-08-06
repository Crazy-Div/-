/**
 * Created by 29208 on 2017/7/13.
 */
$(function() {
    function getUrlParam(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
    var productId = getUrlParam("productid");
    var category = getUrlParam("category");
    var brandName = getUrlParam("brandname");
    $("#recomend").find(".two")[0].innerHTML =category;
    $("#recomend").find(".three")[0].innerHTML =brandName;
    $.ajax({
        url: "http://182.254.146.100:3000/api/getproduct?productid="+productId,
        success: function (data) {
            var html = template("detail", data);
            $("#section").html(html);
            $("#section").find("ul>li").eq(0).css("background-color","#ffbb00");
        }
    });
    $.ajax({
        url: "http://182.254.146.100:3000/api/getproductcom?productid="+productId,
        success: function (data) {
            var html = template("com", data);
            $("#comment").html(html);
        }
    });
    $("#recomend>.btn-group>.one>a").on("click",function(){
        this.href="index.html";
    })
});