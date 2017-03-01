/**
 * Created by Annie on 2017/1/18.
 */

window.addEventListener("load",function(){
    /*
    * 1 ʵ�ֶ���������������򱳾�ɫ�Ľ���
    *   �����ֲ�ͼ����ɫ�̶�
    *   1.��ӹ����¼������ϻ�ȡ�����ľ���
    *
    * */
    //��ӹ����¼�
    window.addEventListener("scroll",function(){
        //��ȡ�������߶�
        var scrollTop=document.body.scrollTop;
        //��ȡ�ֲ�ͼ�߶�
        var slideHeight = document.querySelector("#slide").offsetHeight;

        if(scrollTop>slideHeight){
            document.querySelector("#header").style.backgroundColor="rgba(201,21,35,1)";
        }else{
            var opacity= scrollTop/slideHeight*1;
            document.querySelector("#header").style.backgroundColor="rgba(201,21,35,"+opacity+")";
        }

        /*
        * 1 ʵ����ɱ����ʱ  ����ʱ�� ÿ���1����ʱ��
        *   1����һ����ʱ��
        *   2����һ����ʱ��ÿ��ִ��һ�Σ��ڶ�ʱ�������ִ��
        *   3�ֱ����ʱ����
        *       ʱ 7200 / 3600 == 2����ʱ�����3600��ÿ��Сʱ��3600�룩
        *       �� ��7300 % 3600��/60 = 100/60   ��ȡ�� % �ڳ���60��ÿ��60�룩
        *       �룺 3200 % 60   ֱ��ȡģ % 60
        *
        *    var time = 5 * 3600
        *
        *
        *
        * */
        //��ȡδ����ʱ��
        var futureTime = new Date("January 19,2017 12:00:00");


        //��ʱ��
        var time = 5 * 3600;
        //���ö�ʱ�� ÿһ��ִ��һ��
        setInterval(function(){
            time--;
            //Сʱh  ����m  ��s
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














