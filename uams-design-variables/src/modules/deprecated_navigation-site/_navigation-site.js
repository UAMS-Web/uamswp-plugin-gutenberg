import { elementGet } from "../../../_assets/js/partials/element";
import { toggleAria, toggleShould, toggleAriaExpandedOpen, toggleAriaExpandedClose } from "../../../_assets/js/partials/toggle";
import { keyDownEvent } from '../../../_assets/js/partials/events';

class UamsnavigationSite {

    constructor( atts = {} ) {

        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : 'uams-navigation-site';
        this.closeClass       = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'uams-navigation-site--close';
        this.openClass        = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'uams-navigation-site--open';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'uams-navigation-site--toggle';
        this.animatingClass   = ( atts.hasOwnProperty( 'animatingClass') ) ? atts.animatingClass : 'uams-animating';
        this.animationTiming  = ( atts.hasOwnProperty( 'animationTiming') ) ? atts.animationTiming : 300;
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : 'uams-navigation-site';
        this.timer            = false;

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

            // check Close Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.closeClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAriaExpandedClose( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }

            // Check Open Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.openClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAriaExpandedOpen( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }

            // Check Toggle Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.toggleClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAria( { 
                        wrapper: wrapper,
                        toggleByClass: this.actionPrefix + '--openned',
                        actionPrefix: this.actionPrefix,
                        ariaLabelElement: eventElement,
                    } );

                }

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


}

export default UamsnavigationSite; 
