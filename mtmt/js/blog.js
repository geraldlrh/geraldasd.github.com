/**
 * Created with JetBrains WebStorm.
 * User: liu
 * Date: 12-4-30
 * Time: 下午8:29
 * To change this template use File | Settings | File Templates.
 */
$().ready(function() {
    controlPage();
});
//对上一页和下一页按钮进行控制
function controlPage() {
    $('.pager li.previous').show();
    $('.pager li.next').show();
    var curPage = $('.pager .dropdown-toggle').text().trim();
    var start = "第1页";
    var end = $('.pager .dropdown-menu li:first-child').text();
    if (curPage == start) {
        $('.pager li.previous').hide();
    }
    else if(curPage == end) {
        $('.pager li.next').hide();
    }
}