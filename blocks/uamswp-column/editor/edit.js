import { InnerBlocks, InspectorControls, useBlockProps, InspectorAdvancedControls} from '@wordpress/block-editor';
import { ColorClassNameSelector, SpacingClassNameSelector, BreakPointControl } from '../../../assets/src/js/partials/block-controls/blockControls';
import { useEffect, useState } from '@wordpress/element';

const {
    SelectControl,
	TextControl,
	ToggleControl,
	Panel, 
	PanelBody, 
	PanelRow
} = wp.components;

//import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import { 
	PanelAnimate
} from "../../../assets/src/js/partials/block-panels/blockPanels";

const DEFAULT_SPACING = {
	spaceBefore: 'none',
	spaceAfter: 'none',
	spaceTop: 'none',
	spaceBottom: 'none',
};

const Edit = ( props ) => {
	const blockProps = useBlockProps( { 
        className: 'uams-column', 
        style: {}, 
    } );

	let {
		attributes,
		setAttributes,
	} = props;

	const [spacingDefaults, setSpacingDefaults] = useState(DEFAULT_SPACING);

	useEffect( () => {
		
		if(props.attributes.className && props.attributes.className.includes('uams-color-background--')){
			setSpacingDefaults({
				spaceBefore: 'none',
				spaceAfter: 'xmedium',
				spaceTop: 'xmedium',
				spaceBottom: 'none',
			});
		}else{
			setSpacingDefaults(DEFAULT_SPACING);
		}
		
	}, [props.attributes.className]);

    return (
		<>
			<InspectorControls>
				<ColorClassNameSelector
					title="Color Settings"
					colorSettings={[
						{
							label: 'Background Color',
							prefix: 'uams-color-background--',
							colors: [
								{ name: 'White', color: '#ffffff', className: 'white' },			
								{ name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
								{ name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
								{ name: 'Gray 10', color: '#e6e6e6', className: 'gray-10' },
								{ name: 'Gray 85', color: '#262626', className: 'gray-85' },
								{ name: 'Gray 95', color: '#080808', className: 'gray-95' },
							],
						}
					]}
					{...props}>
				</ColorClassNameSelector>
				<PanelAnimate { ...props } ></PanelAnimate>
				{ attributes.customWidth && <PanelBody title="Column Width" initialOpen={ false } >
					<TextControl
						label="Column Width"
						value={ attributes.width ? attributes.width : '' }
						onChange={ ( width ) => setAttributes( {width} ) }
					/>
					<BreakPointControl {...props} />
            		</PanelBody> 
				}
				<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'uams-spacing-before--',									
									default: spacingDefaults['spaceBefore'],
								},
								{
									label: 'Bottom',
									prefix: 'uams-spacing-after--',									
									default: spacingDefaults['spaceAfter'],
								}
							]
						},
						{
							label: 'Padding (Inside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'uams-spacing-top--',
									default: spacingDefaults['spaceTop'],
								},
								{
									label: 'Bottom',
									prefix: 'uams-spacing-bottom--',
									default: spacingDefaults['spaceBottom'],									
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
					label={ 'Allow Custom Width' }
					checked={ attributes.customWidth }
					onChange={ ( customWidth) => { setAttributes( {  customWidth } ) } }
					help={ 'Use Version 2 of the Card.'}
				/>
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