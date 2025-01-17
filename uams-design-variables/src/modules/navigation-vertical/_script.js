import updateAriaElement from "../../../_assets/js/updateAriaElement";
import { elementGetSiblings } from "../../../_assets/js/partials/element";

class UamsNavigationVertical {

    
        constructor( atts = {} ) {

            this.headers = ['.uams-header-unit','.uams-header-campus'];

            this.navigation = false;

            this.siteHeader = false;
    
            this.init();
            
        }
    
        init() {
    
            this.bindEvents();
    
        }
    
        bindEvents() {
            document.addEventListener(
                'scroll', 
                this.scrollEvent.bind( this ),
                false
            );

            window.addEventListener(
                'resize', 
                this.scrollEvent.bind( this ),
                false
            );
    
    
            /*document.addEventListener(
                'keydown', 
                this.keyDownEvents.bind( this ),
                false
            );*/
        }
    
        scrollEvent( event ) {
            
            try {
                
                this.scrollNav();
                
            } catch (error) {
              console.error(error);
            }
            
        }

        scrollNav() { 

            let navigation = this.getNavigation();

            let height = this.getHeight();

            if ( navigation && ( false !== height ) ) {

                navigation.style.paddingTop = height + 'px';

            }

        }

        getHeader() {

            if ( ! this.siteHeader ) {

                for ( let h = 0; h < this.headers.length; h++ ) {

                    let header = document.querySelector( this.headers[h] );
    
                    if ( header ) {
    
                        this.siteHeader = header;
                        
                        break;
    
                    }
    
                }

            }

            return this.siteHeader;

        }

        getNavigation() {

            if ( ! this.navigation ) {

                let navigationWrapper = document.querySelector( '.uams-navigation-vertical' );

                if ( navigationWrapper ) {

                    this.navigation = navigationWrapper.querySelector( '.uams-slide-in-panel__panel-inner' );

                } 

            }

            return this.navigation;

        }
    
        
        getHeight() {

            let siteHeader = this.getHeader();

            let height = false;

            console.log( siteHeader );

            if ( siteHeader ) {

                let headerHeight = siteHeader.scrollHeight;

                height = siteHeader.getBoundingClientRect().top + headerHeight;

            }

            console.log( height );

            return height; 
        }
    
    }
    
    export default UamsNavigationVertical; 