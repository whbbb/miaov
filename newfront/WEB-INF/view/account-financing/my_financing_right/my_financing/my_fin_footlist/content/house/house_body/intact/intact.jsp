<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<link type="text/css" rel="stylesheet" href="../../../css/account-financing/account-financing.css" />

<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_footlist/content/house/house_body/intact/intact.js" ></script>
<s:if test="allCountOutput != null ">
	<script type="text/javascript">
	<!--
		$().ready(function(){
			var li = $(".inv-list-nav li");
			li.eq(0).html("还款中（<s:property value='allCountOutput.refundCount' default='0'/>）");
			li.eq(1).html("投标中（<s:property value='allCountOutput.bidCount' default='0'/>）");
			li.eq(2).html("预约中（<s:property value='allCountOutput.appointmentCount' default='0'/>）");
			li.eq(3).html("放款审核（<s:property value='allCountOutput.auditCount' default='0'/>）");
			li.eq(4).addClass("green-current").html("已还完（<s:property value='allCountOutput.endCount' default='0'/>）").append('<div class="listnav-current"></div>');
			li.eq(5).html("流标（<s:property value='allCountOutput.flowCount' default='0'/>）");
			li.eq(6).html("坏账还款中（<s:property value='allCountOutput.debtCount' default='0'/>）");
		})
	//-->
	</script>
</s:if>

<!--已还完-->
<div class="intact">
    <ul class="intact-tit">
        <li class="intact-one">借款标题</li>
        <li class="intact-two">年利率</li>
        <li class="intact-three">借款期限</li>
        <li class="intact-four">借款金额</li>
        <li class="intact-four">投标金额</li>
        <li class="intact-four">应收总额</li>
        <li class="intact-four">已收总额</li>
        <li class="intact-five">还款方式</li>
    </ul>
    <s:if test="biddingListOutput.pzSysOrderUserOrderViewList.size() > 0">
    	<table class="intacttab">
			<s:iterator value="biddingListOutput.pzSysOrderUserOrderViewList">
		        <tr class="tab-tr">
		            <td class="intact-one">
		                <div class="igmp" request-url="
		                	<s:if test="orderDealType == '01'">
								../../../other/loan_service.do?refundType=1&assureFlag=2&userOrderCode=<s:property value="userOrderCode"/>
							</s:if>
							<s:elseif test="orderDealType == '02'">
								../../../other/loan_service.do?refundType=1&assureFlag=1&userOrderCode=<s:property value="userOrderCode"/>
							</s:elseif>
							<s:elseif test="orderDealType == '03'">
								../../../other/loan_service.do?refundType=2&assureFlag=2&userOrderCode=<s:property value="userOrderCode"/>
							</s:elseif>
							<s:elseif test="orderDealType == '04'">
								../../../other/loan_service.do?refundType=2&assureFlag=1&userOrderCode=<s:property value="userOrderCode"/>
							</s:elseif>
							<s:elseif test="orderDealType == '05'">
								../../../other/loan_service.do?refundType=3&assureFlag=2&userOrderCode=<s:property value="userOrderCode"/>
							</s:elseif>
							<s:elseif test="orderDealType == '06'">
								../../../other/loan_service.do?refundType=3&assureFlag=1&userOrderCode=<s:property value="userOrderCode"/>
							</s:elseif>">
		                </div>
		                <p class=" limit " title="<s:property value='userOrderName'/>"><s:property value="userOrderName"/></p>
		                <div class="hide-details">
		                    <div class="close"></div>
		                    <ul class="details-tit">
		                        <li>还款日期</li>
		                        <li>应收总额</li>
		                        <li>应收本息</li>
		                        <li>逾期天数</li>
		                        <li>逾期利息</li>
		                        <li>还款状态</li>
		                    </ul>
		                    <s:if test="bfmap[bidCode] != null">
		                    <div class="details-list">
		                        <table class="list-tab">
			                        <s:iterator value="bfmap[bidCode].pzSysRefundList">    
			                            <tr>
			                                <td><s:property value="refundPlanTime.substring(0,11)"/></td>
			                                <td><s:property value="refundPai" default="0"/>元</td>
			                                <td><s:property value="refundMoney" default="0"/>元</td>
			                                <td><s:property value="refundOverday" default="0"/>天</td>
			                                <td><s:property value="refundDinterest" default="0"/>元</td>
			                                <td>
			                                	<s:if test="returnRefundCode == '00'">等待还款</s:if>
												<s:if test="returnRefundCode == '01'">正常还款</s:if>
												<s:if test="returnRefundCode == '02'">逾期还款</s:if>
												<s:if test="returnRefundCode == '03'">风险准备金还款</s:if>
												<s:if test="returnRefundCode == '04'">坏账无还款</s:if>
												<s:if test="returnRefundCode == '05'">还款待放款</s:if>
			                                </td>
			                            </tr>
		                            </s:iterator>
		                        </table>
		                    </div>
		                    </s:if>
		                </div>
		            </td>
		            <td class="intact-two"><s:property value="orderApr" default="0"/>%</td>
		            <td class="intact-three"><s:property value="orderCycle" default="0"/>个月</td>
		            <td class="intact-four"><s:property value="orderMoney" default="0"/>元</td>
		            <td class="intact-four"><s:property value="bidMoney" default="0"/>元</td>
		            <td class="intact-four"><s:property value="orderMonthRefund" default="0"/>元</td>
		            <td class="intact-four"><s:property value="serviceFee" default="0"/>元</td>
		            <td class="intact-five">
		                <!-- id = mode 控制显示 -->
		                <s:if test="orderRefund=='01'"><div class="intact-four intact-deng mode" title="等额本息，每月还款"></div></s:if>
			        	<s:elseif test="orderRefund=='04'"><div class="intact-four intact-yue mode" title="按月付息，到期还本"></div></s:elseif>
			        	<s:elseif test="orderRefund=='03'"><div class="intact-four intact-ben mode" title="到期后，本息一次性还款"></div></s:elseif>
		            </td>
		        </tr>
        	</s:iterator>
    	</table>
    </s:if>
	<s:else>
		<div class="no-record">亲，您还没有交易记录哟~ </div>
	</s:else>
</div>
 
<s:include value="/WEB-INF/view/common/page.jsp">
	<s:param name="pageSize" value="10"></s:param>
	<s:param name="reqType" value="1"></s:param>
	<s:param name="refreshDom" value="'J_intact'"></s:param>
	<s:param name="reqUrl" value="'../../../account/account-financing-details.do'"></s:param>
	<s:param name="pageNum" value="pageNo"></s:param>
	<s:param name="pageCount" value="biddingListOutput.totalCount"></s:param>
	<s:param name="orderState" value="orderState"></s:param>
	<s:param name="orderType" value="orderType"></s:param>
</s:include>
