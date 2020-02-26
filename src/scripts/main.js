class Main {
    constructor(){
        this.flkty = new Flickity('.projects__carousel', {
            // options
            cellAlign: 'center',
            contain: true,
            prevNextButtons: false,
            pageDots: false
        });

        this.init();
    }

    init(){

    }

}

new Main();
