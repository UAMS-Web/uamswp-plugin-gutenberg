/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Notice,
	PanelBody,
	RangeControl,
	SelectControl,
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	InnerBlocks,
	useInnerBlocksProps,
	__experimentalBlockVariationPicker,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { withDispatch, useSelect } from '@wordpress/data';
import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './_editor.scss';

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'uams/uams-action-bar-item'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'uamswp/action-bar-item' ];

function ColumnsEditContainer( {
	attributes,
	setAttributes,
	updateColumns,
	clientId,
} ) {
	const { backgroundColor, headingText, columns, templateLock } = attributes;

	const { count, canInsertColumnBlock } = useSelect(
		( select ) => {
			return {
				count: select( blockEditorStore ).getBlockCount( clientId ),
				canInsertColumnBlock: select(
					blockEditorStore
				).canInsertBlockType( 'uamswp/action-bar-item', clientId ),
			};
		},
		[ clientId ]
	);

	const classes = classnames( 
		'uams-module',
		'section-block', 
		{
		[ `${backgroundColor}` ]: backgroundColor,
		[ `has-${ count }-columns` ]: count,
	} );

	const blockProps = useBlockProps( {
		className: classes,
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		renderAppender: false,
		templateLock,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody>
					{ canInsertColumnBlock && (
						<>
							<RangeControl
								__nextHasNoMarginBottom
								label={ __( 'Columns' ) }
								value={ count }
								onChange={ ( value ) =>
									updateColumns( count, value )
								}
								min={ 2 }
								max={ Math.max( 4, count ) }
							/>
							{ count > 4 && (
								<Notice
									status="warning"
									isDismissible={ false }
								>
									{ __(
										'This column count exceeds the recommended amount and may cause visual breakage.'
									) }
								</Notice>
							) }
						</>
					) }
					<SelectControl
						label="Background Color"
						value={ backgroundColor }
						options={ [
							{ label: 'Auto', value: 'bg-auto' },
							{ label: 'Red', value: 'bg-primary' },
							{ label: 'Blue', value: 'bg-blue' },
						] }
						onChange={ ( newBackgroundColor ) => 
							setAttributes( { backgroundColor: newBackgroundColor } ) 
						}
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() } className={ classnames( 'uams-module', 'section-block', backgroundColor, `has-${ columns }-columns` ) } aria-label={headingText}>
				<h2 className={ 'sr-only' }>
					<RichText
						placeholder={ __( 'Section Title', 'uamswp-section-block' ) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						disableLineBreaks
						value={ headingText }
						onChange={ ( newHeading ) =>
							setAttributes( { headingText: newHeading } )
						}
					/>
				</h2>
				<div class="container-fluid">
					<div class="row">
						<InnerBlocks
						 	{ ...innerBlocksProps }
							allowedBlocks={ [ 'uamswp/action-bar-item' ] }
							orientation='horizontal'
							renderAppender={false}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

const ColumnsEditContainerWrapper = withDispatch(
	( dispatch, ownProps, registry ) => ( {
		/**
		 * Updates the column count, including necessary revisions to child Column
		 * blocks to grant required or redistribute available space.
		 *
		 * @param {number} previousColumns Previous column count.
		 * @param {number} newColumns      New column count.
		 */
		updateColumns( previousColumns, newColumns ) {
			const { clientId, setAttributes } = ownProps;
			const { replaceInnerBlocks } = dispatch( blockEditorStore );
			const { getBlocks } = registry.select( blockEditorStore );

			let innerBlocks = getBlocks( clientId );

			setAttributes( { columns: newColumns } );

			// Redistribute available width for existing inner blocks.
			const isAddingColumn = newColumns > previousColumns;

			if ( isAddingColumn ) {
				innerBlocks = [
					...innerBlocks,
					...Array.from( {
						length: newColumns - previousColumns,
					} ).map( () => {
						return createBlock( 'uamswp/action-bar-item', { columns: newColumns } );
					} ),
				];
			} else {
				// The removed column will be the last of the inner blocks.
				innerBlocks = innerBlocks.slice(
					0,
					-( previousColumns - newColumns )
				);
			}

			replaceInnerBlocks( clientId, innerBlocks );
		},
	} )
)( ColumnsEditContainer );

function Placeholder () {
	return (
		<InnerBlocks
			template={ [
				[ 'uamswp/action-bar-item' ],
				[ 'uamswp/action-bar-item' ],
				[ 'uamswp/action-bar-item' ],
			] }
		/>
	);
}

const ColumnsEdit = ( props ) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	const Component = hasInnerBlocks
		? ColumnsEditContainerWrapper
		: Placeholder;

	return <Component { ...props } />;
};

export default ColumnsEdit;
