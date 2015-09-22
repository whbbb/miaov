<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/repayment/repay/repay.js" ></script>

<div class="repay">
    <h3 class="repay-h3"><s:property value="out.userOrderName"/></h3>
    <form id="J_repayment_form" action="../../../account/repayment.do" method="post" target="_blank">
    <input name="refundCount" type="hidden" value='<s:property value="refundCount"/>'/>
    <input id="mustPayMoney" name="sum" type="hidden" value='<s:property value="out.mustPayMoney"/>'/>
    <input name="userOrderCode" type="hidden" value='<s:property value="userOrderCode"/>'/>
    <input id="userMoney" type="hidden" value='<s:property value="out.userMoney"/>'/>
        <div class="repaybody">
            <div class="repay-content"><span class="align-right">应还总额 ：</span> <span class="moneyFormat"><s:property value="out.sumPayMoney"/></span>元</div>
            <div class="repay-content">
                <span class="align-right">未还总额 ：</span>
                <span class=""><s:property value="out.noPayMoney"/></span>元
            </div>
            <div class="repay-content">
                <span class="align-right">账户余额 ：</span>
                <span class="green-font">
                    <span class="special-money"><s:property value="out.userMoney"/></span>
                </span>
                元
            </div>
            <div class="repay-content">
                <span class="align-right">本期应还金额 ：</span>
                <span class="orange-font">
                    <span class="special-money"><s:property value="out.mustPayMoney"/></span>
                </span>
                元
            </div>
            <div class="repay-content align-center ">
                <!-- 改变class名来切换显示状态  show-this 显示  hide-this 隐藏-->
                <p id="J_alert_tip">账户余额已不足</p>
            </div>
        </div>
        <div class="repay-but">
            <input id="repay-submit" type="submit" value="还款" class="repay-button"/>
            <input id="repay-button" type="button" value="充值" class="repay-button" request-url="../../../account/recharge.do" />
            <input id="close" type="button" value="取消" class="repay-button" request-url="../../../account/account-loan.do"/>
        </div>
    </form>
</div>