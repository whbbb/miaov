<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
	<head lang="UTF-8">
		<!-- <script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
		<meta charset="UTF-8">
		<title>账户中心-优金客</title>
	
		<%@include file="../common/commonInclude.jsp" %>
	
		<script type="text/javascript" src="../../../js/account-manage/account-manage.js" ></script>
	
		<link type="text/css" rel="stylesheet" href="../../../css/account-manage/account-manage.css" />
	</head>
	<body>
				<!--我的账户   账户管理-->
		<input id="J_cur_nav" type="hidden" value="3" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_my_manage_right">
				<input type="hidden" class="account" value="3">
				<div id="J_account_left">
					<%@include file="../account-common/account_left.jsp" %>
				</div>
				<div id="J_my_manage">
					<div id="J_mp_top_dredge">
						<%@include file="../account-common/mp_top_dredge.jsp" %>
					</div>
					<!--账户管理  账户信息管理-->
					<div id="J_my_man_top">
						<%@include file="my_manage_right/my_manage/my_man_top/my_man_top.jsp" %>
					</div>
					<!--账户管理   账户资金管理-->
					<div id="J_my_man_footlist">
						<%@include file="my_manage_right/my_manage/my_man_footlist/my_man_footlist.jsp" %>
					</div>
				</div>
			</div>
			<div style="clear:both"></div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>