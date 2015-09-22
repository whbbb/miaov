<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account/my_account_right/my_pandect/my_pan_list/my_pan_list.js" ></script>

<script type="text/javascript">
<!--
 $().ready(function(){
	$(".pagination").show();	 
 })
//-->
</script>

<div class="pan-list">
    <div class="pan-list-tit">
        <p class="floatleft firsttit">交易记录</p>
        <ul class="floatleft fltit">
            <li class="floatleft <s:if test="moneyType==0">greenfont</s:if>  income-pay-detail"  request-url="../../../account/my_account.do?moneyType=0">收支明细</li>
            <li class="floatleft <s:if test="moneyType==1">greenfont</s:if> recharge-record"  request-url="../../../account/my_account.do?moneyType=1">充值记录</li>
            <li class="floatleft <s:if test="moneyType==2">greenfont</s:if> draw-record"  request-url="../../../account/my_account.do?moneyType=2">提现记录</li>
        </ul>

        <div class="floatleft menu">
        	 <select class="fl-select" special="true" select-value='<s:property value="searchDateType" default="0"/>' submit-url='../../../account/my_account.do?true&moneyType=<s:property value="moneyType" default="0"/>&searchDateType='>
                <option value="0">全部</option>
                <option value="1">近一个月</option>
                <option value="2">近半年</option>
                <option value="3">近一年</option>
            </select>
        </div>
    </div>
    <ul class="recordtit">
        <li class="floatleft fldate">日  期</li>
        <li class="floatleft flmold">类  型</li>
        <li class="floatleft flmoney">金  额</li>
        <li class="floatleft flremarks">备  注</li>
    </ul>         
    <s:if test="tradingOutput.pzSysMoneyList.size() > 0">
   		<!--有记录-->
	    <div class="record re-date pos-absolute"">
    		<table class="record re-date pos-absolute" style="display: table;">
	            <s:iterator value="tradingOutput.pzSysMoneyList">
	            	<tr style="top: 0px;">
		                <td class="first"><s:property value="operationDatetime.substring(0,11)"/></td>
		                <td class="second">
		                <s:if test="moneyType=='03'">投标</s:if>
		                <s:elseif test="moneyType=='01'">充值</s:elseif>
		                <s:elseif test="moneyType=='02'">提现</s:elseif>
		                <s:elseif test="moneyType=='11'">平台充值</s:elseif>
		                <s:elseif test="moneyType=='04'">获得借款</s:elseif>
		                <s:elseif test="moneyType=='05'">还款</s:elseif>
		                <s:elseif test="moneyType=='06' || moneyType=='07' || moneyType=='08'">收回借款</s:elseif>
		                <s:elseif test="moneyType=='09'">流标</s:elseif>
		                <s:elseif test="moneyType=='10'">撤标</s:elseif>
		                <s:else>--</s:else>
		                </td>
		                <s:if test="moneyType=='03' || moneyType=='05' || moneyType=='02'">
		                	<td class="third greenfont">-<s:property value="inMoney" default="0.00"/>元</td>
		                </s:if>
		                <s:else>
		                	<td class="third orangefont">+<s:property value="inMoney" default="0.00"/>元</td>
		                </s:else>
		                <td class="fourth"><s:property value="remark"  default="__"/></td>
		            </tr>
	             </s:iterator>
       		</table>
       	</div>
        <s:include value="/WEB-INF/view/common/page.jsp">
        	<s:param name="pageSize" value="10"></s:param>
        	<s:param name="reqType" value="0"></s:param>
        	<s:param name="reqUrl" value="'../../../account/my_account.do'"></s:param>
        	<s:param name="moneyType" value="moneyType"></s:param>
        	<s:param name="searchDateType" value="searchDateType"></s:param>
        	<s:param name="pageNum" value="pageNo"></s:param>
        	<s:param name="pageCount" value="tradingOutput.totalCount"></s:param>
        </s:include>
    </s:if>
    <s:else>
	    <!--w无记录-->
	    <div class="loan-list" id="J_loan_list">
			<div class="no-record">亲，您还没有交易记录哟~ </div>
		</div>
    </s:else>
</div>
<!-- <div class="list-banner"></div> -->