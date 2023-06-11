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
    
    //Sélection des couleurs
    function colorButtons ()
    {
        let section = document.getElementById("color-choice");
        
        for (color of colors)
        {
            let button = document.createElement("button");
            button.id = color.name;
            section.appendChild(button);
            button.style.backgroundColor = color.hex;
        }
    }
    
    //Générer la séquence à deviner
    function generateColors ()
    {
        let toGuess = [];
        
        for (let i=0; i<4; i++)
        {
            let colorId = Math.floor(Math.random() * 10);
            toGuess.push(colorId);
        }
        console.log(toGuess);
    }
    
    
    colorButtons();
    generateColors();
})