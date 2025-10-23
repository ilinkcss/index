$(document).ready(function(){
  $("#check-all").click(function(){
    var this_form = $(this).attr("data-checkall");
    if(this_form != ''){
      if($("#"+this_form).find("input[data-checkall]").prop("checked")){
        $("#"+this_form+" input[name^='select']").each(function(){
          $(this).prop("checked",true);
        });
      }else{
        $("#"+this_form+" input[name^='select']").each(function(){
          $(this).prop("checked",false);
        });
      }
			$("#"+this_form+" input[name^='select']").trigger('change');//強置觸發變更事件，(程式變更資料不會觸發變更事件，所以需要強制觸發，如果需要計算就可以使用onchange去抓取)
    }else{
      if($("#check-all").prop("checked")){
        $("input[name^='select']").each(function(){
          $(this).prop("checked",true);
        });
      }else{
        $("input[name^='select']").each(function(){
          $(this).prop("checked",false);
        });
      }
			$("input[name^='select']").trigger('change');//強置觸發變更事件，(程式變更資料不會觸發變更事件，所以需要強制觸發，如果需要計算就可以使用onchange去抓取)
    }
  });

  $("input:checkbox[name^='select']").click(function(){
    var total_checkbox = $("input:checkbox[name^='select']").length;
    var total_checked = $("input:checkbox[name^='select']:checked").length;
    if($(this).prop("checked")){
      if(total_checked == total_checkbox){
        $(this).closest('form').find("input[data-checkall]").prop("checked",true);
      }
    }else{
      $(this).closest('form').find("input[data-checkall]").prop("checked",false);
    }
  });



  //== delete select chk ===
  $("[data-delete-chk]").click(function(){
    var this_form = $(this).closest('form');
    if($(this).attr("data-delete-chk") != ''){var form_name = $(this).attr("data-delete-chk"); this_form = $("#"+form_name);}
    var sel_num = this_form.find("input[name^='select']:checked").length;
    if(sel_num == 0){alert("請選擇要刪除的項目!!");
      return false;}
    else{
      if(confirm("即將刪除選取的項目")) {}
      else {return false;}
    }
  });
  //== /delete select chk ===

  //== dynamic_add ==
		var tb_id = 'dynamic_add';
		var dynamic_flag=1;
		var dynamic_index=1
		$(".btn_dynamic_add").on('click',function(){

      var set_date_id="";
			if($(this).data("tbid") != undefined && $(this).data("tbid") != ''){tb_id = $(this).data("tbid")};
			var dynamic_input = $(this).data("input");

			var str_td = '<tr><td align="center" style="padding:2px;"><button type="button" class="dynamic_del btn btn-danger btn-sm"><i class="glyphicon glyphicon-remove"></i> </button></td>';
			dynamic_input.map(function(input_data){
				if(input_data != ''){
					switch (input_data[0]) {
						case 'text':
							str_td += '<td style="padding:2px;"><input type="text" id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control" value="" '+((input_data[2]!=undefined)?'placeholder='+input_data[2]:'')+'></td>';
						break;
						case 'text-date':
							str_td += '<td style="padding:2px;"><input type="text" id="new_'+input_data[1]+'_'+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control datepicker" value="" '+((input_data[2]!=undefined)?'placeholder='+input_data[2]:'')+'  required readonly></td>';
              //最後才處理datetimepicker，這樣只需要宣告一次
              set_date_id='#new_'+input_data[1]+'_'+dynamic_index;
						break;
						case 'textarea':
							str_td += '<td style="padding:2px;"><textarea id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control"></textarea></td>';
						break;
						case 'fileupload':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="file" id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control" value="">';
							str_td += '</td>';
						break;
						case 'file':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="text" id="new_ftitle'+dynamic_index+'" name="new_ftitle['+dynamic_index+']" data-target="new_'+input_data[1]+dynamic_index+'" class="form-control" value="" placeholder="請輸入檔名">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="file" id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control" value="">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">&emsp;</td>';
						break;
						case 'file-en':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="text" id="new_ftitle'+dynamic_index+'" name="new_ftitle['+dynamic_index+']" data-target="new_'+input_data[1]+dynamic_index+'" class="form-control" value="" placeholder="請輸入檔名(中文)">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="text" id="new_ftitle_en'+dynamic_index+'" name="new_ftitle_en['+dynamic_index+']" data-target="new_'+input_data[1]+dynamic_index+'" class="form-control" value="" placeholder="請輸入檔名(英文)">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="file" id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" class="form-control" value="">';
							str_td += '</td>';
							str_td += '<td style="padding:2px;">&emsp;</td>';
						break;
						case 'file-odf':
							str_td += '<td style="padding:2px;">';
							str_td += '<input type="text" id="new_ftitle'+dynamic_index+'" name="new_ftitle['+dynamic_index+']" data-target="new_'+input_data[1]+dynamic_index+'" class="form-control" value="" placeholder="請輸入檔名">';
							str_td += '</td>';
							str_td += '<td style="padding:2px; text-align:right;">';
								str_td += '<label>一般檔 <input type="file" id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" value="" style="padding:3px; margin:1px; border:1px solid #ccc;"></lebel>';
								str_td += '<label>odf檔<input type="file" id="new_'+input_data[1]+'_odf'+dynamic_index+'" name="new_'+input_data[1]+'_odf['+dynamic_index+']" value="" style="padding:3px; margin:1px; border:1px solid #ccc;"></label>';
							str_td += '</td>';
						break;
						case 'radio':
							var option_index = 1;
							str_td += '<td class="text-center" style="padding:2px;">';
							input_data[2].map(function(input_option){
								var ary_option = input_option.split(",");
								str_td += '<label class="radio-inline" for="new_'+input_data[1]+dynamic_index+'_'+option_index+'">';
								str_td += '<input type="radio" id="new_'+input_data[1]+dynamic_index+'_'+option_index+'" name="new_'+input_data[1]+'['+dynamic_index+']" value="'+ary_option[0]+'" '+((input_data[3] != '' && input_data[3] == ary_option[0])?'checked':'')+'>'+ary_option[1];
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
							str_td += '<label class="checkbox-inline" for="new_'+input_data[1]+dynamic_index+'_'+option_index+'">';
							str_td += '<input type="checkbox" id="new_'+input_data[1]+dynamic_index+'_'+option_index+'" name="new_'+input_data[1]+'['+dynamic_index+']['+option_index+']" value="'+ary_option[0]+'" '+((input_data[3] != '' && input_data[3] == ary_option[0])?'checked':'')+'>'+ary_option[1];
							str_td += '</label>';
							option_index++;
						});
						str_td += '</td>';
						break;
						case 'select':
						  str_td += '<td class="text-center" style="padding:2px;">';
						  str_td += '<select class="form-select" id="new_'+input_data[1]+dynamic_index+'" name="new_'+input_data[1]+'['+dynamic_index+']">';
						  input_data[2].map(function(input_option){
  							var ary_option = input_option.split(',');
                str_td += '<option value="'+ary_option[0]+'" '+((input_data[3]!=undefined && input_data[3] == ary_option[0])?'selected':'')+'>'+ary_option[1]+'</value>';
						  });
						  str_td += '</select>';
						  str_td += '</td>';
						break;
					}
				}else{
					str_td += '<td style="padding:2px;"></td>';
				}
			});
			str_td += '</tr>';

			$("#"+tb_id+" tbody").append(str_td);
      if(set_date_id!=""){
        //處理小日曆
        $(set_date_id).datetimepicker({
          language: 'zh-TW', //設定語系
          autoclose: true,  //選取後自動關閉視窗
          format: "yyyy-mm-dd", //日期格式
          startView:'month',
          minView:'month',
          maxView:'year'
        });
      }
			dynamic_index++;
			dynamic_sort(tb_id);
		});

	$("tbody").on("click",".dynamic_del",function(){
		$(this).parent().parent().remove();
		dynamic_sort(tb_id);
	});

	function dynamic_sort(tb_id){
		var sort_num = 1;
		$("#"+tb_id+" input[name*='sort']").each(function(){
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
  // console.log($("form[data-validate],form[id^='form_edit']").length);
    if($("form[data-validate],form[id^='form_edit']").length >0){
      $("form[data-validate],form[id^='form_edit']").each(function(index) {
        $(this).validate({
          //debug: true, //偵錯模式
          errorClass:'invalid',
          errorElement:'span',
          highlight: function(element) {
            $(element).parent().parent().removeClass('state-success').addClass("state-error");
          },
          unhighlight: function(element) {
            $(element).parent().parent().removeClass("state-error").addClass('state-success');
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
              TWIDCheck: true,
              IDCheck: true
            }
          }
        });
      });

      // 台灣身份證字號格式檢查程式
      $.validator.addMethod("TWIDCheck", function(value, element){
        var a = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
        var b = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        var c = new Array(2);
        var d;
        var e;
        var f;
        var g = 0;
        var h = /^[a-z](1|2|8|9)\d{8}$/i;
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

        //if ((g % 10) == f){return true;}
        //if ((10 - (g % 10)) != f){return false;}
        if ((10 - (g % 10))%10 != f){return false;}
        return true;
      }, "請輸入有效的身份證字號!");

      $.validator.addMethod("IDCheck", function(value, element){
        if(value=="")
          return true;
        var a = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
        var b = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        var c = new Array(2);
        var d;
        var e;
        var f;
        var g = 0;
        var h = /^[a-z](1|2|8|9)\d{8}$/i;

        var second_word = value.substr(1,1).toUpperCase();

        if(a.indexOf(second_word) != -1){
          //居留證
          if(value.length == 10){
            return true;
          }else{
            return false;
          }
        }else{
          //身份證
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

          //if ((g % 10) == f){return true;}
          //if ((10 - (g % 10)) != f){return false;}
          if ((10 - (g % 10))%10 != f){return false;}
          return true;
        }
      }, "身分證字號/居留證號碼格式錯誤!");
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
      scrollX: true,
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

	Number.prototype.numberFormat = function(c, d, t){
	var n = this,
			c = isNaN(c = Math.abs(c)) ? 2 : c,
			d = d == undefined ? "." : d,
			t = t == undefined ? "," : t,
			s = n < 0 ? "-" : "",
			i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
			j = (j = i.length) > 3 ? j % 3 : 0;
		 return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	 };


   //== zipcode ==

   if($("input[name*='zipcode']").length>0){
     var zpi_source = (location.href.indexOf('admin') != -1)?'../includes/':'includes/';

     $.ajax({
     cache: 'false',
     contentType:' application/x-www-form-urlencoded; charset=UTF-8',
     url: zpi_source+"160812_add3code.php",
     type: "POST",
     error: function(){alert("load zipcode file error");},
     success: function(res){
       var ary_address = JSON.parse(res);
       var ary_city = new Array();
       var ary_area = new Array();
       var obj_city = new Object();
       var obj_area = new Object();
       var str_city = '<option value="">縣市</option>';

       $.each(ary_address,function(key,value){
         if(!obj_city.hasOwnProperty(value['city'])){
           obj_city[value['city']] = value['city']+((value['city_en'] != '' && value['city_en'] != undefined)?' '+value['city_en']:'');
           obj_area[value['city']] = new Object();
           obj_area[value['city']][value['area']] = new Object();
           obj_area[value['city']][value['area']]['zip'] = value['zip'];
           obj_area[value['city']][value['area']]['title'] = value['area']+((value['area_en'] != '' && value['area_en'] != undefined)?' '+value['area_en']:'');
         }else{
           obj_area[value['city']][value['area']] = new Object();
           obj_area[value['city']][value['area']]['zip'] = value['zip'];
           obj_area[value['city']][value['area']]['title'] = value['area']+((value['area_en'] != '' && value['area_en'] != undefined)?' '+value['area_en']:'');
         }
       });

       $.each(obj_city,function(city_key,city_val){
       str_city += '<option value="'+city_key+'">'+city_val+'</option>';
       });

       $(".dynamic_address select[name$='_city']").each(function(){
         //處理預設縣市
         var field_keyword = $(this).attr('id').split('_').slice(0,-1).join('_');
         var default_city = $(".dynamic_address input[name='"+field_keyword+"_default_city']").val();
         $(this).empty().append(str_city);
         if(default_city != '' && default_city != '0' &&  default_city != undefined){
          $(this).find("option[value='"+default_city+"']").prop("selected",true);
         }

         //處理預設區域
         if($(".dynamic_address select[name='"+field_keyword+"_area']").length>0){
           var default_area = $(".dynamic_address input[name='"+field_keyword+"_default_area']").val();
           if(default_area != '' && default_area != '0' && default_area != undefined){
             var str_area = '<option value="">鄉鎮區</option>';
             $.each(obj_area[default_city],function(area_key,area_val){
               str_area += '<option value="'+area_key+'" data-zip="'+area_val['zip']+'">'+area_val['title']+'</option>';
             });

             $(".dynamic_address select[name='"+field_keyword+"_area']").empty().append(str_area);
             $(".dynamic_address select[name='"+field_keyword+"_area']").find("option[value='"+default_area+"']").prop("selected",true);
           }
         }
       });

       //變更縣市
       $(".dynamic_address select[name$='_city']").change(function(){
         var field_keyword = $(this).attr('id').split('_').slice(0,-1).join('_');
         var this_city = $(this).val();
         var str_area = '<option value="">鄉鎮區</option>';
         $.each(obj_area[this_city],function(area_key,area_val){
           str_area += '<option value="'+area_key+'" data-zip="'+area_val['zip']+'">'+area_val['title']+'</option>';
         });
         if($(".dynamic_address select[name='"+field_keyword+"_area']").length>0){
           $(".dynamic_address select[name='"+field_keyword+"_area']").empty().append(str_area);
           $(".dynamic_address input[name='"+field_keyword+"_zipcode']").val('');
         }
       });

       //變更鄉鎮區
       $(".dynamic_address select[name$='_area']").change(function(){
         var field_keyword = $(this).attr('id').split('_').slice(0,-1).join('_');
         var this_zip = $(this).find('option:selected').data('zip');
         $(".dynamic_address input[name='"+field_keyword+"_zipcode']").val(this_zip);
       });
     }
     });
   }
   //== /zipcode ==
});
