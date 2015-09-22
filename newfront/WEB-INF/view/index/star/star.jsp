<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/index/star/star.js"></script>

<div class="star">
    <div class="title">明星标的</div>
    <div class="subhead">严格筛选标准对产品进行定量和定性分析，确保完美品质</div>
    <input type="hidden" id="systemTime" value='<s:property value="systemTime"/>'/>
    <ul class="star-ul">
    	<s:if test="bidIndexOut.pzSysUserOrderViewList.size>0">
	        <li>
	            <div class="star-shadow"></div>
	            <div class="star-bid-box" id="box">
	                <input type="hidden" class="remainMoney" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderRemainMoney"/>'/>
	                <input type="hidden" class="raiseMoney" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderMoney"/>'/>
	                <input type="hidden" class="rateYear" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderApr"/>'/>
	                <input type="hidden" class="endTime" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderReleaseEndTime"/>'/>
	                <!--<img class="star-finan-img" src="../../../img/product/star/financing.png" />-->
	                <div class="star-top">
	                	<s:if test="bidIndexOut.pzSysUserOrderViewList[0].orderType ==01">
	                		<div class="star-type choose left"></div>
	                	</s:if>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderType ==02">
	                		<div class="star-type house left"></div>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderType ==03">
	                		<div class="star-type car left"></div>
	                	</s:elseif>
	                    <div class="left">
	                        <div class="bid-title"><a class="bid-a" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[0].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderType"/>' target="_self"><s:property value="bidIndexOut.pzSysUserOrderViewList[0].userOrderName"/></a></div>
	                        <div class="bid-sunhead">
	                        <span>
	                        	<s:if test="bidIndexOut.pzSysUserOrderViewList[0].orderRefund == 01">等额本息</s:if>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderRefund == 02">等额本金</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderRefund == 03">本息一次性</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderRefund == 04">先息后本</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderRefund == 99">其他还款方式</s:elseif>
	                        </span> <span><s:property value="bidIndexOut.pzSysUserOrderViewList[0].investLowLimit"/></span>元起投</div>
	                    </div>
	                    <div class="clear-both" ></div>
	                </div>
	                <div class="bid-message">
	                    <span class="bid-rate"><span class="rate-int">0</span>.<span class="rate-float">0</span></span>
	                    <div class="rate-box">
	                        <span class="bid-rate-mark">%</span>
	                        <span class="bid-rate-name">年利率</span>
	                        <span class="bid-time"><s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderCycle"/><span class="bid-time-name">个月</span></span>
	                    </div>
	                </div>
	                <div class="bid-level">信用等级：
	                	<s:if test="bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade gte 81">
	                		<img src="../../../images/common/level/level-aaa.png"/>
	                	</s:if>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade gte 61 && bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade lte 80">
	                		<img src="../../../images/common/level/level-aa.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade gte 46 && bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade lte 60">
	                		<img src="../../../images/common/level/level-a.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade gte 31 && bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade lte 45">
	                		<img src="../../../images/common/level/level-b.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade gte 0 && bidIndexOut.pzSysUserOrderViewList[0].orderIssuerFrade lte 31">
	                		<img src="../../../images/common/level/level-c.png"/>
	                	</s:elseif>
	                </div>	
	                <div class="bid-remain">标的余额： <span class="bid-remain-money"><span class="remain-money"></span>元</span></div>
	                <div class="progress-box">
	                    <div class="progress-val">
	                        <div class="val">0%</div>
	                        <div class="triangle"></div>
	                    </div>
	                    <div class="bid-rad-background">
	                        <div class="bid-bar"></div>
	                    </div>
	                </div>
	                <div class="bid-raise">借款金额： <span class="bid-raise-money"><span class="raise-money"></span>元</span></div>
	                <s:if test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 94">
	                	<div class="bid-time-remaining">剩余时间：000:00:00</div>
	                </s:if>
	                <s:else>
	                	<div class="bid-time-remaining">剩余时间： <span class="time-remainting"><span class="hour">00</span>:<span class="minute">00</span>:<span class="second">00</span></span></div>
	                </s:else>
	                <s:if test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 06">
	                	<a class="button" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[0].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderType"/>' target="_self">投标中</a>
	                </s:if>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 07">
	                	<a class="button" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[0].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[0].orderType"/>' target="_self">预约中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 30">
	                	<a class="button disable">还款中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 31 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 33">
	                	<a class="button disable">已还完</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 32">
	                	<a class="button disable">坏账还款中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 10 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 20 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 94 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 96">
	                	<a class="button disable">放款审核</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 95 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 34">
	                	<a class="button disable">流标</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 01 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 02 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 03 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 04 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 05 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 42 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 43" >
	                	<a class="button disable">申请中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[0].orderState == 41 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 42 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 43 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 44 || bidIndexOut.pzSysUserOrderViewList[0].orderState == 45">
	                	<a class="button disable">审核失败</a>
	                </s:elseif>
	                <s:else>
	                	<a class="button disable">理财投标</a>
	                </s:else>
	            </div>
	        </li>
        </s:if>
		<s:if test="bidIndexOut.pzSysUserOrderViewList.size>1">
	        <li class="li-middle">
	            <div class="star-shadow"></div>
	            <div class="star-bid-box" id="box">
	                <input type="hidden" class="remainMoney" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderRemainMoney"/>'/>
	                <input type="hidden" class="raiseMoney" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderMoney"/>'/>
	                <input type="hidden" class="rateYear" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderApr"/>'/>
	                <input type="hidden" class="endTime" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderReleaseEndTime"/>'/>
	                <!--<img class="star-finan-img" src="../../../img/product/star/financing.png" />-->
	                <div class="star-top">
	                    <s:if test="bidIndexOut.pzSysUserOrderViewList[1].orderType ==01">
	                		<div class="star-type choose left"></div>
	                	</s:if>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderType ==02">
	                		<div class="star-type house left"></div>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderType ==03">
	                		<div class="star-type car left"></div>
	                	</s:elseif>
	                    <div class="left">
	                        <div class="bid-title"><a class="bid-a" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[1].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderType"/>' target="_self"><s:property value="bidIndexOut.pzSysUserOrderViewList[1].userOrderName"/></a></div>
	                        <div class="bid-sunhead">
	                        <span>
	                        	<s:if test="bidIndexOut.pzSysUserOrderViewList[1].orderRefund == 01">等额本息</s:if>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderRefund == 02">等额本金</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderRefund == 03">本息一次性</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderRefund == 04">先息后本</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderRefund == 99">其他还款方式</s:elseif>
	                        </span> <span><s:property value="bidIndexOut.pzSysUserOrderViewList[1].investLowLimit"/></span>元起投</div>
	                    </div>
	                    <div class="clear-both" ></div>
	                </div>
	                <div class="bid-message">
	                    <span class="bid-rate"><span class="rate-int">0</span>.<span class="rate-float">0</span></span>
	                    <div class="rate-box">
	                        <span class="bid-rate-mark">%</span>
	                        <span class="bid-rate-name">年利率</span>
	                        <span class="bid-time"><s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderCycle"/><span class="bid-time-name">个月</span></span>
	                    </div>
	                </div>
	                <div class="bid-level">信用等级：
	                	<s:if test="bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade gte 81">
	                		<img src="../../../images/common/level/level-aaa.png"/>
	                	</s:if>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade gte 61 && bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade lte 80">
	                		<img src="../../../images/common/level/level-aa.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade gte 46 && bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade lte 60">
	                		<img src="../../../images/common/level/level-a.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade gte 31 && bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade lte 45">
	                		<img src="../../../images/common/level/level-b.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade gte 0 && bidIndexOut.pzSysUserOrderViewList[1].orderIssuerFrade lte 31">
	                		<img src="../../../images/common/level/level-c.png"/>
	                	</s:elseif>
	                </div>	
	                <div class="bid-remain">标的余额： <span class="bid-remain-money"><span class="remain-money"></span>元</span></div>
	                <div class="progress-box">
	                    <div class="progress-val">
	                        <div class="val">0%</div>
	                        <div class="triangle"></div>
	                    </div>
	                    <div class="bid-rad-background">
	                        <div class="bid-bar"></div>
	                    </div>
	                </div>
	                <div class="bid-raise">借款金额： <span class="bid-raise-money"><span class="raise-money"></span>元</span></div>
	                <s:if test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 94">
	                	<div class="bid-time-remaining">剩余时间：000:00:00</div>
	                </s:if>
	                <s:else>
	                	<div class="bid-time-remaining">剩余时间： <span class="time-remainting"><span class="hour">00</span>:<span class="minute">00</span>:<span class="second">00</span></span></div>
	                </s:else>
	                <s:if test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 06">
	                	<a class="button" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[1].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderType"/>' target="_self">投标中</a>
	                </s:if>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 07">
	                	<a class="button" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[1].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[1].orderType"/>' target="_self">预约中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 30">
	                	<a class="button disable">还款中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 31 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 33">
	                	<a class="button disable">已还完</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 32">
	                	<a class="button disable">坏账还款中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 10 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 20 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 94 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 96">
	                	<a class="button disable">放款审核</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 95 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 34">
	                	<a class="button disable">流标</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 01 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 02 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 03 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 04 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 05|| bidIndexOut.pzSysUserOrderViewList[1].orderState == 42 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 43">
	                	<a class="button disable">申请中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[1].orderState == 41 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 42 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 43 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 44 || bidIndexOut.pzSysUserOrderViewList[1].orderState == 45">
	                	<a class="button disable">审核失败</a>
	                </s:elseif>
	                <s:else>
	                	<a class="button disable">理财投标</a>
	                </s:else>
	            </div>
	        </li>
		</s:if>
		<s:if test="bidIndexOut.pzSysUserOrderViewList.size>2">
	        <li class="right">
	            <div class="star-shadow"></div>
	            <div class="star-bid-box" id="box">
	                <input type="hidden" class="remainMoney" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderRemainMoney"/>'/>
	                <input type="hidden" class="raiseMoney" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderMoney"/>'/>
	                <input type="hidden" class="rateYear" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderApr"/>'/>
	                <input type="hidden" class="endTime" value='<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderReleaseEndTime"/>'/>
	                <!--<img class="star-finan-img" src="../../../img/product/star/financing.png" />-->
	                <div class="star-top">
	                    <s:if test="bidIndexOut.pzSysUserOrderViewList[2].orderType ==01">
	                		<div class="star-type choose left"></div>
	                	</s:if>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderType ==02">
	                		<div class="star-type house left"></div>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderType ==03">
	                		<div class="star-type car left"></div>
	                	</s:elseif>
	                    <div class="left">
	                        <div class="bid-title"><a class="bid-a" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[2].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderType"/>' target="_self"><s:property value="bidIndexOut.pzSysUserOrderViewList[2].userOrderName"/></a></div>
	                        <div class="bid-sunhead">
	                        <span>
	                        	<s:if test="bidIndexOut.pzSysUserOrderViewList[2].orderRefund == 01">等额本息</s:if>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderRefund == 02">等额本金</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderRefund == 03">本息一次性</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderRefund == 04">先息后本</s:elseif>
			                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderRefund == 99">其他还款方式</s:elseif>
	                        </span> <span><s:property value="bidIndexOut.pzSysUserOrderViewList[2].investLowLimit"/></span>元起投</div>
	                    </div>
	                    <div class="clear-both" ></div>
	                </div>
	                <div class="bid-message">
	                    <span class="bid-rate"><span class="rate-int">0</span>.<span class="rate-float">0</span></span>
	                    <div class="rate-box">
	                        <span class="bid-rate-mark">%</span>
	                        <span class="bid-rate-name">年利率</span>
	                        <span class="bid-time"><s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderCycle"/><span class="bid-time-name">个月</span></span>
	                    </div>
	                </div>
	                <div class="bid-level">信用等级：
	                	<s:if test="bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade gte 81">
	                		<img src="../../../images/common/level/level-aaa.png"/>
	                	</s:if>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade gte 61 && bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade lte 80">
	                		<img src="../../../images/common/level/level-aa.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade gte 46 && bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade lte 60">
	                		<img src="../../../images/common/level/level-a.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade gte 31 && bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade lte 45">
	                		<img src="../../../images/common/level/level-b.png"/>
	                	</s:elseif>
	                	<s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade gte 0 && bidIndexOut.pzSysUserOrderViewList[2].orderIssuerFrade lte 31">
	                		<img src="../../../images/common/level/level-c.png"/>
	                	</s:elseif>
	                </div>	
	                <div class="bid-remain">标的余额： <span class="bid-remain-money"><span class="remain-money"></span>元</span></div>
	                <div class="progress-box">
	                    <div class="progress-val">
	                        <div class="val">0%</div>
	                        <div class="triangle"></div>
	                    </div>
	                    <div class="bid-rad-background">
	                        <div class="bid-bar"></div>
	                    </div>
	                </div>
	                <div class="bid-raise">借款金额： <span class="bid-raise-money"><span class="raise-money"></span>元</span></div>
	                <s:if test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 94">
	                	<div class="bid-time-remaining">剩余时间：000:00:00</div>
	                </s:if>
	                <s:else>
	                	<div class="bid-time-remaining">剩余时间： <span class="time-remainting"><span class="hour">00</span>:<span class="minute">00</span>:<span class="second">00</span></span></div>
	                </s:else>
	                <s:if test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 06">
	                	<a class="button" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[2].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderType"/>' target="_self">投标中</a>
	                </s:if>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 07">
	                	<a class="button" href='../../../financing/financial-details.do?userOrderCode=<s:property value="bidIndexOut.pzSysUserOrderViewList[2].userOrderCode"/>&orderType=<s:property value="bidIndexOut.pzSysUserOrderViewList[2].orderType"/>' target="_self">预约中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 30">
	                	<a class="button disable">还款中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 31 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 33">
	                	<a class="button disable">已还完</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 32">
	                	<a class="button disable">坏账还款中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 10 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 20 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 94 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 96">
	                	<a class="button disable">放款审核</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 95 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 34">
	                	<a class="button disable">流标</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 01 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 02 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 03 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 04 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 05|| bidIndexOut.pzSysUserOrderViewList[2].orderState == 42 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 43">
	                	<a class="button disable">申请中</a>
	                </s:elseif>
	                <s:elseif test="bidIndexOut.pzSysUserOrderViewList[2].orderState == 41 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 42 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 43 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 44 || bidIndexOut.pzSysUserOrderViewList[2].orderState == 45">
	                	<a class="button disable">审核失败</a>
	                </s:elseif>
	                <s:else>
	                	<a class="button disable">理财投标</a>
	                </s:else>
	            </div>
	        </li>
		</s:if>
    </ul>
</div>