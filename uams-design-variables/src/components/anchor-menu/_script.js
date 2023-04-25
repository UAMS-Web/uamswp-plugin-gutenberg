class UamsAnchorMenu {

    constructor( atts = {} ) {

        this.elements = [];

        this.selector = '.uams-anchor-menu';

        this.buffer = 0.60;

        this.init();
        
    }

    init() {

        this.initElements();

        this.bindEvents();

    }

    initElements() {
        
        let found = document.querySelectorAll( this.selector + ':not(.uams-initialized)' );

        if ( 0 < found.length ) {

            found.forEach( ( element ) => {

                this.elements.push( element );
    
                element.classList.add('uams-initialized');
    
            } );

        }
        
    }

    bindEvents() {

        try {

            window.addEventListener( 
                'scroll', ( event ) => { this.updateMenus() }, false);

            window.addEventListener( 
                'resize', ( event ) => { this.updateMenus() }, false);

            this.updateMenus()

        } catch (error) {
            console.error(error);
        }
		
	}

    isActive( anchor ) {

        let element = document.querySelector( anchor );

        if ( element ) {

            let wHeight = ( window.innerHeight * this.buffer );

            let elHeight = element.getBoundingClientRect().top;

            return  ( elHeight < wHeight ) ? true : false;

        }

    }

    updateMenus() {

        this.elements.forEach( element => {

            let children = Array.from( element.querySelectorAll('li') );

            if ( children.length ) {

                let activeChild = false;

                if ( document.documentElement.scrollTop > 50 ) {

                    for (let i = children.length - 1; i >= 0; i-- ) {

                        const child = children[i];

                        let link = child.querySelector('a');

                        if ( link && link.hasAttribute('href') ) {
    
                            let anchor = link.getAttribute('href');
    
                            if ( this.isActive( anchor ) && ! activeChild ) {
    
                                activeChild = child;
    
                            } else {
    
                                child.classList.remove('uams-active');
    
                            }
    
                        }
                        
                    }

                } else {

                    //activeChild = children[0].classList.add('uams-active');

                }

                if ( activeChild ) {

                    activeChild.classList.add('uams-active');

                } else {

                    //children[0].classList.add('uams-active');

                }

            }

            

            

            


            

            //console.log( element.getBoundingClientRect().top );

            /*let child = element.firstElementChild;

            if ( 1 > element.getBoundingClientRect().top ) {

                let width = element.offsetWidth;

                element.classList.add('uams-sticky-box--stuck');

                child.style.width = width + 'px';

            } else {

                element.classList.remove('uams-sticky-box--stuck');

                child.style.width = '';

            }*/
            
        });

    }

}

export default UamsAnchorMenu; 