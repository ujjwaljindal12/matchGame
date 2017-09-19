var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    var numCreated = 0;
    var theRightSide = document.getElementById("rightSide");
    var theBody = document.getElementsByTagName("body")[0];


    function generateFaces() {

        while (numCreated < numberOfFaces) {
            numCreated += 1;
            var img = document.createElement("img");
            img.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";

            var top_position = Math.random() * 400;
            var left_position = Math.random() * 400;
            img.style.top = top_position + "px";
            img.style.left = left_position + "px";

            theLeftSide.appendChild(img);

        }
        var leftSideImages = theLeftSide.cloneNode(true);

        theLeftSide.lastChild.onclick= function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            numCreated = 0;

            var leftNode = document.getElementById("leftSide");
            while (leftNode.firstChild) {
                leftNode.removeChild(leftNode.firstChild);
                }

            var rightNode = document.getElementById("rightSide");
            while (rightNode.firstChild) {
                rightNode.removeChild(rightNode.firstChild);
                }
            generateFaces();
        };

        theBody.onclick = function gameOver() {
            alert("Game Over!");
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
            };


        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
    }