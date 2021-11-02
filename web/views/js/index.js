$(function () {
    function getTableList() {
        $.ajax({
            url: 'http://127.0.0.1:3001/getAllCourse',
            type: 'get',
            success: function (res) {
                var htmlStr = template('tpl-list', res.result);
                $('#courseList').html(htmlStr)
            }
        })
    }

    getTableList()
})