<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript" src="../../../js/protocol/protocolbody/protocoltit/protocoltit.js" ></script>
<!-- 隐藏域 储存value值  1代表本息一次还款 2代表等额本息 3代表到期还本-->
<input type="hidden" value='<s:property value="refundType"/>' id="J_tit_hidden"/>
<ul class="protocoltit">
    <li  class="current litwo">网站服务协议</li>
    <li value="1">借款协议-本息一次性还款</li>
    <li value="2" class="litwo">借款协议-等额本息</li>
    <li value="3">借款协议-按月付息，到期还本</li>
</ul>