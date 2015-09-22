<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>


<s:if test="#user != null ">
<div class="about-content">
    <ul class="about-file">
    	<s:if test="fileOut.listPzSysOrderUploadFileView.size()>0">
    		<s:iterator value="fileOut.listPzSysOrderUploadFileView">
		        <li class="id-card">
		            <div class="pic" request-url="<s:property value="fileUrl"/><s:property value='filePath'/>" target="_blank">
		                <img src="<s:property value="fileUrl"/><s:property value='filePath'/>" width="135px" height="86px"/>
		            </div>
		          <s:property value="fileRemark" default="图片说明"/>
		        </li>
	        </s:iterator>
        </s:if>
    </ul>
</div>
</s:if>