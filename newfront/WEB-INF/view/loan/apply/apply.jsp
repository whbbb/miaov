<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

    <script type="text/javascript" src="../../../js/loan/apply/apply.js"></script>

    <div class="apply">
        <div id="J_computer_container" >
            <div id="J_computer_frame_container" style="display: none;" >
                <form action="" data-type="need-verify">
                    <ul>
                        <li class="title">
                            <span>
                                计算器
                            </span>
                            <div id="J_close_computer">
                            </div>
                        </li>
                        <li class="split">
                            <div></div>
                        </li>
                        <li class="line-container">
                            <span class="title">借款金额</span>
                            <input id="J_loan_amount" name="loan_amount" class="normal" type="text" placeholder="3000~500万，且为50的整数倍" />
                            <p class="one">元</p>
                        </li>
                        <li class="line-container">
                            <span class="title">借款期限</span>
                            <input id="J_loan_data_limit" name="loan_date_limit" class="normal" type="text" placeholder="1~24" />
                            <p class="two">个月</p>
                        </li>
                        <li class="line-container">
                            <span class="title">年利率</span>
                            <input id="J_annual_rate" name="annual_rate" class="normal" type="text" placeholder="1~23" />
                            <p class="one">%</p>
                        </li>
                        <li class="line-container">
                            <span class="title">还款方式</span>
                            <select id="J_refund_way" name="refund_way" class="normal" special="true">
                                <option value="1" data-value="1" >等额本息</option>
                                <option value="2" data-value="2" >按月付息，到期还本</option>
                                <option value="3" data-value="3" >到期后本息一次性还款</option>
                            </select>
                        </li>
                        <li class="show-detail">
                            <input id="J_computer_detail_state" type="checkbox" checked="checked" special="true" />
                            <p>显示还款详情</p>
                        </li>
                        <li class="computer">
                            <input id="J_computer_button" type="button" class="large" value="开始计算" />
                            <input id="J_computer_reset" type="reset" style="display: none;" />
                        </li>
                    </ul>
                </form>
                <div id="J_computer_result" style="display: none;">
                    <p class="title">累计还款额</p>
                    <div>
                        <span>应还本息：</span>
                        <span id="J_all_principal_and_interest" class="green-number" ></span>
                        <span>元</span>
                    </div>
                    <div>
                        <span>应还利息：</span>
                        <span id="J_all_interest" class="green-number" ></span>
                        <span>元</span>
                    </div>
                </div>
                <div id="J_computer_detail" style="display: none;" >
                    <div class="split" ></div>
                    <div id="J_detail_table_container">
                        <table id="J_detail_table"></table>
                    </div>
                </div>
            </div>
        </div>
        <div class="apply-container" >
            <form id="J_apply_form" action="../../../loan/loanSubmit.do" method="post" data-type="need-verify">
                <img id="J_computer" src="../../../images/loan/apply/ico/ico_computer.png" >
                <div class="line-container">
                    <span class="title">借款金额</span>
                    <input name="loan_amount" class="normal" type="text" data-name="loan_amount" placeholder="3000~500万，且为50的整数倍" />
                    <p class="one">元</p>
                </div>
                <!-- 已取消 -->
               <!-- <div class="line-container">
                    <span class="title">借款类型</span>
                    <select name="loan_type" class="normal" >
                        <option value="1" >消费贷</option>
                        <option value="2" >企业小微贷</option>
                    </select>
                </div>-->
                <div class="line-container">
                    <span class="title">借款用途</span>
                    <textarea name="loan_use" class="normal" data-name="loan_use" placeholder="此描述用于向理财人展示您的借款用途、工作收入、资产状况、信用记录及还款来源等，请您认真填写。"></textarea>
                </div>
                <div class="line-container">
                    <span class="title"></span>
                    <input id="J_fast_apply_button" type="button" class="large" value="一键申请"/>
                </div>
            </form>
        </div>
    </div>
