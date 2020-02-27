class Main {
    constructor(){
        this.flkty = new Flickity('.projects__carousel', {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: false
        });

        this.flkty = new Flickity('.tech__carousel', {
            // options
            cellAlign: 'center',
            contain: true,
            prevNextButtons: false,
            pageDots: false
        });

        this.dissolve = {
            delay: 475,
            duration: 1500,
            reset: false
        };

        this.slideUp = {
            distance: '150%',
            origin: 'bottom',
            opacity: true,
            reset: false
        };

        this.slideLeft = {
            distance: '110%',
            origin: 'left',
            opacity: true,
            reset: false
        };

        this.slideRight = {
            distance: '150%',
            origin: 'right',
            opacity: true,
            reset: false
        };


        ScrollReveal().reveal('.slideUp', this.slideUp);
        ScrollReveal().reveal('.dissolve', this.dissolve);
        ScrollReveal().reveal('.slideLeft', this.slideLeft);
        ScrollReveal().reveal('.slideRight', this.slideRight);

        this.init();
    }

    init(){

    }

}

new Main();
