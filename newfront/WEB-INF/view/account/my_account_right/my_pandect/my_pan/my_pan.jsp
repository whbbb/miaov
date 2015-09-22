<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/account/my_account_right/my_pandect/my_pan/my_pan.js" ></script>


<div class="mp-balance">
    <div class="bal-left">
        <p class="acc-balance">账户余额</p>
        <p><span class="bigorange"><s:property value="out.userMoney" default="0.00"/></span>元</p>
    </div>
    <div class="bal-right">
        <p>想要赚更多？那就快来<span class="borange" request-url="../../../financing/financing-skip.do">投标</span>理财吧</p>
        <input  class="br-button" type="button" value="投标" id="bal-invest" request-url="../../../financing/financing-skip.do"/>
        <input  class="br-button" type="button" value="充值" id="bal-recharge" request-url="../../../account/recharge.do"/>
    </div>
</div>
<ul class="property">
	<li class="oscillation">
        <!--账户总资产-->
        <!--  class = osciCurren  控制显示对象-->
        <div class=" pro-current assets1">
            <div class="osc-photo osc-p1"></div>
            <p class="acc-balance">账户总资产</p>
            <p><span class="bigorange"><s:property value="out.netWorth" default="0.00"/></span>元</p>
        </div>
        <div class="pro-current pdtop t-a-details <s:if test='out.netWorth != 0'>osciCurren</s:if>  showdetail">
            <p class="acc-balance">账户总资产</p>
            <p><span class="bigorange o-minfont"><s:property value="out.netWorth" default="0.00"/></span>元</p>
            <p class="osc-details osc-money"><span class="symbol"></span><span class="mright">账户余额</span><s:property value="out.userMoney" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">冻结金额</span><s:property value="out.userFreezeMoney" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">理财金额</span><s:property value="out.financingMoney" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">-</span><span class="mright">未还金额</span><s:property value="out.debt" default="0.00"/>元</p>
        </div>
        <div class="pro-current total-assets big-boj t-a-details <s:if test='out.netWorth == 0'>osciCurren</s:if>">
            <div class="common-top showdetail">
                <h3>亲，您还没有任何资产哟</h3>
                <p>不要让钱睡在那里</p>
                <p class="dowant">想理财？ 先去<span class="bigorange osc-minfont">充值</span>吧</p>
                <input class="comm-butt" type="button" value="充值" request-url="../../../account/recharge.do">
            </div>
        </div>
    </li>
    
     <li class="oscillation">
        <!--已赚金额-->
        <!--  class = osciCurren  控制显示对象-->
        <div class="pro-current assets1">
            <div class="osc-photo osc-p2"></div>
            <p class="acc-balance">已赚金额</p>
            <p><span class="bigorange"><s:property value="out.userFeeMoney" default="0.00"/></span>元</p>
        </div>
        <div class=" pro-current pdtop profit-details  <s:if test='out.userFeeMoney != 0'>osciCurren</s:if>  pro-recharge">
            <p class="acc-balance">已赚金额</p>
            <p><span class="bigorange o-minfont"><s:property value="out.userFeeMoney" default="0.00"/></span>元</p>
            <div class="pro-deta">
                <div class="proleft"><div class="proleft pro-money">+</div><div class="minw">正常累积已收利息</div></div>
                <div class="proleft pro-money"><s:property value="out.refundPai" default="0.00"/>元</div>
            </div>
            <div class="pro-deta">
                <div class="proleft"><div class="proleft pro-money">+</div><div class="minw">逾期累积已收利息</div></div>
                <div class="proleft pro-money"><s:property value="out.refundDinterest" default="0.00"/>元</div>
            </div>
        </div>
        <div class="pro-current profit big-boj  pro-recharge <s:if test='out.userFeeMoney == 0'>osciCurren</s:if> ">
            <div class="common-top ">
                <h3>亲，您还没有任何收益哟</h3>
                <p> 不要哭泣，不要忧伤</p>
                <p class="dowant">想赚钱？ 快去<span class="bigorange osc-minfont">投标</span>理财吧</p>
                <input class="comm-butt" type="button" value="投标" request-url="../../../financing/financing-skip.do">
            </div>
        </div>
    </li>
    
    <li class="oscillation osc-nomargin">
        <!--未还金额-->
        <!-- class =  osciCurren  控制显示对象-->
        <div class="pro-current assets1 ">
            <div class="osc-photo osc-p3"></div>
            <p class="acc-balance">未还金额</p>
            <p><span class="bigorange"><s:property value="out.debt" default="0.00"/></span>元</p>
        </div>
        <div class="pro-current pdtop not-still-details <s:if test='out.debt != 0 '>osciCurren</s:if> showdetail">
            <p class="acc-balance">未还金额</p>
            <p><span class="bigorange o-minfont"><s:property value="out.debt" default="0.00"/></span>元</p>
            <p class="osc-details osc-money"><span class="symbol">+</span><span class="mright">未还本金</span><s:property value="out.noRefundMoney" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">未还利息 </span><s:property value="out.noRefundPai" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">管理费</span><s:property value="out.refundMainte" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">逾期利息</span><s:property value="out.noRefundDinterest" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">逾期管理费</span><s:property value="out.dinterestMainte" default="0.00"/>元</p>
            <p class="osc-money"><span class="symbol">+</span><span class="mright">坏账金额</span>0.00元</p>
        </div>
        <div class="pro-current not-still big-boj  <s:if test='out.debt == 0 '>osciCurren</s:if>">
            <div class="common-top not-still-recharge  showdetail">
                <h3>亲，您还没有任何未还借款哟</h3>
                <p>人生诸多不易</p>
                <p class="dowant">我们愿帮您一把</p>
                <input class="comm-butt" type="button" value="借款" request-url="../../../loan/loan.do">
            </div>
        </div>
    </li>
</ul>
<div class="calendar">
	 <!-- 还款日 -->
    <input id="J_payment_days" type="hidden" value="<s:property value='calendarDate'/>" />
    <!-- 当前日期 -->
    <input id="J_current_day" type="hidden" value="<s:property value='today'/>" />
    <div class="caltit"><span class="cal-mr">本期待收</span><s:property value="calendarOut.dueMoney" default="0.00"/>元 </div>
    <div class="caltit"><span class="cal-mr">本期累计逾期</span><s:property value="calendarOut.overdueMoney" default="0.00"/>元</div>
    <div class="date-particulars">
        <div class=" date-left left-date">
            <p class="date-l-years"></p>
            <table>
                <tr class="date-tit">
                    <td>日</td>
                    <td>一</td>
                    <td>二</td>
                    <td>三</td>
                    <td>四</td>
                    <td>五</td>
                    <td class="tdnobordr">六</td>
                </tr>
                <tr class="day">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="tdnobordr"></td>
                </tr>
                <tr class="day">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="tdnobordr"></td>
                </tr>
                <tr class="day">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="tdnobordr"></td>
                </tr>
                <tr class="day">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="tdnobordr"></td>
                </tr>
                <tr class="day">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="tdnobordr"></td>
                </tr>
                <tr class="day tdnobordr">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="tdnobordr"></td>
                </tr>
            </table>
        </div>
		<s:if test="calendarDate != null && calendarDate != ''">  
	        <s:iterator value="calendarDate.split('\\\\|')" status="st" var="c">
	        <div class=" date-left right-particulars" detail-data-count="1">
	            <div class="the-last"></div>
	            <div class="dl-a">
	                <ul class="nowul">
	                	<s:iterator value="calendarOut.pzSysOrderRefundUserViewList">
		                	<s:if test="refundPlanTime == #c">
			                    <li class="nowaday ">
			                        <h3 class="alteration">资产变动</h3>
			                        <p>标的名称：<s:property value="userOrderName"/></p>
			                        <p>标的编号：<s:property value="userOrderCode"/></p>
			                        <p>本期应收本金：<s:property value="refundMoney" default="0.00"/>元</p>
			                        <p>本期应收利息：<s:property value="refundPai" default="0.00"/>元</p>
			                        <p>本期逾期利息：<span class="nowadaygreen"><s:property value="refundDinterest" default="0.00"/>元</span></p>
			                        <p>还款方式：<s:if test="orderRefund=='01'">等额本息</s:if><s:elseif test="orderRefund=='02'">等额本金</s:elseif><s:elseif test="orderRefund=='03'">本息一次性</s:elseif><s:elseif test="orderRefund=='04'">先息后本</s:elseif><s:else>其他还款方式</s:else></p>
			                        <p class="nowaday-minfont">本期预计编号<s:property value="userOrderCode"/>的<s:property value="userOrderName"/>标的转账<s:property value="bidMoney" default="0.00"/>元</p>
			                        <s:if test="returnRefundCode == '01' || returnRefundCode == '02'"><div class="nowaday-ok"></div></s:if>
			                    </li>
		                    </s:if>
	                    </s:iterator>
	                </ul>
	            </div>
	            <div class="next"></div>
	        </div>
	        </s:iterator>
	        <div class=" date-left right-particulars" detail-data-count="0">
				<p class="record-no">请选择还款日查看相关详情</p>
	        </div>
        </s:if> 
        <s:else>
        	<div class=" date-left right-particulars" detail-data-count="0">
				<p class="record-no">请选择还款日查看相关详情</p>
	        </div>
        </s:else>  
    </div>
</div>