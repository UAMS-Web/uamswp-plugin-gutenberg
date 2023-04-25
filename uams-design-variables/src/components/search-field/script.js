import { elementGet, elementGetClosest } from "../../../_assets/js/partials/element";
import { toggleAria, toggleShould, toggleAriaExpandedOpen, toggleAriaExpandedClose } from "../../../_assets/js/partials/toggle";

class UamsAccordion {

    constructor( atts = {} ) {

        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : 'uams-accordion';
        this.closeClass       = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'uams-accordion--close';
        this.openClass        = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'uams-accordion--open';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'uams-accordion__title';
        this.contentClass     = ( atts.hasOwnProperty( 'contentClass') ) ? atts.contentClass : 'uams-accordion__content';
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : 'uams-accordion';
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

	}


    clickEvents( event ) {
		
		try {

            let eventElement = event.target;

            // check Close Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.toggleClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGetClosest( eventElement, this.wrapperClass );

                if ( wrapper ) {

                    toggleAria( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}



}

export default UamsAccordion; 