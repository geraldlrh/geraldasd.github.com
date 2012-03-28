/**
 * Created by JetBrains WebStorm.
 * User: liu
 * Date: 12-3-26
 * Time: 下午10:16
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    $("#input-login-account input").focus(function () {
        $("#input-login-account").addClass("focus");
    });
    $("#input-login-account input").blur(function () {
        $("#input-login-account").removeClass("focus");
    });
    $("#input-login-pwd input").focus(function () {
        $("#input-login-pwd").addClass("focus");
    });
    $("#input-login-pwd input").blur(function () {
        $("#input-login-pwd").removeClass("focus");
    });
    jQuery("#login-form").validationEngine();
    jQuery("#register-form").validationEngine();
});