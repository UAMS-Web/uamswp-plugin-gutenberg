
const uamsGetElementHeight = ( element ) => {

    if ( element ) {

        element.style.display = 'block';

        let height = element.scrollHeight;

        element.style.display = '';

        return height;

    }

    return 0;

}



const uamsSlideDown = ( props ) => {

    let timer = false;

    let {
        element = false, // Element to expand
        heightPadding = 20, // Extra hieght just in case
        timing = 150, // how long will the animation run 
        ariaElement = false,
    } = props

    if ( element ) {

        let startHeight = element.scrollHeight;

        if ( startHeight < 10 ) { // assume closed

            element.classList.add('uams-animating');

            let endHeight = uamsGetElementHeight( element );

            element.style.maxHeight = ( endHeight + heightPadding + 'px' );

            timer = setTimeout( () => {

                if ( ariaElement ) {
                    ariaElement.setAttribute('aria-expanded', 'true' ); 
                }

                element.classList.remove('uams-animating');
                element.style.maxHeight = '';

            }, timing );

        } else {

            element.classList.add('uams-animating');

            let endHeight = uamsGetElementHeight( element );

            element.style.maxHeight = ( endHeight + heightPadding + 'px' );

            // If this happens too quickly it css doesn't register it.
            setTimeout(
                function() {
                    element.style.maxHeight = 0;
                }, 
                25
            );

            timer = setTimeout( () => {

                if ( ariaElement ) {
                    ariaElement.setAttribute('aria-expanded', 'false' ); 
                }

                element.classList.remove('uams-animating');
                element.style.maxHeight = '';

            }, timing );

        }

    }

}

export default uamsSlideDown;