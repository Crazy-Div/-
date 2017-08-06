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
    var couponId =getUrlParam("couponid");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcouponproduct?couponid="+couponId,
        success:function(data){
            var html = template("couponproduct",data);
            $("#section").html(html);
            for(var i=0;i<$("#section").find("a").length;i++){
                $("#section").find("a")[i].index = i;
                var div = document.createElement("div");
                var img = $($("#section").find("a")[i].innerHTML)[0];
                $(div).append(img);
                $(".gallerySlider").append(div);
                $($("#section").find("a")[i]).on("click",function(){
                    $(".gallerySlider").css("left","-"+this.index+"00%");
                    $("#galleryOverlay").addClass("visible").css("display","block");
                    var count=this.index;
                    $(".arrow>.left").on("click",function(){
                        if(count>0){
                            count--;
                        }
                        if(count>=0&&count<56){
                            $(".gallerySlider").css("left",-count+"00%");
                        }
                    });
                    $(".arrow>.right").on("click",function(){
                        count++;
                        if(count>=0&&count<56){
                            $(".gallerySlider").css("left",-count+"00%");
                        }
                    });

                });
                $(".gallerySlider").on("click",function () {
                    $("#galleryOverlay").removeClass("visible").css("display","none");
             });

            }

        }
    });
    $("#header>.logo").on("click",function () {
        this.href="coupon.html";
    })
});