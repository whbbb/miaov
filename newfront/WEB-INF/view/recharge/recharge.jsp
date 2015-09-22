<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!-- <script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>充值-账户中心-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/recharge/recharge.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/recharge/recharge.css" />
</head>
<body>
<input id="J_cur_nav" type="hidden" value="3" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_my_recharge">
    	<div id="J_my_rech_tips">
    	</div>
        <div id="J_account_left">
        	<%@include file="../account-common/account_left.jsp" %>
        </div>
        <div id="J_my_rech_onetouch">
        	<%@include file="./my_recharge/my_rech_onetouch/my_rech_onetouch.jsp" %>
        </div>
        <div id="J_my_rech_cyber">
        	<%@include file="./my_recharge/my_rech_cyber/my_rech_cyber.jsp" %>
        </div>
    </div>
    <div style="clear:both;" ></div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>