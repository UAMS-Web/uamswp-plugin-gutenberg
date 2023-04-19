const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
    InspectorAdvancedControls,
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
    SelectControl,
	RangeControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
	AlignItemControl,
	MaxWidthControl,
	BorderControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelAnimate,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    setBlockClassNameBool,
	getBlockClassNameValue,
	setBlockClassName,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'uams-container',
        style: {},
    } );

	const backgroundColors = [
        { name: 'gray-5', color: '#f2f2f2' },
        { name: 'white', color: '#ffffff' },
        { name: 'gray-85', color: '#262626' },
    ];

	const borderColors = [
		{ name: 'default', color: '#ffffff' },
		{ name: 'white', color: '#ffffff' },
		{ name: 'crimson', color: '#A60F2D' },
		{ name: 'crimson-light', color: '#CA1237' },
		{ name: 'autumn', color: '#FF6727' },
		{ name: 'goldfinch', color: '#F3E700' },
		{ name: 'vineyard', color: '#AADC24' },
		{ name: 'pacificsky', color: '#5BC3F5' },
		{ name: 'midnight', color: '#002D61' },
    ];

    const containerTags = [
		{ label: 'div', value: 'div' },
		{ label: 'section', value: 'section' },
		{ label: 'nav', value: 'nav' },
		{ label: 'span', value: 'span' },
        { label: 'header', value: 'header' },
        { label: 'footer', value: 'footer' },
	];


    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
                <SelectControl
					label="HTML Tag"
					value={ attributes.tag }
					options={ containerTags } 
					onChange={ ( tag ) => setAttributes( { tag } ) }
				/>
				<BorderControl {...props} />
				<AlignItemControl {...props} />
				<MaxWidthControl {...props} />
            </PanelDisplayOptions>
			<PanelColorOptions>
				<ColorClassControl
					{ ...props }
					colors={backgroundColors}
					label='Background Color'
					value='#ffffff'
					/>
				<ColorClassControl
					{ ...props }
					colors={borderColors}
					label='Border Color'
					value=''
					prefix='uams-border--color-'
					/>
			</PanelColorOptions>
			<PanelAnimate { ...props } ></PanelAnimate>
			<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
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
        <InspectorAdvancedControls>
            <ToggleControl
                label="Full Width"
                checked={ hasBlockClassName( attributes, 'uams-width--full') }
                onChange={ ( fullWidth ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-width--full', fullWidth ) } }
                />
			<ToggleControl
                label="Use Flexbox"
                checked={ hasBlockClassName( attributes, 'uams-flex--wrap') }
                onChange={ ( fullWidth ) => { setBlockClassNameBool( attributes, setAttributes, 'uams-flex--wrap', fullWidth ) } }
                />
			{ hasBlockClassName( attributes, 'uams-flex--wrap' ) && <RangeControl
                label="Flex items per row"
                value={ parseInt( getBlockClassNameValue( attributes, 'uams-flex--columns-' ) ) }
                onChange={ ( columns ) => setBlockClassName( attributes, setAttributes, 'uams-flex--columns-', columns ) }
                min={1}
                max={4}
                />
			}
			{ hasBlockClassName( attributes, 'uams-flex--wrap' ) && <SelectControl
					label="Flex Breakpoint"
					value={ getBlockClassNameValue( attributes, 'uams-flex--breakpoint-' ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Desktop', value: 'desktop' },
						{ label: 'Tablet Large', value: 'tablet-large' },
						{ label: 'Tablet Medium', value: 'tablet-medium' },
						{ label: 'Table', value: 'tablet' },
						{ label: 'Phone', value: 'phone' },
						{ label: 'Phone Small', value: 'phone-small' },
					] } 
					onChange={ ( breakpoint ) => setBlockClassName( attributes, setAttributes, 'uams-flex--breakpoint-', breakpoint ) }
				/>
			}
				{ hasBlockClassName( attributes, 'uams-flex--wrap' ) && <SelectControl
					label="Flex Spacing"
					value={ getBlockClassNameValue( attributes, 'uams-flex--spacing-' ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Medium', value: 'medium' },
						{ label: 'xMedium', value: 'xmedium' },
						{ label: 'Large', value: 'large' },
						{ label: 'xLarge', value: 'xlarge' },
					] } 
					onChange={ ( spacing ) => setBlockClassName( attributes, setAttributes, 'uams-flex--spacing-', spacing ) }
				/>
			}
        </InspectorAdvancedControls>
		<div { ...blockProps }  >
			<InnerBlocks
				templateLock={ false }
			/>
		</div>
		</>
    )

}

export default Edit;