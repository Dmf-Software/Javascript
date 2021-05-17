var width = 0;
var height = 0;
//Função para redimensionar a GridView toda vez que o navegador for redimensionado.
            function displayWindowSize() {
                // Get width and height of the window excluding scrollbars
                var w = document.documentElement.clientWidth;
                var h = document.documentElement.clientHeight;
				width = w;
				height = h;

                // Display result inside a div element
                console.log("Width: " + w + ", " + "Height: " + h);
              
            }

            let stateCheck = setInterval(() => {
                if (document.readyState === 'complete') {
                    clearInterval(stateCheck);
					

                    window.addEventListener("resize", displayWindowSize);
                }
            }, 100);