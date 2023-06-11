window.addEventListener("DOMContentLoaded", function() {
    
    let colors =
    [
        {
            id: 0,
            name: "red",
            hex: "#fc0000"
        },
        {
            id: 1,
            name: "orange",
            hex: "#f95f00"
        },
        {
            id: 2,
            name: "yellow",
            hex: "#f7ef00"
        },
        {
            id: 3,
            name: "green",
            hex: "#13fc02"
        },
        {
            id: 4,
            name: "teal",
            hex: "#02f9cc"
        },
        {
            id: 5,
            name: "blue",
            hex: "#0227f7"
        },
        {
            id: 6,
            name: "purple",
            hex: "#ac02f4"
        },
        {
            id: 7,
            name: "pink",
            hex: "#f202b6"
        },
        {
            id: 8,
            name: "white",
            hex: "#fff"
        },
        {
            id: 9,
            name: "black",
            hex: "#000"
        },
        
    ];
    let nbOfTry = 0;
    
    //Sélection des couleurs
    function colorButtons ()
    {
        let section = document.getElementById("color-choice");
        
        for (color of colors)
        {
            let button = document.createElement("button");
            button.id = color.id;
            section.appendChild(button);
            button.style.backgroundColor = color.hex;
        }
    }
    
    //Générer la séquence à deviner
    function generateGuess ()
    {
        let toGuess = [];
        
        for (let i=0; i<4; i++)
        {
            let colorId = Math.floor(Math.random() * 10);
            toGuess.push(colorId);
        }
        console.log(toGuess);
    }
    
    //User sequence
    function userSequence ()
    {
        let sequence = [];
        let colorBtns = document.querySelectorAll("#color-choice button");
        
        for (button of colorBtns)
        {
            button.addEventListener("click", function(event)
            {
                let clicked = event.target;
                let stage = document.getElementById("stage");
                
                if (sequence.length === 0)
                {
                    let section = document.createElement("section");
                    stage.appendChild(section);
                    section.id = `try-nb-${nbOfTry}`;
                    section.style.width = "calc(80px * 4)";
                }
                if (sequence.length < 4)
                {
                    let section = document.getElementById(`try-nb-${nbOfTry}`)
                    let div = document.createElement("div");
                    section.appendChild(div);
                    div.style.backgroundColor = colors[clicked.id].hex;
                    sequence.push(parseInt(clicked.id));
                }
                console.log(sequence);
            });
        }
        
        let eraseBtn = document.getElementById("erase-button");
        eraseBtn.addEventListener("click", function() 
        {
            if (sequence.length !== 0)
            {
                sequence.pop();
                let erased = document.querySelector(`#try-nb-${nbOfTry} div:last-of-type`);
                erased.remove();
            }
            
        });
    }
    
    
    colorButtons();
    generateGuess();
    userSequence();
})