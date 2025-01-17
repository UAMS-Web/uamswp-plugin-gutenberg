class UamsAnimate {

    constructor( atts = {} ) {

        this.animateClass = 'uams-animate';

        this.animateItems = [];

        this.animateRatio = { timeEarly: 0.95, timeDefault: 0.85, timeLate: 0.75 };

        this.animateEarlyClass = 'uams-animate--do-early';
        this.animateDefaultClass = 'uams-animate--do-default';
        this.animateLateClass = 'uams-animate--do-late';

        this.init();
        
    }

    init() {

        this.bindEvents();

        this.initialize();

        this.animate();

    }

    initialize() {
        let foundItems = document.querySelectorAll( `.${this.animateClass}:not(.uams-initialized)` );

        if ( 0 < foundItems.length ) {

            foundItems.forEach( ( item ) => {

                this.animateItems.push( item );
    
                item.classList.add('uams-initialized');
    
            } );

        }
        
    }

    bindEvents() {

        try {

            window.addEventListener( 
                'scroll', ( event ) => { this.animate() }, false);

            window.addEventListener( 
                'resize', ( event ) => { this.animate() }, false);

        } catch (error) {
            console.error(error);
        }
		
	}

    animate() {

        let height = window.innerHeight;

        let timeEarly = ( height * this.animateRatio.timeEarly );
        let timeDefault = ( height * this.animateRatio.timeDefault );
        let timeLate = ( height * this.animateRatio.timeLate);
    
        this.animateItems.forEach( element => {

            let elementPosition = ( element.getBoundingClientRect().top + this.getAdjustHeight( element ) );

            if ( timeEarly > elementPosition && ! element.classList.contains( this.animateEarlyClass ) ) {

                element.classList.add( this.animateEarlyClass );

            }

            if ( timeDefault > elementPosition && ! element.classList.contains( this.animateDefaultClass ) ) {

                element.classList.add( this.animateDefaultClass );

            }

            if ( timeLate > elementPosition && ! element.classList.contains( this.animateLateClass ) ) {

                element.classList.add( this.animateLateClass );

            }
            
        });

    }

    getAdjustHeight( element ) {

        if ( element.classList.contains( 'uams-animate--action-fade-bottom' ) || element.classList.contains( 'uams-animate--action-bottom-left' ) || element.classList.contains( 'uams-animate--action-bottom-right' )  ) {

            return -300;

        } else {

            return 0;
        }

    }


}

export default UamsAnimate; 