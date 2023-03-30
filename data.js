var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.2938967594581765,
        "pitch": 0.37221095250478875,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.1059272234301627,
          "pitch": 0.019520397670598655,
          "rotation": 0,
          "target": "1-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-",
      "name": "Bedroom ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.17400524567010578,
        "pitch": 0.30936934573086106,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -3.0244725157594363,
          "pitch": 0.09838211185834211,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ulysis",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
