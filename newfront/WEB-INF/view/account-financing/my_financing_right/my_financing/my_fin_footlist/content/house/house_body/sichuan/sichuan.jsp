<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_footlist/content/house/house_body/sichuan/sichuan.js" ></script>
<s:if test="allCountOutput != null ">
	<script type="text/javascript">
	<!--
		$().ready(function(){
			var li = $(".inv-list-nav li");
			li.eq(0).html("还款中（<s:property value='allCountOutput.refundCount' default='0'/>）");
			li.eq(1).html("投标中（<s:property value='allCountOutput.bidCount' default='0'/>）");
			li.eq(2).html("预约中（<s:property value='allCountOutput.appointmentCount' default='0'/>）");
			li.eq(3).html("放款审核（<s:property value='allCountOutput.auditCount' default='0'/>）");
			li.eq(4).html("已还完（<s:property value='allCountOutput.endCount' default='0'/>）");
			li.eq(5).addClass("green-current").html("流标（<s:property value='allCountOutput.flowCount' default='0'/>）").append('<div class="listnav-current"></div>');
			li.eq(6).html("坏账还款中（<s:property value='allCountOutput.debtCount' default='0'/>）");
		})
	//-->
	</script>
</s:if>

<!--流标-->
<div class="sichuaning">
    <ul class="sichuan-tit">
        <li class="sichuan-one">借款标题</li>
        <li class="sichuan-two">年利率</li>
        <li class="sichuan-two">借款期限</li>
        <li class="sichuan-three">借款金额</li>
        <li class="sichuan-three">投标金额</li>
        <li class="sichuan-four">还款方式</li>
    </ul>
    <s:if test="biddingListOutput.pzSysOrderUserOrderViewList.size() > 0">
    	<table class="sichuantab">
			<s:iterator value="biddingListOutput.pzSysOrderUserOrderViewList">
		        <tr class="tab-tr">
		            <td class="sichuan-one">
		                <p class=" limit " title="<s:property value='userOrderName'/>"><s:property value="userOrderName"/></p>
		                <div class="hide-details">
		                    <div class="close"></div>
		                    <ul class="details-tit">
		                        <li>投标时间</li>
		                        <li>流标时间</li>
		                    </ul>
		                    <div class="details-list">
		                        <table class="list-tab">
		                        	<s:iterator value="bfmap[bidCode]">   
			                            <tr>
			                                <td><s:property value="bidTime.substring(0,16)"/></td>
			                                <td><s:property value="orderFailureTime.substring(0,16)"/></td>
			                            </tr>
		                        	</s:iterator>
		                        </table>
		                    </div>
		                </div>
		            </td>
		            <td class="sichuan-two"><s:property value="orderApr" default="0"/>%</td>
		            <td class="sichuan-two"><s:property value="orderCycle" default="0"/>个月</td>
		            <td class="sichuan-three"><s:property value="orderMoney" default="0"/>元</td>
		            <td class="sichuan-three"><s:property value="bidMoney" default="0"/>元</td>
		            <td class="sichuan-four">
		                <!-- id = mode 控制显示-->
		                <s:if test="orderRefund=='01'"><div class="sichuan-four sichuan-deng mode" title="等额本息，每月还款"></div></s:if>
			        	<s:elseif test="orderRefund=='04'"><div class="sichuan-four sichuan-yue mode" title="按月付息，到期还本"></div></s:elseif>
			        	<s:elseif test="orderRefund=='03'"><div class="sichuan-four sichuan-ben mode" title="到期后，本息一次性还款"></div></s:elseif>
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
	<s:param name="refreshDom" value="'J_sichuan'"></s:param>
	<s:param name="reqUrl" value="'../../../account/account-financing-details.do'"></s:param>
	<s:param name="pageNum" value="pageNo"></s:param>
	<s:param name="pageCount" value="biddingListOutput.totalCount"></s:param>
	<s:param name="orderState" value="orderState"></s:param>
	<s:param name="orderType" value="orderType"></s:param>
</s:include>