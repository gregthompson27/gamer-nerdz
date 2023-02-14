(function(window, _) {
    window.myLibraryName = window.myLibraryName || {
      numz: {
        getDistance(pointA, pointB) {
          const distanceX = pointB.x - pointA.x
          const distanceY = pointB.y - pointA.y
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
          return distance;
        }
      },
      phyz: {},
    };
  }(window, window._));