const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

const save = ( props ) => {

	return ( 
		<InnerBlocks.Content /> 
	)
}

export default save;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
// import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
// import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
// export default function save( props ) {
// 	const { 
//         attributes: { backgroundColor, headingText, columns },
//     } = props;
// 	return (
// 		<section { ...useBlockProps.save() } 
//             className={ classnames( 'uams-module', 'action-bar', `has-${ columns }-columns`, backgroundColor ) }
//             aria-label={headingText.replace(/<[^>]+>/g, '')}
//         >
// 			<h2 className={ 'sr-only' }>
// 			<RichText.Content
// 					value={ headingText }
// 				/>
// 			</h2>
// 			<div class="container-fluid">
// 				<div class="row">
// 					<InnerBlocks.Content />
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
