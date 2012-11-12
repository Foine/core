/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
define("jquery-nos-inspector-tree-model-checkbox",["jquery","jquery-nos-treegrid"],function(a){a.fn.extend({nosInspectorTreeModelCheckbox:function(b){b=b||{};return this.each(function(){var d=a(this).css({height:b.height||"150px",width:b.width||""}),i=d.attr("id"),f=d.find("table"),c=d.closest(".nos-dispatcher, body").on("contextChange",function(){e();if(b.contextChange){f.nostreegrid("option","treeOptions",{context:c.data("nosContext")||""})}}),h=false,e=function(){if(b.reloadEvent){d.nosUnlistenEvent("inspector"+i);var j={name:b.reloadEvent};if(c.data("nosContext")){j.context=c.data("nosContext")}d.nosListenEvent(j,function(){f.nostreegrid("reload")},"inspector"+i)}},g=function(){e();var j=a.extend(true,{},b.treeOptions||{});if(!j.context){j.context=c.data("nosContext")||""}d.find('input[name="'+b.input_name+'[]"]').remove();f.nostreegrid({sortable:false,movable:false,urlJson:b.urlJson,treeColumnIndex:1,treeOptions:j,preOpen:b.selected||{},columnsAutogenerationMode:"none",scrollMode:"auto",cellStyleFormatter:function(k){if(k.$cell.is("td")){k.$cell.removeClass("ui-state-highlight")}},rowStyleFormatter:function(k){if(k.type==a.wijmo.wijgrid.rowType.header){k.$rows.hide()}},rendering:function(){h=false},rendered:function(){h=true;f.css("height","auto");if(a.isPlainObject(b.selected)){a.each(b.selected,function(k,l){if(a.isPlainObject(l)&&l.id){d.find(":checkbox[value="+l.id+"]").prop("checked",true);f.data("nostreegrid");if(l.disable_check){d.find(":checkbox[value="+l.id+"]").attr("disabled",l.disable_check)}}})}if(a.isPlainObject(b.disabled)){a.each(b.disabled,function(k,l){if(a.isPlainObject(l)&&l.id){d.find(":checkbox[value="+l.id+"]").attr("disabled",true);f.data("nostreegrid")}})}},columns:b.columns})};b.columns.unshift({allowMoving:false,allowSizing:false,width:35,ensurePxWidth:true,cellFormatter:function(j){if(a.isPlainObject(j.row.data)){a('<input type="checkbox" />').attr({name:b.input_name+"[]",value:j.row.data._id}).click(function(){var l=a(this),k=l.is(":checked");if(k){b.selected[j.row.data._model+"|"+j.row.data._id]={id:j.row.data._id,model:j.row.data._model}}else{b.selected[j.row.data._model+"|"+j.row.data._id]&&delete b.selected[j.row.data._model+"|"+j.row.data._id]}l.trigger("selectionChanged",j.row.data)}).appendTo(j.$container);return true}}});if(a.isPlainObject(b.selected)){a.each(b.selected,function(j,k){if(a.isPlainObject(k)&&k.id){a('<input type="hidden" />').attr({name:b.input_name+"[]",value:k.id}).appendTo(d)}})}f.css({height:"100%",width:"100%"});f.nosOnShow("one",g)})}});return a});