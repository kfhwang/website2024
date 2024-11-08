const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");


myService.Services.push({icon: "fa-lock", heading:"Web Security", text:"asdf adf adf"})

createApp({
    data() {
        return{
            Portfolio:[
                {modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"},
                {}
            ]
        }
    }
}).mount("#portfolio")