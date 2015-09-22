<%@page import="org.apache.commons.lang3.StringUtils"%>
<%
String baseTagBasePath = null;

String sslPort = request.getHeader("sslport");
if (!StringUtils.isBlank(sslPort)) {
	baseTagBasePath = "https://" + request.getServerName() + ":" + sslPort + request.getContextPath()+"/";
} else {
	baseTagBasePath = request.getScheme() + "://" + request.getServerName() 
			+ ":" + request.getServerPort() + request.getContextPath()+"/";
}
%>
	<base href="<%=baseTagBasePath%>images/common/ico/s.gif"></base>
