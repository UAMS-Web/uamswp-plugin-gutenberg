const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
    InspectorAdvancedControls,
	useBlockProps
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
    ImageFrameControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelStyleOptions,
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
        className: 'uams-image',
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

	const imageStyles = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.71 52.59"><rect width="109.71" height="52.59" style={{ fill: '#6d6e71'}} /></svg>,
			label: 'Default',
			value: '',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" style={{ fill: '#6d6e71' }} /><rect x="9.37" y="7.94" width="105.27" height="44.12" style={{ fill:'#6d6e71',stroke:'#fff',strokeMiterlimit:10,strokeWidth:'2px' }} /></svg>,
			label: 'Framed',
			value: 'framed',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><circle cx="62" cy="30" r="26.71" fill="#6d6e71"/></svg>,
			label: 'Round',
			value: 'round',
		},
	]


    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
                
            </PanelDisplayOptions>
			<PanelStyleOptions 
				{...props} 
				styles={imageStyles}
				prefix="uams-image--style-"  
				></PanelStyleOptions>
			<PanelColorOptions>
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
							label: 'Margin (Outside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'uams-spacing-before--',									
									default: 'default',
								},
								{
									label: 'Bottom',
									prefix: 'uams-spacing-after--',									
									default: 'default',
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
            <ImageFrameControl { ...props } />
		</div>
		</>
    )

}

export default Edit;