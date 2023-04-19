const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
import {  PanelDisplayOptions, PanelAnimate } from "../../../assets/src/js/partials/block-panels/blockPanels";
const {
	InspectorControls,
} = wp.blockEditor;
const {
} = wp.components;

import { 
	RequiredAlertControl,
	FontSizeControl,
	SpacingClassNameSelector,
	AlignItemControl,
	MaxWidthControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
    getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const coreParagraphControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		

		let FontSizeValue = ( isSelected && (props.name == 'core/paragraph') ) ? getBlockClassNameValue( attributes, 'uams-font-size--' ) : '';

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/paragraph') && 
					<>
						<InspectorControls>
							<PanelDisplayOptions>
								<FontSizeControl 
									{...props}
									sizes={
										[
											{ label: 'xSmall', value: 'xsmall' },
											{ label: 'Small', value: 'small' },
											{ label: 'Medium', value: 'medium' },
											{ label: 'xMedium (Default)', value: '' },
											{ label: 'xxMedium', value: 'xxmedium' },
											{ label: 'Large', value: 'large' },
											{ label: 'xLarge', value: 'xlarge' },
										]
									}
									/>
									{ FontSizeValue && <RequiredAlertControl>
											Should this be a heading instead?<br />
											Paragraph text should not be used as a substitute for a heading. 
										</RequiredAlertControl>
									}
									<AlignItemControl {...props} />
									<MaxWidthControl {...props} />
							</PanelDisplayOptions>
							<PanelAnimate { ...props } ></PanelAnimate>
							<SpacingClassNameSelector                        
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
					</>
				}
			</Fragment>
		);
	};
}, 'coreParagraphControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'uams/core-paragraph-controls',
	coreParagraphControls
);
