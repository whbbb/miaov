<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-loan/my_loan_right/my_loan/my_loan_top/my_loan_top.js" ></script>

<div class="my_loan">
    <div class="floatleft no-yet loanbigbox">
        <ul class="loan-yet">
            <li class="yet yet1">
                <div class="yet-bg ybg1"></div>
                <div class="yet-money">未还金额</div>
                <input id="less_money" type ="hidden" value ="<s:property value="borrowAll.untreatedMoney"/>"/>
                <p><span class="orangefont detail-money"><s:property value="borrowAll.untreatedMoney"/></span>元</p>
            </li>
            <li class="yet yet2 oranbg oranbg1">
                <div class="yet-money">未还金额</div>
                <p class="yetmon"><span class="orangefont loan-money detail-money"><s:property value="borrowAll.untreatedMoney"/></span>元</p>
                <div class="yet-detail">
                    <p><span class="symbol">+</span><span class="sum">未&nbsp;还&nbsp;本&nbsp;金</span><span class="detail-money"><s:property value="borrowAll.noRefundMoney"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">未&nbsp;还&nbsp;利&nbsp;息</span><span class="detail-money"><s:property value="borrowAll.noRefundPai"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">逾&nbsp;期&nbsp;利&nbsp;息</span><span class="detail-money"><s:property value="borrowAll.noRefundDinterest"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">管&nbsp;&nbsp;&nbsp;&nbsp;理&nbsp;&nbsp;&nbsp;费</span><span class="detail-money"><s:property value="borrowAll.noFeeRate"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">逾期管理费</span><span class="detail-money"><s:property value="borrowAll.noOverdueFeeRate"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">坏&nbsp;账&nbsp;金&nbsp;额</span><span class="detail-money"><s:property value="borrowAll.badMoney"/></span>元</p>
                </div>
            </li>
            <li class="yet yet3 oranbg oranbg2">
                <div class="loan-cue">
                    <h3 class="dear">亲，您还没有任何借款哟</h3>
                    <p>人生诸多不易</p>
                    <p>我们愿帮您一把</p>
                </div>
                <div class="borrow-mone">
                    <input type="button" class="lend-money" value="借款" request-url="../../../loan/loan.do">
                </div>
            </li>
        </ul>
    </div>
    <div class="floatleft should-yet loanbigbox">
        <ul class="loan-yet">
            <li class="yet yet1">
                <div class="yet-bg ybg2"></div>
                <div class="yet-money">本月应还</div>
                <input id="month_less_money" type ="hidden" value ="<s:property value="borrowAll.mustMoney"/>"/>
                <p><span class="orangefont detail-money"><s:property value="borrowAll.mustMoney"/></span>元</p>
            </li>
            <li class="yet yet2 yellbg yellbg1">
                <div class="yet-money">本月应还</div>
                <p class="yetmon"><span class="orangefont loan-money  detail-money"><s:property value="borrowAll.mustMoney"/></span>元</p>
                <div class="yet-detail minlinhei">
                    <p><span class="symbol">+</span><span class="sum">应&nbsp;还&nbsp;本&nbsp;金</span><span class="detail-money"><s:property value="borrowAll.refundMoney"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">应&nbsp;还&nbsp;利&nbsp;息</span><span class="detail-money"><s:property value="borrowAll.refundPai"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">管&nbsp;&nbsp;&nbsp;&nbsp;理&nbsp;&nbsp;&nbsp;费</span><span class="detail-money"><s:property value="borrowAll.refundMainte"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">逾&nbsp;期&nbsp;利&nbsp;息</span><span class="detail-money"><s:property value="borrowAll.refundDinterest"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">逾期管理费</span><span class="detail-money"><s:property value="borrowAll.dinterestMainte"/></span>元</p>
                </div>
<!--                 <div class="yet-still"> -->
<!--                     <input type="button" value="还款" class="h-money" request-url=""/> -->
<!--                 </div> -->
            </li>
            <li class="yet yet3 yellbg yellbg2" >
                <div class="loan-cue">
                    <h3 class="dear">亲，您这个月没有任何未还借款哟</h3>
                    <p>优金客祝您一臂之力</p>
                </div>
                <div class="borrow-mone">
                    <input type="button" class="lend-money" value="借款" request-url="../../../loan/loan.do"/>
                </div>
            </li>
        </ul>
    </div>
</div>

<div class="mp-balance">
	<div class="bal-left">
		<p class="acc-balance">账户余额</p>
		<p><span class="bigorange orangefont detail-money"><s:property value="borrowAll.userMoney"/></span>元</p>
	</div>
	<div class="bal-right">
		<s:if test="rechargeTag == 1">
		<p>亲，账户余额不足以支付本月还款，快来<span class="borange" request-url="../../../account/recharge.do" >充值</span>吧</p>
		</s:if>
		<input class="br-button" type="button" value="投标" id="bal-invest" request-url="../../../financing/financing-skip.do" >
		<input class="br-button" type="button" value="充值" id="bal-recharge"request-url="../../../account/recharge.do" >
	</div>
</div>

<div class="calendar">
	<div class="caltit"><span class="cal-mr">本期待还</span><span class="detail-money"><s:property value="borrowCalendar.dueMoney"/></span>元 </div>
	<div class="caltit"><span class="cal-mr">本期累计逾期</span><span class="detail-money"><s:property value="borrowCalendar.overdueMoney"/></span>元</div>
	<!-- 还款日 -->
	<input id="J_payment_days" type="hidden" value="<s:property value='calendarDate'/>" />
	<!--当前日期 -->
	<input id="J_current_day" type="hidden" value="<s:property value='today'/>" />
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
		<s:if test="borrowCalendar.pzSysOrderRefundUserViewList.size() > 0">
			<s:iterator value="calendarDate.split('\\\\|')" status="st" var="c">
				<div class=" date-left right-particulars" detail-data-count="1">
					<div class="the-last"></div>
					<div class="dl-a">
						<ul class="nowul">
							<s:iterator value="borrowCalendar.pzSysOrderRefundUserViewList">
								<s:if test="refundPlanTime == #c">
									<li class="nowaday ">
										<h3 class="alteration">资产变动</h3>
										<p>标的名称：<s:property value="userOrderName"/></p>
										<p>标的编号：<s:property value="userOrderCode"/></p>
										<p>本期应还本金：<span class="detail-money"><s:property value="refundMoney"/></span>元</p>
										<p>本期应还利息：<span class="detail-money"><s:property value="refundPai"/></span>元</p>
										<p>本期逾期利息：<span class="nowadaygreen detail-money"><s:property value="refundDinterest"/></span>元</p>
										<p> 还款方式：
											<s:if test='orderRefund==01'>等额本息，每月还款</s:if>
											<s:if test='orderRefund==02'>等额本金，每月还款</s:if>
											<s:if test='orderRefund==03'>本息一次性，每月还款</s:if>
											<s:if test='orderRefund==04'>按月付息，到期还本</s:if>
										</p>
										<p>管理费：<s:property value="refundMainte"/></p>
										<p>逾期管理费：<s:property value="dinterestMainte"/></p>
										<p class="nowaday-minfont">
											本期应还编号为<s:property value="userOrderCode"/>的<s:property value="userOrderName"/>标的<span class="detail-money"><s:property value="bidMoney"/></span>元
										</p>
										<s:if test='returnRefundCode == "00"'>
											<div class="repay-money">
												<input class="userOrderCode" type="hidden" value="<s:property value="userOrderCode"/>">
												<input type="button" value="还款" class="torepay code_butt">
											</div>
										</s:if>
										<s:else>
											<div class="nowaday-ok"></div>
										</s:else>
									</li>
								</s:if>
							</s:iterator>
						</ul>
					</div>
					<div class="next"></div>
				</div>
			</s:iterator>
		</s:if>
		<div class=" date-left right-particulars"  detail-data-count="0">
			<p class="no-record">亲，您还没有交易记录哟~</p>
		</div>
	</div>
</div>
