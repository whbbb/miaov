<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<div class="pow">
    <div class="pow-left">
    <div class="pow-bam">
    <p class="p-b-content">
        薪金宝是优金客专门为，借款人以自有车辆为抵押物，第三方担保公司做担保，通过优金客平台融资的一款产品。该产品具有严格的风控程序，风险低，能够切实保障理财人的合理收益。
    </p>
</div>
     <ul class="pow-list">
     	<s:if test="pzSysUserInfoOrderViewList04.size() > 0">
        	<s:iterator value="pzSysUserInfoOrderViewList04">
            <li class="metalsbg"  request-url="../../../financing/financial-details.do?orderType=04&userOrderCode=<s:property value='userOrderCode'/>">
                <!--left--left-->
                <div class="p-l-left">
                    <div class="p-l-top">
                        <div class="gravatar pl-pic1">
                        	 <div class=" module pic-default"></div>
                        </div>
                        <div class="pltop-details">
                            <div class="plt-de1">
								<s:property value="userOrderName"/>
                            </div>
                            <div class="plt-de2">
                                <div class="de2-benxi <s:if test='orderIssuerFrade gte 81'>d2-3</s:if>
									<s:if test='orderIssuerFrade gte 61 && orderIssuerFrade lte 80'>d2-2</s:if>
									<s:if test='orderIssuerFrade gte 46 && orderIssuerFrade lte 60'>d2-1</s:if>
									<s:elseif test='orderIssuerFrade gte 31 && orderIssuerFrade lte 45'>d2-4</s:elseif>
									<s:elseif test='orderIssuerFrade gte 0 && orderIssuerFrade lte 30'>d2-5</s:elseif>">
									
                                	<s:if test='orderRefund==01'>等额本息，每月还款</s:if>
									<s:if test='orderRefund==02'>等额本金，每月还款</s:if>
									<s:if test='orderRefund==03'>本息一次性，每月还款</s:if>
									<s:if test='orderRefund==04'>按月付息，到期还本</s:if>
                                <span class="kong"></span><s:property value="investLowLimit"/>起投</div>
                                <!-- 等级的class名以及对应显示的图片   class=d2-1 图片 A  d2-2  图片AA  d2-3 图片AAA   d2-4  图片 B     d2-5   图片 C-->
                                <div class="de2-dai">
                                	<s:if test="orderProperty.substring(0,3) == '001'">
										<!-- 信用 -->
										<span class="de2-grd"></span>信用
									</s:if>
									<s:else>
										<s:if test="orderProperty.substring(0,2) == '10'">
											<span class="de2-db"></span>担保
										</s:if>
										<s:if test="orderProperty.substring(0,2) == '01'">
											<!-- 抵押标 -->
											<span class="de2-diya"></span>抵押
										</s:if>
										<s:if test="orderProperty.substring(0,2) == '11'">
											<span class="de2-db"></span>担保
											<span class="de2-diya"></span>抵押
										</s:if>
									</s:else>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="p-l-bottom">
                        <li class="green">
                        	<span class="plb-pic plb-1" title="年化收益率"></span>
                        	<s:set name="apr" value='orderApr.split("\\\\.")'></s:set>
                        	<span class="blb-big"><s:if test='orderApr.contains(".")'><s:property value='#apr[0]' /></s:if><s:else><s:property value="orderApr" /></s:else></span>
                        	<s:if test='orderApr.contains(".")'>.<s:property value='#apr[1]' /></s:if>%
                        </li>
                        <li style="margin-left:-10px;"><span class="plb-pic plb-2" title="借款期限"></span><s:property value="orderCycle" default="0"/>个月</li>
                        <li class="plb-time">
                            <input class="p-timer" type="hidden" value="<s:if test="orderState =='06' || orderState == '07'"><s:property value='orderReleaseEndTime'/></s:if><s:else>0000000</s:else>">
                            <span class="plb-pic plb-3" title="剩余时间"></span>
                            <span class="p-time"></span>
                        </li>
                        <li class="sum">
                            <input type="hidden"  class="sum-Money" value="<s:property value='orderMoney' default='0'/>">
                            <span class="plb-pic plb-4" title="借款总额"></span>
                            <span class="sum-money"></span>
                        </li>
                    </ul>
                </div>
                <!--left--right-->
                <div class="p-l-right">
                    <div class="plr-progress-box">
                        <input type="hidden" class="zongMoney" value="<s:property value='orderMoney' default='0'/>"/>
                        <input type="hidden" class="yuMoney" value="<s:property value='orderRemainMoney' default='0'/>"/>
                        <div class="plr-progress-val">
                            <div class="plr-val">0%</div>
                            <span class="plr-triangle"></span>
                        </div>
                        <div class="plr-bar-bg">
                            <div class="plr-progress-bar"></div>
                        </div>
                    </div>
                    <p class="plr-balance">标的余额
                        <input type="hidden" class="plrb" value="<s:property value='orderRemainMoney'/>">
                        <span class="plr-balance-mon"></span>
                    </p>
                    <s:if test="orderState !='06' && orderState != '07'">
                    	<s:set value="'tender-dark'" name="hide"/>
                    </s:if>
                    <input type="button"  value="<s:if test="orderState=='06'">投标中</s:if><s:elseif test="orderState=='96'">放款审核</s:elseif><s:elseif test="orderState=='21'">放款审核</s:elseif><s:elseif test="orderState=='07'">预约中</s:elseif><s:elseif test="orderState=='94'">放款审核</s:elseif><s:elseif test="orderState=='10'">放款审核</s:elseif><s:elseif test="orderState=='20'">放款审核</s:elseif><s:elseif test="orderState=='30'">还款中</s:elseif><s:elseif test="orderState== '31'">已还完</s:elseif><s:elseif test="orderState=='33'">已还完</s:elseif><s:else>理财投标</s:else>" class="tender <s:property value='#hide'/>">
                </div>
            </li>
            </s:iterator>
           </s:if>
           <s:else>
           	<input type="hidden" class="zongMoney" value="0"/><input type="hidden" class="yuMoney" value="0" />
           	<li class="metalsbg" ><p class="nodata">暂无记录~</p></li>
           </s:else>
        </ul>
        <s:include value="/WEB-INF/view/common/page.jsp">
        	<s:param name="pageSize" value="5"></s:param>
        	<s:param name="callback" value="'px_financing.anim();'"></s:param>
        	<s:param name="reqUrl" value="'../../../financing/financing_list.do'"></s:param>
        	<s:param name="reqType" value="1"></s:param>
        	<s:param name="refreshDom" value="'J_metals'"></s:param>
        	<s:param name="pageNum" value="pageNo"></s:param>
        	<s:param name="orderType" value="'04'"></s:param>
        	<s:param name="pageCount" value="out.pageCount"></s:param>
        </s:include>
    </div>
</div>