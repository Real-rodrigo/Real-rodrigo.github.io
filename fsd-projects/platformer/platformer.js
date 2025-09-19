$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 700, 1400, 40, "red");
    createPlatform(300, 570, 300, 40, "red");
    createPlatform(790, 170, 510, 40, "red");
    createPlatform(1100, 570, 100, 40, "red");
    createPlatform(900, 570, 100, 40, "red");
    createPlatform(900, 450, 300, 20, "red");
    createPlatform(1200, 350, 100, 20, "red");
    createPlatform(100, 440, 240, 20, "red");
    createPlatform(500, 375, 300, 20, "red");
    createPlatform(100, 170, 500, 40, "red");

    createPlatform(370, 500, 30, 70, "blue");
    createPlatform(500, 500, 30, 70, "blue");
    createPlatform(670, 305, 30, 70, "blue");
    createPlatform(1050, 210, 30, 120, "blue");
    createPlatform(740, 630, 30, 70, "blue");
    createPlatform(850, 130, 40, 40, "blue");
    createPlatform(320, 130, 40, 40, "blue");


    // TODO 3 - Create Collectables
    createCollectable("database", 430, 500);
    createCollectable("diamond", 1150, 120);
    createCollectable("steve", 1100, 120);
    createCollectable("max", 100, 390);
    createCollectable("grace", 100, 120);
    
    // TODO 4 - Create Cannons
    createCannon("top", 1100, 600);
    createCannon("top", 1300, 600);
    createCannon("top", 260, 600);
    createCannon("left", 210, 1300);
    createCannon("right", 523, 1100);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
