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

HtmlGenerator['camera_3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'CAMERA3D');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-camera'+ statements_content +   '></a-camera>\n';
  return code;
};

HtmlGenerator['wasd_fps'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_wasd = block.getFieldValue('WASD');
  // TODO: Assemble JavaScript into code variable.
    var code = 'wasd-controls="'+ dropdown_wasd +'"'; //depth="4" height="4" width="4"
    
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
  text_url = FileDB.getData(text_url);
  var code = '<a-asset-item id="'+text_idname+'" src="'+text_url+'"></a-asset-item>\n';
  return code;
};

HtmlGenerator['gltf_entity'] = function(block) {
  var text_idname = block.getFieldValue('IDNAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'CONTENT');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-entity gltf-model="#'+text_idname+'" '+statements_content+'></a-entity>\n';
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
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');    
  // TODO: Assemble JavaScript into code variable.
    //var code = '<a-'+ dropdown_name +' '+statements_content.trim()+'></a-'+ dropdown_name + '>\n'; //depth="4" height="4" width="4"
    var code = '<a-'+ dropdown_name +' '+statements_content+'></a-'+ dropdown_name + '>\n'; //depth="4" height="4" width="4"
  return code;
};

HtmlGenerator['primitive_child'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_name = block.getFieldValue('DROPDOWN');
  var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var statements_child = HtmlGenerator.statementToCode(block, 'CHILD');
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-'+ dropdown_name +' '+statements_content+'>'+statements_child+'</a-'+ dropdown_name + '>\n'; 
    
  return code;
};

HtmlGenerator['primitive_option_child'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_name = block.getFieldValue('DROPDOWN');
  var value_text = HtmlGenerator.valueToCode(block, 'VALUE', HtmlGenerator.ORDER_ATOMIC);
  //var statements_content = HtmlGenerator.statementToCode(block, 'NAME');
  var statements_child = HtmlGenerator.statementToCode(block, 'CHILD');
  // TODO: Assemble JavaScript into code variable.
    var code = '<a-'+ dropdown_name +' '+value_text+' >'+statements_child+'</a-'+ dropdown_name + '>\n'; 
    
  return code;
};


HtmlGenerator['Options_Primitive'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var statements_option = HtmlGenerator.statementToCode(block, 'OPTIONS');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+ statements_option+'';
  return [code, HtmlGenerator.ORDER_NONE];
};
/*
tmlGenerator['onclick'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};
*/


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

HtmlGenerator['position3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_pos_x = block.getFieldValue('Pos_X');
  var text_pos_y = block.getFieldValue('Pos_Y');
  var text_pos_z = block.getFieldValue('Pos_Z');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' position="'+ text_pos_x +' '+text_pos_y+' '+text_pos_z+'"'; //position="0 1 -1"
    
  return code;
};

HtmlGenerator['rotation3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_rot_x = block.getFieldValue('Rot_X');
  var text_rot_y = block.getFieldValue('Rot_Y');
  var text_rot_z = block.getFieldValue('Rot_Z');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' rotation="'+ text_rot_x +' '+text_rot_y+' '+text_rot_z+'" '; 
    
  return code;
};

HtmlGenerator['scale3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_scal_x = block.getFieldValue('SCAL_X');
  var text_scal_y = block.getFieldValue('SCAL_Y');
  var text_scal_z = block.getFieldValue('SCAL_Z');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' scale="'+ text_scal_x +' '+text_scal_y+' '+text_scal_z+'" ';
    
  return code;
};

HtmlGenerator['depth3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_depth = block.getFieldValue('depth');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' depth="'+ text_depth +'"'; //position="0 1 -1"
    
  return code;
};

HtmlGenerator['height3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_height = block.getFieldValue('height');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' height="'+ text_height +'"'; //position="0 1 -1"
    
  return code;
};

HtmlGenerator['width3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_width = block.getFieldValue('width');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' width="'+ text_width +'"'; //position="0 1 -1"
    
  return code;
};

HtmlGenerator['radius3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_radius = block.getFieldValue('RADIUS');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' radius="'+ text_radius +'"'; 
    
  return code;
};

HtmlGenerator['segments-radial3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var text_segmen_radial = block.getFieldValue('SEGMENTS-RADIAL');
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
    var code = ' radius="'+ text_segmen_radial +'"'; 
    
  return code;
};

HtmlGenerator['side3d'] = function(block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');   
  var dropdown_side = block.getFieldValue('SIDE');
  // TODO: Assemble JavaScript into code variable.
    var code = ' side="'+ dropdown_side +'"'; //depth="4" height="4" width="4"
    
  return code;
};



HtmlGenerator['video360'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable. 
  var code = '<a-videosphere src="'+text_name+'" autoplay="true""></a-videosphere> ';
  return code;
};

HtmlGenerator['animation_options'] = function(block) {
  var statements_animation = HtmlGenerator.statementToCode(block, 'ANIMATION_OPTION');
  // TODO: Assemble JavaScript into code variable. 
  var code = ' animation = "'+statements_animation+'"';
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