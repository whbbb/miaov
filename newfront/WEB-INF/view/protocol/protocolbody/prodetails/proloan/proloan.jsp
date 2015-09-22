<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!-- 借款协议-本息一次性还款 -->
<script type="text/javascript" src="../../../../../js/protocol/protocolbody/prodetails/proloan/proloan.js" ></script>


<div class="proloan">
    <!-- 隐藏域  储存value值  1代表有担保 2代表无担保  -->
    <input id="J_pro_hidden" value='<s:property value="assureFlag"/>' type="hidden"/>
    <ul class="proloantit">
        <li  value="1" class="por-current">有担保</li>
        <li  value="2">无担保</li>
    </ul>
    <div class="proclass">
    <!-- 借款协议-本息一次性还款   有担保 -->
            <div class="havewarrant loan-show">
            <h1 class="statit">借款协议书</h1>
            <p>协议ID:<span class="underline"><s:property value="borrowOut.userOrderCode"/></span></p>
            <p>本借款协议（下称“本协议”），由以下各方于<input class="date" value="<s:property value="borrowOut.accrulBeginDate"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日签署： </p>
            <p><span class="weight">甲方（出借人）：</span><span></span> </p>
            <table class="statutetable">
                <thead>
                <tr>
                    <td width="180">优金客用户名</td>
                    <td width="200">ID</td>
                    <td width="170">借出金额</td>
                    <td width="180">还款日</td>
                    <td width="170">应收本息</td>
                </tr>
                </thead>
                <tbody>
                	<s:iterator value="refundOut.pzSysOrderRefundUserViewList"> 
						<tr>
							<td><s:property value="userName"/></td>
							<td><s:property value="userCode"/></td>
							<td>￥<span><s:property value="bidMoney"/></span></td>
							<td><input class="date"  type="hidden" value="<s:property value="refundOut.refundEndTime"/>"/><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
							<td>￥<span><s:property value="refundMoney"/></span></td>
						</tr>
					</s:iterator>
					<tr>
						<td>&#8230;</td>
						<td>&#8230;</td>
						<td>&#8230;</td>
						<td>&#8230;</td>
						<td>&#8230;</td>
					</tr>
            	</tbody>
                <tfoot>
                <tr>
                    <td>总计</td>
                    <td>— —</td>
                    <td>￥<span><s:property value="borrowOut.sumBidMoney"/></span></td>
                    <td>— —</td>
                    <td>￥<span><s:property value="borrowOut.sumRefundMoney"/></span></td>
                </tr>
                </tfoot>
            </table>
            <p><span class="weight">乙方（借款人）：</span></p>
            <p>优金客用户名：<span><s:property value="borrowOut.userName"/></span> </p>
            <p>ID：<span><s:property value="borrowOut.userCode"/></span> </p>
            <p>借款金额：<span class="underline"><s:property value="borrowOut.orderMoney"/></span>元</p>
            <p class="martop"><span class="weight">丙方（见证人）：</span>北京品信众达信息科技公司 </p>
            <p>联系方式：北京市朝阳区东三环中路25号住总大厦4层 </p>
            <p>邮编：100020 </p>
            <p>客服电话：4000-38-4000 </p>
            <p class="martop"><span class="weight">丁方（担保人）：</span><span class="underline"><s:property value="borrowOut.suretyName"/></span></p>
            <p>身份证号（营业执照号）：<span class="underline"><s:property value="borrowOut.suretyCertificate"/></span></p>
            <p class="weight martop">鉴于： </p>
            <p class="padleft">1. 丙方是一家在北京市合法成立并有效存续的有限责任公司，拥有www.youjinke.com网站（下称“优金客网站”）的经营权，提供信用咨询，为交易提供信息服务；</p>
            <p class="padleft">2. 甲方和乙方均已在优金客网站注册，并承诺其提供给丙方的信息是完全真实的；</p>
            <p class="padleft">3. 甲方承诺对本协议涉及的借款具有完全的支配能力，是其自有闲散资金，为其合法所得；并承诺其提供给丙方的信息是完全真实的；</p>
            <p class="padleft">4. 丁方为具有完全民事权利能力和民事行为能力的法律主体，并承诺其向丙方提供、披露的资料、信息是完全真实的；</p>
            <p class="padleft">5. 乙方有借款需求，甲方亦同意借款，双方有意成立借贷关系。</p>
            <p class="padleft"><b>据此，各方经协商一致，达成如下协议，以资共同遵照履行： </b></p>
            <p class="weight">1. 定义 </p>
            <p>除非上下文另有解释，下列用语具有以下含义：</p>
            <p class="padleft">1.1 本协议：指本《借款协议》及所有附件中的任何条款、明细和信息；</p>
            <p class="padleft">1.2 甲方：指本协议列明的出借人，为符合中华人民共和国法律（即中国法律，不包括香港特别行政区、澳门特别行政区和台湾地区的法律法规）规定的具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的法律主体。出借人需为“优金客网站”的注册用户；</p>
            <p class="padleft">1.3 乙方：指本协议列明的借款人，为符合中国法律规定的具有完全民事权利能力和民事行为能力，能独立承担本协议项下权利义务的法律主体。借款人需为“优金客网站”的注册用户；</p>
            <p class="padleft">1.4 支付机构：指在本协议各方之间作为中介机构提供资金转移服务的第三方支付结算机构；</p>
            <p class="padleft">1.5 优金客网站：是指“北京品信众达信息科技有限公司”经营的提供专业个人对个人借贷交易居间服务的互联网平台；</p>
            <p class="padleft">1.6 丁方为具有完全民事权利能力和民事行为能力的法律主体，就甲方与乙方之间的借贷关系，为乙方向甲方提供连带保证责任。</p>
            <p class="padleft">1.7 本协议项下甲方、乙方、丙方、丁方单独称“一方”，甲方、乙方合称“双方”，甲方、乙方、丙方、丁方合称“各方”。</p>
            <p class="weight">2.借款明细 </p>
            <table class="statutetable">
                <tbody><tr>
                    <td width="150">借款金额</td>
                    <td colspan="3"><p>人民币<span class="underline"><s:property value="borrowOut.sumBidMoney"/></span>元整</p><p>（各出借人借出金额详见本协议文首表格）</p></td>
                </tr>
                <tr>
                    <td>借款利率</td>
                    <td colspan="3"><span class="underline"><s:property value="borrowOut.orderApr"/></span>% / 年</td>
                </tr>
                <tr>
                    <td>借款开始日</td>
                    <td width="300"><input class="date" value="<s:property value="borrowOut.accrulBeginDate"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
                    <td width="150">借款到期日</td>
                    <td width="300"><input class="date" value="<s:property value="refundOut.refundEndTime"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
                </tr>
                <tr>
                    <td>还款方式</td>
                    <td colspan="3">本息一次性还款</td>
                </tr>
                <tr>
                    <td>还款日/结息日</td>
                    <td colspan="3"><input class="date" value="<s:property value="refundOut.refundEndTime"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
                </tr>
                <tr>
                    <td>应还款总金额</td>
                    <td colspan="3">人民币<span class="underline"><s:property value="borrowOut.sumRefundMoney"/></span>元整</td>
                </tr>
                </tbody>
            </table>
            <p class="weight">3. 协议的订立及支付 </p>
            <p class="padleft">3.1 双方同意并确认，双方通过自行或授权有关方根据优金客网站有关规则和说明，在优金客网站进行借款申请和投标操作等方式确认签署本协议。</p>
            <p class="padleft">3.2 双方通过上述方式接受本协议且丙方审核通过后，本协议立即成立；本协议成立的同时甲方不可撤销地授权丙方将出借款项在扣除相关费用后委托相应的第三方托管机构等合作机构，在甲方优金客网站用户名项下虚拟账户（以下简称“甲方优金客网站账户”）中，冻结金额等同于本协议第2条所列的“借款金额”的资金划转、支付给乙方，出借款项由丙方根据授权划转完毕时本协议正式生效 。上述冻结在本协议生效时或本协议确定失效/终止时解除，冻结期间不支付任何利息。</p>
            <p class="weight">4. 本息偿还方式 </p>
            <p class="padleft">4.1 乙方必须按照本协议的约定按时、足额偿还对甲方的本金和利息。 </p>
            <p class="padleft">4.2 乙方应在每月还款日当日（不得迟于24:00）或之前，通过向其第三方托管账户充值进而向甲方还款。 </p>
            <p class="padleft">4.3 如果还款日遇到法定假日或公休日，还款日期不进行顺延。 </p>
            <p class="padleft">4.4 若当月没有该还款日，则还款日为当月最后一天。 </p>
            <p class="padleft">4.5 乙方的每期还款均应按照如下顺序清偿： </p>
            <p class="plthree">1）根据本协议产生的其他全部费用； </p>
            <p class="plthree">2）逾期利息； </p>
            <p class="plthree">3）逾期管理费； </p>
            <p class="plthree">4）拖欠丙方的借款管理费/借款服务费； </p>
            <p class="plthree">5）拖欠的利息； </p>
            <p class="plthree">6）拖欠的本金； </p>
            <p class="plthree">7）正常丙方的借款管理费/借款服务费； </p>
            <p class="plthree">8）正常的利息； </p>
            <p class="plthree">9）正常的本金。 </p>
            <p class="weight">5.逾期还款 </p>
            <p class="padleft">5.1 每月还款日24:00前，乙方未足额支付当月应还款的，则视为逾期。 </p>
            <p class="padleft">5.2 乙方应严格履行还款义务，如乙方逾期还款，则应按照下述条款向甲方支付逾期利息，自逾期开始之后，逾期本金的正常利息停止计算。 </p>
            <p class="plthree">逾期利息总额 = 逾期本息总额 × 逾期利率 × 逾期天数； </p>
            <p class="plthree">逾期利率 = <span class="underline"><s:property value="borrowOut.overdueInterestRate"/></span>% / 日</p>
            <p class="padleft">5.3 借款期间内，如遇本协议项下借款利率调整，逾期利息利率自借款利率调整之日起相应调整。 </p>
            <p class="padleft">5.4 乙方应严格履行还款义务，如乙方逾期还款，则应按照下述条款向丙方支付逾期管理费，自逾期开始之后，逾期本金的正常管理费停止计算。 </p>
            <p class="plthree">逾期管理费总额 = 逾期本息总额 × 逾期管理费利率 × 逾期天数 </p>
            <p class="plthree">逾期管理费利率 = <span class="underline"><s:property value="borrowOut.overdueFeeRate"/></span>% / 日 </p>
            <p class="padleft">5.5 若乙方对任何一期应还款逾期满30日的，丙方有权要求乙方将本协议项下全部借款于该期应还款逾期第30日当日全部提前到期；该期借款逾期未满30日但已届最终借款到期日的，仍以最终借款到期日为全部借款到期日。 </p>
            <p class="padleft">5.6 如果乙方逾期支付任何一期还款超过30天，或连续逾期三期以上（含三期），或累计逾期达五期以上（含五期），或甲方/丙方发现乙方出现逃避、拒绝沟通或拒绝承认欠款事实、故意转让资金、信用情况恶化等危害本协议借款的情形，则本协议项下的全部借款本息提前到期，同时：</p>
            <p class="plthree">1) 乙方应立即清偿本协议下尚未偿付的全部本金、利息、罚息及根据本协议产生的其他全部费用； </p>
            <p class="plthree">2）丙方有权将乙方的“逾期记录”、“恶意行为”或“不良情况”记入公民征信系统； </p>
            <p class="plthree">3）丙方有权将乙方违约失信的相关信息及乙方其他信息向包括但不限于媒体、用人单位、公安机关、检察机关、司法机关及有关逾期款项催收服务机构披露。对此丙方不承担任何责任。 </p>
            <p class="plthree">4）在乙方还清全部本金、利息、借款管理费、罚息、逾期管理费之前，罚息及逾期管理费的计算不停止。 </p>
            <p class="plthree">5）本借款协议中的所有甲方与乙方之间的借款均是相互独立的，一旦乙方逾期未归还借款本息，甲方中的任何一方均有权单独向乙方追索或者提起诉讼。如乙方逾期支付借款管理费或提供虚假信息的，丙方亦可单独向乙方追索或者提起诉讼。 </p>
            <p class="weight">6. 各方承诺与保证 </p>
            <p class="padleft">6.1 各方各自在此确认为具有完全民事权利能力和完全民事行为能力的法律主体，有权签订并履行本协议。 </p>
            <p class="padleft">6.2 甲方保证其所用于出借的资金来源合法，甲方是该资金的合法所有人，如果第三人对资金归属、合法性问题发生争议，由甲方负责解决。如甲方未能解决，则放弃享有其所出借款项所带来的利息收益。 </p>
            <p class="padleft">6.3 甲乙双方承诺并保证其提供的所有信息均为真实、完整和有效的。因双方提供虚假信息或因操作不当填写信息错误而造成的一切法律后果（包括但不限于民事赔偿，行政处罚等）均由双方分别承担相应后果。 </p>
            <p class="padleft">6.4 各方承诺，不得利用优金客网站平台进行信用卡套现、洗钱或其他违法、违纪行为，否则应依法承担由此产生的法律责任与后果。 </p>
            <p class="padleft">6.5 各方确认，甲方/乙方授权和委托丙方按照本协议约定实施的行为或采取的措施所产生的法律后果均由甲方/乙方个人承担。 </p>
            <p class="padleft">6.6 各方确认，丙方仅为本协议项下甲方与乙方之间借款的中介方，就甲方向乙方的借款事宜、乙方按照本协议的约定向甲方偿还借款本金、支付借款利息以及其他本协议约定的费用事宜、甲方在本协议项下的任何义务的履行或任何约定、乙方在本协议项下的任何义务的履行或任何约定等相关事宜，丙方不向甲方或乙方做出任何承诺或保证。</p>
            <p class="padleft">6.7 各方确认，丙方按照本协议的约定对乙方进行的审查、信用评级以及评审结果等相关工作，并不表示丙方向甲方或乙方进行了任何的承诺或保证。甲方或乙方不得因此要求丙方承担任何的责任或义务以及主张权利。 </p>
            <p class="padleft">6.8 各方确认，各方签署本协议均为各方的真实意思表示，各方已全部阅读了本协议并且已经完全的理解了本协议的内容以及本协议各个条款的意思。 </p>
            <p class="padleft"><b>6.9 各方确认，丙方就本协议项下甲方、乙方以及丁方的各自权利义务，不向甲方、乙方以及丁方中的任何一方提供任何担保、保证、承诺。各方应按照本协议的约定全面履行各自的权利义务。各方已充分阅读并完全理解本协议的约定，已充分认知签署本协议会带来风险以及收益。</b></p>
            <p class="weight">7. 甲方权利和义务 </p>
            <p class="padleft">7.1 甲方有权按照本协议约定收取利息和本金，并应主动自行缴纳由利息所得带来的可能的税费。 </p>
            <p class="padleft">7.2 如根据本协议约定的顺序清偿时，乙方还款不足以偿还约定全部本金、利息及逾期利息等款项的，甲方同意各自按照其借出款项比例收取还款。 </p>
            <p class="padleft">7.3 如乙方违约，甲方有权要求丙方提供其已获得的乙方信息。 </p>
            <p class="padleft">7.4 甲方承诺对依据本协议获得的乙方信息或资料予以保密，除用于本协议目的进行出借与合理催收外，不得向外转让或披露。 </p>
            <p class="weight">8. 乙方权利和义务 </p>
            <p class="padleft">8.1 乙方必须按期足额向甲方归还每期应还本金和利息，向丙方按期足额支付相关借款管理费和服务费用等款项，并支付与乙方逾期及提前还款有关的费用。 </p>
            <p class="padleft">8.2 乙方应确保其提供的信息和资料的真实性，不得提供虚假信息或隐瞒重要事实。若乙方违反本协议约定，丙方有权根据本协议及有关条款对乙方的信息和资料予以合理的披露。 </p>
            <p class="padleft">8.3 乙方同意，甲方和丙方有权使用其自行收集或乙方提供的乙方资料和信息用于以下用途（包括但不限于）： </p>
            <p class="plthree">1）为了提供本协议项下的服务，丙方向有关的合作机构提供必要之资料；用于解决争议、对纠纷进行调停等。 </p>
            <p class="plthree">2）乙方有权了解其在丙方的信用评审进度及结果。 </p>
            <p class="plthree">3）乙方不得将本协议项下的任何权利义务转让给任何其他方。 </p>
            <p class="plthree">4）乙方同意并确认，本协议如涉及两人以上借款，任一借款人均应履行本合同项下的义务，对全部借款承担连带清偿责任，甲方和丙方有权向任一借款人追索全部本息及其他相关费用。 </p>
            <p class="plthree">5) 乙方承诺未经甲方及丙方同意，不得擅自改变本协议借款资金用途，不得用于违法用途。 </p>
            <p class="plthree">6) 乙方应根据丙方的不时要求如实向丙方提供个人情况（包括但不限于姓名、身份证号、学历、联系方式、联系地址、职业信息、联系人信息等）以及借款用途等相关信息。 </p>
            <p class="weight">9. 丙方权利和义务 </p>
            <p class="padleft">9.1 丙方有权根据乙方、丁方提供的各项信息及丙方独立获得的信息评定乙方、丁方在丙方处所拥有的信用等级（包括但不限于个人信用等级、企业信用等级等），并根据对乙方和丁方的信息的评审结果，决定是否审核通过并将乙方的借款需求向甲方进行推荐。</p>
            <p class="padleft">9.2 甲方同意向乙方出借相应款项时，已委托丙方在本协议成立后将该笔借款直接划付至乙方账户。甲方授权并委托丙方代其收取本协议文首所约定的出借人每月应收本息，代收后按照甲方的要求进行处置，乙方对此表示认可。</p>
            <p class="padleft">9.3 丙方有权就为本协议借款所提供的服务向乙方收取借款管理费和/或服务费等费用。</p>
            <p class="padleft">9.4 甲方、乙方以及丁方同意丙方有权代甲方在必要时对乙方进行贷款的违约提醒及向乙方或丁方进行催收工作，包括但不限于电话通知、上门通知、发律师函、对乙方以及丁方提起诉讼等。甲方在此确认委托丙方为其进行以上工作，并授权丙方可以将此工作委托给其他方进行。乙方和丁方对前述委托的提醒、催收事项已明确知晓并应积极配合，同时应承担因乙方逾期还款而产生的催收全部费用。</p>
            <p class="padleft"><b>9.5 丙方接受甲乙双方的委托行为所产生的法律后果由相应委托方承担。如因乙方或甲方或其他方（包括但不限于技术问题）造成的延误或错误，丙方不承担任何责任；如乙方或丁方不能按期还款，或者由于非丙方原因导致甲方不能按期提供借款，则丙方也不承担任何责任。</b></p>
            <p class="padleft">9.6 丙方应对甲方、乙方以及丁方的信息及本协议内容保密；如任何一方违约，或因相关权力部门要求（包括但不限于法院、仲裁机构、金融监管机构、相关政府部门等），丙方有权披露。</p>
            <p class="weight">10.丁方的权利和义务<p>
            <p class="padleft">10.1 丁方必须保证其向丙方提供的乙方信息的真实性。</p>
            <p class="padleft" >10.2 丁方应负责审核乙方的借款申请、主体资格资质、资信情况、偿还能力等与本借款相关的一切信息，并应将其发现的可能涉及乙方无法清偿债务的一切风险自其发现之日起12小时内告知丙方，丁方还应负责本合同项下的借款回收及日常管理工作。</p>
            <p class="padleft">10.3 丁方对本合同项下乙方的债务承担不可撤销的连带责任保证担保，如乙方逾期归还借款本息的，由丁方代为偿还，丁方履行担保责任、进行代偿后，丁方对应的其对乙方的债权则立即转让至丁方，丁方承担代偿责任之后有权向乙方进行催收并收取相应的催收费。催收费的收取方式由乙方与丁方另行约定。</p>
            <p class="padleft">10.4 丁方有权就为本合同借款所提供的咨询服务向乙方收取咨询服务费，咨询服务费的收取方式由乙丁双方另行约定。</p>
            <p class="padleft">10.5 丁方有权了解乙方的信息和借款进展情况。</p>
            <p class="weight">11. 违约责任 </p>
            <p class="padleft">11.1 如果乙方严重违反还款义务或未经甲方同意擅自转让本协议项下借款债务的，甲方有权提前终止本协议；同时，乙方应向甲方支付借款本金总额10%的金额作为违约金。乙方须在甲方提出终止本协议要求的三日内，向第三方支付机构甲方优金客网站账户一次性支付余下的所有本金、利息和违约金，丙方再根据其与甲方之间的约定向甲方支付该等资金。 </p>
            <p class="padleft">11.2 乙方保证其提供的信息和资料的真实性，不得提供虚假资料或隐瞒重要事实。乙方提供虚假资料或者故意隐瞒重要事实，构成违约，应承担违约责任，甲方有权要求解除本协议；同时，乙方应向甲方支付借款本金总额10%的金额作为违约金。乙方须在甲方要求解除本协议后三日内，向第三方支付机构甲方优金客网站账户一次性支付余下的所有本金、利息和违约金，丙方再根据其与甲方之间的约定向甲方支付该等资金。构成犯罪的，甲方将有权向相关国家机关报案，追究乙方刑事责任。 </p>
            <p class="padleft">11.3 发生下列任何一项或几项情形的，视为乙方违约： </p>
            <p class="plthree">1）乙方的任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履约能力的不利事件，且不能及时提供有效补救措施的； </p>
            <p class="plthree">2) 乙方的财务状况出现影响其履约能力的不利变化，且不能及时提供有效补救措施的。 </p>
            <p class="plthree">11.4 若因本协议第11.3条所述情形而导致乙方违约，或根据甲方合理判断乙方可能发生本协议第11.3条所述的违约事件的，甲方有权自行或委托丙方采取下列任何一项或几项救济措施： </p>
            <p class="plthree">1) 立即暂缓、取消发放全部或部分借款； </p>
            <p class="plthree">2) 宣布已发放借款全部提前到期，乙方应立即偿还所有应付款； </p>
            <p class="plthree">3) 解除本协议； </p>
            <p class="plthree">4) 采取法律、法规以及本协议约定的其他救济措施。 </p>
            <p class="padleft">11.5 甲方保留将乙方违约失信的相关信息在媒体披露的权利。因乙方未还款而带来的调查及诉讼费用将由乙方承担。 </p>
            <p class="padleft">11.6 任何一方违约，违约方应承担因违约使得其他各方产生的费用和损失，包括但不限于调查、诉讼费、律师费等，应由违约方承担。甲方解除本协议的，乙方除立即偿还甲方未偿还的本金、利息、罚息外，还应向丙方支付所有应付的借款管理费。 </p>
            <p class="weight">12. 法律适用及争议解决 </p>
            <p class="padleft">12.1 本协议的签订、履行、终止、解释均适用中华人民共和国法律。 </p>
            <p class="padleft">12.2 本协议在履行过程中，如发生任何争执或纠纷，双方应友好协商解决；若协商不成，任何一方均应向丙方住所地的人民法院提起诉讼。 </p>
            <p class="weight">13. 其他 </p>
            <p class="padleft">13.1 各方可以补充协议方式对本协议作出修改和补充。经过各方签署的有关本协议的修改协议和补充协议是本协议组成部分，具有与本协议同等的法律效力。 </p>
            <p class="padleft">13.2 本协议签订之日起至借款本息和有关费用全部清偿之日止，甲方或乙方的下列信息如发生变更的，其应当在相关信息发生变更三日内将更新后的信息提供给丙方：本人、本人的家庭联系人及紧急联系人、工作单位、居住地址、住所电话、手机号码、电子邮箱、银行账户的变更。若因任何一方不及时提供上述变更信息而带来的损失或额外费用应由该方自行承担。 </p>
            <p class="padleft">13.3 本协议及其修改或补充均采用通过优金客网站以电子文本形式制成，可以有一份或者多份并且每一份具有同等法律效力，并永久保存在丙方为此设立的专用服务器上备查和保管。双方均认可该形式的协议效力。 </p>
            <p class="padleft">13.4 甲乙双方均确认，本协议的签订、生效和履行以不违反法律为前提。如果本协议中的任何一条或多条违反适用的法律，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。 </p>
        </div>
    <!-- 借款协议-本息一次性还款   无担保 -->
        <div class="nowarrant loan-show">
            <h1 class="statit">借款协议书 </h1>
            <p>协议ID:<span class="underline"><s:property value="borrowOut.userOrderCode"/></span></p>
            <p>本借款协议（下称“本协议”），由以下各方于<input class="date" value="<s:property value="borrowOut.accrulBeginDate"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日签署： </p>
            <p><span class="weight">甲方（出借人）：</span><span></span> </p>
            <table class="statutetable">
                <thead>
                <tr>
                    <td width="180">优金客用户名</td>
                    <td width="200">ID</td>
                    <td width="170">借出金额</td>
                    <td width="180">还款日</td>
                    <td width="170">应收本息</td>
                </tr>
                </thead>
                <tbody>
					<s:iterator value="refundOut.pzSysOrderRefundUserViewList">
						<input id="refundTime" class="orderCode" type="hidden" value="<s:property value="refundPlanTimeLast"/>"/>
						<input id="refundPlanTime" class="orderCode" type="hidden" value="<s:property value="refundPlanTime"/>"/>
						<tr>
							<td><s:property value="userName"/></td>
							<td><s:property value="userCode"/></td>
							<td>￥<span><s:property value="bidMoney"/></span></td>
							<td><input class="date"  type="hidden" value="<s:property value="refundOut.refundEndTime"/>"/><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
							<td>￥<span><s:property value="refundMoney"/></span></td>
						</tr>
					</s:iterator>
					<tr>
						<td>&#8230;</td>
						<td>&#8230;</td>
						<td>&#8230;</td>
						<td>&#8230;</td>
						<td>&#8230;</td>
					</tr>
				</tbody>
                <tfoot>
	                <tr>
	                    <td>总计</td>
	                    <td>— —</td>
	                    <td>￥<span><s:property value="borrowOut.sumBidMoney"/></span></td>
	                    <td>— —</td>
	                    <td>￥<span><s:property value="borrowOut.sumRefundMoney"/></span></td>
	                </tr>
                </tfoot>
            </table>
            <p><span class="weight">乙方（借款人）：</span></p>
            <p>优金客用户名：<span><s:property value="borrowOut.userName"/></span> </p>
            <p>ID：<span><s:property value="borrowOut.userCode"/></span> </p>
            <p>借款金额：<span class="underline"><s:property value="borrowOut.orderMoney"/></span>元</p>
            <p class="martop"><span class="weight">丙方（见证人）：</span>北京品信众达信息科技公司 </p>
            <p>联系方式：北京市朝阳区东三环中路25号住总大厦4层 </p>
            <p>邮编：100020 </p>
            <p>客服电话：4000-38-4000 </p>
            <p class="weight martop">鉴于： </p>
            <p class="padleft">1. 丙方是一家在北京市合法成立并有效存续的有限责任公司，拥有www.youjinke.com网站（下称“优金客网站”）的经营权，提供信用咨询，为交易提供信息服务；</p>
            <p class="padleft">2. 甲方和乙方均已在优金客网站注册，并承诺其提供给丙方的信息是完全真实的；</p>
            <p class="padleft">3. 甲方承诺对本协议涉及的借款具有完全的支配能力，是其自有闲散资金，为其合法所得；并承诺其提供给丙方的信息是完全真实的；</p>
            <p class="padleft">4. 乙方有借款需求，甲方亦同意借款，双方有意成立借贷关系。</p>
            <p class="padleft"><b>据此，各方经协商一致，达成如下协议，以资共同遵照履行： </b></p>
            <p class="weight">1. 定义 </p>
            <p>除非上下文另有解释，下列用语具有以下含义：</p>
            <p class="padleft">1.1 本协议：指本《借款协议》及所有附件中的任何条款、明细和信息；</p>
            <p class="padleft">1.2 甲方：指本协议列明的出借人，为符合中华人民共和国法律（即中国法律，不包括香港特别行政区、澳门特别行政区和台湾地区的法律法规）规定的具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的法律主体。出借人需为“优金客网站”的注册用户；</p>
            <p class="padleft">1.3 乙方：指本协议列明的借款人，为符合中国法律规定的具有完全民事权利能力和民事行为能力，能独立承担本协议项下权利义务的法律主体。借款人需为“优金客网站”的注册用户；</p>
            <p class="padleft">1.4 支付机构：指在本协议各方之间作为中介机构提供资金转移服务的第三方支付结算机构；</p>
            <p class="padleft">1.5 优金客网站：是指“北京品信众达信息科技有限公司”经营的提供专业个人对个人借贷交易居间服务的互联网平台；</p>
            <p class="padleft">1.6 本协议项下甲方、乙方、丙方单独称“一方”，甲方、乙方合称“双方”，甲方、乙方、丙方合称“各方”。</p>
            <p class="weight">2.借款明细 </p>
            <table class="statutetable">
                <tbody><tr>
                    <td width="150">借款金额</td>
                    <td colspan="3"><p>人民币<span class="underline"><s:property value="borrowOut.sumBidMoney"/></span>元整</p><p>（各出借人借出金额详见本协议文首表格）</p></td>
                </tr>
                <tr>
                    <td>借款利率</td>
                    <td colspan="3"><span class="underline"><s:property value="borrowOut.orderApr"/></span>% / 年</td>
                </tr>
                <tr>
                    <td>借款开始日</td>
                    <td width="300"><input class="date" value="<s:property value="borrowOut.accrulBeginDate"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
                    <td width="150">借款到期日</td>
                    <td width="300"><input class="date" value="<s:property value="refundOut.refundEndTime"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
                </tr>
                <tr>
                    <td>还款方式</td>
                    <td colspan="3">本息一次性还款</td>
                </tr>
                <tr>
                    <td>还款日/结息日</td>
                    <td colspan="3"><input class="date" value="<s:property value="refundOut.refundEndTime"/>" type="hidden"><span class="underline"></span>年<span class="underline"></span>月<span class="underline"></span>日</td>
                </tr>
                <tr>
                    <td>应还款总金额</td>
                    <td colspan="3">人民币<span class="underline"><s:property value="borrowOut.sumRefundMoney"/></span>元整</td>
                </tr>
                </tbody>
            </table>
            <p class="weight">3. 协议的订立及支付 </p>
            <p class="padleft">3.1 双方同意并确认，双方通过自行或授权有关方根据优金客网站有关规则和说明，在优金客网站进行借款申请和投标操作等方式确认签署本协议。</p>
            <p class="padleft">3.2双方通过上述方式接受本协议且丙方审核通过后，本协议立即成立；本协议成立的同时甲方不可撤销地授权丙方将出借款项在扣除相关费用后委托相应的第三方托管
                机构等合作机构，在甲方优金客网站用户名项下虚拟账户（以下简称“甲方优金客网站账户”）中，冻结金额等同于本协议第2条所列的“借款金额”的资金划转、
                支付给乙方，出借款项由丙方根据授权划转完毕时本协议正式生效 。上述冻结在本协议生效时或本协议确定失效/终止时解除，冻结期间不支付任何利息。
            </p>
            <p class="weight">4. 本息偿还方式 </p>
            <p class="padleft">4.1 乙方必须按照本协议的约定按时、足额偿还对甲方的本金和利息。 </p>
            <p class="padleft">4.2 乙方应在每月还款日当日（不得迟于24:00）或之前，通过向其第三方托管账户充值进而向甲方还款。 </p>
            <p class="padleft">4.3 如果还款日遇到法定假日或公休日，还款日期不进行顺延。 </p>
            <p class="padleft">4.4 若当月没有该还款日，则还款日为当月最后一天。 </p>
            <p class="padleft">4.5 乙方的每期还款均应按照如下顺序清偿： </p>
            <p class="plthree">1）根据本协议产生的其他全部费用； </p>
            <p class="plthree">2）逾期利息； </p>
            <p class="plthree">3）逾期管理费； </p>
            <p class="plthree">4）拖欠丙方的借款管理费/借款服务费； </p>
            <p class="plthree">5）拖欠的利息； </p>
            <p class="plthree">6）拖欠的本金； </p>
            <p class="plthree">7）正常丙方的借款管理费/借款服务费； </p>
            <p class="plthree">8）正常的利息； </p>
            <p class="plthree">9）正常的本金。 </p>
            <p class="weight">5.逾期还款 </p>
            <p class="padleft">5.1 每月还款日24:00前，乙方未足额支付当月应还款的，则视为逾期。 </p>
            <p class="padleft">5.2 乙方应严格履行还款义务，如乙方逾期还款，则应按照下述条款向甲方支付逾期利息，自逾期开始之后，逾期本金的正常利息停止计算。 </p>
            <p class="plthree">逾期利息总额 = 逾期本息总额 × 逾期利率 × 逾期天数； </p>
            <p class="plthree">逾期利率 = <span class="underline"><s:property value="borrowOut.overdueInterestRate"/></span>% / 日</p>
            <p class="padleft">5.3 借款期间内，如遇本协议项下借款利率调整，逾期利息利率自借款利率调整之日起相应调整。 </p>
            <p class="padleft">5.4 乙方应严格履行还款义务，如乙方逾期还款，则应按照下述条款向丙方支付逾期管理费，自逾期开始之后，逾期本金的正常管理费停止计算。 </p>
            <p class="plthree">逾期管理费总额 = 逾期本息总额 × 逾期管理费利率 × 逾期天数 </p>
            <p class="plthree">逾期管理费利率 = <span class="underline"><s:property value="borrowOut.overdueFeeRate"/></span>% / 日 </p>
            <p class="padleft">5.5 若乙方对任何一期应还款逾期满30日的，丙方有权要求乙方将本协议项下全部借款于该期应还款逾期第30日当日全部提前到期；该期借款逾期未满30日但已届最终借款到期日的，仍以最终借款到期日为全部借款到期日。 </p>
            <p class="padleft">5.6 如果乙方逾期支付任何一期还款超过30天，或连续逾期三期以上（含三期），或累计逾期达五期以上（含五期），或甲方/丙方发现乙方出现逃避、拒绝沟通或拒绝承认欠款事实、故意转让资金、信用情况恶化等危害本协议借款的情形，则本协议项下的全部借款本息提前到期，同时：</p>
            <p class="plthree">1) 乙方应立即清偿本协议下尚未偿付的全部本金、利息、罚息及根据本协议产生的其他全部费用； </p>
            <p class="plthree">2）丙方有权将乙方的“逾期记录”、“恶意行为”或“不良情况”记入公民征信系统； </p>
            <p class="plthree">3）丙方有权将乙方违约失信的相关信息及乙方其他信息向包括但不限于媒体、用人单位、公安机关、检察机关、司法机关及有关逾期款项催收服务机构披露。对此丙方不承担任何责任。 </p>
            <p class="plthree">4）在乙方还清全部本金、利息、借款管理费、罚息、逾期管理费之前，罚息及逾期管理费的计算不停止。 </p>
            <p class="plthree">5）本借款协议中的所有甲方与乙方之间的借款均是相互独立的，一旦乙方逾期未归还借款本息，甲方中的任何一方均有权单独向乙方追索或者提起诉讼。如乙方逾期支付借款管理费或提供虚假信息的，丙方亦可单独向乙方追索或者提起诉讼。 </p>
            <p class="weight">6. 各方承诺与保证 </p>
            <p class="padleft">6.1 各方各自在此确认为具有完全民事权利能力和完全民事行为能力的法律主体，有权签订并履行本协议。 </p>
            <p class="padleft">6.2 甲方保证其所用于出借的资金来源合法，甲方是该资金的合法所有人，如果第三人对资金归属、合法性问题发生争议，由甲方负责解决。如甲方未能解决，则放弃享有其所出借款项所带来的利息收益。 </p>
            <p class="padleft">6.3 甲乙双方承诺并保证其提供的所有信息均为真实、完整和有效的。因双方提供虚假信息或因操作不当填写信息错误而造成的一切法律后果（包括但不限于民事赔偿，行政处罚等）均由双方分别承担相应后果。 </p>
            <p class="padleft">6.4 各方承诺，不得利用优金客网站平台进行信用卡套现、洗钱或其他违法、违纪行为，否则应依法承担由此产生的法律责任与后果。 </p>
            <p class="padleft">6.5 各方确认，甲方/乙方授权和委托丙方按照本协议约定实施的行为或采取的措施所产生的法律后果均由甲方/乙方个人承担。 </p>
            <p class="padleft">6.6 各方确认，丙方仅为本协议项下甲方与乙方之间借款的中介方，就甲方向乙方的借款事宜、乙方按照本协议的约定向甲方偿还借款本金、支付借款利息以及其他本协议约定的费用事宜、甲方在本协议项下的任何义务的履行或任何约定、乙方在本协议项下的任何义务的履行或任何约定等相关事宜，丙方不向甲方或乙方做出任何承诺或保证。</p>
            <p class="padleft">6.7 各方确认，丙方按照本协议的约定对乙方进行的审查、信用评级以及评审结果等相关工作，并不表示丙方向甲方或乙方进行了任何的承诺或保证。甲方或乙方不得因此要求丙方承担任何的责任或义务以及主张权利。 </p>
            <p class="padleft">6.8 各方确认，各方签署本协议均为各方的真实意思表示，各方已全部阅读了本协议并且已经完全的理解了本协议的内容以及本协议各个条款的意思。 </p>
            <p class="padleft"><b>6.9 各方确认，丙方就本协议项下甲方和乙方的各自权利义务，不向甲方和乙方中的任何一方提供任何担保、保证、承诺。各方应按照本协议的约定全面履行各自的权利义务。各方已充分阅读并完全理解本协议的约定，已充分认知签署本协议会带来风险以及收益。</b></p>
            <p class="weight">7. 甲方权利和义务 </p>
            <p class="padleft">7.1 甲方有权按照本协议约定收取利息和本金，并应主动自行缴纳由利息所得带来的可能的税费。 </p>
            <p class="padleft">7.2 如根据本协议约定的顺序清偿时，乙方还款不足以偿还约定全部本金、利息及逾期利息等款项的，甲方同意各自按照其借出款项比例收取还款。 </p>
            <p class="padleft">7.3 如乙方违约，甲方有权要求丙方提供其已获得的乙方信息。 </p>
            <p class="padleft">7.4 甲方承诺对依据本协议获得的乙方信息或资料予以保密，除用于本协议目的进行出借与合理催收外，不得向外转让或披露。 </p>
            <p class="weight">8. 乙方权利和义务 </p>
            <p class="padleft">8.1 乙方必须按期足额向甲方归还每期应还本金和利息，向丙方按期足额支付相关借款管理费和服务费用等款项，并支付与乙方逾期及提前还款有关的费用。 </p>
            <p class="padleft">8.2 乙方应确保其提供的信息和资料的真实性，不得提供虚假信息或隐瞒重要事实。若乙方违反本协议约定，丙方有权根据本协议及有关条款对乙方的信息和资料予以合理的披露。 </p>
            <p class="padleft">8.3 乙方同意，甲方和丙方有权使用其自行收集或乙方提供的乙方资料和信息用于以下用途（包括但不限于）： </p>
            <p class="plthree">1）为了提供本协议项下的服务，丙方向有关的合作机构提供必要之资料；用于解决争议、对纠纷进行调停等。 </p>
            <p class="plthree">2）乙方有权了解其在丙方的信用评审进度及结果。 </p>
            <p class="plthree">3）乙方不得将本协议项下的任何权利义务转让给任何其他方。 </p>
            <p class="plthree">4） 乙方同意并确认，本协议如涉及两人以上借款，任一借款人均应履行本合同项下的义务，对全部借款承担连带清偿责任，甲方和丙方有权向任一借款人追索全部本息及其他相关费用。 </p>
            <p class="plthree">5) 乙方承诺未经甲方及丙方同意，不得擅自改变本协议借款资金用途，不得用于违法用途。 </p>
            <p class="plthree">6) 乙方应根据丙方的不时要求如实向丙方提供个人情况（包括但不限于姓名、身份证号、学历、联系方式、联系地址、职业信息、联系人信息等）以及借款用途等相关信息。 </p>
            <p class="weight">9. 丙方权利和义务 </p>
            <p class="padleft">9.1 丙方有权根据乙方提供的各项信息及丙方独立获得的信息评定乙方在丙方处所拥有的个人信用等级，并根据对乙方个人信息的评审结果，决定是否审核通过并将乙方的借款需求向甲方进行推荐。</p>
            <p class="padleft">9.2 甲方同意向乙方出借相应款项时，已委托丙方在本协议成立后将该笔借款直接划付至乙方账户。甲方授权并委托丙方代其收取本协议文首所约定的出借人每月应收本息，代收后按照甲方的要求进行处置，乙方对此表示认可。</p>
            <p class="padleft">9.3 丙方有权就为本协议借款所提供的服务向乙方收取借款管理费和/或服务费等费用。</p>
            <p class="padleft">9.4 甲乙双方同意丙方有权代甲方在必要时对乙方进行贷款的违约提醒及催收工作，包括但不限于电话通知、上门通知、发律师函、对乙方提起诉讼等。甲方在此确认委托丙方为其进行以上工作，并授权丙方可以将此工作委托给其他方进行。乙方对前述委托的提醒、催收事项已明确知晓并应积极配合，同时应承担因乙方逾期还款而产生的催收全部费用。</p>
            <p class="padleft"><b>9.5 丙方接受甲乙双方的委托行为所产生的法律后果由相应委托方承担。如因乙方或甲方或其他方（包括但不限于技术问题）造成的延误或错误，丙方不承担任何责任；如乙方不能按期还款，或者由于非丙方原因导致甲方不能按期提供借款，则丙方也不承担任何责任。</b></p>
            <p class="padleft">9.6 丙方应对甲方和乙方的信息及本协议内容保密；如任何一方违约，或因相关权力部门要求（包括但不限于法院、仲裁机构、金融监管机构、相关政府部门等），丙方有权披露。</p>
            <p class="weight">10. 违约责任 </p>
            <p class="padleft">10.1 如果乙方严重违反还款义务或未经甲方同意擅自转让本协议项下借款债务的，甲方有权提前终止本协议；同时，乙方应向甲方支付借款本金总额10%的金额作为违约金。乙方须在甲方提出终止本协议要求的三日内，向第三方支付机构甲方优金客网站账户一次性支付余下的所有本金、利息和违约金，丙方再根据其与甲方之间的约定向甲方支付该等资金。 </p>
            <p class="padleft">10.2 乙方保证其提供的信息和资料的真实性，不得提供虚假资料或隐瞒重要事实。乙方提供虚假资料或者故意隐瞒重要事实，构成违约，应承担违约责任，甲方有权要求解除本协议；同时，乙方应向甲方支付借款本金总额10%的金额作为违约金。乙方须在甲方要求解除本协议后三日内，向第三方支付机构甲方优金客网站账户一次性支付余下的所有本金、利息和违约金，丙方再根据其与甲方之间的约定向甲方支付该等资金。构成犯罪的，甲方将有权向相关国家机关报案，追究乙方刑事责任。</p>
            <p class="padleft">10.3 发生下列任何一项或几项情形的，视为乙方违约： </p>
            <p class="plthree">1）乙方的任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履约能力的不利事件，且不能及时提供有效补救措施的； </p>
            <p class="plthree">2) 乙方的财务状况出现影响其履约能力的不利变化，且不能及时提供有效补救措施的。 </p>
            <p class="plthree">10.4 若因本协议第10.3条所述情形而导致乙方违约，或根据甲方合理判断乙方可能发生本协议第10.3条所述的违约事件的，甲方有权自行或委托丙方采取下列任何一项或几项救济措施： </p>
            <p class="plthree">1) 立即暂缓、取消发放全部或部分借款； </p>
            <p class="plthree">2) 宣布已发放借款全部提前到期，乙方应立即偿还所有应付款； </p>
            <p class="plthree">3) 解除本协议； </p>
            <p class="plthree">4) 采取法律、法规以及本协议约定的其他救济措施。 </p>
            <p class="padleft">10.5 甲方保留将乙方违约失信的相关信息在媒体披露的权利。因乙方未还款而带来的调查及诉讼费用将由乙方承担。 </p>
            <p class="padleft">10.6 任何一方违约，违约方应承担因违约使得其他各方产生的费用和损失，包括但不限于调查、诉讼费、律师费等，应由违约方承担。甲方解除本协议的，乙方除立即偿还甲方未偿还的本金、利息、罚息外，还应向丙方支付所有应付的借款管理费。 </p>
            <p class="weight">11. 法律适用及争议解决 </p>
            <p class="padleft">11.1 本协议的签订、履行、终止、解释均适用中华人民共和国法律。 </p>
            <p class="padleft">11.2 本协议在履行过程中，如发生任何争执或纠纷，双方应友好协商解决；若协商不成，任何一方均应向丙方住所地的人民法院提起诉讼。 </p>
            <p class="weight">12. 其他 </p>
            <p class="padleft">12.1 各方可以补充协议方式对本协议作出修改和补充。经过各方签署的有关本协议的修改协议和补充协议是本协议组成部分，具有与本协议同等的法律效力。 </p>
            <p class="padleft">12.2 本协议签订之日起至借款本息和有关费用全部清偿之日止，甲方或乙方的下列信息如发生变更的，其应当在相关信息发生变更三日内将更新后的信息提供给丙方：本人、本人的家庭联系人及紧急联系人、工作单位、居住地址、住所电话、手机号码、电子邮箱、银行账户的变更。若因任何一方不及时提供上述变更信息而带来的损失或额外费用应由该方自行承担。 </p>
            <p class="padleft">12.3 本协议及其修改或补充均采用通过优金客网站以电子文本形式制成，可以有一份或者多份并且每一份具有同等法律效力，并永久保存在丙方为此设立的专用服务器上备查和保管。双方均认可该形式的协议效力。 </p>
            <p class="padleft">12.4 甲乙双方均确认，本协议的签订、生效和履行以不违反法律为前提。如果本协议中的任何一条或多条违反适用的法律，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。 </p>
        </div>
    </div>
</div>