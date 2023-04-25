import { uamsMenuExpandToggle } from "../../../_assets/js/uamsMenuExpand";
import { ariaUpdateElement } from "../../../_assets/js/ariaUpdate"; 

class UamsHeaderGlobal {

    constructor( atts = {} ) {
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
	}

    clickEvents( event ) {
		
		try {

            let eventElement = event.target;
            let navElement = event.target.parentElement;

            // Toggle Action
            if ( eventElement.classList.contains( 'uams-menu-expand--toggle' ) ) {

                ariaUpdateElement( eventElement, uamsMenuExpandToggle( navElement ) );

            }

            if ( eventElement.classList.contains( 'uams-menu-expand--down' ) ) {

                uamsMenuExpandDown( navElement );
                ariaUpdateElement( eventElement, 'open' );

            }

            if ( eventElement.classList.contains( 'uams-menu-expand--up' ) ) {

                uamsMenuExpandDown( navElement );
                ariaUpdateElement( eventElement, 'close' );

            }			
			
		} catch (error) {
		  console.error(error);
		}
		
	}

    

}

export default UamsHeaderGlobal;