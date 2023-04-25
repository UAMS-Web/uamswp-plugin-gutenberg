import {
    uamsAriaExpanded,
    uamsAriaIsExpanded,
    uamsClassAdd,
    uamsClassRemove,
    uamsAnimateSlideDown,
    uamsAnimateSlideUp,
} from '../../../_assets/js/partials/uamsPartials';

class UamsAccordion {

    constructor( atts = {} ) {

        this.timer = false;
        this.openClass = 'uams-accordion--open';

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

        /*document.addEventListener(
			'keydown', 
			this.keyDownEvents.bind( this ),
			false
		);*/
	}

    clickEvents( event ) { 
		
		try {

            let eventElement = event.target;

            // Toggle Action
            if ( eventElement.classList.contains( 'uams-accordion--toggle' ) ) {

                let accordionElement = eventElement.closest('.uams-accordion');
                let accordionContent = accordionElement.querySelector('.uams-accordion__content');

                if ( uamsAriaIsExpanded( eventElement ) ) {

                    uamsAriaExpanded( eventElement, false );

                    uamsAnimateSlideUp( accordionContent, {} );

                    uamsClassRemove( accordionElement, this.openClass );

                } else { 

                    uamsAriaExpanded( eventElement, true );

                    uamsAnimateSlideDown( accordionContent, {} );

                    uamsClassAdd( accordionElement, this.openClass );

                }

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}

}

export default UamsAccordion; 