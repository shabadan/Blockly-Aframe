"use strict";


var HtmlGenerator = new Blockly.Generator('HTML');

HtmlGenerator.ORDER_ATOMIC = 0;
HtmlGenerator.ORDER_NONE = 0;

HtmlGenerator.init = function(workspace) {};
HtmlGenerator.finish = function(code) {return code;};

HtmlGenerator.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};


function removeIndentAndTrailingNewline() {
   
}


HtmlGenerator['baseframe'] = function(block) {
  var statements_head = HtmlGenerator.statementToCode(block, 'head');
  var statements_body = HtmlGenerator.statementToCode(block, 'body');

  var code = '<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n'
    + statements_head
    + "</head>\n\n<body>\n"
    + statements_body
    + "</body>\n</html>\n";

  return code;
};

HtmlGenerator['html'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<!DOCTYPE HTML>\n<html>\n' + statements_content + '</html>\n';
  return code;
};

HtmlGenerator['body'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<body>\n' + statements_content + '</body>\n';
  return code;
};

HtmlGenerator['head'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
  return code;
};

HtmlGenerator['title'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');

  if (statements_content != "")
    document.getElementById('title').innerText = statements_content;
  else
    document.getElementById('title').innerText = "untitled web page";

  var code = '<title>' + statements_content.trim() + '</title>\n';
  return code;
};

HtmlGenerator['paragraph'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<p>\n' + statements_content + '</p>\n';
  return code;
};

HtmlGenerator['plaintext'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = text_content + '\n';
  return code;
};

HtmlGenerator['division'] = function(block) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<div' + value_name + '>\n' + statements_content + '</div>\n';
  return code;
};

HtmlGenerator['style'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = ' style="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'color: ' + colour_name + ';';
  return code;
};

HtmlGenerator['bgcolour'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'background-color: ' + colour_name + ';';
  return code;
};

HtmlGenerator['genericstyle'] = function(block) {
  var text_property = block.getFieldValue('property');
  var text_value = block.getFieldValue('value');
  var code = text_property + ': ' + text_value + ';';
  return code;
};

HtmlGenerator['generictag'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<' + text_name + value_name + '>\n' + statements_content + '</' + text_name + '>\n';
  return code;
};

HtmlGenerator['more_attributes'] = function(block) {
  var value_name1 = HtmlGenerator.valueToCode(block, 'NAME1', HtmlGenerator.ORDER_ATOMIC);
  var value_name2 = HtmlGenerator.valueToCode(block, 'NAME2', HtmlGenerator.ORDER_ATOMIC);
  var value_name3 = HtmlGenerator.valueToCode(block, 'NAME3', HtmlGenerator.ORDER_ATOMIC);
  var code = value_name1 + value_name2 + value_name3;
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['genericattribute'] = function(block) {
  var text_attribute = block.getFieldValue('attribute');
  var text_value = block.getFieldValue('value');
  var code = ' ' + text_attribute + '="' + text_value + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['link'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<a href="' + text_name + '">' + statements_content.trim() + '</a>\n';
  return code;
};

HtmlGenerator['span'] = function(block) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<span' + value_name + '>' + statements_content.trim() + '</span>\n';
  return code;
};

HtmlGenerator['image'] = function(block) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
  return code;
};

HtmlGenerator['emphasise'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<em>' + statements_content.trim() + '</em>\n';
  return code;
};

HtmlGenerator['strong'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<strong>' + statements_content.trim() + '</strong>\n';
  return code;
};

HtmlGenerator['headline'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<' + dropdown_name + '>' + statements_content.trim() + '</' +  dropdown_name + '>\n';
  return code;
};


HtmlGenerator['linebreak'] = function(block) {
  var code = '<br>\n';
  return code;
};

HtmlGenerator['horizontalbreak'] = function(block) {
  var code = '<hr>\n';
  return code;
};

HtmlGenerator['unorderedlist'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<ul>\n' + statements_name + '</ul>\n';
  return code;
};

HtmlGenerator['orderedlist'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<ol>\n' + statements_name + '</ol>\n';
  return code;
};

HtmlGenerator['listelement'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<li>' + statements_content + '</li>\n';
  return code;
};

HtmlGenerator['inserted'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<ins>' + statements_content.trim() + '</ins>\n';
  return code;
};

HtmlGenerator['deleted'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<del>' + statements_content.trim() + '</del>\n';
  return code;
};

HtmlGenerator['super'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<sup>' + statements_content.trim() + '</sup>\n';
  return code;
};

HtmlGenerator['sub'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<sub>' + statements_content.trim() + '</sub>\n';
  return code;
};

HtmlGenerator['code'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<code>\n' + statements_content + '</code>\n';
  return code;
};

HtmlGenerator['quote'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<q>' + statements_content.trim() + '</q>\n';
  return code;
};

HtmlGenerator['blockquote'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<blockquote>\n' + statements_content + '</blockquote>\n';
  return code;
};

HtmlGenerator['sample'] = function(block) {
var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<samp>\n' + statements_content + '</samp>\n';
  return code;
};

HtmlGenerator['keyboard'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<kbd>\n' + statements_content + '</kbd>\n';
  return code;
};

HtmlGenerator['variable'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<var>' + statements_content.trim() + '</var>\n';
  return code;
};

HtmlGenerator['form'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<form>\n' + statements_content + '</form>\n';
  return code;
};

HtmlGenerator['table'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<table>\n' + statements_content + '</table>\n';
  return code;
};

HtmlGenerator['tablerow'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<tr>\n' + statements_content + '</tr>\n';
  return code;
};

HtmlGenerator['tablecell'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<td>' + statements_content.trim() + '</td>\n';
  return code;
};

HtmlGenerator['input_text'] = function(block) {
  var text_default = block.getFieldValue('default');
  var code = '<input value="' + text_default + '">\n';
  return code;
};

HtmlGenerator['button'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<button>' + statements_name.trim() + '</button>\n';
  return code;
};

HtmlGenerator['input'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_value = block.getFieldValue('value');
  var value_text = HtmlGenerator.valueToCode(block, 'text', HtmlGenerator.ORDER_ATOMIC);
  var code = '<input type="' + dropdown_type + '" value="' + text_value + '"' + value_text + ' />\n';
  return code;
};

HtmlGenerator['script'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<script>\n' + statements_content + '</script>\n';
  return code;
};

HtmlGenerator['onclick'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['body_attributes'] = function(block) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<body' + value_name + '>\n' + statements_content + '</body>\n';
  return code;
};

HtmlGenerator['import_script'] = function(block) {
  var dropdown_import = block.getFieldValue('IMPORT');
  // TODO: Assemble JavaScript into code variable.
  var code = '<script src="'+dropdown_import+'"></script>\n';
  return code;
};


HtmlGenerator['import_aframe'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<script src="'+text_name+'"></script>\n';
  return code;
};

HtmlGenerator['import_inspector'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<script src="'+text_name+'"></script>\n';
  return code;
};

HtmlGenerator['import_event'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<script src="'+text_name+'"></script>\n';
  return code;
};

HtmlGenerator['import_extra'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<script src="'+text_name+'"></script>\n';
  return code;
};

HtmlGenerator['scene_create'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-scene>\n'+ statements_content +   '</a-scene>\n';
  return code;
};


HtmlGenerator['scene_create_color'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var colour_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-scene background = color:'+colour_name+'>\n'+ statements_content +   '</a-scene>\n';
  return code;
};


HtmlGenerator['camera_3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'CAMERA3D');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-camera'+ statements_content +   '></a-camera>\n';
  return code;
};

HtmlGenerator['light_3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'LIGHT3D');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-light'+ statements_content +   '></a-light>\n';
  return code;
};

HtmlGenerator['light3d_type'] = function(block) {
  var dropdown_type_light = block.getFieldValue('TYPE_LIGHT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'type= "'+ dropdown_type_light +'"\n';
  return code;
};

HtmlGenerator['light3d_intenity']  = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_light_intensity = block.getFieldValue('LIGHT3DINTESITY');
  // TODO: Assemble JavaScript into code variable.

    var code = 'intensity = "'+ text_light_intensity +'"\n';
    
  return code;
};

HtmlGenerator['camera_3d_child'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_name = block.getFieldValue('DROPDOWN');
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var statements_child = HtmlGenerator.statementToCode(block, 'CHILD');
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-'+ dropdown_name +' '+statements_content+'>'+statements_child+'</a-'+ dropdown_name + '>\n'; 
    
  return code;
};

HtmlGenerator['cursor3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var colour_color3d = block.getFieldValue('CURSOR3D');
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-cursor color="'+ colour_color3d +'"></a-cursor>';
    
  return code;
};

HtmlGenerator['cursor3dHEX'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_width = block.getFieldValue('CURSOR3DHEX');
  // TODO: Assemble JavaScript into code variable.

    var code = '<a-cursor color= "#'+ text_width +'"></a-cursor>';
    
  return code;
};

HtmlGenerator['camera_cursor'] = function(block) {
  var checkbox_cursorevisibile = block.getFieldValue('CURSOREVISIBILE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursor-visible="'+ checkbox_cursorevisibile +'"\n';
    
  return code;
};

HtmlGenerator['camera_cursor_color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursor-color="'+ colour_name +'"\n';
    
  return code;
};

HtmlGenerator['camera_cursor_scale'] = function(block) {
  var text_scale = block.getFieldValue('SCALE');
  // TODO: Assemble JavaScript into code variable.
 var code = 'cursor-scale="'+ text_scale +'"\n';
    
  return code;
};


HtmlGenerator['camera_cursor_opacity'] = function(block) {
  var text_opacity = block.getFieldValue('OPACITY');
  // TODO: Assemble JavaScript into code variable.
 var code = 'cursor-opacity="'+ text_opacity +'"\n';
    
  return code;
};

    
HtmlGenerator['wasd_fps'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_wasd = block.getFieldValue('WASD');
  // TODO: Assemble JavaScript into code variable.
    var code = ' wasd-controls-enabled="'+ dropdown_wasd +'"'; //depth="4" height="4" width="4"
    
  return code;
};


HtmlGenerator['assets_list'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'assetslist');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-assets>\n\t'+ statements_content +'\n</a-assets>\n';
  return code;
};

HtmlGenerator['asset_item'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var text_url = block.getFieldValue('URL');
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
  text_url = FileDB.getData(text_url);}
  var code = '<a-asset-item id="'+text_idname+'" src="'+text_url+'"></a-asset-item>\n';
  return code;
};

HtmlGenerator['asset_img'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var text_url = block.getFieldValue('URL');
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
  text_url = FileDB.getData(text_url);}
  var code = '<img id="'+text_idname+'" src="'+text_url+'">\n';
  return code;
};


HtmlGenerator['asset_audio'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var text_url = block.getFieldValue('URL');
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
  text_url = FileDB.getData(text_url);}
  var code = '<audio id="'+text_idname+'" src="'+text_url+'"></audio>\n';
  return code;
};

HtmlGenerator['asset_video'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var text_url = block.getFieldValue('URL');
  var checkbox_loop = block.getFieldValue('Loop') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
  text_url = FileDB.getData(text_url);}
  var code = '<video id="'+text_idname+'" src="'+text_url+'" autoplay loop="'+checkbox_loop+'">\n';
  return code;
};

HtmlGenerator['gltf_entity'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'CONTENT');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-entity gltf-model="#'+text_idname+'" '+statements_content+'></a-entity>\n';
  return code;
};



HtmlGenerator['obj_entity'] = function(block) {
  var dropdown_objdrop = block.getFieldValue('OBJDROP');
  var text_objlink = block.getFieldValue('OBJLINK');
  var statements_objname = HtmlGenerator.statementToCode(block, 'OBJNAME');
  var dropdown_mtldrop = block.getFieldValue('MTLDROP');
  var text_mtllink = block.getFieldValue('MTLLINK');
  // TODO: Assemble JavaScript into code variable.
  var code ='<a-obj-model src="'+dropdown_objdrop+text_objlink+'" mtl="'+dropdown_mtldrop+text_mtllink+'"></a-obj-model>\n';
  return code;
};

HtmlGenerator['extra_entity'] = function(block) {
  var dropdown_typedrop = block.getFieldValue('TYPEDROP');
  var dropdown_srcdrop = block.getFieldValue('SRCDROP');
  var text_srclink = block.getFieldValue('SRCLINK');
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch(dropdown_typedrop) {
  case "dae":
    code = '<a-entity collada-model-legacy="'+dropdown_srcdrop+text_srclink+'" '+statements_name+'></a-entity>\n';
    break;
  case "fbx":
    code = '<a-entity fbx-model="'+dropdown_srcdrop+text_srclink+'" '+statements_name+'></a-entity>\n';
    break;
  default:
    code = 'error!';
}
  return code;
};

HtmlGenerator['a-entity'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'CONTENT');
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-entity id="'+text_idname+'" '+statements_content+'>'+statements_name+'</a-entity>\n';
  return code;
};

HtmlGenerator['entity_text'] = function(block) {
  var statements_text = HtmlGenerator.statementToCode(block, 'TEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = '\ntext = "'+statements_text+'"\n';
  return code;
};


HtmlGenerator['entity_text_value'] = function(block) {
  var text_value= block.getFieldValue('VALUE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'value:'+text_value+';\n';
  return code;
};

HtmlGenerator['entity_dimension'] = function(block) {
  var dropdown_dim = block.getFieldValue('DIM');
  var number_dimvalue = block.getFieldValue('DIMVALUE');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+dropdown_dim+':'+number_dimvalue+';\n';
  return code;
};

HtmlGenerator['entity_text_font'] = function(block) {
  var dropdown_dim = block.getFieldValue('DIM');
  // TODO: Assemble JavaScript into code variable.
  var code = 'font:'+dropdown_dim+';\n';
  return code;
};

HtmlGenerator['entity_shader'] = function(block) {
  var dropdown_dim = block.getFieldValue('DIM');
  // TODO: Assemble JavaScript into code variable.
  var code = 'shader:'+dropdown_dim+';\n';
  return code;
};


HtmlGenerator['entity_color'] = function(block) {
  var text_color = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'color:'+text_color+';\n';
  return code;
};

HtmlGenerator['entity_color_HEX'] = function(block) {
  var text_color = block.getFieldValue('COLOR');
  // TODO: Assemble JavaScript into code variable.
  var code = 'color:'+text_color+';\n';
  return code;
};

HtmlGenerator['entity_align'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'align:'+dropdown_name+';\n';
  return code;
};

HtmlGenerator['entity_wrapcount'] = function(block) {
  var number_wrapcount = block.getFieldValue('WRAPCOUNT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'wrapCount:'+number_wrapcount+';\n';
  return code;
};

HtmlGenerator['entity_geometry'] = function(block) {
  var statements_text = HtmlGenerator.statementToCode(block, 'GEOMETRY');
  // TODO: Assemble JavaScript into code variable.
  var code = '\ngeometry = "'+statements_text+'"\n';
  return code;
};

HtmlGenerator['entity_geometry_primitive'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'primitive: '+dropdown_name+';\n';
  return code;
};

HtmlGenerator['entity_geometry_dimension'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var text_value = block.getFieldValue('VALUE');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+dropdown_name+' : '+text_value+';\n';
  return code;
};

HtmlGenerator['entity_material'] = function(block) {
  var statements_text = HtmlGenerator.statementToCode(block, 'MATERIAL');
  // TODO: Assemble JavaScript into code variable.
  var code = '\nmaterial = "'+statements_text+'"\n';
  return code;
};

HtmlGenerator['entity_material_color'] = function(block) {
  var colour_color = block.getFieldValue('COLOR');
  // TODO: Assemble JavaScript into code variable.
  var code = 'color: '+colour_color+';\n';
  return code;
};

HtmlGenerator['entity_material_color_hex'] = function(block) {
  var text_color = block.getFieldValue('COLOR');
  // TODO: Assemble JavaScript into code variable.
  var code = 'color: '+text_color+';\n';
  return code;
};

HtmlGenerator['entity_material_visible'] = function(block) {
  var checkbox_visible = block.getFieldValue('VISIBLE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'visible: '+checkbox_visible+';\n';
  return code;
};

HtmlGenerator['animation'] = function(block) {
  var dropdown_animation = block.getFieldValue('ANIMATION');
  var text_value = block.getFieldValue('VALUE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'animation.'+dropdown_animation+' : '+text_value+';\n';
  return code;
};


HtmlGenerator['import_model_gltf'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-assets>\n<a-asset-item id="tree" src="'+text_name+'"></a-asset-item>\n </a-assets>\n  <a-entity gltf-model="#tree"></a-entity>\n'
  return code;
};

HtmlGenerator['import_model_obj'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-assets>\n<a-asset-item id="tree" src="'+text_name+'"></a-asset-item>\n </a-assets>\n  <a-obj-model src="#tree" mtl=""></a-obj-model>\n'
  return code;
};

HtmlGenerator['primitive'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_name = block.getFieldValue('DROPDOWN');
  var text_idname = block.getFieldValue('IDNAME')
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var checkbox_visible = block.getFieldValue('VISIBLE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-'+ dropdown_name +' id="'+text_idname+'" visible="'+checkbox_visible+'" '+statements_content+'></a-'+ dropdown_name + '>\n'; 
  return code;
};

HtmlGenerator['primitive_child'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_name = block.getFieldValue('DROPDOWN');
  var text_idname = block.getFieldValue('IDNAME')
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var statements_child = HtmlGenerator.statementToCode(block, 'CHILD');
  var checkbox_visible = block.getFieldValue('VISIBLE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-'+ dropdown_name +' id="'+text_idname+'" visible="'+checkbox_visible+'" '+statements_content+'>'+statements_child+'</a-'+ dropdown_name + '>\n'; 
    
  return code;
};





HtmlGenerator['color3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var colour_color3d = block.getFieldValue('COLOR3D');
  // TODO: Assemble JavaScript into code variable.
    var code = ' color="'+ colour_color3d +'"';
    
  return code;
};

HtmlGenerator['color3dHEX'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_width = block.getFieldValue('COLOR3DHEX');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' color= "#'+ text_width +'"'; //position="0 1 -1"
    
  return code;
};





HtmlGenerator['posrotscale_3d_OLD'] = function(block) {
  var dropdown_posrotscale = block.getFieldValue('POSROTSCALE');
  var text_posrotscale_x =  block.getFieldValue('POSROTSCALE_X'); 
  var text_posrotscale_y = block.getFieldValue('POSROTSCALE_Y');
  var text_posrotscale_z = block.getFieldValue('POSROTSCALE_Z');
    // TODO: Assemble JavaScript into code variable.
    var code =''+dropdown_posrotscale+'= "'+ text_posrotscale_x +' '+ text_posrotscale_y+' '+text_posrotscale_z+'" '; 
    
  return code;
};

HtmlGenerator['dimension_3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_dimension = block.getFieldValue('DIMENSION');
  var text_dimension_value = block.getFieldValue('DIMENSION_VALUE');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code =' '+dropdown_dimension+'= "'+ text_dimension_value +'"'; 
    
  return code;
};

HtmlGenerator['side3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_side = block.getFieldValue('SIDE');
  // TODO: Assemble JavaScript into code variable.
    var code = ' side="'+ dropdown_side +'"'; //depth="4" height="4" width="4"
    
  return code;
};



HtmlGenerator['videosphere360'] = function(block) {
  var text_360_src = block.getFieldValue('360_SRC');
  var statements_360_option = HtmlGenerator.statementToCode(block, '360_Option');
  // TODO: Assemble JavaScript into code variable.
  var code =  '<a-videosphere src="#'+text_360_src+'"'+statements_360_option+'></a-videosphere>\n';
  return code;
};

HtmlGenerator['video_src'] = function(block) {
  var text_360_src = block.getFieldValue('360_SRC');
  var statements_360_option = HtmlGenerator.statementToCode(block, '360_Option');
  // TODO: Assemble JavaScript into code variable.
  var code =  'src="#'+text_360_src+'"'+statements_360_option+'\n';
  return code;
};

HtmlGenerator['video_child'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_idname = block.getFieldValue('IDNAME')
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var statements_child = HtmlGenerator.statementToCode(block, 'CHILD');
  var checkbox_visible = block.getFieldValue('VISIBLE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-video id="'+text_idname+'" visible="'+checkbox_visible+'" '+statements_content+'>'+statements_child+'</a-video>\n'; 
    
  return code;
};



HtmlGenerator['animation_options'] = function(block) {
  var statements_animation = HtmlGenerator.statementToCode(block, 'ANIMATION_OPTION');
  // TODO: Assemble JavaScript into code variable. 
  var code = ' animation = "'+statements_animation+'"';
  return code;
};

HtmlGenerator['video_controller'] = function(block) {
  var text_src = block.getFieldValue('SRC');
  var number_posx = block.getFieldValue('POSX');
  var number_posy = block.getFieldValue('POSY');
  var number_posz = block.getFieldValue('POSZ');
  var number_scalex = block.getFieldValue('SCALEX');
  var number_scaley = block.getFieldValue('SCALEY');
  var number_scalez = block.getFieldValue('SCALEZ');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-image \nid="videoControls" \nsrc="#'+text_src+'" \nposition="'+number_posx+' '+number_posy+' '+number_posz+'" \nscale="'+number_scalex+' '+number_scaley+' '+number_scalez+'" play-pause>\n</a-image>\n';
  return code;
};


HtmlGenerator['animation_propety'] = function(block) {
  var dropdown_option = block.getFieldValue('Option');
  var text_from_x = block.getFieldValue('FROM_X');
  var text_from_y = block.getFieldValue('FROM_Y');
  var text_from_z = block.getFieldValue('FROM_Z');
  var text_to_x = block.getFieldValue('TO_X');
  var text_to_y = block.getFieldValue('TO_Y');
  var text_to_z = block.getFieldValue('TO_Z');
  var dropdown_loop = block.getFieldValue('LOOP');
  var dropdown_dir = block.getFieldValue('DIR');
  var text_dur = block.getFieldValue('DUR');
  var dropdown_easing = block.getFieldValue('EASING');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n property:'+dropdown_option+'; \n from:' +text_from_x+' '+text_from_y+' '+text_from_z+';\n to:' +text_to_x+' '+text_to_y+' '+text_to_z+';\n loop:' +dropdown_loop+';\n dir:'+dropdown_dir+';\n dur:' +text_dur+ ';\n easing: '+dropdown_easing+';';
  return code;
};


HtmlGenerator['animation_property'] = function(block) {
  var dropdown_option = block.getFieldValue('Option');
  var text_from_x = block.getFieldValue('FROM_X');
  var text_from_y = block.getFieldValue('FROM_Y');
  var text_from_z = block.getFieldValue('FROM_Z');
  var text_to_x = block.getFieldValue('TO_X');
  var text_to_y = block.getFieldValue('TO_Y');
  var text_to_z = block.getFieldValue('TO_Z');
  var dropdown_loop = block.getFieldValue('LOOP');
  var dropdown_dir = block.getFieldValue('DIR');
  var text_dur = block.getFieldValue('DUR');
  var dropdown_easing = block.getFieldValue('EASING');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n property:'+dropdown_option+'; \n from:' +text_from_x+' '+text_from_y+' '+text_from_z+';\n to:' +text_to_x+' '+text_to_y+' '+text_to_z+';\n loop:' +dropdown_loop+';\n dir:'+dropdown_dir+';\n dur:' +text_dur+ ';\n easing: '+dropdown_easing+';';
  return code;
};

HtmlGenerator['animation_property_property'] = function(block) {
  var dropdown_property = block.getFieldValue('property');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n property:'+dropdown_property+';\n';
  return code;
};

HtmlGenerator['animation_opacity'] = function(block) {
  var text_from = block.getFieldValue('FROM');
  var text_to = block.getFieldValue('TO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'from: '+text_from+';\nto: '+text_to+';\n';
  return code;
};

HtmlGenerator['animation_color'] = function(block) {
  var colour_from = block.getFieldValue('FROM');
  var colour_to = block.getFieldValue('TO');
  // TODO: Assemble JavaScript into code variable.
   var code = 'from: '+colour_from+';\nto: '+colour_to+';\n';
  return code;
};

HtmlGenerator['animation_property_from'] = function(block) { 
  var text_from_x = block.getFieldValue('FROM_X');
  var text_from_y = block.getFieldValue('FROM_Y');
  var text_from_z = block.getFieldValue('FROM_Z');
  // TODO: Assemble JavaScript into code variable.
 var code = ' from:'+ text_from_x +' '+text_from_y+' '+text_from_z+';\n'; 
    
  return code;
};

HtmlGenerator['animation_property_to'] = function(block) {

  var text_to_x = block.getFieldValue('TO_X');
  var text_to_y = block.getFieldValue('TO_Y');
  var text_to_z = block.getFieldValue('TO_Z');
  // TODO: Assemble JavaScript into code variable.
  var code = ' to:'+ text_to_x +' '+text_to_y+' '+text_to_z+';\n'; 
    
  return code;
};

HtmlGenerator['animation_property_loop'] = function(block) {
    var dropdown_loop = block.getFieldValue('LOOP');
  // TODO: Assemble JavaScript into code variable.
    var code = ' loop: '+ dropdown_loop +';\n'; 
    
  return code;
};

HtmlGenerator['animation_property_dir'] = function(block) {
  var dropdown_dir = block.getFieldValue('DIR');
  // TODO: Assemble JavaScript into code variable.
  var code = ' dir: '+ dropdown_dir +';\n';
  return code;
};

HtmlGenerator['animation_property_dur'] = function(block) {
  var text_dur = block.getFieldValue('DUR');
  // TODO: Assemble JavaScript into code variable.
  var code = ' dur: '+ text_dur +';\n';
  return code;
};

HtmlGenerator['animation_property_liner'] = function(block) {
  var dropdown_eas = block.getFieldValue('EAS');
     // TODO: Assemble JavaScript into code variable.
    var code = ' easing:'+ dropdown_eas +';'; return code;
};

HtmlGenerator['animation_property_easeIn'] = function(block) {
  var dropdown_eas = block.getFieldValue('EAS');
     // TODO: Assemble JavaScript into code variable.
    var code = ' easing:'+ dropdown_eas +';'; return code;
};

HtmlGenerator['animation_property_easeOut'] = function(block) {
  var dropdown_eas = block.getFieldValue('EAS');
     // TODO: Assemble JavaScript into code variable.
    var code = ' easing:'+ dropdown_eas +';'; return code;
};

HtmlGenerator['animation_property_easeInOut'] = function(block) {
  var dropdown_eas = block.getFieldValue('EAS');
     // TODO: Assemble JavaScript into code variable.
    var code = ' easing:'+ dropdown_eas +';'; return code;
};

HtmlGenerator['Texture3D'] = function(block) {
  var text_texture_src = block.getFieldValue('TEXTURE_SRC')
  // TODO: Assemble JavaScript into code variable.
  var code =  '\nsrc="#'+text_texture_src+'"\n';
  return code;
};

HtmlGenerator['Texture3d_link'] = function(block) {
  var dropdown_link = block.getFieldValue('LINK');
  var text_texture_src = block.getFieldValue('SRC_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code =  '\nsrc="'+dropdown_link+''+text_texture_src+'"\n';
  return code;
};

HtmlGenerator['Texture3D_repeat'] = function(block) {
  var text_texture_r1 = block.getFieldValue('TEXTURE_R1');
  var text_texture_r2 = block.getFieldValue('TEXTURE_R2');
      var code =  'repeat ="'+text_texture_r1+' '+text_texture_r2+'"\n';
  return code;
};

HtmlGenerator['Texture_NormalMap3D'] = function(block) {
  var text_texture_src = block.getFieldValue('NORMALMAP_SRC')
  // TODO: Assemble JavaScript into code variable.
  var code =  'normal-map ="#'+text_texture_src+'"\n';
  return code;
};

HtmlGenerator['Texture3D_NormalMap_repeat'] = function(block) {
  var text_texture_r1 = block.getFieldValue('TEXTURE_R1');
  var text_texture_r2 = block.getFieldValue('TEXTURE_R2');
      var code =  'normal-map-repeat ="'+text_texture_r1+' '+text_texture_r2+'"\n';
  return code;
};

HtmlGenerator['Texture3D_normal_scale'] = function(block) {
  var text_texture_r1 = block.getFieldValue('TEXTURE_R1');
  var text_texture_r2 = block.getFieldValue('TEXTURE_R2');
      var code =  'normal-scale = "'+text_texture_r1+' '+text_texture_r2+'"\n';
  return code;
};

HtmlGenerator['texture3d_roughness'] = function(block) {
  var text_texture_r1 = block.getFieldValue('TEXTURE_R1');
  var code =  'roughness  = "'+text_texture_r1+'"\n';
  return code;
};

HtmlGenerator['texture3d_opacity'] = function(block) {
  var text_texture_r1 = block.getFieldValue('TEXTURE_R1');
  var code =  'opacity  = "'+text_texture_r1+'"\n';
  return code;
};

HtmlGenerator['a-sky'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code =  '<a-sky '+statements_name+'></a-sky>\n';
  return code;
};

HtmlGenerator['a_sky_explor'] = function(block) {
  var dropdown_explo = block.getFieldValue('EXPLO');
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-sky '+statements_name+' '+dropdown_explo+'></a-sky>\n';
  return code;
};


HtmlGenerator['imgsrc'] = function(block) {
  var text_texture_src = block.getFieldValue('SRC')
  // TODO: Assemble JavaScript into code variable.
  var code = '\nsrc="#'+text_texture_src+'"\n';
  return code;
};

HtmlGenerator['inspector_code_load'] = function(block) {
  var text_inspector_copy = block.getFieldValue('INSPECTOR_COPY');
  // TODO: Assemble JavaScript into code variable.
   var code = '\n<!----Inspector code load------>\n'+text_inspector_copy+'\n<!---------->\n';
  return code;
};


HtmlGenerator['event_set_name'] = function(block) {
  var text_eventname = block.getFieldValue('EVENTNAME');
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
   var code = '\nevent-set__'+text_eventname+'="'+statements_name+'"\n';
  return code;
};

HtmlGenerator['event_type'] = function(block) {
  var dropdown_event_type = block.getFieldValue('EVENT_TYPE');
   var code = '\n_event : '+dropdown_event_type+';\n';
  return code;
};

HtmlGenerator['event_target'] = function(block) {
  var text_name_target = block.getFieldValue('NAME_TARGET');
  // TODO: Assemble JavaScript into code variable.
  var code = '_target : #'+text_name_target+';\n';
  return code;
};

HtmlGenerator['event_material'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_material_input = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'material.'+dropdown_option+' : '+value_material_input+';\n';
  return code;
};

HtmlGenerator['event_visible'] = function(block) {
  var dropdown_visible = block.getFieldValue('Visible');
  // TODO: Assemble JavaScript into code variable.
  var code = 'visible: '+dropdown_visible+';\n';
  return code;
};


HtmlGenerator['event_position'] = function(block) {
  var dropdown_posrotscale = block.getFieldValue('POSROTSCALE');
  var text_posrotscale_x =  block.getFieldValue('POSROTSCALE_X'); 
  var text_posrotscale_y = block.getFieldValue('POSROTSCALE_Y');
  var text_posrotscale_z = block.getFieldValue('POSROTSCALE_Z');
    // TODO: Assemble JavaScript into code variable.
    var code =''+dropdown_posrotscale+': "'+ text_posrotscale_x +' '+ text_posrotscale_y+' '+text_posrotscale_z+'" '; 
    
  return code;
};

HtmlGenerator['entity_cursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-entity cursor position="0 0 -1"\ngeometry="primitive: sphere; radius: 0.005"\nmaterial="color: #000000; shader: flat;\nopacity: 0.5">\n</a-entity>\n';
  return code;
};


HtmlGenerator['entity_cursor_vr'] = function(block) {
  var checkbox_vr_mode = block.getFieldValue('VR_MODE') == 'TRUE';
  var colour_name = block.getFieldValue('NAME');
  var value_radius_value = block.getFieldValue('RADIUS_VALUE');
  var statements_animation = HtmlGenerator.statementToCode(block, 'ANIMATION');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-entity cursor = "fuse : '+checkbox_vr_mode+' fuseTimeout: 1500" position="0 0 -1" \n geometry="primitive: sphere; radius: '+value_radius_value+'" material="color: '+colour_name+';\n shader: flat; opacity: 0.5" \n'+statements_animation+' >\n</a-entity>\n';
  return code;
};

HtmlGenerator['img_child'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_idname = block.getFieldValue('IDNAME')
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var statements_child = HtmlGenerator.statementToCode(block, 'CHILD');
  var checkbox_visible = block.getFieldValue('VISIBLE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-image id="'+text_idname+'" visible="'+checkbox_visible+'" '+statements_content+'>'+statements_child+'</a-image>\n'; 
    
  return code;
};

HtmlGenerator['audiosrc'] = function(block) {
  var text_src = block.getFieldValue('SRC');
  var checkbox_autoplay = block.getFieldValue('AUTOPLAY') == 'TRUE';
  var checkbox_loop = block.getFieldValue('LOOP') == 'TRUE';
  var checkbox_positional = block.getFieldValue('POSITIONAL') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'sound="src:#'+text_src+'; autoplay: '+checkbox_autoplay+'; loop: '+checkbox_loop+'; positional: '+checkbox_positional+'";\n';
  return code;
};

HtmlGenerator['entity_text_geometry'] = function(block) {
  var statements_text = HtmlGenerator.statementToCode(block, 'TEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = '\ntext = "'+statements_text+'"\n';
  return code;
};
