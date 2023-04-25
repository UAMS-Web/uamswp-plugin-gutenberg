import updateAriaElement from "../../../_assets/js/updateAriaElement";

class UamsAnimateSubmenuSlideVertical {

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

        /*document.addEventListener(
			'keydown', 
			this.keyDownEvents.bind( this ),
			false
		);*/
	}

    clickEvents( event ) {
		
		try {

            let eventElement = event.target;
            let navElement = event.target.parentElement;

            // Toggle Action
            if ( eventElement.classList.contains( 'uams-animate--submenu-toggle' ) ) {

                if ( this.shouldClose( navElement ) ) {

                } else {

                }

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}

}

export default UamsAnimateSubmenuSlideVertical;