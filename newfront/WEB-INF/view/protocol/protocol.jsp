<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!-- <script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>网站协议-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/protocol/protocol.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/protocol/protocol.css" />
</head>
<body>
<!--网站协议-->
<input id="J_cur_nav" type="hidden" value="4" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_protocolbody">
    	<!-- 有无担保切换 -->
        <div id="J_protocoltit">
        	<%@include file="./protocolbody/protocoltit/protocoltit.jsp" %>
        </div>
        <div id="J_prodetails" >
        	<!--服务协议  -->
            <div id="J_serve" class="portocol">
            	<%@include file="./protocolbody/prodetails/serve/serve.jsp" %>
            </div>
            <!-- 借款协议，本息一次还款 -->
            <div id="J_proloan" class="portocol">
            	<%@include file="./protocolbody/prodetails/proloan/proloan.jsp" %>
            </div>
            <!-- 借款协议，等额本息 -->
            <div id="J_dgee" class="portocol">
            	<%@include file="./protocolbody/prodetails/dgee/dgee.jsp" %>
            </div>
            <!-- 借款协议，按月付息 -->
            <div id="J_payment" class="portocol">
            	<%@include file="./protocolbody/prodetails/payment/payment.jsp" %>
            </div>
        </div>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>

