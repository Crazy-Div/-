/**
 * Created by 29208 on 2017/7/13.
 */
$(function(){
    var shopId=0,areaId=0;
    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsshop",
        success:function(data){
            var html = template("gsproduct",data);
           $(".one").append(html);
            $(".one>ul>li>a").each(function(){
                $(this).click(function(){
                  shopId = this.dataset.shopid;
                    $.ajax({
                        url:"http://182.254.146.100:3000/api/getgsproduct?shopid="+shopId+"&areaid="+areaId,
                        success:function(data){
                            var html = template("getgsproduct",data);
                            $("#section>ul").html(html);
                        }
                    })
                })
            });
        }
    });

    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsshoparea",
        success:function(data){
            var html = template("getgsshoparea",data);
            $(".two").append(html);
            $(".two>ul>li>a").each(function(){
                $(this).click(function(){
                    areaId = this.dataset.areaid;
                    $.ajax({
                        url:"http://182.254.146.100:3000/api/getgsproduct?shopid="+shopId+"&areaid="+areaId,
                        success:function(data){
                            var html = template("getgsproduct",data);
                            $("#section>ul").html(html);
                        }
                    })
                })
            })

        }
    });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsproduct?shopid="+shopId+"&areaid="+areaId,
        success:function(data){
            var html = template("getgsproduct",data);
            $("#section>ul").html(html);
        }
    })
    $("#header>.logo").on("click",function(){
        this.href="index.html";
    })
});