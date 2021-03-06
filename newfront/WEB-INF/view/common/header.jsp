<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
    <script type="text/javascript" src="../../../js/common/header.js" ></script>
    <div id="J_result_tips">
    	<jsp:include page="../common/tips.jsp"></jsp:include>
    </div>
    <div id="J_user_login_container">
        <!-- 用户登录状态 0未登录 1已登录 2需要登录 -->
        <input id="J_login_state_user" type="hidden" value='<s:property value="#user"/>'>
        <s:if test="loginFlag == 2">
        	<input id="J_login_state" type="hidden" value="2" />
        </s:if>
        <s:elseif test="#user == null">
        	<input id="J_login_state" type="hidden" value="0" />
        </s:elseif>
        <s:else>
        	<input id="J_login_state" type="hidden" value="1" />
        </s:else>
       
        <!-- 用户登录错误计数 -->
        <input id="J_login_error_count" type="hidden" value="0" />

        <div id="J_login_frame" style="display: none; background-image: url( '../../../images/common/bg/login_bg.png' )">
            <div id="J_login_panel">
                <form action="www.sohu.com" method="post" data-type="need-verify">
                    <div id="J_user_login_close" style="background-image: url( '../../../images/common/ico/ico_close.png' )"></div>
                    <input data-name="mobile" type="text" value="" data-type="need-validate" placeholder="请输入注册时的手机号" />
                    <img src="../../../images/common/ico/ico_user.png" />
                    <input data-name="password" type="password" value="" data-type="need-validate" placeholder="请输入登录密码" error-msg="您已连续4次输入有误，为保证账<br />户安全，账户将在第5次输入有误<br />后冻结24小时，请谨慎输入。 " />
                    <img src="../../../images/common/ico/ico_password.png" />
                    <div class="code-container" style="display: none;" >
                        <input data-name="code" type="text" value="" placeholder="请输入验证码" />
                        <img src="../../../images/common/ico/loading.png" />
                        <a href="javascript: void( 0 );">看不清</a>
                    </div>
                    <div class="forget">
                            <input id="J_remember_me" type="checkbox" checked="checked" special="true" />
                            <p>记住用户名</p>
                        <a href="../../../account/resetting-p1.do">忘记密码？</a>
                    </div>
                    <input id="J_user_login_button" type="button" value="登   录" error-msg="您的账户已冻结，24小时后将自<br />行解冻，如不是本人操作请联系<br />客服4000-38-4000。" />
                    <div class="register">
                        <span>没有账号？</span>
                        <a href="../../../account/regist.do">免费注册</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div class="header">
        <table>
            <tr>
                <td id="J_left">
                    <div>客服热线: 4000-38-4000</div>
                    <a href="javascript: void( 0 );">
                        <img src="../../../images/common/ico/ico_wb.png" />
                        <img class="color" src="../../../images/common/ico/ico_wb_logo.png" />
                        <img class="tip" src="../../../images/common/ico/ico_wb_tip.png" />
                    </a>
                    <a href="javascript: void( 0 );">
                        <img src="../../../images/common/ico/ico_wx.png" />
                        <img class="color" src="../../../images/common/ico/ico_wx_logo.png" />
                        <img class="tip" src="../../../images/common/ico/ico_wx_tip.png" />
                    </a>
                    <a href="javascript: void( 0 );">
                        <img src="../../../images/common/ico/ico_qq.png" />
                        <img class="color" src="../../../images/common/ico/ico_qq_logo.png" />
                        <img class="tip qq" src="../../../images/common/ico/ico_qq_tip.png" />
                    </a>
                </td>
                <td id="J_right">
                    <div id="J_help">
                        <a href="../../../other/help.do">帮助</a>
                        <!-- 已取消 -->
                        <!--<a href="">网站导航</a>-->
                    </div>
                    <div id="J_login">
                        <a id="J_user_login_link" href="javascript: void( 0 );">登录</a>
                        <a href="../../../account/regist.do">注册用户</a>
                    </div>
                    <div id="J_user" style="display: none;">
                        <table>
                            <tr>
                                <td class="flow-table">
                                    欢迎您，
                                </td>
                                <td class="flow-table">
                                    <div class="user-menu">
                                        <table id="J_user_table">
                                            <tr>
                                                <td class="first-td">
                                                    <b><s:property value="#user.userName"/></b>
                                                    <div class="white" style="background-image: url('../../../images/common/ico/arrow-down.png')" ></div>
                                                    <div class="black" style="background-image: url('../../../images/common/ico/arrow-down-black.png')" ></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="link-td">
                                                    <a href="../../../account/my_account.do" >我的账户</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="link-td">
                                                    <a id="J_login_out" href="javascript: void( 0 );" >退出</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="nav">
        <div class="nav-container">
            <div class="logo">
                <a href="../../../index.do" style="background-image: url('../../../images/common/logo/logo.png')"></a>
            </div>
            <div class="inner-nav">
                <span></span>
                <a data-value="0" href="../../../index.do">首页</a>
                <a data-value="1" href="../../../financing/financing-skip.do">我要理财</a>
                <a data-value="2" request-type="need_login" href="../../../loan/loan.do">我要借款</a>
                <a data-value="3" request-type="need_login" href="../../../account/my_account.do">我的账户</a>
                <a data-value="4" class="last" href="../../../other/about.do">关于我们</a>
            </div>
        </div>
    </div>