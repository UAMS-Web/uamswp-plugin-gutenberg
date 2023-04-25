const uamsAriaExpanded = ( element, value ) => {

    if ( element.hasAttribute( 'aria-expanded') ) {

        element.setAttribute( 'aria-expanded', value );

    }

}

const uamsAriaIsExpanded = ( element ) => {

    if ( element.hasAttribute( 'aria-expanded') ) {

        return ('true' == element.getAttribute( 'aria-expanded') );

    } else {

        return false;

    }

} 


export { uamsAriaExpanded, uamsAriaIsExpanded }