<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-loan/my_loan_right/my_loan/my_loan_footlist/my_loan_footlist.js" ></script>
<script type="text/javascript" src="../../../js/account-loan/loan_table.js" ></script>
<div class="pan-list">
	<div class="pan-list-tit">
		<p class="floatleft firsttit">借款统计列表</p>
		<span class="genre">类型</span>
		<div class="floatleft menu">
			 <select class="fl-select" special="true" select-value='<s:property value="orderState" />' submit-url="../../../account/account-loan.do?orderState=">
				<option value="5" >还款中</option>
				<option value="3" >投标中</option>
				<option value="2" >预约中</option>
				<option value="4" >放款审核</option>
				<option value="1" >申请中</option>
				<option value="6" >已还完</option>
				<option value="8" >流标</option>
				<option value="9" >审核失败</option>
				<option value="7" >坏账</option>
			</select>
		</div>
	</div>


	<ul class="recordtit">
		<li class="floatleft fldate">借款标题</li>
		<li class="floatleft flmoney">借款金额</li>
		<li class="floatleft flmoney">年利率</li>
		<li class="floatleft flmoney">借款期限</li>
		<li class="floatleft flremarks">还款方式</li>
	</ul>
	
	<div class="loan-list" id="J_loan_list" name="">
		<s:if test="borrowBid.pzSysUserOrderList.size()>0">
			<input id="loan-tag" type="hidden" value='<s:property value="tag"/>'/>
			<table class="loanlist-detail">
				<s:iterator value="borrowBid.pzSysUserOrderList">
					<tr class="ldtr">
					<input class="userOrderCode" type="hidden" value='<s:property value="userOrderCode"/>'/>
					<input class="orderState" type="hidden" value='<s:property value="orderState"/>'/>
						<td class="fldate ">
							<!-- 还款中 已还完 坏账时才显示协议 -->
							<s:if test="orderState == 30 || orderState == 31 || orderState == 33 || orderState == 32">
								<s:if test="orderDealType == '01'">
									<a class=" protocol " href="../../../other/loan_service.do?refundType=1&assureFlag=2&userOrderCode=<s:property value="userOrderCode"/>"></a>
								</s:if>
								<s:elseif test="orderDealType == '02'">
									<a class=" protocol " href="../../../other/loan_service.do?refundType=1&assureFlag=1&userOrderCode=<s:property value="userOrderCode"/>"></a>
								</s:elseif>
								<s:elseif test="orderDealType == '03'">
									<a class=" protocol " href="../../../other/loan_service.do?refundType=2&assureFlag=2&userOrderCode=<s:property value="userOrderCode"/>"></a>
								</s:elseif>
								<s:elseif test="orderDealType == '04'">
									<a class=" protocol " href="../../../other/loan_service.do?refundType=2&assureFlag=1&userOrderCode=<s:property value="userOrderCode"/>"></a>
								</s:elseif>
								<s:elseif test="orderDealType == '05'">
									<a class=" protocol " href="../../../other/loan_service.do?refundType=3&assureFlag=2&userOrderCode=<s:property value="userOrderCode"/>"></a>
								</s:elseif>
								<s:elseif test="orderDealType == '06'">
									<a class=" protocol " href="../../../other/loan_service.do?refundType=3&assureFlag=1&userOrderCode=<s:property value="userOrderCode"/>"></a>
								</s:elseif>
								<s:else>
									<a class=" protocol " href="../../../other/loan_service.do"></a>
								</s:else>
							</s:if>
							<s:if test="userOrderName != null">
								<p class="maxeight" title="<s:property value="userOrderName"/>"><s:property value="userOrderName"/></p>
							</s:if>
							<s:else>
								<p class="maxeight">--</p>
							</s:else>
							<div class="dnone-detail disnone">
							</div>
						</td>
						<td class="flmoney">
							<span class="money"><s:property value="orderMoney"/></span>元
						</td>
						<td class="flmoney">
							<s:if test="userOrderName != null">
								<s:property value="orderApr"/>%
							</s:if>
							<s:else>
								--
							</s:else>
						</td>
						<td class="flmoney">
							<s:if test="userOrderName != null">
								<s:property value="orderCycle"/>个月
							</s:if>
							<s:else>
								--
							</s:else>
						</td>
						<s:if test="userOrderName != null">
							<s:if test='orderRefund==01'><td class="flremarks dremarksbg" title="等额本息，每月还款"></td></s:if>
		<!-- 					<s:if test='orderRefund==02'>等额本金，每月还款</s:if> -->
							<s:if test='orderRefund==03'><td class="flremarks bremarksbg" title="到期后，本息一次性还款"></td></s:if>
							<s:if test='orderRefund==04'><td class="flremarks yremarksbg" title="按月付息，到期还本"></td></s:if>
						</s:if>
						<s:else>
							<td class="flremarks">
							--
							</td>
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
		<s:param name="callback" value="'px_account_loan.anim();'"></s:param>
		<s:param name="reqUrl" value="'../../../account/accountLoanTable.do'"></s:param>
		<s:param name="reqType" value="1"></s:param>
		<s:param name="refreshDom" value="'J_my_loan_footlist'"></s:param>
		<s:param name="pageNum" value="pageNo"></s:param>
		<s:param name="orderState" value="orderState"></s:param>
		<s:param name="pageCount" value="borrowBid.totalCount"></s:param>
	</s:include>
</div>