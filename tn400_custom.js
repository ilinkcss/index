$(document).ready(function(){
  // $("[data-checkall]").click(function(){
  //   var this_form = $(this).attr("data-checkall");
  //   if(this_form != ''){
  //     if($("#"+this_form).find("[data-checkall").prop("checked")){
  //       $("#"+this_form+" input[name^='select']").each(function(){
  //         $(this).prop("checked",true);
  //       });
  //     }else{
  //       $("#"+this_form+" input[name^='select']").each(function(){
  //         $(this).prop("checked",false);
  //       });
  //     }
  //   }else{
  //     if($("#check-all").prop("checked")){
  //       $("input[name^='select']").each(function(){
  //         $(this).prop("checked",true);
  //       });
  //     }else{
  //       $("input[name^='select']").each(function(){
  //         $(this).prop("checked",false);
  //       });
  //     }
  //   }
  // });

  //== delete select chk ===
  // $("[data-delete-chk]").click(function(){
  //   var this_form = $(this).parents().find('form');
  //   if($(this).attr("data-delete-chk") != ''){var form_name = $(this).attr("data-delete-chk"); this_form = $("#"+form_name);}
  //   var sel_num = this_form.find("input[name^='select']:checked").length;
  //   if(sel_num == 0){alert("請選擇要刪除的項目!!");
  //     return false;}
  //   else{
  //     if(confirm("即將刪除選取的項目")) {}
  //     else {return false;}
  //   }
  // });
  //== /delete select chk ===

  //== dynamic_add ==
    //動態新增的表格tr一定要包在thead或tbody裡面，不然會有一次產生2行的情況，原因不明XD
		var tb_id = 'dynamic_add';
		var dynamic_flag=1;
		var dynamic_index=1;
		$(".btn_dynamic_add").on('click',function(){
			if($(this).data("tbid") != undefined && $(this).data("tbid") != ''){tb_id = $(this).data("tbid")};
			var dynamic_input = $(this).data("input");
			var str_td = '<tr>';
			dynamic_input.map(function(input_data){
				if(input_data != ''){
					switch (input_data[0]) {
						case 'delete':
							str_td +='<td align="center" style="padding:2px;"><button type="button" class="dynamic_del btn btn-danger btn-sm" id="new_'+input_data[1]+'_'+dynamic_index+'"><i class="fa fa-times"></i> </button></td>';
						break;
						case 'label':
							str_td += '<td style="padding:2px;"><label class="'+input_data[2]+'" id="new_'+input_data[1]+'_'+dynamic_index+'" >'+input_data[3]+'</label></td>';
						break;
						case 'text':
							str_td += '<td style="padding:2px;"><input type="text" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control '+((input_data[4]!=undefined && input_data[4] !='')?input_data[4]:'')+'" value="" '+((input_data[2]!=undefined && input_data[2] !='')?'" placeholder="'+input_data[2]+'"':'')+((input_data[5]!=undefined && input_data[5] !='')?' list="'+input_data[5]+'"':'')+(input_data[3]?' required':'')+'></td>';
						break;
						case 'text-date':
							str_td += '<td style="padding:2px;"><input type="text" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control datepicker" value="" '+((input_data[2]!=undefined && input_data[2] !='')?'placeholder="'+input_data[2]+'"':'')+' required readonly></td>';
							$('#new_'+input_data[1]+'['+dynamic_index+']').on("click",'.datepicker', function () {
								$(this).datepicker().datepicker( "show" );
							});
						break;
						case 'textarea':
							str_td += '<td style="padding:2px;"><textarea id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control"'+((input_data[2]!=undefined && input_data[2] !='')?' placeholder="'+input_data[2]+'"':'')+((input_data[3])?' required':'')+'></textarea></td>';
						break;
						case 'fileupload':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="file" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control" value="">';
							str_td += '</td>';
						break;
						case 'file':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="text" id="new_ftitle_'+input_data[1]+'_'+dynamic_index+'" name="new_ftitle_'+input_data[1]+'['+dynamic_index+']" data-target="new_'+input_data[1]+'_'+dynamic_index+'" class="form-control" value="" placeholder="請輸入檔案標題">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="file" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control" value="">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">&emsp;</td>';
						break;
						case 'file-odf':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="text" id="new_ftitle_'+input_data[1]+'_'+dynamic_index+'" name="new_ftitle_'+input_data[1]+'['+dynamic_index+']" data-target="new_'+input_data[1]+'_'+dynamic_index+'" class="form-control" value="" placeholder="請輸入檔案標題">';
							str_td += '</td>';
							str_td += '<td style="padding:2px; text-align:right;">';
								str_td += '<label>一般檔 <input type="file" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" value="" style="padding:3px; margin:1px; border:1px solid #ccc;"></lebel>';
								str_td += '<label>odf檔<input type="file" id="new_'+input_data[1]+'_odf'+dynamic_index+'" name="new_'+input_data[1]+'_odf['+dynamic_index+']" value="" style="padding:3px; margin:1px; border:1px solid #ccc;"></label>';
							str_td += '</td>';
						break;
						case 'radio':
							var option_index = 1;
							str_td += '<td class="text-center" style="padding:2px;">';
							input_data[2].map(function(input_option){
								var ary_option = input_option.split(",");
								str_td += '<label class="radio-inline" for="new_'+input_data[1]+'_'+dynamic_index+'_'+option_index+'">';
								str_td += '<input type="radio" id="new_'+input_data[1]+'_'+dynamic_index+'_'+option_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" value="'+ary_option[0]+'" '+((input_data[3] != '' && input_data[3] == ary_option[0])?'checked':'')+'>'+ary_option[1];
								str_td += '</label>';
								option_index++;
							});
							str_td += '</td>';
						break;
						case 'checkbox':
						var option_index = 1;
						str_td += '<td class="text-center" style="padding:2px;">';
						input_data[2].map(function(input_option){
							var ary_option = input_option.split(",");
							str_td += '<label class="checkbox-inline" for="new_'+input_data[1]+'_'+dynamic_index+'_'+option_index+'">';
							str_td += '<input type="checkbox" id="new_'+input_data[1]+'_'+dynamic_index+'_'+option_index+'" name="new_'+input_data[1]+'['+dynamic_index+']['+option_index+']" value="'+ary_option[0]+'" '+((input_data[3] != '' && input_data[3] == ary_option[0])?'checked':'')+'>'+ary_option[1];
							str_td += '</label>';
							option_index++;
						});
						str_td += '</td>';
						break;
						case 'select':
						  str_td += '<td class="text-center" style="padding:2px;">';
						  str_td += '<select class="form-control rounded-0" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']">';
						  input_data[2].map(function(input_option){
  							var ary_option = input_option.split(',');
							str_td += '<option value="'+ary_option[0]+'" '+((input_data[3]!=undefined && input_data[3] == ary_option[0])?'selected':'')+'>'+ary_option[1]+'</value>';
						  });
						  str_td += '</select>';
						  str_td += '</td>';
						break;
            default:
              str_td += '<td class="text-center text-nowrap">'+input_data[0]+'</td>';
            break;
					}
				}else{
					str_td += '<td style="padding:2px;"></td>';
				}
			});
			str_td += '</tr>';
			$("#"+tb_id+"").append(str_td);
			dynamic_index++;
			dynamic_sort(tb_id);
		});

	$("tbody").on("click",".dynamic_del",function(){
		var callbackstr=$(this).closest('table').data("callback");
		$(this).closest('tr').remove();
		dynamic_sort(tb_id);
		calculation_funding();
		percent();
		if (typeof  eval(callbackstr) === "function") {
				eval(callbackstr)();
		}
	});

  function dynamic_sort(tb_id){
		var sort_num = 1;
		$("#"+tb_id+" input[name*='_sort']").each(function(){
			$(this).val(sort_num);
			sort_num++;
		});
	}
	//== /dynamic_add ==

	//=== get file name to title ===
	$("body").on("change","input[type='file']",function(){
		var this_id = $(this).attr('id');
		var this_file = $(this)[0];
		if(this_file.files[0] != undefined){
			var this_name = this_file.files[0].name;
			var ary_name = this_name.split(".");
			var type_length = ary_name[ary_name.length-1].length+1;
			var file_name = this_name.substring(0,this_name.length-Number(type_length));

			if($("input[data-target='"+this_id+"']").length > 0 && $("input[data-target='"+this_id+"']").val() == ''){
				$("input[data-target='"+this_id+"']").val(file_name);
			}
		}
	});
  //=== /get file name to title ===


  //=== jquery validate ===
    if($("form[id^='form_edit'],form[data-validate],form.form_validate").length >0){
			$("form[id^='form_edit'],form[data-validate],form.form_validate").each(function( index ) {
				var is_send=false;
				$(this).validate({
					//debug: true, //偵錯模式
					errorClass:'invalid',
					errorElement:'span',
					submitHandler: function (form)
					{
						//$(form).find('[type="submit"]').attr('disabled', 'disabled');
						//$(form).find('[type="submit"]').hide();
						if(is_send)
							return true;
						is_send=true;
						form.submit();
					},
					highlight: function(element) {
					$(element).parent().removeClass('state-success').addClass("state-error");
					},
					unhighlight: function(element) {
					$(element).parent().removeClass("state-error").addClass('state-success');
					},
					errorPlacement: function(error, element) {
					if($(element).prop("type")=="radio")
						error.appendTo(element.parent().parent());
					else
						error.appendTo(element.parent());
					},
					rules: {
					twid: {
					required: true,
					TWIDCheck: true
					}}
				});
				});
			//驗證帳號
			$.validator.addMethod("checkaccount", function( value, element ) {
				//console.log("checkaccount");
				//console.log(value);
				//console.log(element);
				var result = true;
				$.ajax({
					type:"POST",
					url:'checkaccount.php',
					async:false,
					data:{'account':value},
					success: function(msg){
						console.log("success="+msg);
						if(msg == 'yes'){
							result = false;
						}
					}
				});
				return result;
			}, "帳號重複!!");
			//密碼為 4～12個字元的英文字母、數字混合，但不含空白鍵及標點符號。
			$.validator.addMethod("checkpwdhard", function( value, element ) {
				var str = value;
				var result = false;

				if(str.length > 0){
					var patt = /^[a-zA-Z0-9]{4,12}$/;
					var result1 = patt.test(str);
					//先測試是否有英文
					var pattEN = /[a-zA-Z]{1,}/;
					result2 = pattEN.test(str);
					//先測試是否有數字
					var pattDigit = /[0-9]{1,}/;
					result3 = pattDigit.test(str);

					if(result1 == true && result2 == true && result3 == true){
						result = true;
					} else{
						result = false;
					}
				} else {
					result = true;
				}
				return result;
			}, "密碼為 4～12個字元的英文字母、數字混合，但不含空白鍵及標點符號。");
      // 台灣身份證字號格式檢查程式
      $.validator.addMethod("TWIDCheck", function(value, element){
        var a = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
        var b = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        var c = new Array(2);
        var d;
        var e;
        var f;
        var g = 0;
        var h = /^[a-z](1|2)\d{8}$/i;
        if (value.search(h) == -1){
          return false;
        }else{
          d = value.charAt(0).toUpperCase();
          f = value.charAt(9);
        }

        for (var i = 0; i < 26; i++){
          if (d == a[i]){//a==a
            e = i + 10; //10
            c[0] = Math.floor(e / 10); //1
            c[1] = e - (c[0] * 10); //10-(1*10)
            break;
          }
        }

        for (var i = 0; i < b.length; i++){
          if (i < 2){
            g += c[i] * b[i];
          }else{
            g += parseInt(value.charAt(i - 1)) * b[i];
          }
        }

        if ((g % 10) == f){return true;}
        if ((10 - (g % 10)) != f){return false;}
        return true;
      }, "請輸入有效的身份證字號!");
			//連絡電話(住家)、(公司)、(手機)請擇一填寫
			$.validator.addMethod("tel_chk", function(value, element){
				var data_obj=$(element).data("obj");
				if($(element).val()=="" && $("#"+data_obj).val()==""){return false;}
				return true;
			}, "市話、手機請擇一填寫");
			//護照 或 簽證 影印本擇一
			$.validator.addMethod("file_chk", function(value, element){

				var target=$(element).data("target");
				if($("#"+target).length==0) {return true;}
				if($(element).val()!="" ||$("#"+target).val()!=""){return true;}
				//if($("#file_passport").length==0 || $("#file_visanumber_front").length==0 ){return true;}
				//if($("#file_passport").val()!="" || $("#file_visanumber_front").val()!=""){return true;}
				return false;
			}, "護照 或 簽證 影印本擇一");
			//護照 或 簽證 影印本擇一
    }
    //=== /jquery validate ===


  //== datatables ==
  if($('.tb_list').length>0){
    var responsiveHelper_dt_basic = undefined;
    var breakpointDefinition = {tablet:768,phone:576};
    $('.tb_list').dataTable({
      searching: false,
      ordering: false,
      paging: false,
      scrollX: false,
      scrollY: false,
      info: false,
      "preDrawCallback" : function() {
        // Initialize the responsive datatables helper once.
        if (!responsiveHelper_dt_basic) {responsiveHelper_dt_basic = new ResponsiveDatatablesHelper($('.tb_list'), breakpointDefinition);}
      },
      "rowCallback" : function(nRow) {responsiveHelper_dt_basic.createExpandIcon(nRow);},
      "drawCallback" : function(oSettings) {responsiveHelper_dt_basic.respond();}
    });
  }
  //== /datatables ==

  //== zipcode ==
  if($("input[name*='zipcode']").length>0){
	  $.ajax({
		cache: 'false',
		contentType:' application/x-www-form-urlencoded; charset=UTF-8',
		url: "includes/160812_add3code.php",
		type: "POST",
		error: function(){alert("load zipcode file error");},
		success: function(res){
		  var ary_address = JSON.parse(res);
		  var ary_city = new Array();
		  var ary_area = new Array();
		  var str_city = '<option value="">縣市</option>';

		  var i=0;
		  $.each(ary_address,function(key,value){
			if(ary_city.indexOf(value['city']) == -1){
			  ary_city.push(value['city']);
			  ary_area[value['city']] = new Array();
			  i=0;
			  ary_area[value['city']][i] = new Array(value['area'],value['zip']);
			}else{
			  ary_area[value['city']][i] = new Array(value['area'],value['zip']);
			}
			i++;
		  })

		  $.each(ary_city,function(city_key,city_value){
			str_city += '<option value="'+city_value+'">'+city_value+'</option>';
		  });

		  //處理預設資料
		  $("select[name$='_city']").each(function(){
			//處理預設縣市
			var field_keyword = $(this).attr('id').split('_').slice(0,-1).join('_');

			var sel_city = $("input[name='"+field_keyword+"_default_city']").val();

			$(this).empty().append(str_city);
			if(sel_city != '' && sel_city != '0'){
			  $(this).find("option[value='"+sel_city+"']").prop("selected","selected");
			}

			//處理預設區域
			if($("select[name='"+field_keyword+"_area']").length>0){
				var sel_area = $("input[name='"+field_keyword+"_default_area']").val();
				if(sel_area != '' && sel_area != '0' && sel_area != undefined){
					var str_area = '<option value="">鄉鎮區</option>';
					$.each(ary_area[sel_city],function(area_key,area_value){
						str_area += '<option value="'+area_value[0]+'" data-zip="'+area_value[1]+'">'+area_value[0]+'</option>';
					});

					$("select[name='"+field_keyword+"_area']").empty().append(str_area);
					$("select[name='"+field_keyword+"_area']").find("option[value='"+sel_area+"']").prop("selected","selected");
				}
			}
		  });


			$("select[name$='_city']").change(function(){
				var field_keyword = $(this).attr('id').split('_').slice(0,-1).join('_');
				var this_city = $(this).val();
				var str_area = '<option value="">鄉鎮區</option>';
				$.each(ary_area[this_city],function(area_key,area_value){
				str_area += '<option value="'+area_value[0]+'" data-zip="'+area_value[1]+'">'+area_value[0]+'</option>';
				});
				if($("select[name='"+field_keyword+"_area']").length>0){
					$("select[name='"+field_keyword+"_area']").empty().append(str_area);
					$("input[name='"+field_keyword+"_zipcode']").val('');
				}
			});

			//郵遞區號欄位
			$("select[name$='_area']").change(function(){
				var field_keyword = $(this).attr('id').split('_').slice(0,-1).join('_');
				var this_zip = $(this).find('option:selected').data('zip');
				$("input[name='"+field_keyword+"_zipcode']").val(this_zip);
			});
		}
	  });
  }
  //== /zipcode ==
});
