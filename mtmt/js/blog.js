/**
 * Created with JetBrains WebStorm.
 * User: liu
 * Date: 12-4-30
 * Time: 下午8:29
 * To change this template use File | Settings | File Templates.
 */
$().ready(function() {
    controlPage();
    $(".showDetail").colorbox({title:true});
    //编辑时用ajax更新blogEdit.html，新增时不用更新，待完成
    $(".editBlog").colorbox({title:true});

    // delete blog
    $('.delete').live('click', function() {
        blog.deleteBlog($(this));
        return false;
    });
    $('.delete2').live('click', function() {
        var title = $(this).closest('.title>h1').text();
        $.colorbox.close();
        //找到改笔记对应的id或者标题再删除，代码类型首页，待完成
        $('.delete').click();
        return false;
    });

    //next blog
    $('.nextBlog').live('click', function() {
        blog.nextBlog($(this));
        return false;
    });
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
var blog = {};
// delete blog
blog.deleteBlog = function(el){
    if (confirm('确定删除笔记?')){
       //前台删除
        $(el).closest('.blog').fadeOut('slow', function(){
            $(el).closest('.blog').remove();
        });
       //后台删除
    }
};
// next blog
blog.nextBlog = function(el){
    var title = $(el).closest('.title>h1').text();
    //找到下篇笔记并更新blogDetail.html 将html部分的flash.html替换
};