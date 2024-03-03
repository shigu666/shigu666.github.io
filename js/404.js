// 设置5秒倒计时
var time = 5;
// 设置一个定时器，每秒执行一次
var timer = setInterval(function(){
    // 每次减一
    time--;
    // 如果时间小于等于0，就停止计时，并跳转到首页
    if(time <= 0){
        clearInterval(timer);
        document.title = "正在前往首页"
        // 跳转到首页
        window.location.href = "https://shigu666.github.io/";
    }
    // 将时间显示在页面上
    document.querySelector(".time_h1").innerHTML = time;
    document.querySelector(".time_h3").innerHTML = time;
    // 设置标题
    if(time > 0){
        document.title = "404-将在" + time + "秒后返回首页";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);
