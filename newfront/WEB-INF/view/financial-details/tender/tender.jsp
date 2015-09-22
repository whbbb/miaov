<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>


<s:if test="#user != null ">
<div class="tender-content"  >
    <div class="ten">
<%--     	<s:if test="orderType == '02'"> --%>
<%-- 	    	<p class="tender-population">投标人数<span class="ten-green"><s:property value="joinDetail.totalCount"/></span>人，投标总额<span  class="ten-green"><s:property value="joinDetail.sumMoney"/></span>元</p> --%>
<!-- 	        <table class="ten-tab"> -->
<!-- 	            <tr class="ten-first"> -->
<!-- 	                <td>序号</td> -->
<!-- 	                <td>投标人</td> -->
<!-- 	                <td>投标金额</td> -->
<!-- 	                <td>投标时间</td> -->
<!-- 	            </tr> -->
<%-- 	            <s:iterator value="joinDetail.pzSysUserAssetInfoViewList"  status="i"> --%>
<!-- 					<tr> -->
<%-- 		                <td><s:property value="#i.product+1"/></td> --%>
<%-- 		                <td><s:property value="userName"/></td> --%>
<%-- 		                <td><s:property value="investMoney"/>元</td> --%>
<%-- 		                <td><s:property value="investTime.substring(0,19)"/></td> --%>
<!-- 		            </tr> -->
<%-- 				</s:iterator> --%>
<!-- 	        </table> -->
<%--     	</s:if> --%>
        <p class="tender-population">投标人数<span class="ten-green"><s:property value="outList.totalCount"/></span>人，投标总额<span  class="ten-green"><s:property value="outList.sumMoney"/></span>元</p>
        <table class="ten-tab">
            <tr class="ten-first">
                <td>序号</td>
                <td>投标人</td>
                <td>投标金额</td>
                <td>投标时间</td>
            </tr>
            <s:iterator value="outList.pzSysOrderUserViewList"  status="i">
				<tr>
	                <td><s:property value="#i.index+1"/></td>
	                <td><s:property value="userName"/></td>
	                <td><s:property value="bidMoney"/>元</td>
	                <td><s:property value="bidTime.substring(0,19)"/></td>
	            </tr>
			</s:iterator>
        </table>
    </div>
</div>
</s:if>