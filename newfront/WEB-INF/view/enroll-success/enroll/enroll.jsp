<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<script type="text/javascript" src="../../../js/enroll-success/enroll/enroll.js" ></script>

<div class="enroll">
    <div class="prosit">尊敬的用户名用户名 ，恭喜您已注册成功</div>
    <p class="require">为保证资金安全您需要开通资金托管账户 。</p>
    <div class="dredgebutton">
        <input type="button" value="马上开通" class="immediately" request-url="../../../account/escrow-account.do">
        <input type="button" value="暂缓开通" class="postpone" request-url="../../../index.do">
    </div>
    <p class="skip"><span class="greenfont" id="skipgreen">15</span>秒后返回首页</p>
    <p class="check">点击查看<span class="underlinegreen" request-url="../../../other/insurance.do">优金客安全保障</span>方式>></p>
</div>