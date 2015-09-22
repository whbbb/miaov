<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_footlist/content/house/house_body/bespoke/bespoke.js" ></script>
<script type="text/javascript" src="../../../js/financing/search_fin.js" ></script>

<script type="text/javascript">
<!--
	$().ready(function(){
		px_financing.updateEndTime();
	});
//-->
</script>


<s:if test="allCountOutput != null ">
	<script type="text/javascript">
	<!--
		$().ready(function(){
			var li = $(".inv-list-nav li");
			li.eq(0).html("还款中（<s:property value='allCountOutput.refundCount' default='0'/>）");
			li.eq(1).html("投标中（<s:property value='allCountOutput.bidCount' default='0'/>）");
			li.eq(2).addClass("green-current").html("预约中（<s:property value='allCountOutput.appointmentCount' default='0'/>）").append('<div class="listnav-current"></div>');
			li.eq(3).html("放款审核（<s:property value='allCountOutput.auditCount' default='0'/>）");
			li.eq(4).html("已还完（<s:property value='allCountOutput.endCount' default='0'/>）");
			li.eq(5).html("流标（<s:property value='allCountOutput.flowCount' default='0'/>）");
			li.eq(6).html("坏账还款中（<s:property value='allCountOutput.debtCount' default='0'/>）");
		})
	//-->
	</script>
</s:if>


<!--预约中-->
<div class="bespoke">
	<ul class="bespoke-tit">
	    <li class="bespoke-one">借款标题</li>
	    <li class="bespoke-two">年利率</li>
	    <li class="bespoke-three">借款期限</li>
	    <li class="bespoke-three">借款金额</li>
	    <li class="bespoke-three">投标金额</li>
	    <li class="bespoke-three">投标日期</li>
	    <li class="bespoke-four">还款方式</li>
	</ul>
	<s:if test="biddingListOutput.pzSysOrderUserOrderViewList.size() > 0">
		<table class="bespoketab">
			<s:iterator value="biddingListOutput.pzSysOrderUserOrderViewList">
			    <tr class="tab-tr">
			        <td class="bespoke-one">
			            <p class=" limit " title="<s:property value='userOrderName'/>"><s:property value="userOrderName"/></p>
			            <div class="hide-details">
			                <div class="close"></div>
			                <ul class="details-tit">
			                    <li>投标总额</li>
			                    <li>剩余金额</li>
			                    <li>投标人数</li>
			                    <li>标的剩余时间</li>
			                </ul>
			                <div class="details-list">
			                    <table class="list-tab  p-l-bottom">
			                    	<s:iterator value="bfmap[bidCode]">    
				                        <tr class="plb-time">
				                        	<input class="p-timer" type="hidden" value="<s:property value='orderReleaseEndTime' default='0000000'/>"/>
				                            <td><s:property value="orderMoney" default="0"/>元</td>
				                            <td><s:property value="orderRemainMoney" default="0"/>元</td>
				                            <td><s:property value="investNumber" default="0"/>人</td>
				                             <td class="p-time"><s:property value='orderReleaseEndTime' default='0000000'/></td>
				                        </tr>
			                        </s:iterator>
			                    </table>
			                </div>
			            </div>
			        </td>
			        <td class="bespoke-two"><s:property value="orderApr" default="0"/>%</td>
			        <td class="bespoke-three"><s:property value="orderCycle" default="0"/>个月</td>
			        <td class="bespoke-three"><s:property value="orderMoney" default="0"/>元</td>
			        <td class="bespoke-three"><s:property value="bidMoney" default="0"/>元</td>
			        <td class="bespoke-three"><s:property value="bidTime.substring(0,11)"/></td>
			        <td class="bespoke-four">
			            <!-- id = mode 控制显示-->
			            <s:if test="orderRefund=='01'"><div class="bespoke-four bespoke-deng mode" title="等额本息，每月还款"></div></s:if>
			        	<s:elseif test="orderRefund=='04'"><div class="bespoke-four bespoke-yue mode" title="按月付息，到期还本"></div></s:elseif>
			        	<s:elseif test="orderRefund=='03'"><div class="bespoke-four bespoke-ben mode" title="到期后，本息一次性还款"></div></s:elseif>
			        </td>
			        <s:if test="bidStatus == 0">
				        <td class="hand-green p-l-bottom">
				        		<a target="_blank" class="payment" href="../../../financing/myaccountPay.do?userOrderCode=<s:property value='userOrderCode'/>&bidCode=<s:property value='bidCode'/>&bidMoney=<s:property value='bidMoney'/>&navigation=tzsb">支付</a>
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
	<s:param name="refreshDom" value="'J_bespoke'"></s:param>
	<s:param name="reqUrl" value="'../../../account/account-financing-details.do'"></s:param>
	<s:param name="pageNum" value="pageNo"></s:param>
	<s:param name="pageCount" value="biddingListOutput.totalCount"></s:param>
	<s:param name="orderState" value="orderState"></s:param>
	<s:param name="orderType" value="orderType"></s:param>
</s:include>