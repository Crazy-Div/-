/**
 * Created by 29208 on 2017/7/14.
 */
$(function () {
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
    var brandtitleId = getUrlParam("brandtitleid");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrand?brandtitleid="+brandtitleId,
        success:function(data){
            var html = template("getbrand",data);
            $("#section>ul").html(html);
            $("#section").find("em").eq(0).css("backgroundColor","red");
            $("#section").find("em").eq(1).css("backgroundColor","blue");
            $("#section").find("em").eq(2).css("backgroundColor","yellow");
        }
    });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandproductlist?brandtitleid="+brandtitleId+"&pagesize=4",
        success:function(data){
            var html = template("getbrandproductlist",data);
            $("#product").html(html);
            for(var i=0;i< $("#product").find("a").length;i++){
                $($("#product").find("a")[i]).click(function () {
                     productId = $(this)[0].dataset.productid;
                    $.ajax({
                        url:"http://182.254.146.100:3000/api/getbrandproductlist?brandtitleid="+brandtitleId+"&pagesize=4",
                        success:function(data){
                            var html = template("com",data);
                            $("#comment").html(html);
                            $.ajax({
                                url:"http://182.254.146.100:3000/api/getproductcom?productid="+productId,
                                success:function(data){
                                    var arr=[];
                                    var html = template("getproductcom",data);
                                    for(var i=0;i<$(html).length;i++){
                                        if(i%2==0){
                                            arr.push($(html)[i]);
                                        }
                                    }
                                    for(var j=0;j<$("#comment>.bottom").length;j++){
                                        $($("#comment>.bottom")[j]).append(arr[j]);
                                    }
                                }
                            });
                        }
                    });
                })
            }
        }
    });
    var productId;
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandproductlist?brandtitleid="+brandtitleId+"&pagesize=4",
        success:function(data){
            var html = template("com",data);
            $("#comment").html(html);
            $.ajax({
                url:"http://182.254.146.100:3000/api/getproductcom?productid=0",
                success:function(data){
                    var arr=[];
                    var html = template("getproductcom",data);
                    for(var i=0;i<$(html).length;i++){
                        if(i%2==0){
                            arr.push($(html)[i]);
                        }
                    }
                    for(var j=0;j<$("#comment>.bottom").length;j++){
                        $($("#comment>.bottom")[j]).append(arr[j]);
                    }
                }
            });
        }
    });
    $("#recomend").find(".first>a").on("click",function () {
        this.href = "index.html";
    })
});