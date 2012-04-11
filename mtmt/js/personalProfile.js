$(document).ready(function() {
    $("#profilePassword-form").validationEngine();
    $("#profile-form").validationEngine();

    //隐藏和显示editAvatar和showAvatar
    $('#editAvatarButton').click(function() {
        //选择本地文件
        $('#J_InputFile').click();
        //上传图片到tmp文件夹，获取图片显示在avatar.html
        window.location.href = "avatar.html";
    });
    $('#submitAvatarButton').click(function() {
        //生成指定尺寸（建议150*150）目标图片到img/avatar文件夹（参考jcrop的php例子），然后跳转回个人资料页面
    });

    // Create variables (in this scope) to hold the API and image size
    var jcrop_api, boundx, boundy;

    $('#target').Jcrop({
        setSelect:[0, 0, 100, 100],
        onChange: updatePreview,
        onSelect: updatePreview,
        aspectRatio: 1
    },function(){
        // Use the API to get the real image size
        var bounds = this.getBounds();
        boundx = bounds[0];
        boundy = bounds[1];
        // Store the API in the jcrop_api variable
        jcrop_api = this;
        $('#preview18').css({
            width: Math.round(18/100 * boundx) + 'px',
            height: Math.round(18/100 * boundy) + 'px',
            marginLeft: '-' + Math.round(0) + 'px',
            marginTop: '-' + Math.round(0) + 'px'
        });
        $('#preview30').css({
            width: Math.round(30/100 * boundx) + 'px',
            height: Math.round(30/100 * boundy) + 'px',
            marginLeft: '-' + Math.round(0) + 'px',
            marginTop: '-' + Math.round(0) + 'px'
        });
    });

    function updatePreview(c)
    {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
        if (parseInt(c.w) > 0)
        {
            var rx = 18 / c.w;
            var ry = 18 / c.h;
            var rx2 = 30 / c.w;
            var ry2 = 30 / c.h;

            $('#preview18').css({
                width: Math.round(rx * boundx) + 'px',
                height: Math.round(ry * boundy) + 'px',
                marginLeft: '-' + Math.round(rx * c.x) + 'px',
                marginTop: '-' + Math.round(ry * c.y) + 'px'
            });
            $('#preview30').css({
                width: Math.round(rx2 * boundx) + 'px',
                height: Math.round(ry2 * boundy) + 'px',
                marginLeft: '-' + Math.round(rx2 * c.x) + 'px',
                marginTop: '-' + Math.round(ry2 * c.y) + 'px'
            });
        }
    }
});

function checkCoords()
{
    if (parseInt($('#w').val())) return true;
    alert('Please select a crop region then press submit.');
    return false;
}