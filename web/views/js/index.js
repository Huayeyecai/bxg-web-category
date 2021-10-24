$(function () {
    initTableListOne()

    function initTableListOne() {
        $.ajax({
            method: 'GET',
            url: 'images',
            succes: function (res) {
                console.log(res)
            }
        })
    }
})