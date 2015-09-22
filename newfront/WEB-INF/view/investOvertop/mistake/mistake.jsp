<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript" src="../../../js/investOvertop/mistake/mistake.js" ></script>

<div class="mistake-pic"></div>
<div class="mistake-prompt">
    <p>亲，累计投资金额过大</p>
    <p>请重新输入！</p>
</div>
<div class="mistake-index">
    <input type="hidden" id="J_mistake_skip" value="../../../financing/financial-details.do?userOrderCode=<s:property value="userOrderCode"/>">
    <input type="button" class="to-index" value="重新投资">
</div>