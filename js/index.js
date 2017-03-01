/**
 * Created by Annie on 2017/1/18.
 */

window.addEventListener("load",function(){
    /*
    * 1 实现顶部搜索框滚动区域背景色的渐变
    *   超过轮播图背景色固定
    *   1.添加滚动事件，不断获取滚动的距离
    *
    * */
    //添加滚动事件
    window.addEventListener("scroll",function(){
        //获取滚动条高度
        var scrollTop=document.body.scrollTop;
        //获取轮播图高度
        var slideHeight = document.querySelector("#slide").offsetHeight;

        if(scrollTop>slideHeight){
            document.querySelector("#header").style.backgroundColor="rgba(201,21,35,1)";
        }else{
            var opacity= scrollTop/slideHeight*1;
            document.querySelector("#header").style.backgroundColor="rgba(201,21,35,"+opacity+")";
        }

        /*
        * 1 实现秒杀倒计时  用总时间 每秒减1秒总时间
        *   1定义一个总时间
        *   2设置一个定时器每秒执行一次，在定时器里面的执行
        *   3分别求出时分秒
        *       时 7200 / 3600 == 2；总时间除以3600（每个小时有3600秒）
        *       分 （7300 % 3600）/60 = 100/60   先取余 % 在除以60（每分60秒）
        *       秒： 3200 % 60   直接取模 % 60
        *
        *    var time = 5 * 3600
        *
        *
        *
        * */
        //获取未来的时间
        var futureTime = new Date("January 19,2017 12:00:00");


        //总时间
        var time = 5 * 3600;
        //设置定时器 每一秒执行一次
        setInterval(function(){
            time--;
            //小时h  分钟m  秒s
            var h = Math.floor(time/3600);
            var m = Math.floor(time % 3600 / 60);
            var s = Math.floor(time % 60);
            var downTimes= document.querySelectorAll(".seckill-downtime>span");
            downTimes[0].innerHTML= Math.floor(h / 10);
            downTimes[1].innerHTML= Math.floor(h % 10);
            downTimes[3].innerHTML= Math.floor(m / 10);
            downTimes[4].innerHTML= Math.floor(m % 10);
            downTimes[6].innerHTML= Math.floor(s / 10);
            downTimes[7].innerHTML= Math.floor(s % 10);

        },1000)
    });

});














