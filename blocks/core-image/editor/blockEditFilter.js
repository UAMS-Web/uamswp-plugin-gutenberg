const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;

import { 
	PanelInsertPost, 
	PanelDisplayOptions, 
	PanelFeedPosts, 
	PanelGeneralOptions, 
	PanelStyleOptions,
	PanelAnimate,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

const {
	InspectorControls,
} = wp.blockEditor;
const {
} = wp.components;

import { 
	RequiredAlertControl,
	FontSizeControl,
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
    getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";




const coreParagraphControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

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

	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/image') && 
					<>
						<InspectorControls>
							<PanelStyleOptions 
							{...props} 
							styles={imageStyles}
							prefix="uams-image--style-"  
							></PanelStyleOptions>
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
												default: 'default',
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
