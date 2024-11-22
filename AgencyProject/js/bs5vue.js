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

var vueProfolio = createApp({
    data() {
        return{
            Portfolio:[]
        }
    }
}).mount("#portfolio")

$.ajax({
    url:"/profolio",
    method: "get",
    dataType: "json",
    success: results=>{
        vueProfolio.Portfolio = results;
    }

})