<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/withdraw-cash/wdcash/wdcash.js"></script>

<div class="wd-cash">
    <div class="cash-money">
        <form id="J_cash_form" action="../../../escrow/toWithdraw.do" method="post" target="_blank" data-type="need-verify">
            <input type="hidden" class="max-cash" value='<s:property value="maxMoney"/>'/>
            <div class="re-part onekey-part">
                <div class="repart-top">
                    <div class="top-yu-e">
                        <input type="hidden" class="yu-e">
                        账户余额：<span class="yu-money orangefont orangebigfont"><s:property value="#user.userMoney"/></span>元
                    </div>
                    <div class="topmoney">
                        <span class="czjy floatleft">提现金额：</span>
                        <input type="text" name="sum" data-name="get_cash" class="re-money floatleft" id="czmoney" placeholder="单笔提现金额 1~500,000">
                        <span class="yuan">元</span>
                    </div>
                    <div class="czbut">
                        <input type="button" value="提现" id="J_cash_button" class="recha">
                    </div>
                    <div class="timoney">
                        到账时间：<span class="yu-money">T+0</span>
                    </div>
                 </div>
            </div>
        </form>
    </div>
    <div class="cash-prompt">
        <div class="kindly-reminder">
            <h3>温馨提示：</h3>
            <p> 1.请您确保提现金额有效，以免造成提现失败； </p>
            <p>2.您将在“数码视讯”页面输入银行卡信息，请确保真实有效；</p>
            <p>3.数码视讯支付技术有限公司提现时间为T+0，如遇特殊情况提现时间可能延后；</p>
            <p>4.禁止洗钱、信用卡套现、虚假交易等非法行为，一经发现并确认，将终止该账户的使用；</p>
            <p>5.提现失败时请联系客服，4000-38-4000。</p>
        </div>
    </div>
</div>