$(function () {
    var item = document.querySelector(".nav-left .nav-tree-side");
    var lis = item.children;
    for (var i = 0; i < lis.length; i++) {
        // lis[i].setAttribute('index', i);
        //绑定点击事件
        lis[i].onclick = function () {
            console.log()
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'nav-item';
        }
    }

})