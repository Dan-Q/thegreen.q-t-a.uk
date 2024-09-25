var APP_DATA = {
  "scenes": [
    {
      "id": "0-north-corner",
      "name": "North Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9108601088254495,
          "pitch": 0.28461954178334636,
          "rotation": 0,
          "target": "1-end-of-swings"
        },
        {
          "yaw": 0.3668752186692199,
          "pitch": 0.1392362523602717,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": -0.8212757052189303,
          "pitch": 0.11672202215669714,
          "rotation": 0,
          "target": "4-east-corner"
        },
        {
          "yaw": -0.29045551178655415,
          "pitch": -0.04638086629174154,
          "rotation": 0,
          "target": "5-top-of-steps"
        },
        {
          "yaw": -0.1612335456490399,
          "pitch": -0.11416971898768935,
          "rotation": 0,
          "target": "6-mezzanine"
        },
        {
          "yaw": -0.49235124667613306,
          "pitch": -0.2704622721180723,
          "rotation": 0,
          "target": "7-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-end-of-swings",
      "name": "End of Swings",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3282597404144845,
          "pitch": 0.255981964650033,
          "rotation": 0,
          "target": "0-north-corner"
        },
        {
          "yaw": 0.6625940128957986,
          "pitch": 0.26064307507939155,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": -0.14612090359873875,
          "pitch": -0.13176443775404678,
          "rotation": 0,
          "target": "6-mezzanine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-end-of-slide",
      "name": "End of Slide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8340919061806389,
          "pitch": 0.186534516462455,
          "rotation": 0,
          "target": "1-end-of-swings"
        },
        {
          "yaw": -0.08129796211993323,
          "pitch": 0.12977186283715625,
          "rotation": 0,
          "target": "0-north-corner"
        },
        {
          "yaw": 1.2202886156124482,
          "pitch": 0.1890079819167898,
          "rotation": 0,
          "target": "3-climbing-wall"
        },
        {
          "yaw": 0.4461995041439444,
          "pitch": -0.18016227156640596,
          "rotation": 0,
          "target": "6-mezzanine"
        },
        {
          "yaw": 0.5159546124943777,
          "pitch": -0.30849173998230484,
          "rotation": 0,
          "target": "7-bridge"
        },
        {
          "yaw": 0.8012238555753814,
          "pitch": -0.07568553527166522,
          "rotation": 0,
          "target": "8-balconette"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-climbing-wall",
      "name": "Climbing Wall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.439851066104719,
          "pitch": 0.1636127260804212,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": -0.7311350424973799,
          "pitch": 0.08747307349204192,
          "rotation": 0,
          "target": "1-end-of-swings"
        },
        {
          "yaw": 0.31404384906149296,
          "pitch": -0.08915891424468647,
          "rotation": 0,
          "target": "8-balconette"
        },
        {
          "yaw": 0.7375623477285611,
          "pitch": 0.2030395115283703,
          "rotation": 0,
          "target": "4-east-corner"
        },
        {
          "yaw": -0.12190849693701367,
          "pitch": -0.3829999223851619,
          "rotation": 0,
          "target": "7-bridge"
        },
        {
          "yaw": -0.4249729353453162,
          "pitch": -0.1754547500521788,
          "rotation": 0,
          "target": "6-mezzanine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-east-corner",
      "name": "East Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.758328846319877,
          "pitch": 0.1708925494803779,
          "rotation": 0,
          "target": "3-climbing-wall"
        },
        {
          "yaw": 0.774709320084666,
          "pitch": 0.14899631842350836,
          "rotation": 0,
          "target": "0-north-corner"
        },
        {
          "yaw": -0.2298218310864648,
          "pitch": 0.07905634745975654,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": -0.4175383394947758,
          "pitch": -0.07245344783888186,
          "rotation": 0,
          "target": "8-balconette"
        },
        {
          "yaw": 0.048931390424446164,
          "pitch": -0.3347343567031018,
          "rotation": 0,
          "target": "7-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-top-of-steps",
      "name": "Top of Steps",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.791961096761078,
        "pitch": 0.22038876077462533,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1737531421180947,
          "pitch": 0.4023211702376557,
          "rotation": 0,
          "target": "0-north-corner"
        },
        {
          "yaw": 1.1059233236081365,
          "pitch": 0.3333112314725888,
          "rotation": 0,
          "target": "6-mezzanine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mezzanine",
      "name": "Mezzanine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6971994037833813,
          "pitch": 0.6385270169969122,
          "rotation": 0,
          "target": "5-top-of-steps"
        },
        {
          "yaw": -0.986251327470324,
          "pitch": 0.3567881590933606,
          "rotation": 0,
          "target": "0-north-corner"
        },
        {
          "yaw": -3.04341943454855,
          "pitch": 0.607958134514579,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": 0.25085549545897123,
          "pitch": -0.04106421816819683,
          "rotation": 0,
          "target": "7-bridge"
        },
        {
          "yaw": 1.4222955914535174,
          "pitch": 0.5468914847877056,
          "rotation": 0,
          "target": "3-climbing-wall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bridge",
      "name": "Bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.10773296565134949,
        "pitch": 0.20774762610947306,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06081090872818251,
          "pitch": 0.41162928322781767,
          "rotation": 0,
          "target": "8-balconette"
        },
        {
          "yaw": 2.250680387971845,
          "pitch": 0.9066609395493135,
          "rotation": 0,
          "target": "6-mezzanine"
        },
        {
          "yaw": 1.9897084206078253,
          "pitch": 0.4641330127211525,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": -2.3205688391944665,
          "pitch": 0.50506348611626,
          "rotation": 0,
          "target": "0-north-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balconette",
      "name": "Balconette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1421753441590674,
        "pitch": -0.03228160539942415,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24158341636721659,
          "pitch": -0.4524010529216351,
          "rotation": 0,
          "target": "7-bridge"
        },
        {
          "yaw": -1.620644827986398,
          "pitch": 0.6484041773712157,
          "rotation": 0,
          "target": "3-climbing-wall"
        },
        {
          "yaw": -0.5510297423351496,
          "pitch": 0.2501580281197242,
          "rotation": 0,
          "target": "2-end-of-slide"
        },
        {
          "yaw": 2.294948394388041,
          "pitch": 0.653504176877675,
          "rotation": 0,
          "target": "4-east-corner"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Playframe at The Green",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
