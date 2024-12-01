// 设置5秒倒计时
var time = 3;
// 设置一个定时器，每秒执行一次
var timer = setInterval(function(){
    // 每次减一
    time--;
    // 如果时间小于等于0，就停止计时，并跳转到首页
    if(time <= 0){
        clearInterval(timer);
        document.title = "正在前往隐私政策"
        // 跳转到隐私政策
        window.location.href = "/privacy-policy";
    }
    if(time > 0){
        document.title = "将在" + time + "秒后进入隐私政策";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);
