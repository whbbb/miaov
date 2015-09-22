<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>银行受理能力限制表-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/limit/limit.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/limit/limit.css" />
</head>
	<body>
		<!--  网银限制表 -->
		<input id="J_cur_nav" type="hidden" value="3" />
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container" >
		    <div id="J_cyber">
		    	<%@include file="./cyber/cyber.jsp" %>	
		    </div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>