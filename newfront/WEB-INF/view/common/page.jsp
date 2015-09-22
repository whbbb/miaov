<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page import="java.util.*" %>

<% 
/*
	分页处理模版
	
	@param pageCount 总条数      ---必填---
	@param pageSize 每页面显示条数 ---默认为5条---
	@param pageNum 当前页码  
	@param reqType 请求类型 0跳转  1异步 
	@param callback 请求为异步时的回调方法
	@param reqUrl 请求的url
	@param refreshDom 需要异步刷新dom id 或 class
	
	@author: Alex Liu
	@since 2015-07-18
	@Ver 1.0.0
*/
	int pageCount = 0 , pageSize = 5, pageNum = 0 , reqType = 1;
	String callback = "" ,reqUrl = "" ,refreshDom = "";

	if(request.getParameter("callback")!=null){
		try{
			callback = request.getParameter("callback");
		}catch(Exception e){}
	}
	
	if(request.getParameter("reqType")!=null){
		try{
			reqType = Integer.parseInt(request.getParameter("reqType"));
		}catch(Exception e){}
	}
	
	if(request.getParameter("refreshDom")!=null){
		try{
			refreshDom = request.getParameter("refreshDom");
		}catch(Exception e){}
	}
	
	if(request.getParameter("reqUrl")!=null){
		try{
			reqUrl = request.getParameter("reqUrl");
		}catch(Exception e){}
	}
	   

	if(request.getParameter("pageSize")!=null){
		try{
			pageSize = Integer.parseInt(request.getParameter("pageSize"));
		}catch(Exception e){}
	}

	if(request.getParameter("pageCount")!=null){
		try{
			pageCount = (Integer.parseInt(request.getParameter("pageCount"))  + pageSize -1) / pageSize;
		}catch(Exception e){}
	}
	if(request.getParameter("pageNum")!=null){
		try{
			pageNum = Integer.parseInt(request.getParameter("pageNum"));
		}catch(Exception e){}
	}
	
	
	if(pageCount < 0 ){
		pageCount = 0;
		
	}
	
	if(pageNum < 0 ){
		pageNum = 0 ;
	}
	
	if(pageNum+1 > pageCount){
		pageNum = pageCount -1 ;
	}
	
	
	pageContext.setAttribute("pageCount" , pageCount);
	pageContext.setAttribute("pageNum" , pageNum);
	
	pageContext.setAttribute("reqType" , reqType);
	pageContext.setAttribute("reqUrl" , reqUrl);
	pageContext.setAttribute("callback" , callback);
	pageContext.setAttribute("refreshDom" , refreshDom);
	
%> 



<s:set name="pageCount" value="#attr.pageCount" />
<s:set name="pageNum" value="#attr.pageNum" />
<s:set name="reqType" value="#attr.reqType" />
<s:set name="reqUrl" value="#attr.reqUrl" />
<s:set name="callback" value="#attr.callback" />
<s:set name="refreshDom" value="#attr.refreshDom" />

<s:if test="#pageCount>1">
	<div id="Pagination" class="pagination">
		<s:if test="#pageNum == 0">
			<span class="current prev">&lt;</span>
		</s:if>
		<s:else><a href="javascript:;" onclick="pageTemplate.search(<s:property value="pageNum" />)" class="prev">&lt;</a>
		</s:else>
		<s:if test="#pageCount<6">
			<s:bean name= "org.apache.struts2.util.Counter"  id= "counter" >     
			  <s:param name="first"  value= "1"  />     
			  <s:param name="last"  value= "#pageCount"  />     
			  <s:iterator>
			  	<s:if test="#pageNum+1==current-1">
					<span class="current"><s:property value="current-1" /></span>
				</s:if>
				<s:else>
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="current-1" />)"><s:property value="current-1" /></a>
				</s:else>  
			  </s:iterator>     
			</s:bean>    
		</s:if>
		<s:else>
			<!-- 当前页小于第4页时 -->
			<s:if test="#pageNum+1<3">
				<s:bean name= "org.apache.struts2.util.Counter"  id= "counter" >     
				  <s:param name="first"  value= "1"  />     
				  <s:param name="last"  value= "3"  />     
				  <s:iterator>
				  	<s:if test="#pageNum+1==current-1">
						<span class="current"><s:property value="current-1" /></span>
					</s:if>
					<s:else>
						<a href="javascript:;" onclick="pageTemplate.search(<s:property value="current-1" />)"><s:property value="current-1" /></a>
					</s:else>  
				  </s:iterator>     
				</s:bean>
				<span>...</span>
				<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageCount" />)"><s:property value="#pageCount" /></a>
			</s:if>
			<s:else>
				<a href="javascript:;" onclick="pageTemplate.search(1)"><s:property value="1" /></a>
				<span>...</span>
				
				
				<s:if test="#pageNum+1==#pageCount || #pageNum>20">
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageNum/2-1" />)"><s:property value="#pageNum/2-1" /></a>
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageNum/2" />)"><s:property value="#pageNum/2" /></a>
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageNum/2+1" />)"><s:property value="#pageNum/2+1" /></a>
					<span>...</span>
				</s:if>
				<s:if test="#pageNum+3 < #pageCount">
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageNum" />)"><s:property value="#pageNum" /></a>
					<span class="current"><s:property value="#pageNum+1" /></span>
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageNum+2" />)"><s:property value="#pageNum+2" /></a>
					
					<span>...</span>
					<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageCount" />)"><s:property value="#pageCount" /></a>
				</s:if>
				<s:else>
					<s:bean name= "org.apache.struts2.util.Counter"  id= "counter" >     
					  <s:param name="first"  value= "#pageNum"  />     
					  <s:param name="last"  value= "#pageCount"  />     
					  <s:iterator>
					  	<s:if test="#pageNum+1==current-1">
							<span class="current"><s:property value="current-1" /></span>
						</s:if>
						<s:else>
							<a href="javascript:;" onclick="pageTemplate.search(<s:property value="current-1" />)"><s:property value="current-1" /></a>
						</s:else>  
					  </s:iterator>     
					</s:bean>
				</s:else>
			</s:else>
		</s:else>
		
		<s:if test="#pageCount == #pageNum+1">
			<span class="current next">&gt;</span>
		</s:if>
		<s:else>
			<a href="javascript:;" onclick="pageTemplate.search(<s:property value="#pageNum+2" />)" class="next">&gt;</a>
		</s:else>
	</div>
</s:if>

<!-- 判断分页提交方式 -->
<s:if test="#reqType==1">
	<script type="text/javascript">
		var pageTemplate = {};
	
		pageTemplate.search = function(pageNo){
			
			var param = {
			<%
				Map paramMap = request.getParameterMap();
				
				for(Iterator iter = paramMap.entrySet().iterator();iter.hasNext();){ 
			        Map.Entry element = (Map.Entry)iter.next(); 
			        Object strKey = element.getKey(); 
			        String[] value=(String[])element.getValue();
			        %><%=strKey.toString()%><%=":'"%><%=value[0]%><%="',"%><%
				}
			%>pageNo: pageNo-1};
			if($(".<%=refreshDom%>").length>0){
				$(".<%=refreshDom%>").load("<%=reqUrl%>", param ,function(){
					$.special_radio_checkbox();
					<%=callback%>
				});
			}else{
				$("#<%=refreshDom%>").load("<%=reqUrl%>", param ,function(){
					$.special_radio_checkbox();
					<%=callback%>
				});
			}
		};
	</script>
</s:if>
<s:else>
	<script type="text/javascript">
		var pageTemplate = {};
		pageTemplate.search = function(pageNo){
			$("#autoPageForm").remove();
			
			$form = $("<form method='post' id='autoPageForm'></form>");
			$form.attr("action" ,"<%=reqUrl%>");
			
			<!--遍历参数-->
			<%
				Map paramMap = request.getParameterMap();
				
				for(Iterator iter = paramMap.entrySet().iterator();iter.hasNext();){ 
			        Map.Entry element = (Map.Entry)iter.next(); 
			        Object strKey = element.getKey(); 
			        String[] value=(String[])element.getValue();
			        System.out.println(strKey.toString()+":"+value[0]);
			%>
				$form.append(" <input name='<%=strKey.toString()%>' value='<%=value[0]%>' /> ");
			<%
				}
			%>
			
			if($form.find("input[name='pageNo']").length ==  0){
				$form.append(" <input name='pageNo' value='"+(pageNo-1)+"' /> ");
			}else{
				$form.find("input[name='pageNo']").val(pageNo-1);
			}
			$("body").append($form);
			$form.submit();
		};
	</script>
</s:else>