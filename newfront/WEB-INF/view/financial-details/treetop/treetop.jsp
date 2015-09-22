<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/financial-details/treetop/treetop.js"></script>

<ul class="tree-title">
    <li class="t-treetop"><span class="current"></span>标的详情</li>
    <li class="t-about">相关文件</li>
    <li class="t-tender">投标详情</li>
    <li class="t-discuss">评论</li>
</ul>

<s:if test="#user != null ">

<div class="tree-content">
    <div   class="tree-detailss">
		<s:if test="out.userOrderIntroTitle1!=null || out.userOrderIntro1 != null">
			<div class="tree-one">
				<h3 class="to-h3"><s:property value="out.userOrderIntroTitle1"  escape="false"/></h3>
					<p class="to-p">
						<s:property value="out.userOrderIntro1"  escape="false"/>
					</p>
			</div>
		</s:if>
		
		<s:if test="out.userOrderIntroTitle2!=null || out.userOrderIntro2 != null">
			<div class="tree-one">
				<h3 class="to-h3"><s:property value="out.userOrderIntroTitle2"  escape="false"/></h3>
				<p class="to-p">
					<s:property value="out.userOrderIntro2" escape="false"/>
				</p>
			</div>
		</s:if>
		<s:if test="out.userOrderIntroTitle3!=null || out.userOrderIntro3 != null">
			<div class="tree-one">
				<h3 class="to-h3"><s:property value="out.userOrderIntroTitle3"  escape="false"/></h3>
				<p class="to-p">
					<s:property value="out.userOrderIntro3"  escape="false"/>
				</p>
			</div>
		</s:if>
		<s:if test="out.userOrderIntroTitle4!=null || out.userOrderIntro4 != null">
			<div class="tree-one">
				<h3 class="to-h3"><s:property value="out.userOrderIntroTitle4"  escape="false"/></h3>
				<p class="to-p">
					<s:property value="out.userOrderIntro4"  escape="false"/>
				</p>
			</div>
		</s:if>
		<s:if test="out.userOrderIntroTitle5!=null || out.userOrderIntro5!= null">
			<div class="tree-one">
				<h3 class="to-h3"><s:property value="out.userOrderIntroTitle5"  escape="false"/></h3>
				<p class="to-p">
					<s:property value="out.userOrderIntro5"  escape="false"/>
				</p>
			</div>
		</s:if>
		<s:if test="out.userOrderIntroTitle6!=null || out.userOrderIntro6 != null">
			<div class="tree-one">
				<h3 class="to-h3"><s:property value="out.userOrderIntroTitle6"  escape="false"/></h3>
				<p class="to-p">
					<s:property value="out.userOrderIntro6"  escape="false"/>
				</p>
			</div>
		</s:if>
	</div>

</div>

</s:if>