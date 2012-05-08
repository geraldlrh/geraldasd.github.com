/**
 * @author liu
 */

$(document).ready(function() {
    var $numbers = $('.number td');
    var $dateBodys = $('.dateBody td');
    //隐藏td中多余的li
    hideLi();

    //获得被选中dateBody的td值并使其变色
    $('.dateBody td').click(function() {
        var chooseDate = $(this).children('input').attr('value');
        var dateBody = this;
        if (chooseDate >= 1) {        //如果是有效的日期，进行变色
            for (var i=0; i < $numbers.length; i++) {
                if ($($numbers[i]).children("span:first-child").text() == chooseDate) {
                    focusAndEdit(chooseDate, dateBody, $numbers[i]);
                    break;
                }
            }
        }
    });

    //获得被选中number的td值并使其变色
    $('.number td').click(function() {
        var chooseDate = $(this).children("span:first-child").text();
        var number = this;
        if (chooseDate >= 1) {        //如果是有效的日期，进行变色
            for (var i=0; i < $dateBodys.length; i++) {
                if ($($dateBodys[i]).children('input').attr('value') == chooseDate) {
                    focusAndEdit(chooseDate, $dateBodys[i], number);
                    break;
                }
            }
        }
    });

    //相应的td变色且弹出日程表编辑框
    function focusAndEdit(chooseDate, dateBody, number) {
        //若已经有选中的日期，获得当前值
        if($('#scheduleEdit').is(':visible')) {
            var currentFocus = $('.dateBody td.focusBody').children('input').attr('value');
        }
        $numbers.removeClass('focusHeader');
        $dateBodys.removeClass('focusBody');
        $('#scheduleEdit').hide();
        //当选中与当前值不同的日期才变色并弹出相应的编辑框
        if (currentFocus != chooseDate) {
            $(number).addClass('focusHeader');
            $(dateBody).addClass('focusBody');
            $('#scheduleEdit').show();
            $(window).scrollTop(500);
            controlSelect();
            //……根据chooseDate来取得相应日期的安排表并显示在编辑区
        }
    }

    //根据startTime的值来禁用endTime的选项
    function controlSelect() {
        $('.endTime select').focus(function() {
            var startTime = $(this).parent().siblings(".startTime").children("select").val();
            $(this).children('option').each(function(){
                if( $(this).val() <= startTime){
                    $(this).attr("disabled", true);
                }
            });
        });
        $('.endTime select').blur(function() {
            $(this).children().attr("disabled", false);
        });
    }

    //隐藏td中多余的li
    function hideLi() {
        var scheduleBody = $(".dateBody ul");
        scheduleBody.each(function() {
                if ($(this).children('li').length > 4) {
                    $(this).children('li').eq(2).nextAll("li").hide();
                    var chooseDate = $(this).prevAll('input').attr('value');
                    for (var i=0; i < $numbers.length; i++) {
                        if ($($numbers[i]).children("span:first-child").text() == chooseDate) {
                            $($numbers[i]).children("span").removeClass("hidden");
                            break;
                        }
                    }
                }
        });
    }

    //添加
    $('#addButton').click(function(){
        $('#addBody select').val("");
        $('#addBody textarea').val("");
        $('#addBody').slideDown("fast");
        $('#addButton').fadeOut("fast");
        $('#returnButton').fadeOut("fast");
        return false;
    });

    //返回
    $('#returnButton').click(function(){
        $('#scheduleEdit').slideUp("fast");
        return false;
    });

    //保存(确定)
    $('#saveButton').click(function() {
        //……ajax与后台交互保存改变的日程安排(根据是否有addBody的id来判断是添加还是编辑)
        $(this).closest('li').slideUp("fast");
        $('#addButton').fadeIn("fast");
        $('#returnButton').fadeIn("fast");
        return false;
    });

    //……取消，若是添加则无变化，若不是要保留原来的事项（从后台重新生成，刷新页面？）
    $('#cancelButton').click(function() {
        $(this).closest("li").val("").slideUp("fast");
        $('#addButton').fadeIn("fast");
        $('#returnButton').fadeIn("fast");
        return false;
    });

    //编辑
    $('.editButton').click(function() {
        var $spans = $(this).prevAll();
        var startTime = $spans[3].innerHTML;
        var endTime = $spans[1].innerHTML;
        var task = $spans[0].innerHTML;
        var $clone = $('#addBody').clone(true).removeAttr("id").show();
        var $addSpans = $clone.children();
        $($addSpans[0]).children("select").val(startTime);
        $($addSpans[2]).children("select").val(endTime);
        $($addSpans[3]).children("textarea").val(task);
        $(this).parent().replaceWith($clone);
        $('#addButton').hide();
        $('#returnButton').hide();
        return false;
    });

    //删除
    $('.deleteButton').click(function() {
        $(this).parent().replaceWith("");
        //……ajax调用在后台删除该项
        return false;
    });

    //搜索功能
    $('#search span.icon').click(function() {
        $('#search input:[type=submit]').click();
    });

    //编辑和删除按键hover效果
    $('#scheduleEdit li').live({
        mouseover: function() {
            $(this).children(".editButton").removeClass("hidden");
            $(this).children(".deleteButton").removeClass("hidden");
        },
        mouseout: function() {
            $(this).children(".editButton").addClass("hidden");
            $(this).children(".deleteButton").addClass("hidden");
        }
    });
});

