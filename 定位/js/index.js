window.addEventListener('load', function () {

    var taobaophoto = document.querySelector('.taobaophoto');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var move = document.querySelector('.move');
    var auto = document.querySelector('.auto');
    var movewidth = move.children[0].offsetWidth;

    taobaophoto.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';//鼠标经过显示 左右箭头
        clearInterval(timer);//清楚计时器
        timer = null;



    });
    taobaophoto.addEventListener('mouseleave', function () {

        prev.style.display = 'none';//鼠标离开隐藏 左右箭头
        next.style.display = 'none';
        timer = setInterval(function () {//开启计时器
            next.click();

        }, 2000);

    });



    for (var i = 0; i < move.children.length; i++) {

        var li = document.createElement('li');//动态生成小圆圈
        auto.appendChild(li);
        li.setAttribute('index', i); //给当前的li设置索引号



        li.addEventListener('click', function () {//创建小li的同时给每一个li添加点击事件

            for (var j = 0; j < auto.children.length; j++) {

                auto.children[j].className = '';//排他思想 每个小li变透明


            }

            var index = this.getAttribute('index');
            num = index;
            animate(move, -index * movewidth);//索引号x图片的宽度就是移动的距离
            this.className = 'current';//点击的小li 变白
        });

    }
    auto.children[0].className = 'current';// 给第一个小li变白


    var num = 0;
    var first = move.children[0].cloneNode(true);
    move.appendChild(first);
    next.addEventListener('click', function () {
        if (num == move.children.length - 1) {
            // move.style.left = 0;
            animate(move, 0);
            num = 0;
        }
        num++;
        animate(move, -num * movewidth);

        for (var i = 0; i < auto.children.length; i++) {

            auto.children[i].className = '';//清楚其他小圆点颜色

        }
        if (num == auto.children.length) {
            auto.children[0].className = 'current';

        }
        else { auto.children[num].className = 'current'; }



    });
    prev.addEventListener('click', function () {
        if (num == 0) {
            // move.style.left = 0;
            animate(move, -(move.children.length - 1) * movewidth);
            num = move.children.length - 1;
        }
        num--;
        animate(move, -num * movewidth);

        for (var i = 0; i < auto.children.length; i++) {

            auto.children[i].className = '';//清楚其他小圆点颜色

        }
        if (num == auto.children.length) {
            auto.children[0].className = 'current';

        }
        auto.children[num].className = 'current';


    });
    var timer = setInterval(function () {
        next.click();

    }, 2000);


});