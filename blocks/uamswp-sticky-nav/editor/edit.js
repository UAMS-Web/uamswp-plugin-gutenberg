const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'uams-sticky-nav',
        style: {},
    } );

	const backgroundColors = [
        { name: 'gray-5', color: '#f2f2f2' },
        { name: 'white', color: '#ffffff' },
        { name: 'gray-85', color: '#262626' },
    ];

	const borderColors = [
		{ name: 'default', color: '#e6e6e6' },
		{ name: 'white', color: '#ffffff' },
		{ name: 'crimson', color: '#A60F2D' },
		{ name: 'crimson-light', color: '#CA1237' },
		{ name: 'autumn', color: '#FF6727' },
		{ name: 'goldfinch', color: '#F3E700' },
		{ name: 'vineyard', color: '#AADC24' },
		{ name: 'pacificsky', color: '#5BC3F5' },
		{ name: 'midnight', color: '#002D61' },
    ];


    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
                <ToggleControl
                    label="Full Width Background"
                    checked={ hasBlockClassName( attributes, 'uams-width--full') }
                    onChange={ ( fullWidth ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-width--full', fullWidth ) } }
                    />
            </PanelDisplayOptions>
			<PanelColorOptions>
				<ColorClassControl
					{ ...props }
					colors={backgroundColors}
					label='Background Color'
					value='#f2f2f2'
					/>
				<ColorClassControl
					{ ...props }
					colors={borderColors}
					label='Border Color'
					value='#e6e6e6'
					prefix='uams-callout--color-'
					/>
			</PanelColorOptions>
			<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Outside Spacing (Margin)',
							properties: [
								{
									label: 'Top',
									prefix: 'uams-spacing-before--',                                        
									default: 'none',
								},
								{
									label: 'Bottom',
									prefix: 'uams-spacing-after--',
									default: 'xmedium',                                        
								},
								{
									label: 'Left',
									prefix: 'uams-spacing-margin-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'uams-spacing-margin-right--',									
									default: 'default',
								}
							]
						},
						{
							label: 'Padding (Inside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'uams-spacing-top--',
									default: 'default',
								},
								{
									label: 'Bottom',
									prefix: 'uams-spacing-bottom--',
									default: 'default',									
								},
								{
									label: 'Left',
									prefix: 'uams-spacing-padding-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'uams-spacing-padding-right--',									
									default: 'default',
								}
							]
						}
					]}
					{...props}>					
				</SpacingClassNameSelector>
		</InspectorControls>
		<div { ...blockProps }  >
			<InnerBlocks
				template={[ [ 'core/list',{className:'uams-anchor-menu'} ] ] }
				templateLock={ 'all' }
			/>
		</div>
		</>
    )

}

export default Edit;