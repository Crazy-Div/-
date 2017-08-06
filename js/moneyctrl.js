/**
 * Created by 29208 on 2017/7/12.
 */
$(function(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrl",
        success:function (data) {
            var html = template("moneyCtrl",data);
            $("#section").html(html);
            $("#section").find("a").onclick=function(){
                window.location.href="moneyproduct.html";
            };
            var page = Math.ceil(data.totalCount/data.pagesize);
            for(var i=1;i<=page;i++){
                var index = 0;
                var a =document.createElement("a");
                a.innerText=i+"/"+page;
                a.index=i-1;
               a.onclick = function(){
                   var index1 = this.index;
                   $.ajax({
                       url:"http://182.254.146.100:3000/api/getmoneyctrl?pageid="+index1,
                       success:function (data) {
                           var html = template("moneyCtrl", data);
                           $("#section").html(html);
                           index=index1;
                       }
                   });
               };
                if(0<index<page-1){
                    $(".prev")[0].onclick=function () {
                        index--;
                        $.ajax({
                            url:"http://182.254.146.100:3000/api/getmoneyctrl?pageid="+index,
                            success:function (data) {
                                var html = template("moneyCtrl", data);
                                $("#section").html(html);
                            }
                        });
                    };
                    $(".next")[0].onclick=function () {
                        index++;
                        $.ajax({
                            url:"http://182.254.146.100:3000/api/getmoneyctrl?pageid="+index,
                            success:function (data) {
                                var html = template("moneyCtrl", data);
                                $("#section").html(html);
                            }
                        });
                    }

                }
                var li =document.createElement("li");
                li.appendChild(a);
                $(".dropdown-menu")[0].appendChild(li);

            }
        }
    });
    $("#header>.logo").on("click",function(){
        this.href="index.html";
    })
});