import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
} from "../../partials/block-utilities/blockUtilities";

const blockFlexAlignBottomControl = wp.compose.createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/buttons'  || props.name == 'uamswp/callout' ) && 
					<InspectorAdvancedControls>
						<ToggleControl
							label={'Align Bottom'}
							checked={ hasBlockClassName( attributes, 'uams-align-item--flex-bottom' )}
							onChange={( value ) => setBlockClassNameBool( attributes, setAttributes, 'uams-align-item--flex-bottom', value ) }
							help='Parent container must have "Enable Align Bottom" activated (Advanced/Enable Align Bottom)'
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'blockFlexAlignBottomControl');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'uamswp/block-flex-align-bottom-control',
	blockFlexAlignBottomControl
);