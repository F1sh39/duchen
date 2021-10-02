window.addEventListener('load', function() {
    "use strict";
    let unameNum = this.document.querySelector('.number'); // 获取“密码登录”的元素
    let unamePho = this.document.querySelector('.phone'); // 获取“短信登录”的元素
    let userName = this.document.querySelector('.userName'); // 获取密码登录的登录框
    let userPhone = this.document.querySelector('.userPhone'); // 获取短信登录的登录框
    // 密码短信不同登录信息切换
    unamePho.addEventListener('click', function() {
        unameNum.classList.remove('bottom-current');
        this.classList.add('bottom-current');
        userName.classList.add('none');
        userPhone.classList.remove('none');
    })
    unameNum.addEventListener('click', function() {
        unamePho.classList.remove('bottom-current');
        this.classList.add('bottom-current');
        userPhone.classList.add('none');
        userName.classList.remove('none');
    });
    // 当鼠标悬停在input上面边框颜色改变，离开后复原；获得焦点后颜色改变，失去焦点后复原
    let ipts = this.document.querySelectorAll('input');
    for (let i = 0; i < ipts.length; i++) {
        ipts[i].addEventListener('focus', function() {
            this.style.border = "1px solid crimson";
        })
        ipts[i].addEventListener('blur', function() {
            ipts[i].style.border = "1px solid #ccc";
        })
        ipts[i].onmousemove = function() {
            this.style.border = "1px solid crimson";
        }
        ipts[i].onmouseout = function() {
            // 判断该input框是否获得焦点，获得焦点颜色依旧是红色，没获得焦点则变回灰色
            if (ipts[i] == document.activeElement) {
                this.style.border = "1px solid crimson";
            } else {
                this.style.border = "1px solid #ccc";
            }
        }
    }
    // 验证码点击后变为不可点击且会有倒计时
    let phoneCode = document.querySelector('.phoneCode');
    phoneCode.addEventListener('click', function() {
        console.log(1);
        let phoneCodeInterval = setInterval(function() {
            this.innerHTML = "请在60秒后再按";
            let j = 60;
            this.innerHTML = "请在" + j + "秒后再按";
            j--;
        }, 1000);
    });
    // 登录按钮点击后判断input是否为空
    let btn = this.document.querySelector('.btn');
    let userTxt = this.document.querySelector('.usertxt');
    let userPwd = this.document.querySelector('.userpwd');
    let phoneTxt = this.document.querySelector('.phonetxt');
    let phonePwd = this.document.querySelector('.phonepwd');
    let no = this.document.querySelector('.no');
    btn.addEventListener('click', function() {
        if (userTxt.value == '') {
            no.innerHTML = "请输入账号名";
            return false;
        }
    })
    let myMa = document.querySelector('.wwMa'); // 获取扫码型登录验证模块元素
    let uname = this.document.querySelector('.wwUmane'); // 获取输入型登陆模块的元素
    let myComputer = this.document.querySelector('.ww-computer'); // 获取“二维码”图案的元素
    let mySaoma = this.document.querySelector('.ww-saoma'); // 获取“电脑”图案的元素
    // 扫码密码登录状态切换
    myComputer.addEventListener('click', function() {
        myMa.classList.add("none");
        uname.classList.remove('none');
    })
    mySaoma.addEventListener('click', function() {
        uname.classList.add("none");
        myMa.classList.remove('none');
    })
})