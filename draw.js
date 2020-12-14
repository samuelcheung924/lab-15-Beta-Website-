function draw() {
          var sketch = document.getElementById("sketch");
          var context = sketch.getContext("2d");

          const image = new Image();
          image.src = "scheung3.jpg";
          image.onload = () => context.drawImage(image, 650, 100);

          context.beginPath();
          context.strokeStyle = "#A6ABBC";
          context.strokeRect(630, 80, 660, 660);
          context.strokeRect(635, 85, 650, 650);
          context.strokeRect(640, 90, 640, 640);
          context.strokeRect(645, 95, 630, 630);
          context.closePath();
        }