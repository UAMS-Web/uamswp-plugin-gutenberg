import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
} from "../../partials/block-utilities/blockUtilities";

const blockFlexLayoutControl = wp.compose.createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && ( props.name == 'uamswp/column' || props.name == 'uamswp/callout' ) && 
					<InspectorAdvancedControls>
						<ToggleControl
							label={'Enable Align Bottom'}
							checked={ hasBlockClassName( attributes, 'uams-item-layout--flex-column' )}
							onChange={( value ) => setBlockClassNameBool( attributes, setAttributes, 'uams-item-layout--flex-column', value ) }
                            help='Individual child items must have "Align Bottom" activated (Advanced/Align Bottom)'
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'coverAdvancedControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'uamswp/block-flex-layout-control',
	blockFlexLayoutControl
);