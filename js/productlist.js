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
    // window.history.go(-1);  //返回上一页
    // window.history.back();  //返回上一页
    var categoryId = getUrlParam("categoryid");
    var category = getUrlParam("category");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getproductlist?categoryid="+categoryId,
        success:function(data){
           var html = template("productlist",data);
            $("#product").html(html);
            $("#product").find("a").each(function () {
                this.href = this.href+"&category="+category;
                console.log(this.href);
            });
            var recomend = document.getElementById("recomend");
            var two = recomend.getElementsByClassName("two");
            $("#recomend").find(".one>a")[0].href="index.html";
            two[0].innerHTML=category;
            var page = Math.ceil(data.totalCount/data.pagesize);
            for(var i=1;i<=page;i++){
                var index = 1;
                var a =document.createElement("a");
                a.innerText=i+"/"+page;
                a.index=i;
                a.onclick = function(){
                    var index1 = this.index;
                    $.ajax({
                        url:"http://182.254.146.100:3000/api/getproductlist?categoryid="+categoryId+"&pageid="+index1,
                        success:function (data) {
                            var html = template("productlist", data);
                            $("#product").html(html);
                            index=index1;
                        }
                    });
                };
                if(0<index<page-1){
                    $(".prev")[0].onclick=function () {
                        index--;
                        $.ajax({
                            url:"http://182.254.146.100:3000/api/getproductlist?categoryid="+categoryId+"&pageid="+index,
                            success:function (data) {
                                var html = template("productlist", data);
                                $("#product").html(html);
                            }
                        });
                    };
                    $(".next")[0].onclick=function () {
                        index++;
                        $.ajax({
                            url:"http://182.254.146.100:3000/api/getproductlist?categoryid="+categoryId+"&pageid="+index,
                            success:function (data) {
                                var html = template("productlist", data);
                                $("#product").html(html);
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

});
