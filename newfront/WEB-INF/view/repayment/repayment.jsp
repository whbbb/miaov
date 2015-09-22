<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!-- <script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>还款-账户中心-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/repayment/repayment.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/repayment/repayment.css" />
</head>
<body>
<!--  我的账户--还款页面  -->
<input id="J_cur_nav" type="hidden" value="3" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
		    <div id="J_repay">
		    	<%@include file="./repay/repay.jsp" %>
		    </div>
		</div>
		<div id="J_footer">
			<%@include file="../common/footer.jsp" %>
		</div>
		</body>
</html>