import { InspectorAdvancedControls } from '@wordpress/block-editor';

import {
    getBlockClassNameValue,
    setBlockClassName,
} from "../block-utilities/blockUtilities";

const {
	RangeControl,
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
                        <RangeControl
                            label="Element z-index"
                            value={ parseInt( getBlockClassNameValue( attributes, 'uams-zindex--level-' ) ) }
                            onChange={ ( zindex ) => setBlockClassName( attributes, setAttributes, 'uams-zindex--level-', zindex ) }
                            help="Position element must be on if the element isn't already positioned in CSS."
                            min={0}
                            max={7}
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
