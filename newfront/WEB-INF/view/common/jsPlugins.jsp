<%@page import="com.cn.pxzd.common.GlobalConfig"%>
<%

%>
	<script type="text/javascript">
		GlobalConfigFromServer = {
			page_load_switch: false,
			verify_switch: <%=GlobalConfig.getVerify_switch()%>,
			ajax_url: "/",
			ajax_fun: "blogic.do",
			ajax_local_url:"/"
		};
	</script>

<%@include file="../../../js/plugins/plugins.html" %>
