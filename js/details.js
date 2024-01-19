import UI from "./UI.js";

const ui = new UI();

export default class Details {
    constructor() {
        this.faXmark = ui.faXmark;
        this.gameDetails=ui.gameDetails;
        this.gamesContainer=ui.gamesContainer;
    }

    closeDetails() {
        this.faXmark.addEventListener('click', () => {
            this.gamesContainer.classList.add("d-block");
            this.gamesContainer.classList.remove("d-none");
            this.gameDetails.classList.add("d-none");
        });
    }
}

const details = new Details();

details.faXmark.addEventListener('click',details.closeDetails());
