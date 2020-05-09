/* global AFRAME THREE */

if (typeof AFRAME === "undefined") {
    throw "Component attempted to register before AFRAME was available.";
}

AFRAME.registerComponent("arrow", {
    schema: {
        direction: {
            type: "vec3",
            default: {
                x: 1,
                y: 0,
                z: 0
            }
        },
        length: {
            type: "number"
        },
        color: {
            type: "color",
            default: "#ff0"
        },
        headLength: {
            type: "number"
        },
        headWidth: {
            type: "number"
        }
    },
    init: function () {
        var data = this.data;
        var direction = new THREE.Vector3(data.direction.x, data.direction.y, data.direction.z);
        var length = data.length || direction.length();
        var headLength = data.headLength || length * .2;
        var headWidth = data.headWidth || headLength * .2;
        var color = new THREE.Color(data.color);
        this.arrow = new THREE.ArrowHelper(direction.normalize(), new THREE.Vector3(), length, color, headLength, headWidth);
        this.el.setObject3D("arrow", this.arrow);
    },
    update: function (oldData) {
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        if ("color" in diff) {
            this.arrow.setColor(new THREE.Color(data.color));
        }
        var length;
        if ("direction" in diff) {
            var direction = new THREE.Vector3(data.direction.x, data.direction.y, data.direction.z);
            length = direction.length();
            this.arrow.setDirection(direction.normalize());
        }
        if ("direction" in diff && typeof data.length === "undefined" || "length" in diff || "headLength" in diff || "headWidth" in diff) {
            length = data.length || length;
            var headLength = data.headLength || length * .2;
            var headWidth = data.headWidth || headLength * .2;
            this.arrow.setLength(length, headLength, headWidth);
        }
    }
});

//


var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
//var meshMixin = AFRAME.primitives.getMeshMixin();


AFRAME.registerPrimitive('a-arrow', extendDeep({}, {
  // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
  defaultComponents: {
    arrow: {}
  },

  // Defined mappings from HTML attributes to component properties (using dots as delimiters).
  // If we set `depth="5"` in HTML, then the primitive will automatically set `geometry="depth: 5"`.
  mappings: {
    direction: 'arrow.direction',
    length: 'arrow.length',
    color: 'arrow.color',
	headlength: 'arrow.headLength',
	headwidth: 'arrow.headWidth'
  }
}));
