var APP_DATA = {
  "scenes": [
    {
      "id": "0-roadside",
      "name": "Roadside",
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
          "yaw": -0.28023147840663043,
          "pitch": 0.07719439003951578,
          "rotation": 0,
          "target": "1-driveway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-driveway",
      "name": "Driveway",
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
        "yaw": 0.527960867339182,
        "pitch": 0.08044835689964103,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3644888196395186,
          "pitch": 0.07338291330395563,
          "rotation": 0,
          "target": "0-roadside"
        },
        {
          "yaw": -0.2622730941968143,
          "pitch": 0.0069205211927201304,
          "rotation": 0,
          "target": "2-front-lawn"
        },
        {
          "yaw": 1.812209243134574,
          "pitch": 0.036895472604911106,
          "rotation": 0,
          "target": "7-behind-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-lawn",
      "name": "Front Lawn",
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
          "yaw": 2.814091839274499,
          "pitch": 0.05405402768323597,
          "rotation": 0,
          "target": "1-driveway"
        },
        {
          "yaw": 0.31623744275171006,
          "pitch": -0.008018305442853091,
          "rotation": 0,
          "target": "3-side-lawn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-side-lawn",
      "name": "Side Lawn",
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
        "yaw": 2.12918027740961,
        "pitch": 0.12004716215666988,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1464155893482184,
          "pitch": 0.03911023026247307,
          "rotation": 0,
          "target": "4-bridge"
        },
        {
          "yaw": -2.82918499576202,
          "pitch": 0.173465283898544,
          "rotation": 0,
          "target": "5-rear-corner"
        },
        {
          "yaw": -1.5586160999256116,
          "pitch": 0.04377029799673693,
          "rotation": 0,
          "target": "2-front-lawn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bridge",
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
        "yaw": 1.428989360601376,
        "pitch": 0.013937382648551377,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0658797900537245,
          "pitch": 0.11175237646870606,
          "rotation": 0,
          "target": "3-side-lawn"
        },
        {
          "yaw": 2.987166377416873,
          "pitch": 0.11860801521648767,
          "rotation": 0,
          "target": "5-rear-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-rear-corner",
      "name": "Rear Corner",
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
          "yaw": -0.645360026141315,
          "pitch": 0.007676685835587449,
          "rotation": 0,
          "target": "4-bridge"
        },
        {
          "yaw": -1.552903123559144,
          "pitch": 0.05550863224246427,
          "rotation": 0,
          "target": "3-side-lawn"
        },
        {
          "yaw": 2.4494660320359376,
          "pitch": 0.08571794752547923,
          "rotation": 0,
          "target": "6-rear-decking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-rear-decking",
      "name": "Rear Decking",
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
          "yaw": -3.0577580676868,
          "pitch": 0.10608035601566712,
          "rotation": 0,
          "target": "5-rear-corner"
        },
        {
          "yaw": 0.23900320292226773,
          "pitch": 0.04614538374477384,
          "rotation": 0,
          "target": "7-behind-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-behind-garage",
      "name": "Behind Garage",
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
        "yaw": -2.0440411323450327,
        "pitch": 0.07085678375070081,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.47536359985169,
          "pitch": 0.0112524811788699,
          "rotation": 0,
          "target": "1-driveway"
        },
        {
          "yaw": -1.0106205263555346,
          "pitch": 0.037217690696561334,
          "rotation": 0,
          "target": "6-rear-decking"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
