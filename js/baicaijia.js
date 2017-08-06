/**
 * Created by 29208 on 2017/7/13.
 */
$(function(){
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
    
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbaicaijiatitle",
        success:function(data) {
            var html = template("baicaijia",data);
            $(".tit").html(html);
            $(".tit").find("li>a").eq(0).addClass("active");
            for(var i =0;i<$(".tit").find("li>a").length;i++){
            $($(".tit").find("li>a")[i]).on("click",function(){
                var titleId =  $(this).context.dataset.titleid;
                $(".tit").find("li>a").removeClass("active");
                $(this).addClass("active");
                $.ajax({
                    url:"http://182.254.146.100:3000/api/getbaicaijiaproduct?titleid="+titleId,
                    success:function(data){
                        var html = template("product",data);
                        $("#section").html(html);
                    }
                });
            });
            }
        }
    });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbaicaijiaproduct?titleid=0",
        success:function(data){
            var html = template("product",data);
            $("#section").html(html);
        }
    });

    $("#header>.logo").on("click",function(){
        this.href="index.html";
    })
});