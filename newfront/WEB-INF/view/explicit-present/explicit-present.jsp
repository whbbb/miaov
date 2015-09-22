<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>消费贷详细介绍</title>

    <script type="text/javascript" src="../../../js/common/jquery-1.7.2.min.js" ></script>
    <script type="text/javascript" src="../../../js/common/common.js" ></script>

    <script type="text/javascript" src="../../../js/explicit-present/explicit-present.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/explicit-present/explicit-present.css" />
</head>
	<body>
		<input id="J_cur_nav" type="hidden" value="2" />
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_detail">
				<%@include file="detail/detail.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>