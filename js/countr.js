// 當頁面 準備完成時
$(document).ready(function () {
    
    $(window).scroll(function () { 
        
        // var 變數(圈數) = 資料
        var offset = $('#test').offset();  //取得元素位移資料
        var top = offset.top;               //上方
        var left = offset.left;             //左方

        // console.log("元素上方 :" + top);

        var windowTop = $(window).scrollTop();
    
        // console.log("視窗上方 :" + windowTop);

        // 判斷式
        // if (條件) {程式}
        if (windowTop > top ) {
            // console.log("開始執行動畫...");

            $("#test").animate({
                num:888                 //數字
            },{
                duration:2000,                 //時間
                step: (now) => {               //步驟 
                    $("#test").text(Math.floor(now));       //文字(步驟)-Math.floor()
                    // https://developer.mozilla.org/zh-TW/search?q=Math.floor
                }
            })
        }
    });
    
});