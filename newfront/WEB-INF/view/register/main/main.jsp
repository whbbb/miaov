<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

    <script type="text/javascript" src="../../../js/register/main/main.js" ></script>

    <div class="outer">
        <h2>
            <span class="title">欢迎加入优金客</span>
                <span class="login">
                    > 已经拥有优金客帐号?
                    <a href="javascript: void( 0 );">直接登录</a>
                </span>
        </h2>
        <div class="inner">
            <form id="J_register_form" action="../../../account/regist_success.do" method="post" data-type="need-verify">
                <input name="inviteCode" id="J_invite_code" type="hidden" value="<s:property value="inviteCode"/>" />
                <table class="register-table">
                    <tr>
                        <td class="left-td"><span>*</span>昵称</td>
                        <td name="userName" class="right-td"><input type="text" data-name="nick_name" placeholder="中文、字母或数字，长度为4-16个字符" /></td>
                    </tr>
                    <tr>
                        <td class="left-td"><span>*</span>登录密码</td>
                        <td class="right-td">
                            <input name="userPassword" id="J_password" data-name="password" type="password" placeholder="英文、数字或符号至少包含两种，6~18位" />
                            <div id="J_password_strong">
                                <label>密码强度</label>
                                <span></span>
                                <span></span>
                                <span></span>
                                <b>强</b>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="left-td"><span>*</span>确认密码</td>
                        <td class="right-td"><input data-name="re_password" type="password" placeholder="请与登录密码保持一致" /></td>
                    </tr>
                    <tr>
                        <td class="left-td"><span>*</span>手机号码</td>
                        <td name="userPhone" class="right-td"><input data-name="mobile" type="text" placeholder="输入您的手机号码" /></td>
                    </tr>
                    <tr>
                        <td class="left-td"><span>*</span>验证码</td>
                        <td class="right-td">
                            <div class="code-container">
                                <input data-name="img_code" type="text" class="short" placeholder="请输入图形验证码" />
                                <img id="J_reset_code_img" src="../../../images/common/ico/loading.png" width="86px" height="42px">
                                <a id="J_get_img_code" class="get-code" href="javascript: void( 0 );">看不清</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="left-td"><span>*</span>手机验证码</td>
                        <td class="right-td">
                            <input name="macCode" data-name="mobile_code" type="text" class="short" placeholder="请输入验证码" />
                            <a id="J_get_code" class="get-code" href="javascript: void( 0 );">点击获取验证码</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="left-td">
                        <td class="right-td spacial-td">
                            <input type="checkbox" data-name="agree_protocol" special="true" checked="checked" value="1" />
                            <span>
                                我已认真阅读并同意
                                <a href="../../../other/loan_service.do" >《网站服务协议》</a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="left-td">
                        <td class="right-td spacial-td">
                            <input id="J_register" type="button" class="large" value="注 册" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>