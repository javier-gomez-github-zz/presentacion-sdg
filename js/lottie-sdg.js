var animationData = {
    "v": "5.3.4", "fr": 50, "ip": 0, "op": 205, "w": 800, "h": 800, "nm": "Comp 1", "ddd": 0, "assets": [], "layers": [{
        "ddd": 0,
        "ind": 2,
        "ty": 4,
        "nm": "Circulo Solido",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [399.074, 400.926, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [27.722, 27.722], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [1, 1, 1, 1], "ix": 3},
                "o": {"a": 0, "k": 100, "ix": 4},
                "w": {"a": 0, "k": 2, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [0.615042865276, 0.615042865276, 0.615042865276, 1], "ix": 4},
                "o": {"a": 0, "k": 60, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-126.005, 163.526], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 1,
                        "s": [79, 79],
                        "e": [122, 122]
                    }, {"t": 11}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 0,
        "op": 13,
        "st": -230,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 3,
        "ty": 4,
        "nm": "B grande 2",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [297.356, 352.53, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {
                "a": 1,
                "k": [{
                    "i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]},
                    "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]},
                    "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    "t": 5,
                    "s": [79.158, 79.158, 100],
                    "e": [117.006, 117.006, 100]
                }, {"t": 23}],
                "ix": 6
            }
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [228.272, 228.272], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.837040424347, 0.837040424347, 0.837040424347, 1], "ix": 3},
                "o": {"a": 0, "k": 90, "ix": 4},
                "w": {"a": 0, "k": 17, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-6.041, -23.546], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {"a": 0, "k": [36.992, 36.992], "ix": 3},
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 5,
        "op": 24,
        "st": -139,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 4,
        "ty": 4,
        "nm": "Capa de formas 1",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [-96.945, 830.828, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [99.725, 99.725, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [214.922, 214.922], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.875658690929, 0.875658690929, 0.875658690929, 1], "ix": 3},
                "o": {"a": 0, "k": 87, "ix": 4},
                "w": {"a": 0, "k": 12, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [455.586, -528.453], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 43,
                        "s": [93.215, 94.07],
                        "e": [96.215, 97.097]
                    }, {"t": 63}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 40,
        "op": 64,
        "st": -51,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 5,
        "ty": 4,
        "nm": "Capa de formas 2",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [281.996, 471.996, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {
                "a": 1,
                "k": [{
                    "i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]},
                    "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]},
                    "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    "t": 57,
                    "s": [97.037, 97.037, 100],
                    "e": [105.037, 105.037, 100]
                }, {"t": 76}],
                "ix": 6
            }
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [96.766, 96.766], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.878431379795, 0.878431379795, 0.878431379795, 1], "ix": 3},
                "o": {"a": 0, "k": 100, "ix": 4},
                "w": {"a": 0, "k": 10, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-0.117, -4.504], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {"a": 0, "k": [104.23, 104.23], "ix": 3},
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 55,
        "op": 77,
        "st": -62,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 6,
        "ty": 4,
        "nm": "Capa de formas 3",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [-106, 452.154, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [35.691, 35.691], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.878431372549, 0.878431372549, 0.878431372549, 1], "ix": 3},
                "o": {"a": 0, "k": 100, "ix": 4},
                "w": {"a": 0, "k": 0, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [0.60356926918, 0.60356926918, 0.60356926918, 1], "ix": 4},
                "o": {"a": 0, "k": 89, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [597.17, -101.213], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 69,
                        "s": [92.919, 89.159],
                        "e": [181.702, 174.35]
                    }, {"t": 89}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 69,
        "op": 90,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 7,
        "ty": 4,
        "nm": "Capa de formas 4",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [400, 402, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [42.836, 43.41], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.78391546011, 0.78391546011, 0.78391546011, 1], "ix": 3},
                "o": {"a": 0, "k": 84, "ix": 4},
                "w": {"a": 0, "k": 2, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [53, 142.545], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 80,
                        "s": [111.163, 111.163],
                        "e": [189.163, 189.163]
                    }, {"t": 103}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 80,
        "op": 104,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 8,
        "ty": 4,
        "nm": "B grande 3",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [390.779, 381.966, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [90.006, 90.006, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [228.272, 228.272], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.837040424347, 0.837040424347, 0.837040424347, 1], "ix": 3},
                "o": {"a": 0, "k": 100, "ix": 4},
                "w": {"a": 0, "k": 7, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-24.56, -76.061], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 94,
                        "s": [90, 90],
                        "e": [100, 100]
                    }, {"t": 105}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 92,
        "op": 106,
        "st": -44,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 9,
        "ty": 4,
        "nm": "Capa de formas 5",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [396.5, 403, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [97.511, 99.343, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [13.822, 13.822], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.878431372549, 0.878431372549, 0.878431372549, 1], "ix": 3},
                "o": {"a": 0, "k": 100, "ix": 4},
                "w": {"a": 0, "k": 0, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [0.839215695858, 0.839215695858, 0.839215695858, 1], "ix": 4},
                "o": {"a": 0, "k": 79, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-126.937, 161.837], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 105,
                        "s": [77, 77],
                        "e": [253, 253]
                    }, {"t": 119}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 104,
        "op": 123,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 10,
        "ty": 4,
        "nm": "Capa de formas 6",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [401.097, 400.048, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog.",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite)",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }, {
            "ty": 5,
            "nm": "Fundido inter.+exter. - fotog. 2",
            "np": 4,
            "mn": "ADBE CM FadeInOutFrames",
            "ix": 3,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Dur. fundido interno (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0001",
                "ix": 1,
                "v": {"a": 0, "k": 15, "ix": 1}
            }, {
                "ty": 0,
                "nm": "Dur. fundido externo (fotog.)",
                "mn": "ADBE CM FadeInOutFrames-0002",
                "ix": 2,
                "v": {"a": 0, "k": 15, "ix": 2}
            }]
        }, {
            "ty": 5,
            "nm": "(Solid Composite) 2",
            "np": 6,
            "mn": "ADBE Solid Composite",
            "ix": 4,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Opacidad de origen",
                "mn": "ADBE Solid Composite-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1,
                    "x": "var $bm_rt;\nvar fadeInDuration, fadeOutDuration, fadeInOpacity, fadeOutOpacity;\nfadeInDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido interno (fotog.)'));\nfadeOutDuration = mul(thisComp.frameDuration, effect('Fundido inter.+exter. - fotog.')('Dur. fundido externo (fotog.)'));\nfadeInOpacity = linear(time, inPoint, sum(sum(inPoint, fadeInDuration), 0.001), 0, 100);\nfadeOutOpacity = linear(time, sub(sub(outPoint, fadeOutDuration), 0.001), outPoint, 100, 0);\n$bm_rt = div(mul(fadeInOpacity, fadeOutOpacity), 100);"
                }
            }, {
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Solid Composite-0002",
                "ix": 2,
                "v": {"a": 0, "k": [1, 1, 1, 1], "ix": 2}
            }, {
                "ty": 0,
                "nm": "Opacidad",
                "mn": "ADBE Solid Composite-0003",
                "ix": 3,
                "v": {"a": 0, "k": 0, "ix": 3}
            }, {
                "ty": 7,
                "nm": "Modo de fusión",
                "mn": "ADBE Solid Composite-0004",
                "ix": 4,
                "v": {"a": 0, "k": 1, "ix": 4}
            }]
        }],
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [68.607, 68.607], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.723008573055, 0.72076022625, 0.72076022625, 1], "ix": 3},
                "o": {"a": 0, "k": 100, "ix": 4},
                "w": {"a": 0, "k": 6, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-108.57, -74.49], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {"x": [0.833, 0.833], "y": [0.833, 0.833]},
                        "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]},
                        "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        "t": 116,
                        "s": [94.823, 94.823],
                        "e": [137.823, 137.823]
                    }, {"t": 128}],
                    "ix": 3
                },
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 116,
        "op": 134,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 11,
        "ty": 4,
        "nm": "Capa de formas 7",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [400, 400, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
        },
        "ao": 0,
        "shapes": [{
            "ty": "gr",
            "it": [{
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [31.93, 14.474], "ix": 2},
                "p": {"a": 0, "k": [0, 0], "ix": 3},
                "nm": "Trazado elíptico 1",
                "mn": "ADBE Vector Shape - Ellipse",
                "hd": false
            }, {
                "ty": "st",
                "c": {"a": 0, "k": [0.878431372549, 0.878431372549, 0.878431372549, 1], "ix": 3},
                "o": {"a": 0, "k": 0, "ix": 4},
                "w": {"a": 0, "k": 10, "ix": 5},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "ml2": {"a": 0, "k": 4, "ix": 8},
                "nm": "Trazo 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                "o": {"a": 0, "k": 0, "ix": 5},
                "r": 1,
                "nm": "Relleno 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {"a": 0, "k": [-343.144, 376.831], "ix": 2},
                "a": {"a": 0, "k": [0, 0], "ix": 1},
                "s": {"a": 0, "k": [100, 100], "ix": 3},
                "r": {"a": 0, "k": 0, "ix": 6},
                "o": {"a": 0, "k": 100, "ix": 7},
                "sk": {"a": 0, "k": 0, "ix": 4},
                "sa": {"a": 0, "k": 0, "ix": 5},
                "nm": "Transformar"
            }],
            "nm": "Elipse 1",
            "np": 3,
            "cix": 2,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 143,
        "op": 205,
        "st": -134,
        "bm": 0
    }], "markers": []
};
var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData
};
lottie.loadAnimation(params);