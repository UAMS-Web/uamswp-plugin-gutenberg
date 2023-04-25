import { ariaUpdate } from "../../../_assets/js/ariaUpdate"; 

class UamsNavigationSiteVertical {

    constructor( atts = {} ) {

        this.timer = false;

        this.init();
        
    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
		document.addEventListener(
			'click', 
			this.clickEvents.bind( this ),
			false
		);

        document.addEventListener(
			'keydown', 
			this.keyDownEvents.bind( this ),
			false
		);
	}

    clickEvents( event ) {
		
		try {

            let eventElement = event.target;

            // Toggle Action
            if ( eventElement.classList.contains( 'uams-navigation-site-vertical--toggle' ) ) {

                if ( this.shouldClose() ) {

                    this.close( eventElement );

                    ariaUpdate( 'Close', '.uams-navigation-site-vertical--toggle' );

                } else {

                    this.open( eventElement );

                    ariaUpdate( 'Open', '.uams-navigation-site-vertical--toggle' );

                }

            }

            // Open Action
            if ( eventElement.classList.contains('uams-navigation-site-vertical--open' ) ) {

                this.open( eventElement );

            }

            // Close Action
            if ( eventElement.classList.contains('uams-navigation-site-vertical--close' ) ) {

                this.close( eventElement );

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}


    keyDownEvents( event ) {

        try {

            if ( keyDownEvent( { domEvent: event, key:'Escape', inClass: this.wrapperClass } ) ) {

                toggleAriaExpandedClose( { 
                    wrapper:          elementGet( { elementClass: this.wrapperClass } ),
                    actionPrefix:     this.actionPrefix,
                    ariaLabelElement: elementGet( { elementClass: 'uams-navigation-site--toggle' } ),  
                } );

            }
           
		} catch (error) {
		  console.error(error);
		}

    }

    open( eventElement = false ) {

        let nav = document.getElementsByClassName('uams-navigation-site-vertical')[0] || false;

        if ( ! nav ) return;

        nav.setAttribute( 'aria-expanded', true );

        document.body.classList.add('uams-navigation-site-vertical--is-open');
        document.body.classList.remove('uams-navigation-site-vertical--is-closed');

        ariaUpdate( 'Open', '.uams-navigation-site-vertical--toggle' );

    }

    close( eventElement = false ) {

        let nav = document.getElementsByClassName('uams-navigation-site-vertical')[0] || false;

        if ( ! nav ) return;

        nav.setAttribute( 'aria-expanded', false );

        document.body.classList.remove('uams-navigation-site-vertical--is-open');
        document.body.classList.add('uams-navigation-site-vertical--is-closed');

        ariaUpdate( 'Close', '.uams-navigation-site-vertical--toggle' );

        const myTimeout = setTimeout(
            function() {
                window.dispatchEvent(new Event('resize'));
            }, 300
        );

    }

    shouldClose() {

        let nav = document.getElementsByClassName('.uams-navigation-site-vertical')[0] || false;

        if ( ! nav ) false;

        return ( document.body.classList.contains('uams-navigation-site-vertical--is-open') ) || false;

    }

}

export default UamsNavigationSiteVertical; 