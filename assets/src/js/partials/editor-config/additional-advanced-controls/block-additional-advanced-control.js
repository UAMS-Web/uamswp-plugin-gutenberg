import { InspectorAdvancedControls } from '@wordpress/block-editor';

import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import {
    hasBlockClassName,
    setBlockClassNameBool,
    getBlockClassNameValue,
    setBlockClassName,
} from "../../block-utilities/blockUtilities";

import {
    AnchorControl,
} from '../../block-controls/blockControls';

const {
	ToggleControl,
    SelectControl,
    RangeControl,
} = wp.components;


function additionalAdvancedControls( OriginalComponent ) {
    return function( props ) {       

        const unsupportedPosition = [];
        const unsupportedZindex = [];
        const unsupportedOverflow = [];
        const unsupportedHide = [];

        const supportsAnimation = [
            'uamswp/card',
            'core/image',
            'core/heading',
            'uamswp/banner', 
            'uamswp/button', 
            'uamswp/callout', 
            'uamswp/column', 
            'uamswp/container', 
            'uamswp/decorator', 
            'uamswp/row', 
            'uamswp/section',
            'core/paragraph',
            'uamswp/stat',
        ];


        const supportsAnchor = [
            'uamswp/card',
            'uamswp/card-group',
            'uamswp/banner', 
            'uamswp/button', 
            'uamswp/callout', 
            'uamswp/column', 
            'uamswp/container', 
            'uamswp/row', 
            'uamswp/section',
            'uamswp/stat',
        ];

        const excludeAdvanced = [
            'uamswp/card',
        ]

        let {
            attributes,
            setAttributes
        } = props

        return (
            <>
                <OriginalComponent { ...props } />
                { ! excludeAdvanced.includes( props.name ) && <>
                <InspectorAdvancedControls>
                    { supportsAnchor.includes( props.name ) && <AnchorControl  { ...props } ></AnchorControl> }
                    <PanelBody title="Additional Advanced Settings" initialOpen={ false } className="uams-block-control-additional-advanced">
                        { ! unsupportedPosition.includes( props.name ) && <ToggleControl
                            label="Position Element"
                            checked={ hasBlockClassName( attributes, 'uams-position--relative') }
                            onChange={ ( position ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-position--relative', position ) } }
                            help='Sets element position to relative.'
                            />
                        }
                        { ! unsupportedZindex.includes( props.name ) && <RangeControl
                            label="Element z-index"
                            value={ parseInt( getBlockClassNameValue( attributes, 'uams-zindex--level-' ) ) }
                            onChange={ ( zindex ) => setBlockClassName( attributes, setAttributes, 'uams-zindex--level-', zindex ) }
                            help="Position element must be on if the element isn't already positioned in CSS."
                            min={0}
                            max={7}
                            />
                        }
                        { ! unsupportedOverflow.includes( props.name ) && <ToggleControl
                            label="Overflow Hidden"
                            checked={ hasBlockClassName( attributes, 'uams-overflow--hidden') }
                            onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-overflow--hidden', overflow ) } }
                            />
                        }
                        { ! unsupportedOverflow.includes( props.name ) && <SelectControl
                            label='Hide at Breakpoint'
                            value={ getBlockClassNameValue( attributes, 'uams-hide--' ) }
                            options={ [
                                { label:'none', value:''},
                                { label:'xxultrawide', value:'xxultrawide'},
                                { label:'xultrawide', value:'xultrawide'},
                                { label:'ultrawide', value:'ultrawide'},
                                { label:'desktop', value:'desktop'},
                                { label:'tablet-large', value:'tablet-large'},
                                { label:'tablet-medium', value:'tablet-medium'},
                                { label:'tablet', value:'tablet'},
                                { label:'phone', value:'phone'},
                                { label:'phone-small', value:'phone-small'},
                                ]
                            }
                            onChange={ ( animationStyle ) => setBlockClassName( attributes, setAttributes, 'uams-hide--', animationStyle ) }
                            />
                        }
                        { supportsAnimation.includes( props.name ) && <ToggleControl
                            label="Animate"
                            checked={ hasBlockClassName( attributes, 'uams-animate') }
                            onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-animate', overflow ) } }
                            />
                        }
                    </PanelBody>
                </InspectorAdvancedControls>
                </>}
            </>
        );
    }
}


wp.hooks.addFilter(
    'editor.BlockEdit',
    'uamswp-plugin-gutenberg/additional-advanced-controls',
    additionalAdvancedControls
);
