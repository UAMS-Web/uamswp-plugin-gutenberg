const uamsSubmenuOpen = ( parentElement ) => {

    parentElement.setAttribute( 'aria-expanded', true );

}

const uamsSubmenuClose = ( parentElement ) => {

    parentElement.setAttribute( 'aria-expanded', false );
    
}

const uamsSubmenuToggle = ( clickElement ) => {

    let parentElement = clickElement.parentElement;

    if ( parentElement.hasAttribute( 'aria-expanded' ) && 'true' == parentElement.getAttribute( 'aria-expanded' ) ) {

        uamsSubmenuClose( parentElement );

    } else {

        uamsSubmenuOpen( parentElement );

    }

}

export { uamsSubmenuToggle, uamsSubmenuClose, uamsSubmenuOpen };