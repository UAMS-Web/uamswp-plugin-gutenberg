import { bindEventClass } from '../../../_assets/js/partials/bindEvent';

class UamsSlideInPanel {

    constructor( atts = {} ) {

        this.panelClass    = ( atts.hasOwnProperty( 'panelClass') ) ? atts.panelClass : 'uams-slide-in-panel';
        this.closeClass     = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'uams-slide-in-panel--close';
        this.closeThisClass  = ( atts.hasOwnProperty( 'closeThisClass') ) ? atts.closeThisClass : 'uams-slide-in-panel--close-this';
        this.openClass     = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'uams-slide-in-panel--open';
        this.toggleClass     = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'uams-slide-in-panel--toggle';
        this.init();
        
    }

    init() { 

        bindEventClass( { eventAction: 'click', eventClass: this.closeClass, eventCallback: this.closePanel.bind(this) } );
        bindEventClass( { eventAction: 'click', eventClass: this.closeThisClass, eventCallback: this.closeCurrentPanel.bind(this) } );
        bindEventClass( { eventAction: 'click', eventClass: this.openClass, eventCallback: this.openPanel.bind(this) } );

    }

    closePanel( eventElement ) { 

        let panel = this.getPanel( eventElement );

        if ( panel ) {

            panel.setAttribute('aria-expanded', false)

        }

    }

    closeCurrentPanel( eventElement ) { 

        let panel = this.getPanel( eventElement, false );

        if ( panel ) {

            panel.setAttribute('aria-expanded', false)

        }

    }

    openPanel( eventElement ) {

        let panel = this.getPanel( eventElement );

        if ( panel ) {

            panel.setAttribute('aria-expanded', true )

        }

    }

    getPanel( eventElement, check_remote = true ) {

        if ( check_remote && eventElement.hasAttribute('data-panel') ) {

            return document.getElementById( eventElement.dataset.panel );

        }

        return eventElement.closest( '.' + this.panelClass );

    }


}

export default UamsSlideInPanel;