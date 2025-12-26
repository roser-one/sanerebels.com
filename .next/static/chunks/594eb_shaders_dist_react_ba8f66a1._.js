(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/react/generatePresetCode-CCibXbtZ.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>generatePresetCode,
    "t",
    ()=>availableComponents
]);
var shaderMetadata = {
    "AngularBlur": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 20,
        "center": {
            "x": .5,
            "y": .5
        }
    },
    "Ascii": {
        "opacity": 1,
        "blendMode": "normal",
        "characters": "@%#*+=-:.",
        "cellSize": 30,
        "fontFamily": "JetBrains Mono",
        "spacing": 1
    },
    "Beam": {
        "opacity": 1,
        "blendMode": "normal",
        "startPosition": {
            "x": .2,
            "y": .5
        },
        "endPosition": {
            "x": .8,
            "y": .5
        },
        "startThickness": .2,
        "endThickness": .2,
        "startSoftness": .5,
        "endSoftness": .5,
        "insideColor": "#FF0000",
        "outsideColor": "#0000FF",
        "colorSpace": "linear"
    },
    "Blob": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#ff6b35",
        "colorB": "#e91e63",
        "size": .5,
        "deformation": .5,
        "softness": .5,
        "highlightIntensity": .5,
        "highlightX": .3,
        "highlightY": -.3,
        "highlightZ": .4,
        "highlightColor": "#ffe11a",
        "speed": .5,
        "seed": 1,
        "center": {
            "x": .5,
            "y": .5
        },
        "colorSpace": "linear"
    },
    "Blur": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 50
    },
    "Bulge": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": .5,
            "y": .5
        },
        "strength": 1,
        "radius": 1,
        "falloff": .5,
        "edges": "stretch"
    },
    "ChannelBlur": {
        "opacity": 1,
        "blendMode": "normal",
        "redIntensity": 0,
        "greenIntensity": 20,
        "blueIntensity": 40
    },
    "Checkerboard": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#cccccc",
        "colorB": "#999999",
        "cells": 8,
        "softness": 0,
        "colorSpace": "linear"
    },
    "ChromaFlow": {
        "opacity": 1,
        "blendMode": "normal",
        "baseColor": "#0066ff",
        "upColor": "#00ff00",
        "downColor": "#ff0000",
        "leftColor": "#0000ff",
        "rightColor": "#ffff00",
        "intensity": 1,
        "radius": 2,
        "momentum": 30
    },
    "ChromaticAberration": {
        "opacity": 1,
        "blendMode": "normal",
        "strength": .2,
        "angle": 0,
        "redOffset": -1,
        "greenOffset": 0,
        "blueOffset": 1
    },
    "Circle": {
        "opacity": 1,
        "blendMode": "normal",
        "color": "#ffffff",
        "radius": 1,
        "softness": 0,
        "center": {
            "x": .5,
            "y": .5
        }
    },
    "CRTScreen": {
        "opacity": 1,
        "blendMode": "normal",
        "pixelSize": 128,
        "colorShift": 1,
        "scanlineIntensity": .3,
        "scanlineFrequency": 200,
        "brightness": 1.1,
        "contrast": 1.2
    },
    "CursorTrail": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#00aaff",
        "colorB": "#ff00aa",
        "radius": .5,
        "length": .5,
        "shrink": 1,
        "colorSpace": "linear"
    },
    "DiffuseBlur": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 30,
        "edges": "stretch"
    },
    "Dither": {
        "opacity": 1,
        "blendMode": "normal",
        "pixelSize": 4,
        "threshold": .5,
        "colorA": "transparent",
        "colorB": "#ffffff"
    },
    "DotGrid": {
        "opacity": 1,
        "blendMode": "normal",
        "color": "#ffffff",
        "density": 100,
        "dotSize": .3,
        "twinkle": 0
    },
    "Duotone": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#ff0000",
        "colorB": "#023af4",
        "blend": .5,
        "colorSpace": "linear"
    },
    "FilmGrain": {
        "opacity": 1,
        "blendMode": "normal",
        "strength": .5
    },
    "FloatingParticles": {
        "opacity": 1,
        "blendMode": "normal",
        "randomness": .25,
        "speed": .25,
        "angle": 90,
        "particleSize": 1,
        "particleSoftness": 0,
        "twinkle": .5,
        "count": 5,
        "particleColor": "#ffffff",
        "speedVariance": .3,
        "angleVariance": 30,
        "particleDensity": 3
    },
    "GlassTiles": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 1,
        "tileCount": 100
    },
    "Glow": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 1,
        "threshold": .5,
        "size": 10
    },
    "Godrays": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": 0,
            "y": 0
        },
        "density": .3,
        "intensity": .8,
        "spotty": 1,
        "speed": .5,
        "rayColor": "#4283fb",
        "backgroundColor": "transparent"
    },
    "Grayscale": {
        "opacity": 1,
        "blendMode": "normal"
    },
    "Grid": {
        "opacity": 1,
        "blendMode": "normal",
        "color": "#ffffff",
        "cells": 10,
        "thickness": 1
    },
    "GridDistortion": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 1,
        "swirl": 0,
        "decay": 3,
        "radius": 1,
        "gridSize": 20,
        "edges": "stretch"
    },
    "Group": {
        "opacity": 1,
        "blendMode": "normal"
    },
    "Halftone": {
        "opacity": 1,
        "blendMode": "normal",
        "frequency": 100,
        "angle": 45,
        "smoothness": .1
    },
    "HueShift": {
        "opacity": 1,
        "blendMode": "normal",
        "shift": 0
    },
    "ImageTexture": {
        "opacity": 1,
        "blendMode": "normal",
        "url": "https://shaders.com/sample.jpg",
        "objectFit": "cover"
    },
    "Invert": {
        "opacity": 1,
        "blendMode": "normal"
    },
    "LinearBlur": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 30,
        "angle": 0
    },
    "LinearGradient": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#1aff00",
        "colorB": "#0000ff",
        "start": {
            "x": 0,
            "y": .5
        },
        "end": {
            "x": 1,
            "y": .5
        },
        "angle": 0,
        "edges": "stretch",
        "colorSpace": "linear"
    },
    "Liquify": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 1,
        "swirl": 0,
        "decay": 3,
        "radius": 1,
        "edges": "stretch"
    },
    "Pixelate": {
        "opacity": 1,
        "blendMode": "normal",
        "scale": 50
    },
    "PolarCoordinates": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": .5,
            "y": .5
        },
        "wrap": 1,
        "radius": 1,
        "intensity": 1,
        "edges": "transparent"
    },
    "Posterize": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 5
    },
    "ProgressiveBlur": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 50,
        "angle": 0,
        "center": {
            "x": 0,
            "y": .5
        },
        "falloff": 1
    },
    "RadialGradient": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#ff0000",
        "colorB": "#0000ff",
        "center": {
            "x": .5,
            "y": .5
        },
        "radius": 1,
        "colorSpace": "linear"
    },
    "RectangularCoordinates": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": .5,
            "y": .5
        },
        "scale": 1,
        "intensity": 1,
        "edges": "transparent"
    },
    "Ripples": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": .5,
            "y": .5
        },
        "colorA": "#ffffff",
        "colorB": "#000000",
        "speed": 1,
        "frequency": 20,
        "softness": 0,
        "thickness": .5,
        "phase": 0
    },
    "Saturation": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 1
    },
    "SimplexNoise": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#ffffff",
        "colorB": "#000000",
        "scale": 2,
        "balance": 0,
        "contrast": 0,
        "seed": 0,
        "speed": 1
    },
    "SineWave": {
        "opacity": 1,
        "blendMode": "normal",
        "color": "#ffffff",
        "amplitude": .15,
        "frequency": 1,
        "speed": 1,
        "angle": 0,
        "position": {
            "x": .5,
            "y": .5
        },
        "thickness": .2,
        "softness": .4
    },
    "SolidColor": {
        "opacity": 1,
        "blendMode": "normal",
        "color": "#5b18ca"
    },
    "Spherize": {
        "opacity": 1,
        "blendMode": "normal",
        "radius": 1,
        "depth": 1,
        "center": {
            "x": .5,
            "y": .5
        },
        "lightPosition": {
            "x": .3,
            "y": .3
        },
        "lightIntensity": .5,
        "lightSoftness": .5,
        "lightColor": "#ffffff"
    },
    "Spiral": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#000000",
        "colorB": "#ffffff",
        "strokeWidth": .5,
        "strokeFalloff": 0,
        "softness": 0,
        "speed": 1,
        "center": {
            "x": .5,
            "y": .5
        },
        "scale": 1,
        "colorSpace": "linear"
    },
    "Strands": {
        "opacity": 1,
        "blendMode": "normal",
        "speed": .5,
        "amplitude": 1,
        "frequency": 1,
        "lineCount": 12,
        "lineWidth": .1,
        "waveColor": "#f1c907",
        "pinEdges": true,
        "start": {
            "x": 0,
            "y": .5
        },
        "end": {
            "x": 1,
            "y": .5
        }
    },
    "Stretch": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": .5,
            "y": .5
        },
        "strength": 1,
        "angle": 0,
        "falloff": 0,
        "edges": "stretch"
    },
    "Swirl": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#1275d8",
        "colorB": "#e19136",
        "speed": 1,
        "detail": 1,
        "blend": 50,
        "coarseX": 50,
        "coarseY": 50,
        "mediumX": 50,
        "mediumY": 50,
        "fineX": 50,
        "fineY": 50,
        "colorSpace": "linear"
    },
    "TiltShift": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 50,
        "width": .3,
        "falloff": .3,
        "angle": 0,
        "center": {
            "x": .5,
            "y": .5
        }
    },
    "Tritone": {
        "opacity": 1,
        "blendMode": "normal",
        "colorA": "#ce1bea",
        "colorB": "#2fff00",
        "colorC": "#ffff00",
        "blendMid": .5,
        "colorSpace": "linear"
    },
    "Twirl": {
        "opacity": 1,
        "blendMode": "normal",
        "center": {
            "x": .5,
            "y": .5
        },
        "intensity": 1,
        "edges": "stretch"
    },
    "Vibrance": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 0
    },
    "WaveDistortion": {
        "opacity": 1,
        "blendMode": "normal",
        "strength": .3,
        "frequency": 1,
        "speed": 1,
        "angle": 0,
        "waveType": "sine",
        "edges": "stretch"
    },
    "ZoomBlur": {
        "opacity": 1,
        "blendMode": "normal",
        "intensity": 30,
        "center": {
            "x": .5,
            "y": .5
        }
    }
};
function generatePropString(props, componentType) {
    let indent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "  ";
    return Object.entries(props).filter((param)=>{
        let [key, value] = param;
        const componentDefaults = shaderMetadata[componentType] || {};
        if (componentDefaults.hasOwnProperty(key)) {
            const defaultValue = componentDefaults[key];
            if (typeof value === "object" && typeof defaultValue === "object") return JSON.stringify(value) !== JSON.stringify(defaultValue);
            return value !== defaultValue;
        }
        if (key === "opacity" && value === 1) return false;
        if (key === "blendMode" && value === "normal") return false;
        return true;
    }).map((param)=>{
        let [key, value] = param;
        if (typeof value === "string") return "".concat(key, '="').concat(value, '"');
        else if (typeof value === "object") return "".concat(key, "={").concat(JSON.stringify(value), "}");
        else return "".concat(key, "={").concat(value, "}");
    }).join("\n" + indent + "  ");
}
function isIdUsedAsMaskSource(id, allComponents) {
    const flatComponents = [];
    function flattenComponents(components) {
        for (const component of components){
            flatComponents.push(component);
            if (component.children) flattenComponents(component.children);
        }
    }
    flattenComponents(allComponents);
    return flatComponents.some((component)=>{
        var _component_props;
        return ((_component_props = component.props) === null || _component_props === void 0 ? void 0 : _component_props.maskSource) === id;
    });
}
function generatePresetCode(preset) {
    const generateComponentString = function(config) {
        let indent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "  ";
        const propString = config.props ? generatePropString(config.props, config.type, indent) : "";
        let idString = "";
        if (config.id) {
            if (isIdUsedAsMaskSource(config.id, preset.components)) idString = 'id="'.concat(config.id, '"');
        }
        const attributes = [
            idString,
            propString
        ].filter(Boolean).join("\n" + indent + "  ");
        if (config.children && config.children.length > 0) {
            const childrenString = config.children.map((child)=>generateComponentString(child, indent + "  ")).join("\n");
            if (attributes) return "".concat(indent, "<").concat(config.type, "\n").concat(indent, "  ").concat(attributes, ">\n").concat(childrenString, "\n").concat(indent, "</").concat(config.type, ">");
            else return "".concat(indent, "<").concat(config.type, ">\n").concat(childrenString, "\n").concat(indent, "</").concat(config.type, ">");
        } else if (attributes) return "".concat(indent, "<").concat(config.type, "\n").concat(indent, "  ").concat(attributes, " />");
        else return "".concat(indent, "<").concat(config.type, " />");
    };
    return "<Shader>\n".concat(preset.components.map((config)=>generateComponentString(config)).join("\n"), "\n</Shader>");
}
const availableComponents = [
    "AngularBlur",
    "Ascii",
    "Beam",
    "Blob",
    "Blur",
    "Bulge",
    "CRTScreen",
    "ChannelBlur",
    "Checkerboard",
    "ChromaFlow",
    "ChromaticAberration",
    "Circle",
    "CursorTrail",
    "DiffuseBlur",
    "Dither",
    "DotGrid",
    "Duotone",
    "FilmGrain",
    "FloatingParticles",
    "GlassTiles",
    "Glow",
    "Godrays",
    "Grayscale",
    "Grid",
    "GridDistortion",
    "Group",
    "Halftone",
    "HueShift",
    "ImageTexture",
    "Invert",
    "LinearBlur",
    "LinearGradient",
    "Liquify",
    "Pixelate",
    "PolarCoordinates",
    "Posterize",
    "ProgressiveBlur",
    "RadialGradient",
    "RectangularCoordinates",
    "Ripples",
    "Saturation",
    "SimplexNoise",
    "SineWave",
    "SolidColor",
    "Spherize",
    "Spiral",
    "Strands",
    "Stretch",
    "Swirl",
    "TiltShift",
    "Tritone",
    "Twirl",
    "Vibrance",
    "WaveDistortion",
    "ZoomBlur"
];
;
}),
"[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/react/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AngularBlur",
    ()=>AngularBlur_default,
    "Ascii",
    ()=>Ascii_default,
    "Beam",
    ()=>Beam_default,
    "Blob",
    ()=>Blob_default,
    "Blur",
    ()=>Blur_default,
    "Bulge",
    ()=>Bulge_default,
    "CRTScreen",
    ()=>CRTScreen_default,
    "ChannelBlur",
    ()=>ChannelBlur_default,
    "Checkerboard",
    ()=>Checkerboard_default,
    "ChromaFlow",
    ()=>ChromaFlow_default,
    "ChromaticAberration",
    ()=>ChromaticAberration_default,
    "Circle",
    ()=>Circle_default,
    "CursorTrail",
    ()=>CursorTrail_default,
    "DiffuseBlur",
    ()=>DiffuseBlur_default,
    "Dither",
    ()=>Dither_default,
    "DotGrid",
    ()=>DotGrid_default,
    "Duotone",
    ()=>Duotone_default,
    "FilmGrain",
    ()=>FilmGrain_default,
    "FloatingParticles",
    ()=>FloatingParticles_default,
    "GlassTiles",
    ()=>GlassTiles_default,
    "Glow",
    ()=>Glow_default,
    "Godrays",
    ()=>Godrays_default,
    "Grayscale",
    ()=>Grayscale_default,
    "Grid",
    ()=>Grid_default,
    "GridDistortion",
    ()=>GridDistortion_default,
    "Group",
    ()=>Group_default,
    "Halftone",
    ()=>Halftone_default,
    "HueShift",
    ()=>HueShift_default,
    "ImageTexture",
    ()=>ImageTexture_default,
    "Invert",
    ()=>Invert_default,
    "LinearBlur",
    ()=>LinearBlur_default,
    "LinearGradient",
    ()=>LinearGradient_default,
    "Liquify",
    ()=>Liquify_default,
    "Pixelate",
    ()=>Pixelate_default,
    "PolarCoordinates",
    ()=>PolarCoordinates_default,
    "Posterize",
    ()=>Posterize_default,
    "ProgressiveBlur",
    ()=>ProgressiveBlur_default,
    "RadialGradient",
    ()=>RadialGradient_default,
    "RectangularCoordinates",
    ()=>RectangularCoordinates_default,
    "Ripples",
    ()=>Ripples_default,
    "Saturation",
    ()=>Saturation_default,
    "Shader",
    ()=>Shader_default,
    "SimplexNoise",
    ()=>SimplexNoise_default,
    "SineWave",
    ()=>SineWave_default,
    "SolidColor",
    ()=>SolidColor_default,
    "Spherize",
    ()=>Spherize_default,
    "Spiral",
    ()=>Spiral_default,
    "Strands",
    ()=>Strands_default,
    "Stretch",
    ()=>Stretch_default,
    "Swirl",
    ()=>Swirl_default,
    "TiltShift",
    ()=>TiltShift_default,
    "Tritone",
    ()=>Tritone_default,
    "Twirl",
    ()=>Twirl_default,
    "Vibrance",
    ()=>Vibrance_default,
    "WaveDistortion",
    ()=>WaveDistortion_default,
    "ZoomBlur",
    ()=>ZoomBlur_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$react$2f$generatePresetCode$2d$CCibXbtZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/react/generatePresetCode-CCibXbtZ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/AngularBlur-DKFExWUF.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$tsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.tsl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$telemetry$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/telemetry/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Ascii-BRApYlD4.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Beam-DU7wxmIh.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Blob-nssNzEgN.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Blur-k37gOaRA.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Bulge-Dm02_fG6.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/CRTScreen-DLy8Rig6.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/ChannelBlur-BPOGOQXl.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Checkerboard-SKsXoUXE.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/ChromaFlow-VpfgLFbs.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/ChromaticAberration-CaCyXMyE.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Circle-BHnAmzVb.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/CursorTrail-CfVWIKok.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/DiffuseBlur-GWPb8Zht.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Dither-BNEeyo0u.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/DotGrid-CRRS6nbt.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Duotone-5gKND3an.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/FilmGrain-osBGk_b9.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/FloatingParticles-CULOurGT.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/GlassTiles-CA90XrNT.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Glow-D0boDIAW.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Godrays-BQsDwU26.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Grayscale-Bi-XBvO_.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Grid-CWHxwO7R.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/GridDistortion-CZB9w-rv.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Group-C0AknFDS.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Halftone-MMcLMRpL.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/HueShift-DvOpzM7W.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/ImageTexture-D9OMwqAs.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Invert-Bmjbp6g6.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/LinearBlur-B-Ikurxt.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/LinearGradient-DV6UkhZk.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Liquify-W8UQNeEM.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Pixelate-_pyYeLRP.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/PolarCoordinates-D63xm0oJ.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Posterize-DIjjPS72.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/ProgressiveBlur-G-s-o9ic.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/RadialGradient-BGVqSwh0.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/RectangularCoordinates-DyHBo456.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Ripples-2FGWCZlp.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Saturation-J0nI4hmh.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/SimplexNoise-B6dtUCmn.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/SineWave-BtPf6-2H.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/SolidColor-CETl1cEr.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Spherize-BwvUcorJ.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Spiral-DmJWmUmr.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Strands-CV1oCmHx.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Stretch-pl-Cn2F8.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Swirl-D65vXLDw.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/TiltShift-CFcK6Hzg.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Tritone-EmnjV2rX.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Twirl-HSMyRx5I.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/Vibrance-BI5q7_Wt.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/WaveDistortion-DG8GO_l8.js [app-client] (ecmascript) <export n as componentDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shaders@2.2.29/node_modules/shaders/dist/core/ZoomBlur-C01oGwwG.js [app-client] (ecmascript) <export n as componentDefinition>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const OmbreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const Shader = (param)=>{
    let { children, hideNotice = false, style = {}, className = "", ...rest } = param;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Shader.useMemo[rootId]": ()=>"ombre-root-" + Math.random().toString(36).substring(7)
    }["Shader.useMemo[rootId]"], []);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (rendererRef.current === null) rendererRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shaderRenderer"])();
    const telemetryCollectorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRegister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Shader.useMemo[nodeRegister]": ()=>{
            return ({
                "Shader.useMemo[nodeRegister]": function(id, fragmentNodeFunc, parentId, metadata) {
                    let uniforms = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, componentDefinition$55 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
                    if (fragmentNodeFunc === null) {
                        try {
                            rendererRef.current.removeNode(id);
                        } catch (err) {
                            console.warn("Error removing node:", err);
                        }
                        return;
                    }
                    try {
                        rendererRef.current.registerNode(id, fragmentNodeFunc, parentId, metadata, uniforms, componentDefinition$55);
                    } catch (err) {
                        console.error("Error registering node:", err, {
                            id,
                            parentId,
                            metadata
                        });
                    }
                }
            })["Shader.useMemo[nodeRegister]"];
        }
    }["Shader.useMemo[nodeRegister]"], []);
    const uniformUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Shader.useMemo[uniformUpdate]": ()=>{
            return ({
                "Shader.useMemo[uniformUpdate]": (nodeId, uniformName, value)=>{
                    try {
                        rendererRef.current.updateUniformValue(nodeId, uniformName, value);
                    } catch (err) {
                        console.warn("Error updating uniform:", err);
                    }
                }
            })["Shader.useMemo[uniformUpdate]"];
        }
    }["Shader.useMemo[uniformUpdate]"], []);
    const metadataUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Shader.useMemo[metadataUpdate]": ()=>{
            return ({
                "Shader.useMemo[metadataUpdate]": (nodeId, metadata)=>{
                    try {
                        rendererRef.current.updateNodeMetadata(nodeId, metadata);
                    } catch (err) {
                        console.warn("Error updating metadata:", err);
                    }
                }
            })["Shader.useMemo[metadataUpdate]"];
        }
    }["Shader.useMemo[metadataUpdate]"], []);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Shader.useMemo[contextValue]": ()=>{
            return {
                ombreParentId: rootId,
                ombreNodeRegister: nodeRegister,
                ombreUniformUpdate: uniformUpdate,
                ombreMetadataUpdate: metadataUpdate
            };
        }
    }["Shader.useMemo[contextValue]"], [
        rootId,
        nodeRegister,
        uniformUpdate,
        metadataUpdate
    ]);
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInitializingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isCleanedUpRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wasVisibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const visibilityObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializeRenderer = async ()=>{
        const canvas = canvasRef.current;
        if (!canvas || isInitializedRef.current || isInitializingRef.current) return;
        isInitializingRef.current = true;
        try {
            const renderer = rendererRef.current;
            if (!renderer.isInitialized()) await renderer.initialize({
                canvas
            });
            renderer.registerNode(rootId, (param)=>{
                let { childNode } = param;
                return childNode || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$tsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec4"])(0, 0, 0, 0);
            }, null, null, {});
            isInitializedRef.current = true;
            isInitializingRef.current = false;
            if (!hideNotice) renderer.showLicenseWarning();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$telemetry$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExternalUser"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$telemetry$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldCollectTelemetry"])()) {
                telemetryCollectorRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$telemetry$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelemetryCollector"](renderer);
                telemetryCollectorRef.current.start();
            }
        } catch (err) {
            console.error("[Shader] Initialization failed:", err);
            isInitializingRef.current = false;
            throw err;
        }
    };
    const setupVisibilityObserver = ()=>{
        const container = containerRef.current;
        if (!container || visibilityObserverRef.current) return;
        visibilityObserverRef.current = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            if (!entry) return;
            const rect = container.getBoundingClientRect();
            const isCurrentlyVisible = entry.isIntersecting && rect && rect.width > 0 && rect.height > 0;
            if (isCurrentlyVisible && !wasVisibleRef.current) {
                if (rendererRef.current.isInitialized()) rendererRef.current.startAnimation();
                else initializeRenderer().catch(console.error);
                wasVisibleRef.current = true;
            } else if (!isCurrentlyVisible && wasVisibleRef.current) {
                rendererRef.current.stopAnimation();
                wasVisibleRef.current = false;
            }
        }, {
            threshold: 0
        });
        visibilityObserverRef.current.observe(container);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shader.useEffect": ()=>{
            isCleanedUpRef.current = false;
            const container = containerRef.current;
            if (!container) return;
            const rect = container.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                initializeRenderer().catch(console.error);
                wasVisibleRef.current = true;
            } else wasVisibleRef.current = false;
            setupVisibilityObserver();
            return ({
                "Shader.useEffect": ()=>{
                    if (isCleanedUpRef.current) return;
                    isCleanedUpRef.current = true;
                    if (telemetryCollectorRef.current) {
                        telemetryCollectorRef.current.stop();
                        telemetryCollectorRef.current = null;
                    }
                    if (visibilityObserverRef.current) {
                        visibilityObserverRef.current.disconnect();
                        visibilityObserverRef.current = null;
                    }
                    if (rendererRef.current && isInitializedRef.current) try {
                        rendererRef.current.cleanup();
                    } catch (err) {
                        console.warn("[Shader] Error during cleanup:", err);
                    }
                    isInitializedRef.current = false;
                    isInitializingRef.current = false;
                }
            })["Shader.useEffect"];
        }
    }["Shader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shader.useEffect": ()=>{
            if (!hideNotice && rendererRef.current && isInitializedRef.current) try {
                rendererRef.current.showLicenseWarning();
            } catch (err) {}
        }
    }["Shader.useEffect"], [
        hideNotice
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: contextValue,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ref: containerRef,
            className: "shader" + (className ? " " + className : ""),
            style,
            ...rest,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
                    "data-renderer": "shaders",
                    ref: canvasRef,
                    style: {
                        width: "100%",
                        height: "100%",
                        display: "block"
                    }
                }),
                children
            ]
        })
    });
};
var Shader_default = Shader;
function computeEffectiveProps$54(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$54 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$54 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$54[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$54 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$54.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$54.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$54.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$54(props, defaultProps$54);
        }
    }["OmbreComponent$54.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$54.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$54,
                ...props.transform
            })
    }["OmbreComponent$54.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$54.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$54.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$54.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$AngularBlur$2d$DKFExWUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$54.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$54.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$54.useEffect": ()=>{}
                })["OmbreComponent$54.useEffect"];
            }
        }
    }["OmbreComponent$54.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$54.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$54.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$54.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$54.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$54.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$54.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var AngularBlur_default = OmbreComponent$54;
function computeEffectiveProps$53(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$53 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$53 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$53[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$53 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$53.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$53.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$53.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$53(props, defaultProps$53);
        }
    }["OmbreComponent$53.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$53.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$53,
                ...props.transform
            })
    }["OmbreComponent$53.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$53.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$53.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$53.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ascii$2d$BRApYlD4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$53.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$53.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$53.useEffect": ()=>{}
                })["OmbreComponent$53.useEffect"];
            }
        }
    }["OmbreComponent$53.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$53.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$53.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$53.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$53.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$53.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$53.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Ascii_default = OmbreComponent$53;
function computeEffectiveProps$52(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$52 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$52 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$52[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$52 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$52.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$52.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$52.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$52(props, defaultProps$52);
        }
    }["OmbreComponent$52.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$52.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$52,
                ...props.transform
            })
    }["OmbreComponent$52.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$52.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$52.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$52.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Beam$2d$DU7wxmIh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$52.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$52.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$52.useEffect": ()=>{}
                })["OmbreComponent$52.useEffect"];
            }
        }
    }["OmbreComponent$52.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$52.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$52.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$52.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$52.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$52.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$52.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Beam_default = OmbreComponent$52;
function computeEffectiveProps$51(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$51 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$51 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$51[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$51 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$51.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$51.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$51.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$51(props, defaultProps$51);
        }
    }["OmbreComponent$51.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$51.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$51,
                ...props.transform
            })
    }["OmbreComponent$51.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$51.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$51.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$51.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blob$2d$nssNzEgN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$51.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$51.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$51.useEffect": ()=>{}
                })["OmbreComponent$51.useEffect"];
            }
        }
    }["OmbreComponent$51.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$51.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$51.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$51.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$51.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$51.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$51.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Blob_default = OmbreComponent$51;
function computeEffectiveProps$50(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$50 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$50 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$50[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$50 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$50.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$50.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$50.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$50(props, defaultProps$50);
        }
    }["OmbreComponent$50.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$50.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$50,
                ...props.transform
            })
    }["OmbreComponent$50.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$50.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$50.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$50.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Blur$2d$k37gOaRA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$50.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$50.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$50.useEffect": ()=>{}
                })["OmbreComponent$50.useEffect"];
            }
        }
    }["OmbreComponent$50.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$50.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$50.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$50.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$50.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$50.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$50.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Blur_default = OmbreComponent$50;
function computeEffectiveProps$49(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$49 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$49 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$49[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$49 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$49.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$49.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$49.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$49(props, defaultProps$49);
        }
    }["OmbreComponent$49.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$49.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$49,
                ...props.transform
            })
    }["OmbreComponent$49.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$49.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$49.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$49.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Bulge$2d$Dm02_fG6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$49.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$49.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$49.useEffect": ()=>{}
                })["OmbreComponent$49.useEffect"];
            }
        }
    }["OmbreComponent$49.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$49.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$49.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$49.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$49.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$49.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$49.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Bulge_default = OmbreComponent$49;
function computeEffectiveProps$48(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$48 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$48 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$48[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$48 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$48.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$48.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$48.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$48(props, defaultProps$48);
        }
    }["OmbreComponent$48.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$48.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$48,
                ...props.transform
            })
    }["OmbreComponent$48.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$48.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$48.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$48.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CRTScreen$2d$DLy8Rig6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$48.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$48.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$48.useEffect": ()=>{}
                })["OmbreComponent$48.useEffect"];
            }
        }
    }["OmbreComponent$48.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$48.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$48.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$48.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$48.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$48.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$48.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var CRTScreen_default = OmbreComponent$48;
function computeEffectiveProps$47(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$47 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$47 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$47[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$47 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$47.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$47.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$47.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$47(props, defaultProps$47);
        }
    }["OmbreComponent$47.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$47.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$47,
                ...props.transform
            })
    }["OmbreComponent$47.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$47.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$47.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$47.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChannelBlur$2d$BPOGOQXl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$47.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$47.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$47.useEffect": ()=>{}
                })["OmbreComponent$47.useEffect"];
            }
        }
    }["OmbreComponent$47.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$47.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$47.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$47.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$47.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$47.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$47.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var ChannelBlur_default = OmbreComponent$47;
function computeEffectiveProps$46(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$46 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$46 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$46[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$46 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$46.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$46.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$46.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$46(props, defaultProps$46);
        }
    }["OmbreComponent$46.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$46.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$46,
                ...props.transform
            })
    }["OmbreComponent$46.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$46.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$46.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$46.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Checkerboard$2d$SKsXoUXE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$46.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$46.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$46.useEffect": ()=>{}
                })["OmbreComponent$46.useEffect"];
            }
        }
    }["OmbreComponent$46.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$46.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$46.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$46.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$46.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$46.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$46.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Checkerboard_default = OmbreComponent$46;
function computeEffectiveProps$45(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$45 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$45 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$45[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$45 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$45.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$45.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$45.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$45(props, defaultProps$45);
        }
    }["OmbreComponent$45.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$45.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$45,
                ...props.transform
            })
    }["OmbreComponent$45.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$45.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$45.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$45.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaFlow$2d$VpfgLFbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$45.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$45.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$45.useEffect": ()=>{}
                })["OmbreComponent$45.useEffect"];
            }
        }
    }["OmbreComponent$45.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$45.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$45.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$45.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$45.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$45.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$45.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var ChromaFlow_default = OmbreComponent$45;
function computeEffectiveProps$44(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$44 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$44 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$44[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$44 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$44.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$44.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$44.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$44(props, defaultProps$44);
        }
    }["OmbreComponent$44.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$44.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$44,
                ...props.transform
            })
    }["OmbreComponent$44.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$44.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$44.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$44.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ChromaticAberration$2d$CaCyXMyE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$44.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$44.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$44.useEffect": ()=>{}
                })["OmbreComponent$44.useEffect"];
            }
        }
    }["OmbreComponent$44.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$44.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$44.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$44.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$44.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$44.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$44.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var ChromaticAberration_default = OmbreComponent$44;
function computeEffectiveProps$43(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$43 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$43 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$43[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$43 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$43.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$43.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$43.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$43(props, defaultProps$43);
        }
    }["OmbreComponent$43.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$43.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$43,
                ...props.transform
            })
    }["OmbreComponent$43.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$43.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$43.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$43.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Circle$2d$BHnAmzVb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$43.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$43.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$43.useEffect": ()=>{}
                })["OmbreComponent$43.useEffect"];
            }
        }
    }["OmbreComponent$43.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$43.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$43.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$43.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$43.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$43.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$43.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Circle_default = OmbreComponent$43;
function computeEffectiveProps$42(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$42 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$42 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$42[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$42 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$42.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$42.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$42.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$42(props, defaultProps$42);
        }
    }["OmbreComponent$42.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$42.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$42,
                ...props.transform
            })
    }["OmbreComponent$42.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$42.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$42.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$42.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$CursorTrail$2d$CfVWIKok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$42.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$42.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$42.useEffect": ()=>{}
                })["OmbreComponent$42.useEffect"];
            }
        }
    }["OmbreComponent$42.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$42.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$42.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$42.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$42.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$42.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$42.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var CursorTrail_default = OmbreComponent$42;
function computeEffectiveProps$41(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$41 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$41 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$41[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$41 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$41.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$41.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$41.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$41(props, defaultProps$41);
        }
    }["OmbreComponent$41.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$41.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$41,
                ...props.transform
            })
    }["OmbreComponent$41.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$41.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$41.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$41.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DiffuseBlur$2d$GWPb8Zht$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$41.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$41.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$41.useEffect": ()=>{}
                })["OmbreComponent$41.useEffect"];
            }
        }
    }["OmbreComponent$41.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$41.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$41.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$41.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$41.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$41.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$41.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var DiffuseBlur_default = OmbreComponent$41;
function computeEffectiveProps$40(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$40 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$40 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$40[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$40 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$40.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$40.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$40.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$40(props, defaultProps$40);
        }
    }["OmbreComponent$40.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$40.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$40,
                ...props.transform
            })
    }["OmbreComponent$40.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$40.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$40.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$40.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Dither$2d$BNEeyo0u$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$40.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$40.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$40.useEffect": ()=>{}
                })["OmbreComponent$40.useEffect"];
            }
        }
    }["OmbreComponent$40.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$40.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$40.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$40.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$40.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$40.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$40.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Dither_default = OmbreComponent$40;
function computeEffectiveProps$39(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$39 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$39 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$39[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$39 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$39.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$39.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$39.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$39(props, defaultProps$39);
        }
    }["OmbreComponent$39.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$39.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$39,
                ...props.transform
            })
    }["OmbreComponent$39.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$39.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$39.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$39.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$DotGrid$2d$CRRS6nbt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$39.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$39.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$39.useEffect": ()=>{}
                })["OmbreComponent$39.useEffect"];
            }
        }
    }["OmbreComponent$39.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$39.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$39.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$39.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$39.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$39.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$39.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var DotGrid_default = OmbreComponent$39;
function computeEffectiveProps$38(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$38 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$38 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$38[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$38 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$38.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$38.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$38.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$38(props, defaultProps$38);
        }
    }["OmbreComponent$38.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$38.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$38,
                ...props.transform
            })
    }["OmbreComponent$38.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$38.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$38.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$38.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Duotone$2d$5gKND3an$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$38.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$38.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$38.useEffect": ()=>{}
                })["OmbreComponent$38.useEffect"];
            }
        }
    }["OmbreComponent$38.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$38.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$38.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$38.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$38.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$38.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$38.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Duotone_default = OmbreComponent$38;
function computeEffectiveProps$37(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$37 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$37 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$37[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$37 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$37.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$37.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$37.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$37(props, defaultProps$37);
        }
    }["OmbreComponent$37.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$37.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$37,
                ...props.transform
            })
    }["OmbreComponent$37.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$37.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$37.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$37.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FilmGrain$2d$osBGk_b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$37.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$37.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$37.useEffect": ()=>{}
                })["OmbreComponent$37.useEffect"];
            }
        }
    }["OmbreComponent$37.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$37.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$37.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$37.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$37.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$37.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$37.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var FilmGrain_default = OmbreComponent$37;
function computeEffectiveProps$36(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$36 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$36 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$36[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$36 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$36.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$36.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$36.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$36(props, defaultProps$36);
        }
    }["OmbreComponent$36.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$36.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$36,
                ...props.transform
            })
    }["OmbreComponent$36.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$36.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$36.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$36.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$FloatingParticles$2d$CULOurGT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$36.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$36.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$36.useEffect": ()=>{}
                })["OmbreComponent$36.useEffect"];
            }
        }
    }["OmbreComponent$36.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$36.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$36.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$36.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$36.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$36.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$36.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var FloatingParticles_default = OmbreComponent$36;
function computeEffectiveProps$35(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$35 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$35 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$35[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$35 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$35.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$35.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$35.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$35(props, defaultProps$35);
        }
    }["OmbreComponent$35.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$35.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$35,
                ...props.transform
            })
    }["OmbreComponent$35.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$35.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$35.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$35.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GlassTiles$2d$CA90XrNT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$35.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$35.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$35.useEffect": ()=>{}
                })["OmbreComponent$35.useEffect"];
            }
        }
    }["OmbreComponent$35.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$35.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$35.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$35.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$35.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$35.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$35.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var GlassTiles_default = OmbreComponent$35;
function computeEffectiveProps$34(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$34 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$34 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$34[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$34 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$34.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$34.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$34.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$34(props, defaultProps$34);
        }
    }["OmbreComponent$34.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$34.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$34,
                ...props.transform
            })
    }["OmbreComponent$34.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$34.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$34.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$34.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Glow$2d$D0boDIAW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$34.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$34.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$34.useEffect": ()=>{}
                })["OmbreComponent$34.useEffect"];
            }
        }
    }["OmbreComponent$34.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$34.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$34.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$34.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$34.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$34.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$34.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Glow_default = OmbreComponent$34;
function computeEffectiveProps$33(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$33 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$33 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$33[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$33 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$33.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$33.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$33.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$33(props, defaultProps$33);
        }
    }["OmbreComponent$33.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$33.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$33,
                ...props.transform
            })
    }["OmbreComponent$33.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$33.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$33.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$33.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Godrays$2d$BQsDwU26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$33.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$33.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$33.useEffect": ()=>{}
                })["OmbreComponent$33.useEffect"];
            }
        }
    }["OmbreComponent$33.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$33.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$33.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$33.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$33.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$33.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$33.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Godrays_default = OmbreComponent$33;
function computeEffectiveProps$32(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$32 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$32 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$32[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$32 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$32.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$32.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$32.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$32(props, defaultProps$32);
        }
    }["OmbreComponent$32.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$32.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$32,
                ...props.transform
            })
    }["OmbreComponent$32.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$32.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$32.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$32.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grayscale$2d$Bi$2d$XBvO_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$32.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$32.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$32.useEffect": ()=>{}
                })["OmbreComponent$32.useEffect"];
            }
        }
    }["OmbreComponent$32.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$32.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$32.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$32.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$32.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$32.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$32.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Grayscale_default = OmbreComponent$32;
function computeEffectiveProps$31(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$31 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$31 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$31[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$31 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$31.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$31.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$31.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$31(props, defaultProps$31);
        }
    }["OmbreComponent$31.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$31.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$31,
                ...props.transform
            })
    }["OmbreComponent$31.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$31.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$31.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$31.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Grid$2d$CWHxwO7R$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$31.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$31.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$31.useEffect": ()=>{}
                })["OmbreComponent$31.useEffect"];
            }
        }
    }["OmbreComponent$31.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$31.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$31.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$31.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$31.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$31.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$31.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Grid_default = OmbreComponent$31;
function computeEffectiveProps$30(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$30 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$30 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$30[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$30 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$30.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$30.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$30.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$30(props, defaultProps$30);
        }
    }["OmbreComponent$30.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$30.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$30,
                ...props.transform
            })
    }["OmbreComponent$30.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$30.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$30.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$30.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$GridDistortion$2d$CZB9w$2d$rv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$30.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$30.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$30.useEffect": ()=>{}
                })["OmbreComponent$30.useEffect"];
            }
        }
    }["OmbreComponent$30.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$30.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$30.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$30.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$30.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$30.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$30.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var GridDistortion_default = OmbreComponent$30;
function computeEffectiveProps$29(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$29 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$29 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$29[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$29 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$29.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$29.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$29.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$29(props, defaultProps$29);
        }
    }["OmbreComponent$29.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$29.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$29,
                ...props.transform
            })
    }["OmbreComponent$29.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$29.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$29.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$29.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Group$2d$C0AknFDS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$29.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$29.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$29.useEffect": ()=>{}
                })["OmbreComponent$29.useEffect"];
            }
        }
    }["OmbreComponent$29.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$29.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$29.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$29.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$29.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$29.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$29.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Group_default = OmbreComponent$29;
function computeEffectiveProps$28(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$28 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$28 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$28[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$28 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$28.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$28.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$28.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$28(props, defaultProps$28);
        }
    }["OmbreComponent$28.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$28.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$28,
                ...props.transform
            })
    }["OmbreComponent$28.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$28.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$28.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$28.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Halftone$2d$MMcLMRpL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$28.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$28.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$28.useEffect": ()=>{}
                })["OmbreComponent$28.useEffect"];
            }
        }
    }["OmbreComponent$28.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$28.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$28.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$28.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$28.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$28.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$28.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Halftone_default = OmbreComponent$28;
function computeEffectiveProps$27(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$27 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$27 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$27[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$27 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$27.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$27.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$27.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$27(props, defaultProps$27);
        }
    }["OmbreComponent$27.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$27.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$27,
                ...props.transform
            })
    }["OmbreComponent$27.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$27.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$27.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$27.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$HueShift$2d$DvOpzM7W$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$27.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$27.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$27.useEffect": ()=>{}
                })["OmbreComponent$27.useEffect"];
            }
        }
    }["OmbreComponent$27.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$27.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$27.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$27.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$27.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$27.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$27.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var HueShift_default = OmbreComponent$27;
function computeEffectiveProps$26(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$26 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$26 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$26[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$26 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$26.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$26.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$26.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$26(props, defaultProps$26);
        }
    }["OmbreComponent$26.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$26.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$26,
                ...props.transform
            })
    }["OmbreComponent$26.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$26.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$26.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$26.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ImageTexture$2d$D9OMwqAs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$26.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$26.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$26.useEffect": ()=>{}
                })["OmbreComponent$26.useEffect"];
            }
        }
    }["OmbreComponent$26.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$26.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$26.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$26.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$26.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$26.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$26.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var ImageTexture_default = OmbreComponent$26;
function computeEffectiveProps$25(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$25 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$25 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$25[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$25 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$25.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$25.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$25.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$25(props, defaultProps$25);
        }
    }["OmbreComponent$25.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$25.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$25,
                ...props.transform
            })
    }["OmbreComponent$25.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$25.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$25.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$25.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Invert$2d$Bmjbp6g6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$25.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$25.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$25.useEffect": ()=>{}
                })["OmbreComponent$25.useEffect"];
            }
        }
    }["OmbreComponent$25.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$25.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$25.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$25.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$25.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$25.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$25.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Invert_default = OmbreComponent$25;
function computeEffectiveProps$24(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$24 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$24 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$24[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$24 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$24.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$24.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$24.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$24(props, defaultProps$24);
        }
    }["OmbreComponent$24.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$24.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$24,
                ...props.transform
            })
    }["OmbreComponent$24.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$24.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$24.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$24.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearBlur$2d$B$2d$Ikurxt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$24.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$24.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$24.useEffect": ()=>{}
                })["OmbreComponent$24.useEffect"];
            }
        }
    }["OmbreComponent$24.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$24.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$24.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$24.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$24.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$24.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$24.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var LinearBlur_default = OmbreComponent$24;
function computeEffectiveProps$23(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$23 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$23 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$23[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$23 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$23.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$23.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$23.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$23(props, defaultProps$23);
        }
    }["OmbreComponent$23.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$23.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$23,
                ...props.transform
            })
    }["OmbreComponent$23.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$23.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$23.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$23.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$LinearGradient$2d$DV6UkhZk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$23.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$23.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$23.useEffect": ()=>{}
                })["OmbreComponent$23.useEffect"];
            }
        }
    }["OmbreComponent$23.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$23.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$23.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$23.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$23.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$23.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$23.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var LinearGradient_default = OmbreComponent$23;
function computeEffectiveProps$22(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$22 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$22 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$22[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$22 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$22.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$22.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$22.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$22(props, defaultProps$22);
        }
    }["OmbreComponent$22.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$22.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$22,
                ...props.transform
            })
    }["OmbreComponent$22.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$22.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$22.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$22.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Liquify$2d$W8UQNeEM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$22.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$22.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$22.useEffect": ()=>{}
                })["OmbreComponent$22.useEffect"];
            }
        }
    }["OmbreComponent$22.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$22.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$22.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$22.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$22.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$22.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$22.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Liquify_default = OmbreComponent$22;
function computeEffectiveProps$21(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$21 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$21 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$21[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$21 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$21.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$21.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$21.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$21(props, defaultProps$21);
        }
    }["OmbreComponent$21.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$21.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$21,
                ...props.transform
            })
    }["OmbreComponent$21.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$21.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$21.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$21.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Pixelate$2d$_pyYeLRP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$21.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$21.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$21.useEffect": ()=>{}
                })["OmbreComponent$21.useEffect"];
            }
        }
    }["OmbreComponent$21.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$21.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$21.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$21.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$21.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$21.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$21.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Pixelate_default = OmbreComponent$21;
function computeEffectiveProps$20(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$20 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$20 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$20[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$20 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$20.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$20.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$20.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$20(props, defaultProps$20);
        }
    }["OmbreComponent$20.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$20.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$20,
                ...props.transform
            })
    }["OmbreComponent$20.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$20.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$20.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$20.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$PolarCoordinates$2d$D63xm0oJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$20.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$20.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$20.useEffect": ()=>{}
                })["OmbreComponent$20.useEffect"];
            }
        }
    }["OmbreComponent$20.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$20.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$20.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$20.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$20.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$20.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$20.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var PolarCoordinates_default = OmbreComponent$20;
function computeEffectiveProps$19(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$19 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$19 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$19[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$19 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$19.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$19.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$19.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$19(props, defaultProps$19);
        }
    }["OmbreComponent$19.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$19.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$19,
                ...props.transform
            })
    }["OmbreComponent$19.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$19.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$19.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$19.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Posterize$2d$DIjjPS72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$19.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$19.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$19.useEffect": ()=>{}
                })["OmbreComponent$19.useEffect"];
            }
        }
    }["OmbreComponent$19.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$19.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$19.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$19.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$19.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$19.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$19.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Posterize_default = OmbreComponent$19;
function computeEffectiveProps$18(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$18 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$18 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$18[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$18 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$18.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$18.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$18.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$18(props, defaultProps$18);
        }
    }["OmbreComponent$18.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$18.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$18,
                ...props.transform
            })
    }["OmbreComponent$18.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$18.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$18.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$18.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ProgressiveBlur$2d$G$2d$s$2d$o9ic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$18.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$18.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$18.useEffect": ()=>{}
                })["OmbreComponent$18.useEffect"];
            }
        }
    }["OmbreComponent$18.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$18.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$18.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$18.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$18.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$18.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$18.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var ProgressiveBlur_default = OmbreComponent$18;
function computeEffectiveProps$17(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$17 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$17 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$17[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$17 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$17.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$17.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$17.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$17(props, defaultProps$17);
        }
    }["OmbreComponent$17.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$17.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$17,
                ...props.transform
            })
    }["OmbreComponent$17.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$17.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$17.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$17.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RadialGradient$2d$BGVqSwh0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$17.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$17.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$17.useEffect": ()=>{}
                })["OmbreComponent$17.useEffect"];
            }
        }
    }["OmbreComponent$17.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$17.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$17.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$17.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$17.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$17.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$17.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var RadialGradient_default = OmbreComponent$17;
function computeEffectiveProps$16(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$16 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$16 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$16[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$16 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$16.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$16.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$16.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$16(props, defaultProps$16);
        }
    }["OmbreComponent$16.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$16.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$16,
                ...props.transform
            })
    }["OmbreComponent$16.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$16.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$16.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$16.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$RectangularCoordinates$2d$DyHBo456$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$16.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$16.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$16.useEffect": ()=>{}
                })["OmbreComponent$16.useEffect"];
            }
        }
    }["OmbreComponent$16.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$16.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$16.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$16.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$16.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$16.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$16.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var RectangularCoordinates_default = OmbreComponent$16;
function computeEffectiveProps$15(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$15 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$15 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$15[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$15 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$15.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$15.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$15.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$15(props, defaultProps$15);
        }
    }["OmbreComponent$15.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$15.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$15,
                ...props.transform
            })
    }["OmbreComponent$15.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$15.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$15.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$15.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Ripples$2d$2FGWCZlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$15.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$15.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$15.useEffect": ()=>{}
                })["OmbreComponent$15.useEffect"];
            }
        }
    }["OmbreComponent$15.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$15.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$15.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$15.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$15.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$15.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$15.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Ripples_default = OmbreComponent$15;
function computeEffectiveProps$14(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$14 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$14 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$14[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$14 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$14.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$14.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$14.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$14(props, defaultProps$14);
        }
    }["OmbreComponent$14.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$14.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$14,
                ...props.transform
            })
    }["OmbreComponent$14.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$14.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$14.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$14.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Saturation$2d$J0nI4hmh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$14.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$14.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$14.useEffect": ()=>{}
                })["OmbreComponent$14.useEffect"];
            }
        }
    }["OmbreComponent$14.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$14.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$14.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$14.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$14.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$14.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$14.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Saturation_default = OmbreComponent$14;
function computeEffectiveProps$13(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$13 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$13 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$13[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$13 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$13.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$13.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$13.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$13(props, defaultProps$13);
        }
    }["OmbreComponent$13.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$13.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$13,
                ...props.transform
            })
    }["OmbreComponent$13.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$13.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$13.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$13.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SimplexNoise$2d$B6dtUCmn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$13.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$13.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$13.useEffect": ()=>{}
                })["OmbreComponent$13.useEffect"];
            }
        }
    }["OmbreComponent$13.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$13.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$13.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$13.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$13.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$13.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$13.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var SimplexNoise_default = OmbreComponent$13;
function computeEffectiveProps$12(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$12 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$12 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$12[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$12 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$12.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$12.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$12.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$12(props, defaultProps$12);
        }
    }["OmbreComponent$12.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$12.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$12,
                ...props.transform
            })
    }["OmbreComponent$12.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$12.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$12.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$12.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SineWave$2d$BtPf6$2d$2H$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$12.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$12.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$12.useEffect": ()=>{}
                })["OmbreComponent$12.useEffect"];
            }
        }
    }["OmbreComponent$12.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$12.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$12.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$12.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$12.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$12.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$12.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var SineWave_default = OmbreComponent$12;
function computeEffectiveProps$11(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$11 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$11 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$11[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$11 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$11.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$11.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$11.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$11(props, defaultProps$11);
        }
    }["OmbreComponent$11.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$11.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$11,
                ...props.transform
            })
    }["OmbreComponent$11.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$11.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$11.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$11.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$SolidColor$2d$CETl1cEr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$11.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$11.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$11.useEffect": ()=>{}
                })["OmbreComponent$11.useEffect"];
            }
        }
    }["OmbreComponent$11.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$11.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$11.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$11.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$11.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$11.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$11.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var SolidColor_default = OmbreComponent$11;
function computeEffectiveProps$10(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$10 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$10 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$10[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$10 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$10.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$10.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$10.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$10(props, defaultProps$10);
        }
    }["OmbreComponent$10.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$10.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$10,
                ...props.transform
            })
    }["OmbreComponent$10.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$10.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$10.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$10.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spherize$2d$BwvUcorJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$10.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$10.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$10.useEffect": ()=>{}
                })["OmbreComponent$10.useEffect"];
            }
        }
    }["OmbreComponent$10.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$10.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$10.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$10.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$10.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$10.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$10.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Spherize_default = OmbreComponent$10;
function computeEffectiveProps$9(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$9 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$9 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$9[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$9 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$9.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$9.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$9.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$9(props, defaultProps$9);
        }
    }["OmbreComponent$9.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$9.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$9,
                ...props.transform
            })
    }["OmbreComponent$9.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$9.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$9.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$9.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Spiral$2d$DmJWmUmr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$9.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$9.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$9.useEffect": ()=>{}
                })["OmbreComponent$9.useEffect"];
            }
        }
    }["OmbreComponent$9.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$9.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$9.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$9.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$9.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$9.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$9.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Spiral_default = OmbreComponent$9;
function computeEffectiveProps$8(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$8 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$8 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$8[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$8 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$8.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$8.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$8.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$8(props, defaultProps$8);
        }
    }["OmbreComponent$8.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$8.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$8,
                ...props.transform
            })
    }["OmbreComponent$8.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$8.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$8.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$8.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Strands$2d$CV1oCmHx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$8.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$8.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$8.useEffect": ()=>{}
                })["OmbreComponent$8.useEffect"];
            }
        }
    }["OmbreComponent$8.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$8.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$8.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$8.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$8.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$8.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$8.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Strands_default = OmbreComponent$8;
function computeEffectiveProps$7(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$7 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$7 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$7[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$7 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$7.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$7.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$7.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$7(props, defaultProps$7);
        }
    }["OmbreComponent$7.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$7.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$7,
                ...props.transform
            })
    }["OmbreComponent$7.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$7.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$7.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$7.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Stretch$2d$pl$2d$Cn2F8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$7.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$7.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$7.useEffect": ()=>{}
                })["OmbreComponent$7.useEffect"];
            }
        }
    }["OmbreComponent$7.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$7.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$7.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$7.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$7.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$7.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$7.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Stretch_default = OmbreComponent$7;
function computeEffectiveProps$6(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$6 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$6 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$6[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$6 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$6.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$6.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$6.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$6(props, defaultProps$6);
        }
    }["OmbreComponent$6.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$6.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$6,
                ...props.transform
            })
    }["OmbreComponent$6.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$6.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$6.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$6.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Swirl$2d$D65vXLDw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$6.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$6.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$6.useEffect": ()=>{}
                })["OmbreComponent$6.useEffect"];
            }
        }
    }["OmbreComponent$6.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$6.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$6.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$6.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$6.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$6.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$6.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Swirl_default = OmbreComponent$6;
function computeEffectiveProps$5(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$5 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$5 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$5[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$5 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$5.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$5.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$5.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$5(props, defaultProps$5);
        }
    }["OmbreComponent$5.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$5.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$5,
                ...props.transform
            })
    }["OmbreComponent$5.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$5.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$5.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$5.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$TiltShift$2d$CFcK6Hzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$5.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$5.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$5.useEffect": ()=>{}
                })["OmbreComponent$5.useEffect"];
            }
        }
    }["OmbreComponent$5.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$5.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$5.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$5.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$5.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$5.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$5.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var TiltShift_default = OmbreComponent$5;
function computeEffectiveProps$4(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$4 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$4 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$4[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$4 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$4.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$4.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$4.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$4(props, defaultProps$4);
        }
    }["OmbreComponent$4.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$4.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$4,
                ...props.transform
            })
    }["OmbreComponent$4.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$4.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$4.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$4.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Tritone$2d$EmnjV2rX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$4.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$4.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$4.useEffect": ()=>{}
                })["OmbreComponent$4.useEffect"];
            }
        }
    }["OmbreComponent$4.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$4.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$4.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$4.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$4.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$4.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$4.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Tritone_default = OmbreComponent$4;
function computeEffectiveProps$3(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$3 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$3 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$3[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$3 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$3.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$3.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$3.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$3(props, defaultProps$3);
        }
    }["OmbreComponent$3.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$3.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$3,
                ...props.transform
            })
    }["OmbreComponent$3.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$3.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$3.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$3.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Twirl$2d$HSMyRx5I$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$3.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$3.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$3.useEffect": ()=>{}
                })["OmbreComponent$3.useEffect"];
            }
        }
    }["OmbreComponent$3.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$3.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$3.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$3.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$3.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$3.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$3.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Twirl_default = OmbreComponent$3;
function computeEffectiveProps$2(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$2 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$2 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$2[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$2 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$2.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$2.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$2.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$2(props, defaultProps$2);
        }
    }["OmbreComponent$2.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$2.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$2,
                ...props.transform
            })
    }["OmbreComponent$2.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$2.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$2.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$2.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$Vibrance$2d$BI5q7_Wt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$2.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$2.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$2.useEffect": ()=>{}
                })["OmbreComponent$2.useEffect"];
            }
        }
    }["OmbreComponent$2.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$2.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$2.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$2.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$2.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$2.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$2.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var Vibrance_default = OmbreComponent$2;
function computeEffectiveProps$1(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM$1 = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps$1 = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps$1[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent$1 = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$1.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent$1.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$1.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps$1(props, defaultProps$1);
        }
    }["OmbreComponent$1.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$1.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM$1,
                ...props.transform
            })
    }["OmbreComponent$1.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent$1.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent$1.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$1.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$WaveDistortion$2d$DG8GO_l8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent$1.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent$1.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent$1.useEffect": ()=>{}
                })["OmbreComponent$1.useEffect"];
            }
        }
    }["OmbreComponent$1.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$1.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent$1.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent$1.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent$1.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent$1.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent$1.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var WaveDistortion_default = OmbreComponent$1;
function computeEffectiveProps(props, defaultProps$55) {
    let baseProps = {
        ...defaultProps$55
    };
    for (const [key, value] of Object.entries(props))if (key !== "children" && key !== "ref" && value !== void 0) baseProps[key] = value;
    return baseProps;
}
var DEFAULT_TRANSFORM = {
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    scale: 1,
    anchorX: .5,
    anchorY: .5,
    edges: "transparent"
};
var defaultProps = {
    blendMode: "normal",
    renderOrder: 0,
    visible: true
};
try {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props) Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].props).forEach((param)=>{
        let [key, config] = param;
        const propConfig = config;
        if (propConfig && typeof propConfig === "object" && "default" in propConfig) defaultProps[key] = propConfig.default;
    });
} catch (e) {
    console.warn("Error extracting default props:", e);
}
const OmbreComponent = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OmbreContext);
    if (!context) throw new Error("Shader components must be used inside an <Shader> component or another shader component");
    const { ombreParentId: parentId, ombreNodeRegister: parentRegister, ombreUniformUpdate: parentUniformUpdate, ombreMetadataUpdate: parentMetadataUpdate } = context;
    const instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent.useMemo[instanceId]": ()=>{
            return props.id || "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].name.toLowerCase(), "_").concat(Math.random().toString(36).substring(7));
        }
    }["OmbreComponent.useMemo[instanceId]"], [
        props.id
    ]);
    const effectiveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent.useMemo[effectiveProps]": ()=>{
            return computeEffectiveProps(props, defaultProps);
        }
    }["OmbreComponent.useMemo[effectiveProps]"], [
        props
    ]);
    const effectiveTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent.useMemo[effectiveTransform]": ()=>({
                ...DEFAULT_TRANSFORM,
                ...props.transform
            })
    }["OmbreComponent.useMemo[effectiveTransform]"], [
        props.transform
    ]);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (uniformsRef.current === null) uniformsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUniformsMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"], effectiveProps, instanceId);
    const childContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OmbreComponent.useMemo[childContextValue]": ()=>{
            return {
                ...context,
                ombreParentId: instanceId
            };
        }
    }["OmbreComponent.useMemo[childContextValue]"], [
        context,
        instanceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                const metadata = {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                };
                parentRegister(instanceId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"].fragmentNode, parentId, metadata, uniformsRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shaders$40$2$2e$2$2e$29$2f$node_modules$2f$shaders$2f$dist$2f$core$2f$ZoomBlur$2d$C01oGwwG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__componentDefinition$3e$__["componentDefinition"]);
                return ({
                    "OmbreComponent.useEffect": ()=>{
                        parentRegister(instanceId, null, null, null, null);
                    }
                })["OmbreComponent.useEffect"];
            } catch (error) {
                console.error("Error registering shader node:", error);
                return ({
                    "OmbreComponent.useEffect": ()=>{}
                })["OmbreComponent.useEffect"];
            }
        }
    }["OmbreComponent.useEffect"], [
        instanceId,
        parentId,
        parentRegister
    ]);
    const prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent.useEffect": ()=>{
            if (!uniformsRef.current) return;
            try {
                Object.entries(uniformsRef.current).forEach({
                    "OmbreComponent.useEffect": (param)=>{
                        let [propName, uniformData] = param;
                        if (!uniformData || typeof uniformData !== "object") return;
                        const { uniform, transform } = uniformData;
                        if ((uniform === null || uniform === void 0 ? void 0 : uniform.value) !== void 0 && propName in effectiveProps) {
                            const newValue = effectiveProps[propName];
                            if (newValue !== prevPropsRef.current[propName]) {
                                parentUniformUpdate(instanceId, propName, newValue);
                                prevPropsRef.current[propName] = newValue;
                            }
                        }
                    }
                }["OmbreComponent.useEffect"]);
            } catch (error) {
                console.error("Error updating uniforms:", error);
            }
        }
    }["OmbreComponent.useEffect"], [
        effectiveProps,
        instanceId,
        parentUniformUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmbreComponent.useEffect": ()=>{
            try {
                parentMetadataUpdate(instanceId, {
                    blendMode: props.blendMode || "normal",
                    opacity: props.opacity,
                    visible: props.visible === false ? false : true,
                    id: props.id,
                    mask: props.maskSource ? {
                        source: props.maskSource,
                        type: props.maskType || "alpha"
                    } : void 0,
                    renderOrder: props.renderOrder || 0,
                    transform: effectiveTransform
                });
            } catch (error) {
                console.error("Error updating metadata:", error);
            }
        }
    }["OmbreComponent.useEffect"], [
        props.blendMode,
        props.opacity,
        props.visible,
        props.maskSource,
        props.maskType,
        props.renderOrder,
        props.id,
        effectiveTransform,
        instanceId,
        parentMetadataUpdate
    ]);
    if (props.ref && typeof props.ref === "function") try {
        props.ref(null);
    } catch (e) {}
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OmbreContext.Provider, {
        value: childContextValue,
        children: props.children
    });
};
var ZoomBlur_default = OmbreComponent;
;
}),
]);

//# sourceMappingURL=594eb_shaders_dist_react_ba8f66a1._.js.map