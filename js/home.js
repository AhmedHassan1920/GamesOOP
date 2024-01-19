import UI from "./UI.js";

export default class Home {
    constructor() {
        this.links = ui.links;
        this.gamesContainer = ui.gamesContainer;
        this.faBars = ui.faBars;
        this.ulStyle = ui.ulStyle;
    }

    async linksClick() {
        this.links.forEach(item => {
            item.addEventListener('click', async (event) => {
                this.links.forEach(link => {
                    if (link !== item) {
                        link.classList.remove("active");
                    }
                });

                ui.gamecatigory = event.target.innerHTML.toLowerCase();
                await ui.getGames();
                item.classList.add("active");
            });
        });
    }

    bars(){
            if(window.innerWidth <= 1060){
                this.faBars.classList.add("d-block");
                this.faBars.classList.remove("d-none");
                this.ulStyle.classList.add("d-none");
                this.faBars.addEventListener('click',()=>{
                    this.ulStyle.classList.remove("d-none");                    
                    this.ulStyle.classList.toggle("links-style"); 
                })
            }

    }
}

const ui = new UI();
const home = new Home();

home.linksClick();
home.bars();