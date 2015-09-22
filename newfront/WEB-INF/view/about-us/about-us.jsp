<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>关于我们</title>

	<%@include file="../common/commonInclude.jsp" %>
	
	<script type="text/javascript" src="../../../js/about-us/about-us.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/about-us/about-us.css" />
</head>
	<body>
		<input id="J_cur_nav" type="hidden" value="4" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_about_top">
				<%@include file="about_top/about_top.jsp" %>
			</div>			  
			<!--top-->
			<div id="J_about_cen">
				<!--公司简介-->
				<div id="J_about_company">
					<%@include file="about_company/about_company.jsp" %>
				</div>	  
				<!--总经理致辞-->
				<div id="J_about_oration">
					<%@include file="about_oration/about_oration.jsp" %>
				</div>	  
				<!--安全保障-->
				<div id="J_about_ensure">
					<%@include file="about_ensure/about_ensure.jsp" %>
				</div>	   
				<!--管理团队-->
				<div id="J_about_team">
					<%@include file="about_team/about_team.jsp" %>
				</div>
						 
				<!--招贤纳士-->
				<div id="J_about_precruit">
					<!--招贤纳士顶部-->
					<div id="J_ap_top">
						<%@include file="about_precruit/ap_top/ap_top.jsp" %>
					</div>		   
					<!--招贤纳士下面列表-->
					<div id="J_about_prelist">
						<%@include file="about_precruit/about_prelist/about_prelist.jsp" %>
					</div>	
				</div>					  
				<!--联系我们-->			  
				<div id="J_about_contact">
					<%@include file="about_contact/about_contact.jsp" %>
				</div>	 
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>