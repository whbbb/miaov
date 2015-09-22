<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-loan/loan_table.js" ></script>
<script type="text/javascript" src="../../../js/account-loan/my_loan_right/my_loan/account_loan_Detail/account-loan-Detail.js" ></script>
<!-- 还款中 -->
<input class ="order" type="hidden" value='<s:property value="orderState"/>'/>
<s:if test="orderState == '30'">
	<input class ="orderSate2" type="hidden" value='<s:property value="orderState"/>'/>
	<p class="basic">基本信息</p>
	<ul class="basic-details">
		<li class="basicli">应还总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRefundCoupon"/></span> 元</li>
		<li class="basicli">已还总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRepayCoupon"/></span> 元</li>
		<li class="basicli">管理费：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRefundMainte"/></span> 元</li>
		<li class="basicli">还款进度：<span class="basic-sum"><s:property value="borrowBidRefund.refundCount"/>/<s:property value="borrowBidRefund.sumCount"/></span></li>
	</ul>
	<div class="recordoff"></div>
	<p class="basic minute">还款详细信息</p>
	<ul class="minute-tit">
		<li class="min-first">还款日</li>
		<li class="min-second">应还总额</li>
		<li class="min-third">应还本金</li>
		<li class="min-fourth">应还利息</li>
		<li class="min-fifth">管理费</li>
		<li class="min-sixth">逾期天数</li>
		<li class="min-seventh">逾期利息</li>
		<li class="min-eighth">逾期管理费</li>
		<li class="min-ninth">操作</li>
	</ul>
	<div class="min-detail">
		<s:if test="borrowBidRefund.pzSysRefundList.size()>0">
		<s:iterator value="borrowBidRefund.pzSysRefundList" id="ref" status="st">
			<table class="minute-details">
				<tr class="min-details-tr">
					<td class="min-first day"><s:property value="#ref.refundPlanTime"/></td>
					<td class="min-second detail-money"><s:property value="#ref.validCode"/></td>
					<td class="min-third detail-money"><s:property value="#ref.refundMoney"/></td>
					<td class="min-fourth detail-money"><s:property value="#ref.refundPai"/></td>
					<td class="min-fifth detail-money"><s:property value="#ref.refundMainte"/></td>
					<td class="min-sixth detail-money-no"><s:property value="#ref.refundOverday"/></td>
					<td class="min-seventh detail-money"><s:property value="#ref.refundDinterest"/></td>
					<td class="min-eighth detail-money"><s:property value="#ref.dinterestMainte"/></td>
					<s:if test="#ref.returnRefundCode == '00'">
						<!-- 是否点亮 -->
						<s:if test="refundFlags[#st.getIndex()]">
								<td class="min-ninth greenfont" 
								request-url="../../../account/bid_repayment.do?userOrderCode=<s:property value="#ref.userOrderCode"/>&refundCount=<s:property value="#ref.refundCount"/>">
									还款
								</td>
						</s:if>
						<s:else>
							<td class="min-ninth default">
							还款
							</td>
						</s:else>
					</s:if>
					<s:elseif test="#ref.returnRefundCode == '05'">
						<td class="min-ninth default" title="还款待放款">已还完</td>
					</s:elseif>
					<s:else>
						<td class="min-ninth default">已还完</td>
					</s:else>
				</tr>
			</table>
		</s:iterator>
		</s:if>
	</div>
</s:if>

<!-- 已还完 坏账还款完成 -->
<s:elseif test="orderState == '31' || orderState == '33'">
	<input class ="orderSate2" type="hidden" value='<s:property value="orderState"/>'/>
	<p class="basic">基本信息</p>
	<ul class="basic-details">
		<li class="basicli">应还总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRefundCoupon"/></span> 元</li>
		<li class="basicli">已还总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRepayCoupon"/></span> 元</li>
		<li class="basicli">管理费：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRefundMainte"/></span> 元</li>
		<li class="basicli">还款进度：<span class="basic-sum "><s:property value="borrowBidRefund.refundCount"/>/<s:property value="borrowBidRefund.sumCount"/></span></li>
	</ul>
	<div class="recordoff"></div>
	<p class="basic minute">还款详细信息</p>
	<ul class="minute-tit">
		<li class="min-first">还款日</li>
		<li class="min-second">应还总额</li>
		<li class="min-third">应还本金</li>
		<li class="min-fourth">应还利息</li>
		<li class="min-fifth">管理费</li>
		<li class="min-sixth">逾期天数</li>
		<li class="min-seventh">逾期利息</li>
		<li class="min-eighth">逾期管理费</li>
		<li class="min-ninth">还款状态</li>
	</ul>
	<div class="min-detail">
		<s:if test="borrowBidRefund.pzSysRefundList.size()>0">
		<s:iterator value="borrowBidRefund.pzSysRefundList">
			<table class="minute-details">
				<tr class="min-details-tr">
					<td class="min-first day"><s:property value="refundPlanTime"/></td>
					<td class="min-second detail-money"><s:property value="validCode"/></td>
					<td class="min-third detail-money"><s:property value="refundMoney"/></td>
					<td class="min-fourth detail-money"><s:property value="refundPai"/></td>
					<td class="min-fifth detail-money"><s:property value="refundMainte"/></td>
					<td class="min-sixth detail-money-no"><s:property value="refundOverday"/></td>
					<td class="min-seventh detail-money"><s:property value="refundDinterest"/></td>
					<td class="min-eighth detail-money"><s:property value="dinterestMainte"/></td>
					<s:if test="returnRefundCode == '01'">
						<td class="min-ninth greenfont">正常还款</td>
					</s:if>
					<s:if test="returnRefundCode == '02'">
						<td class="min-ninth greenfont">逾期还款</td>
					</s:if>
					<s:if test="returnRefundCode == '03'">
						<td class="min-ninth greenfont">坏账无还款</td>
					</s:if>
					<s:if test="returnRefundCode == '04'">
						<td class="min-ninth greenfont" title="风险准备金还款">准备金还</td>
					</s:if>
					<s:if test="returnRefundCode == '07'">
						<td class="min-ninth greenfont">担保还款</td>
					</s:if>
				</tr>
			</table>
		</s:iterator>
		</s:if>
	</div>
</s:elseif>

<!-- 坏账 -->
<s:elseif test="orderState == '32'">
<input class ="orderSate2" type="hidden" value='<s:property value="orderState"/>'/>
<p class="basic">基本信息</p>
	<ul class="basic-details">
		<li class="basicli">应还总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRefundCoupon"/></span> 元</li>
		<li class="basicli">已还总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRepayCoupon"/></span> 元</li>
		<li class="basicli">管理费：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.allRefundMainte"/></span> 元</li>
		<li class="basicli">还款进度：<span class="basic-sum"><s:property value="borrowBidRefund.refundCount"/>/<s:property value="borrowBidRefund.sumCount"/></span></li>
	</ul>
	<div class="recordoff"></div>
	<p class="basic minute">还款详细信息</p>
	<ul class="minute-tit">
		<li class="min-first">还款日</li>
		<li class="min-second">应还总额</li>
		<li class="min-third">应还本金</li>
		<li class="min-fourth">应还利息</li>
		<li class="min-fifth">管理费</li>
		<li class="min-sixth">逾期天数</li>
		<li class="min-seventh">逾期利息</li>
		<li class="min-eighth">逾期管理费</li>
		<li class="min-ninth">还款状态</li>
	</ul>
	<div class="min-detail">
		<s:if test="borrowBidRefund.pzSysRefundList.size()>0">
		<s:iterator value="borrowBidRefund.pzSysRefundList">
			<table class="minute-details">
				<tr class="min-details-tr">
					<td class="min-first day"><s:property value="refundPlanTime"/></td>
					<td class="min-second detail-money"><s:property value="validCode"/></td>
					<td class="min-third detail-money"><s:property value="refundMoney"/></td>
					<td class="min-fourth detail-money"><s:property value="refundPai"/></td>
					<td class="min-fifth detail-money"><s:property value="refundMainte"/></td>
					<td class="min-sixth detail-money-no"><s:property value="refundOverday"/></td>
					<td class="min-seventh detail-money"><s:property value="refundDinterest"/></td>
					<td class="min-eighth detail-money"><s:property value="dinterestMainte"/></td>
					<s:if test="returnRefundCode == '00'">
						<td class="min-ninth greenfont">等待还款</td>
					</s:if>
					<s:if test="returnRefundCode == '01'">
						<td class="min-ninth greenfont">正常还款</td>
					</s:if>
					<s:if test="returnRefundCode == '02'">
						<td class="min-ninth greenfont">逾期还款</td>
					</s:if>
					<!-- 本息到账处理中 -->
					<s:if test="returnRefundCode == '06'">
						<td class="min-ninth greenfont">等待还款</td>	
					</s:if>
					<s:if test="returnRefundCode == '07'">
						<td class="min-ninth greenfont">担保还款</td>
					</s:if>
				</tr>
			</table>
		</s:iterator>
		</s:if>
	</div>
</s:elseif>

<!-- 投标中 -->
<s:elseif test="orderState == '06'">
	<div class="recordoff"></div>
	<p class="basic">基本信息</p>
	<ul class="basic-details"> 
		<li class="basicli">投标总额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.sumMoney"/></span> 元</li>
		<li class="basicli">剩余金额：<span class="basic-sum detail-money"><s:property value="borrowBidRefund.orderRemainMoney"/></span> 元</li>
		<li class="basicli">投标人数：<span class="basic-sum detail-money-no"><s:property value="borrowBidRefund.bidCount"/></span> 人</li>
		<li class="basicli">标的剩余时间：
			<input class="p-timer" type="hidden" value="<s:property value="borrowBidRefund.orderReleaseEndTime"/>">
			<span class="basic-sum timer"></span>
		</li>
	</ul>
</s:elseif>
<!-- 预约中 -->
<s:elseif test="orderState == '07'">
<input class ="orderSate2" class="userOrderCode" type="hidden" value='<s:property value="orderState"/>'/>
	<div class="recordoff"></div>
	<p class="basic">基本信息</p>
	<ul class="basic-details">
		<li class="basicli">投标总额：<span class="basic-sum detail-money-no"><s:property value="borrowBidRefund.sumMoney"/></span> 元</li>
		<li class="basicli">剩余金额：<span class="basic-sum detail-money-no"><s:property value="borrowBidRefund.orderRemainMoney"/></span> 元</li>
		<li class="basicli">投标人数：<span class="basic-sum detail-money-no"><s:property value="borrowBidRefund.bidCount"/></span> 人</li>
		<li class="basicli">预约截止时间：
		<span class="basic-sum">
		<input class="p-timer" type="hidden" value="<s:property value="borrowBidRefund.orderReleaseEndTime"/>">
			<span class="basic-sum timer"></span>
		</span>
		</li>
	</ul>
</s:elseif>
<!-- 放款审核 申请中 流标 审核失败 -->
<s:else>
</s:else>

