<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_footlist/content/house/house_body/audit/audit.js" ></script>

<s:if test="allCountOutput != null ">
	<script type="text/javascript">
	<!--
		$().ready(function(){
			var li = $(".inv-list-nav li");
			li.eq(0).html("还款中（<s:property value='allCountOutput.refundCount' default='0'/>）");
			li.eq(1).html("投标中（<s:property value='allCountOutput.bidCount' default='0'/>）");
			li.eq(2).html("预约中（<s:property value='allCountOutput.appointmentCount' default='0'/>）");
			li.eq(3).addClass("green-current").html("放款审核（<s:property value='allCountOutput.auditCount' default='0'/>）").append('<div class="listnav-current"></div>');
			li.eq(4).html("已还完（<s:property value='allCountOutput.endCount' default='0'/>）");
			li.eq(5).html("流标（<s:property value='allCountOutput.flowCount' default='0'/>）");
			li.eq(6).html("坏账还款中（<s:property value='allCountOutput.debtCount' default='0'/>）");
		})
	//-->
	</script>
</s:if>
<!--放款审核-->
<div class="audit">
	<ul class="audit-tit">
	    <li class="audit-one">借款标题</li>
	    <li class="audit-two">年利率</li>
	    <li class="audit-three">借款期限</li>
	    <li class="audit-three">借款金额</li>
	    <li class="audit-three">投标金额</li>
	    <li class="audit-four">还款方式</li>
	</ul>
	<s:if test="biddingListOutput.pzSysOrderUserOrderViewList.size() > 0">
		<table class="audittab">
		       	<s:iterator value="biddingListOutput.pzSysOrderUserOrderViewList">
				    <tr class="tab-tr">
				        <td class="audit-one">
				            <p class=" limit " title="<s:property value='userOrderName'/>"><s:property value="userOrderName"/></p>
				        </td>
				        <td class="audit-two"><s:property value="orderApr" default="0"/>%</td>
				        <td class="audit-three"><s:property value="orderCycle" default="0"/>个月</td>
				        <td class="audit-three"><s:property value="orderMoney" default="0"/>元</td>
				        <td class="audit-three"><s:property value="bidMoney" default="0"/>元</td>
				        <td class="audit-four">
				        	 <!-- class = mode 控制显示-->
				        	<s:if test="orderRefund=='01'"><div class="audit-four audit-deng mode" title="等额本息，每月还款"></div></s:if>
				        	<s:elseif test="orderRefund=='04'"><div class="audit-four audit-yue mode" title="按月付息，到期还本"></div></s:elseif>
				        	<s:elseif test="orderRefund=='03'"><div class="audit-four audit-ben mode" title="到期后，本息一次性还款"></div></s:elseif>
				        </td>
				        <s:if test="bidStatus == 0">
					        <td class="hand-green p-l-bottom">
					        		<a target="_blank"  class="payment" href="../../../financing/myaccountPay.do?userOrderCode=<s:property value='userOrderCode'/>&bidCode=<s:property value='bidCode'/>&bidMoney=<s:property value='bidMoney'/>&navigation=tzsb">支付</a>
						            <div class="mistake-hint plb-time">
						            	<input class="p-timer" type="hidden" value="<s:property value='orderCode' default='000:00:00'/>"/>
						                <p class=" defray-hint">订单还有<span class="timeout p-time"><s:property value='orderCode' default='000:00:00'/></span>失效，请点击“支付”进行支付操作</p>
						                <div class="mistake-close">X</div>
						            </div>
					       	</td>
				       	</s:if>
				       	<s:else>
				       		<td class="hand-green"></td>
				       	</s:else>
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
	<s:param name="refreshDom" value="'J_audit'"></s:param>
	<s:param name="reqUrl" value="'../../../account/account-financing-details.do'"></s:param>
	<s:param name="pageNum" value="pageNo"></s:param>
	<s:param name="pageCount" value="biddingListOutput.totalCount"></s:param>
	<s:param name="orderState" value="orderState"></s:param>
	<s:param name="orderType" value="orderType"></s:param>
</s:include>