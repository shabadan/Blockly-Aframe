"use strict";


var htmlBlocks =
[{
  "type": "baseframe",
  "message0": "document %1 header %2 %3 content %4 %5",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "head",
    "check": "header"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "body",
    "check": "html"
  }
  ],
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "html",
  "message0": "document %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "document"
  }
  ],
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "body",
  "message0": "content %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "document",
  "nextStatement": "document",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "head",
  "message0": "header %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "header"
  }
  ],
  "previousStatement": "document",
  "nextStatement": "document",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "title",
  "message0": "title %1",
  "args0": [
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "header",
  "nextStatement": "header",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "paragraph",
  "message0": "paragraph %1",
  "args0": [
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "plaintext",
  "message0": "text %1",
  "args0": [
  {
    "type": "field_input",
    "name": "content",
    "text": ""
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "division",
  "message0": "division %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "style",
  "message0": "style =  %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "css"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "color",
  "message0": "text colour :  %1",
  "args0": [
  {
    "type": "field_colour",
    "name": "NAME",
    "colour": "#ff0000"
  }
  ],
  "previousStatement": "css",
  "nextStatement": "css",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bgcolour",
  "message0": "background colour :  %1",
  "args0": [
  {
    "type": "field_colour",
    "name": "NAME",
    "colour": "#ff0000"
  }
  ],
  "previousStatement": "css",
  "nextStatement": "css",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "genericstyle",
  "message0": "%1 : %2",
  "args0": [
  {
    "type": "field_input",
    "name": "property",
    "text": "property"
  },
  {
    "type": "field_input",
    "name": "value",
    "text": "value"
  }
  ],
  "previousStatement": "css",
  "nextStatement": "css",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "generictag",
  "message0": "< %1 > %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "tag"
  },
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "more_attributes",
  "message0": "%1 %2 %3",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME1",
    "check": "attribute"
  },
  {
    "type": "input_value",
    "name": "NAME2",
    "check": "attribute"
  },
  {
    "type": "input_value",
    "name": "NAME3",
    "check": "attribute"
  }
  ],
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "genericattribute",
  "message0": "%1  =  %2",
  "args0": [
  {
    "type": "field_input",
    "name": "attribute",
    "text": "attribute"
  },
  {
    "type": "field_input",
    "name": "value",
    "text": "value"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "link",
  "message0": "link to %1 %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "target"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "span",
  "message0": "span %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "image",
  "message0": "image %1 or %2",
  "args0": [
  {
    "type": "field_input",
    "name": "IMAGE",
    "text": "URL"
  },
  {
    "type": "field_input",
    "name": "ALT",
    "text": "alternative text"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "emphasise",
  "message0": "emphasise %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "strong",
  "message0": "important %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "headline",
  "message0": "headline %1 %2 %3",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "NAME",
    "options": [
    [
    "level 1",
    "h1"
    ],
    [
    "level 2",
    "h2"
    ],
    [
    "level 3",
    "h2"
    ],
    [
    "level 4",
    "h4"
    ],
    [
    "level 5",
    "h5"
    ],
    [
    "level 6",
    "h6"
    ]
    ]
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "linebreak",
  "message0": "line break",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "horizontalbreak",
  "message0": "topic break",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "unorderedlist",
  "message0": "unordered list %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "orderedlist",
  "message0": "ordered list %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "listelement",
  "message0": "list item %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "inserted",
  "message0": "inserted %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "deleted",
  "message0": "deleted %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "super",
  "message0": "superscript %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "sub",
  "message0": "subscript %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "code",
  "message0": "code %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "quote",
  "message0": "quote %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "blockquote",
  "message0": "blockquote %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "sample",
  "message0": "sample output %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "keyboard",
  "message0": "keyboard input %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "variable",
  "message0": "variable %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "form",
  "message0": "form %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "table",
  "message0": "table %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "table"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 180,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "tablerow",
  "message0": "row %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "tablerow"
  }
  ],
  "previousStatement": "table",
  "nextStatement": "table",
  "colour": 180,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "tablecell",
  "message0": "entry %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "tablerow",
  "nextStatement": "tablerow",
  "colour": 180,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "input_text",
  "message0": "text input %1",
  "args0": [
  {
    "type": "field_input",
    "name": "default",
    "text": ""
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "button",
  "message0": "button %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "input",
  "message0": "%1 input %2 %3",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "type",
    "options": [
    [
    "text",
    "text"
    ],
    [
    "email",
    "email"
    ],
    [
    "number",
    "number"
    ],
    [
    "password",
    "password"
    ],
    [
    "checkbox",
    "checkbox"
    ],
    [
    "radiobutton",
    "radio"
    ],
    [
    "button",
    "button"
    ],
    [
    "colour",
    "color"
    ],
    [
    "date",
    "date"
    ],
    [
    "local time",
    "datetime-local"
    ],
    [
    "file",
    "file"
    ],
    [
    "hidden",
    "hidden"
    ],
    [
    "image",
    "image"
    ],
    [
    "month",
    "month"
    ],
    [
    "range",
    "range"
    ],
    [
    "reset",
    "reset"
    ],
    [
    "search",
    "search"
    ],
    [
    "submit",
    "submit"
    ],
    [
    "telephone number",
    "tel"
    ],
    [
    "time",
    "time"
    ],
    [
    "url",
    "url"
    ],
    [
    "week",
    "week"
    ]
    ]
  },
  {
    "type": "field_input",
    "name": "value",
    "text": ""
  },
  {
    "type": "input_value",
    "name": "text"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "script",
  "message0": "script %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "code"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "onclick",
  "message0": "on click =  %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "code"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "body_attributes",
  "message0": "content %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "document",
  "nextStatement": "document",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
}];


var AframeBlocks =
[{
  "type": "import_aframe",
  "message0": "import url %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "https://aframe.io/releases/1.0.4/aframe.min.js"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "https://aframe.io"
},
{
  "type": "import_inspector",
  "message0": "Import Inspector %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "https://aframe.io"
},
{
  "type": "import_extra",
  "message0": "Import A-Frame Extra %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "https://aframe.io"
},
{
  "type": "scene_create",
  "message0": "crea scena %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "camera_3d",
  "message0": "Camera 3D %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "CAMERA3D"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "wasd_fps",
  "message0": "WASD (FPS) %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "WASD",
      "options": [
        [
          "True",
          "true"
        ],
        [
          "False",
          "false"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "assets_list",
  "message0": "Define assets %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "assetslist"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "asset_item",
  "message0": "define asset item %1 id: %2 src: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "IDNAME",
      "text": "default"
    },
    {
      "type": "field_input",
      "name": "URL",
      "text": "default"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "gltf_entity",
  "message0": "gltf asset id: %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "IDNAME",
      "text": "default"
    },
    {
      "type": "input_statement",
      "name": "CONTENT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "import_model_gltf",
  "message0": "gltf model url %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "https://3d.simulmech.com/VR/Aframe-blockly/japanese_classroom/scene.gltf"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "https://aframe.io"
},

{
  "type": "import_model_obj",
  "message0": "obj model url %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "https://3d.simulmech.com/VR/Aframe-blockly/Radeghieri_appartamento_ristrutturato.obj"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "https://aframe.io"
},

{
  "type": "primitive",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DROPDOWN",
      "options": [
        [
          "Box",
          "box"
        ],
        [
          "Plane",
          "plane"
        ],
        [
          "Cone",
          "cone"
        ],
        [
          "Octahedron",
          "octahedron"
        ],
        [
          "Circle",
          "circle"
        ],
        [
          "Ring",
          "ring"
        ],
        [
          "Sphere",
          "sphere"
        ],
        [
          "Cylinder",
          "cylinder"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "primitive_child",
  "message0": "%1 %2 Child %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DROPDOWN",
      "options": [
        [
          "Box",
          "box"
        ],
        [
          "Plane",
          "plane"
        ],
        [
          "Cone",
          "cone"
        ],
        [
          "Octahedron",
          "octahedron"
        ],
        [
          "Circle",
          "circle"
        ],
        [
          "Ring",
          "ring"
        ],
        [
          "Sphere",
          "sphere"
        ],
        [
          "Cylinder",
          "cylinder"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
  
    {
      "type": "input_statement",
      "name": "CHILD"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "color3d",
  "message0": "Color = %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "COLOR3D",
      "colour": "#ff0000"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "color3dHEX",
  "message0": "Color: #  %1",
  "args0": [
    {
      "type": "field_input",
      "name": "COLOR3DHEX",
      "text": "ff0000"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, 

{
  "type": "position3d",
  "message0": "Position = X: %1 Y: %2 Z: %3",
  "args0": [
    {
      "type": "field_input",
      "name": "Pos_X",
      "text": "0"
    },
    {
      "type": "field_input",
      "name": "Pos_Y",
      "text": "0"
    },
    {
      "type": "field_input",
      "name": "Pos_Z",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "rotation3d",
  "message0": "Rotation = X: %1 Y: %2 Z: %3",
  "args0": [
    {
      "type": "field_input",
      "name": "Rot_X",
      "text": "0"
    },
    {
      "type": "field_input",
      "name": "Rot_Y",
      "text": "0"
    },
    {
      "type": "field_input",
      "name": "Rot_Z",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, 

{
  "type": "scale3d",
  "message0": "Scale = X: %1 Y: %2 Z: %3",
  "args0": [
    {
      "type": "field_input",
      "name": "SCAL_X",
      "text": "1"
    },
    {
      "type": "field_input",
      "name": "SCAL_Y",
      "text": "1"
    },
    {
      "type": "field_input",
      "name": "SCAL_Z",
      "text": "1"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "width3d",
  "message0": "width:  %1",
  "args0": [
    {
      "type": "field_input",
      "name": "width",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

 {
  "type": "height3d",
  "message0": "height:  %1",
  "args0": [
    {
      "type": "field_input",
      "name": "height",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

 {
  "type": "depth3d",
  "message0": "depth:  %1",
  "args0": [
    {
      "type": "field_input",
      "name": "depth",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "radius3d",
  "message0": "Radius =  %1",
  "args0": [
    {
      "type": "field_input",
      "name": "RADIUS",
      "text": "1"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, 

{
  "type": "segments-radial3d",
  "message0": "Segment-Radial =  %1",
  "args0": [
    {
      "type": "field_input",
      "name": "SEGMENTS-RADIAL",
      "text": "1"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, 

{
  "type": "side3d",
  "message0": "Side: %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "SIDE",
      "options": [
        [
          "FRONT",
          "front"
        ],
        [
          "BACK",
          "back"
        ],
        [
          "DOUBLE",
          "double"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "video360",
  "message0": "Video URL: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "https://www.youtube.com/watch?v=diBozKDxVLI"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}];

htmlBlocks = htmlBlocks.concat(AframeBlocks);

if (Msg && Msg.blocks) {
  // Update jsons with translations
  for (var iBlock in htmlBlocks) {
    var json = htmlBlocks[iBlock];
    var trs = Msg.blocks[json.type];
    for (var iTr in trs) {
      if (typeof(trs[iTr]) == "string") {
        json[iTr] = trs[iTr];
      } else if (typeof(trs[iTr]) == "object") {
        // Mainly for args0 property
        // Follow two levels, then just replace
        for (var iTrObj in trs[iTr]) {
          if (typeof(trs[iTr][iTrObj]) == "object") {
            for (var index in trs[iTr][iTrObj]) {
              json[iTr][iTrObj][index] = trs[iTr][iTrObj][index];
            }
          }
          else {
            console.error("Don't know how to translate that: Msg.blocks." + iTr + "." + iTrObj)
          }
        }
      } else {
        console.error("Don't know how to translate that: Msg.blocks." + iTr)
      }
    }
  }
}

for (var iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(htmlBlocks[iBlock]);
}
