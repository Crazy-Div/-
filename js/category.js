$(function(){
    $.ajax({
        url: "http://182.254.146.100:3000/api/getcategorytitle",
        success: function(data) {
            var html = template("category", data);
            $("#categories > .panel-group").html(html);
            var categoryTitle = $("#categories > .panel-group>.three>.one>a");
            var flag = false;
            categoryTitle.on("click",function(e){
                flag = !flag;
                var titleId = $(this).data("titleid");
                $.ajax({
                    url: "http://182.254.146.100:3000/api/getcategory?titleid="+titleId,
                    success:function(data){
                        var html =template("categoryTmp",data);
                        var panelBody = $(e.target).parent().parent().find(".two");
                        if(flag==true){
                            panelBody.html(html);
                            var categoryList = panelBody.find('.row > div');
                            var a = panelBody.find("a")[0];
                            var count = categoryList.length % 3 || 3;
                            panelBody.find(".row > div:nth-last-child(-n+" + count + ")").css("border-bottom", "0");
                        }else if(flag == false){
                            panelBody.html("");
                        }
                    }
                })
        })
    }

    })
})
