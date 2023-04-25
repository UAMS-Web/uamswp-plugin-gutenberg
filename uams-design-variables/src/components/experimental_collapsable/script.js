import { elementGet, elementGetClosest } from "../../../_assets/js/partials/element";
import { toggleShould } from "../../../_assets/js/partials/toggle";
import {uamsSlideDown} from '../../../_assets/js/partials/utilities';

class UamsCollapsable {

    constructor( atts = {} ) {

        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : 'uams-collapsable';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'uams-collapsable--toggle';
        this.contentClass     = ( atts.hasOwnProperty( 'contentClass') ) ? atts.contentClass : 'uams-collapsable--content';
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : 'uams-collapsable';
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
                let element = elementGet ( { parent: wrapper, elementClass: this.contentClass } )

                if ( wrapper ) {

                    uamsSlideDown(
                        {
                            element: element,
                            ariaElement: wrapper
                        }
                    )
                }

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}



}

export default UamsCollapsable;