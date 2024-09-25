var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-room-door",
      "name": "Dining Room Door",
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
          "yaw": -1.1306631570316803,
          "pitch": 0.09458591216835543,
          "rotation": 0,
          "target": "1-back-door"
        },
        {
          "yaw": 0.17858869837785996,
          "pitch": 0.1722237502199988,
          "rotation": 0,
          "target": "2-kitchen-table"
        },
        {
          "yaw": 0.4257260935049043,
          "pitch": -0.01815116018188334,
          "rotation": 0,
          "target": "3-butchers-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-back-door",
      "name": "Back Door",
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
          "yaw": 0.9612514546243691,
          "pitch": 0.22603625035647212,
          "rotation": 0,
          "target": "0-dining-room-door"
        },
        {
          "yaw": 0.13661159779815257,
          "pitch": -0.0054502819305692896,
          "rotation": 0,
          "target": "2-kitchen-table"
        },
        {
          "yaw": -0.1700090532633709,
          "pitch": -0.08657514242470477,
          "rotation": 0,
          "target": "3-butchers-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-table",
      "name": "Kitchen Table",
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
        "yaw": 0.2877912118203234,
        "pitch": 0.4744763244554928,
        "fov": 1.3157234426481386
      },
      "linkHotspots": [
        {
          "yaw": 0.789325337796015,
          "pitch": 0.22493854952577053,
          "rotation": 0,
          "target": "3-butchers-block"
        },
        {
          "yaw": -1.7152350694226683,
          "pitch": 0.3050234488108572,
          "rotation": 0,
          "target": "1-back-door"
        },
        {
          "yaw": 3.09799881671945,
          "pitch": 0.4530318350552296,
          "rotation": 0,
          "target": "0-dining-room-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-butchers-block",
      "name": "Butcher's Block",
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
        "yaw": 0.043457189444476185,
        "pitch": 0.2754247474129201,
        "fov": 1.3157234426481386
      },
      "linkHotspots": [
        {
          "yaw": -1.0202787135343634,
          "pitch": 0.22455468820059643,
          "rotation": 0,
          "target": "2-kitchen-table"
        },
        {
          "yaw": -0.6516993636871007,
          "pitch": 0.21084903475991723,
          "rotation": 0,
          "target": "1-back-door"
        },
        {
          "yaw": -1.3884008157582954,
          "pitch": 0.22777403137846264,
          "rotation": 0,
          "target": "0-dining-room-door"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Green - Kitchen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
