//动画函数封装
function animate(obj, target, callback) {

    //步长=（目标位置-现在的位置）/10
    //停止条件  步长=目标位置
    clearInterval(obj.time);//清楚上一个定时器
    obj.time = setInterval(function () {//节省内存空间
        //    var step = Math.ceil((target - obj.offsetLeft) / 100);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.time);//清楚定时器


            if (callback) {
                callback();

            }

        }
        obj.style.left = obj.offsetLeft + step + 'px'//offsetLeft只读



    }, 15)


}