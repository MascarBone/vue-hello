// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// let coloredColor = '#FFAA00';
// var cssVar = document.querySelector(':root')
// cssVar.style.setProperty('--colorHex', coloredColor);

let app = new Vue ({
    
    el : '#data',

    data : {
        message: 'Welcome to the new interface using VUE\'s Framework',
        myClasses: 'py-3',
        imgLink: 'https://c.tenor.com/pjLsAVyJPwwAAAAd/diablo-ii-remaster-resurrected.gif',
        lookhere: `THERE'S SOMETHING HERE`,
        clickedColor: '',
        fontSize: 40,
        cssVar: document.querySelector(':root')
    },

    methods: {
        generateColor: function() {
            this.clickedColor = "#" + Math.floor(Math.random()* 16777215).toString(16);
        },

        generateHexColor: function() {
            return "#"+Math.floor(Math.random()* 16777215).toString(16);
        },

        outputConsole: function() {
            console.log(this.cssVar);
            this.cssVar.style.setProperty('--colorHex', this.generateHexColor());
        }

    }
});