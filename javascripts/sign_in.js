$(function(){
	var loginForm = $("#loginForm");
    var loginBtn = $("#loginBtn");

	loginForm.validate({
		rules:{
			"username":{
				required: true,
				usertl: true,
				minlength: 6,
				maxlength: 15
			},
			"pwd":{
				required: true,
				minlength: 6,
				maxlength: 15
			}
		},
		messages:{
			"username":{
				required: "用户名不能为空",
				usertl: "用户名格式错误",
				minlength: "用户名至少6位",
				maxlength: "用户名最多15位"
			},
			"pwd":{
				required: "密码不能为空",
				minlength: "密码至少6位",
				maxlength: "密码最多15位"
			}
		},
		errorElement: 'div',
        errorClass: 'validate-error'
	});

	loginBtn.click(function(){
		if(loginForm.valid()){
			alert();
		}
	});

	loginForm.keydown(function (e) {
        var e = e || event,
                keycode = e.which || e.keyCode;
        if (keycode == 13) {
            loginBtn.trigger("click");
        }
    });

    if ($.cookie("userName")) {
        $("#username").val($.cookie("userName"));
    }

    function saveUserInfo() {

        if ($("#rmbUser").attr("checked")) {
            var userName = $("#username").val();
            $.cookie("userName", userName, {expires: 7}); // 存储一个带7天期限的 cookie
        }

    }

});