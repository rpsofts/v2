$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }
    //按钮
    $(".sou li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "google") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.google.com/?hl=zh";
            } else {
                $("form").attr('action', 'https://www.google.com/search?hl=zh');
                $(".wd").attr("name","q");
                $(".t").val("g");
                $("form").submit();
            }
        } else {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com/?tn=simple";
            } else {
                $("form").attr('action', 'https://www.baidu.com/s?ie=utf-8');
                $(".wd").attr("name","wd");
                $(".t").val("b");
                $("form").submit();
            }
        }

    });
    //菜单点击
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
    $(".mywth").click(function(event) {
        var wt = $("body").width();
        if (wt < 750 || wt == 750) {
            //window.location.href = "https://tianqi.qq.com/";
            window.location.href = "https://widget-page.heweather.net/h5/index.html?bg=1&md=0123456&lc=auto&key=0f8e20a3b3414206a818d80ad95476e2";
        }
    });
});
