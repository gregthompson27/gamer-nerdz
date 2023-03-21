(function(window, _) {
    window.gamerNerdz = window.gamerNerdz || {
      numz: {
        getDistance(pointA, pointB) {
          const distanceX = pointB.x - pointA.x
          const distanceY = pointB.y - pointA.y
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
          return distance;
        },
        degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        },
        radiansToDegrees(radians) {
          return radians * 180 / Math.PI;
        },
        getAngleDegrees(pointA, pointB) {
          const distanceX = pointB.x - pointA.x;
          const distanceY = pointB.y - pointA.y;
          
          const radians = Math.atan2(distanceY, distanceX);
          const degrees = radians * 180 / Math.PI;
          
          return degrees;
        }
      },
      phyz: {},
    };
  }(window, window._));