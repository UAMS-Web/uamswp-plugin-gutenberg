import { InspectorAdvancedControls } from '@wordpress/block-editor';

import {
    hasBlockClassName,
    setBlockClassNameBool,
} from "../block-utilities/blockUtilities";

const {
	ToggleControl,
} = wp.components;

function insertSpacingControl( OriginalComponent ) {
    return function( props ) {       

        const unsupportedBlockTypes = [];

        if( !unsupportedBlockTypes.includes( props.name ) ){

            let {
                attributes,
                setAttributes
            } = props

            return (
                <>

                    <OriginalComponent { ...props } />
                    <InspectorAdvancedControls>
                        <ToggleControl
                            label="Position Element"
                            checked={ hasBlockClassName( attributes, 'uams-position--relative') }
                            onChange={ ( position ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-position--relative', position ) } }
                            help='Sets element position to relative.'
                            />
                    </InspectorAdvancedControls>
                </>
            );
        }

        // return default
        return  <OriginalComponent { ...props } />
    }
}


wp.hooks.addFilter(
    'editor.BlockEdit',
    'uamswp-plugin-gutenberg/insert-spacing-control',
    insertSpacingControl
);
