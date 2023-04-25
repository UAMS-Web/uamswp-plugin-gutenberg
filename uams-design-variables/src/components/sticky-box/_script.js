

class UamsStickyBox {

    constructor( atts = {} ) {

        this.boxes = [];

        this.boxSelector = '.uams-sticky-box';

        this.timer = false;

        this.init();
        
    }

    init() {

        this.initialize();

        this.bindEvents();

    }

    initialize() {
        let foundBoxes = document.querySelectorAll( this.boxSelector + ':not(.uams-initialized)' );

        if ( 0 < foundBoxes.length ) {

            foundBoxes.forEach( ( box ) => {

                this.boxes.push( box );
    
                box.classList.add('uams-initialized');
    
            } );

        }
        
    }

    bindEvents() {

        try {

            window.addEventListener( 
                'scroll', ( event ) => { this.stickBoxes() }, false);

            window.addEventListener( 
                'resize', ( event ) => { this.stickBoxes() }, false);

            this.stickBoxes( false );

        } catch (error) {
            console.error(error);
        }
		
	}

    stickBoxes( isEvent = true ) {

        if ( isEvent ) {

            this.addActiveClass();

        }

        this.boxes.forEach( element => {

            let child = element.firstElementChild;

            if ( 1 > element.getBoundingClientRect().top ) {

                let width = element.offsetWidth;

                element.classList.add('uams-sticky-box--stuck');

                child.style.width = width + 'px';

            } else {

                element.classList.remove('uams-sticky-box--stuck');

                child.style.width = '';

            }
            
        });

    }


    addActiveClass() {

        clearTimeout( this.timer );

        this.boxes.forEach( element => {
            element.classList.add('uams-active');
        } );

        this.timer = setTimeout( () => {
            this.removeActiveClass();
        }, 2000 );

    }

    removeActiveClass() {
        this.boxes.forEach( element => {
            element.classList.remove('uams-active');
        } );
    }

}

export default UamsStickyBox; 