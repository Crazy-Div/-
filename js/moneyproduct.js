/**
 * Created by 29208 on 2017/7/12.
 */
$(function () {
    var productId = getUrlParam("productid");
   $.ajax({
       url:"http://182.254.146.100:3000/api/getmoneyctrlproduct?productid="+productId,
       success:function (data) {
           var html = template("moneyProduct",data);
           $("#section").html(html);
       }
   });
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
    // window.history.go(-1);  //返回上一页
    // window.history.back();  //返回上一页
    $("#header>.logo").on("click",function(){
        this.href="moneyctrl.html";
    })
});