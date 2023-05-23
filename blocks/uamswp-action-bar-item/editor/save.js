const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

const saveItem = ( props ) => {

	return ( 
		<InnerBlocks.Content /> 
	)
}

export default saveItem;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
// import { RichText, useBlockProps } from '@wordpress/block-editor';
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
// export default function Save( { attributes } ) {
// 	const { headingText, bodyText, url, linkTarget, linkText, linkLabel, parentColumns} = attributes;
        
// 	return (
// 		<div { ...useBlockProps.save() } className={ classnames( 'col-12', 'item', {[ `col-sm-${ 12/parentColumns }` ]: parentColumns} ) }>
//             <div class="inner-container">
//                 <div class="text-container">
//                     <RichText.Content
//                         tagName='h3'
//                         className='h5'
//                         value={ headingText }
//                         data-moduletitle={ headingText } 
//                     />
//                     <RichText.Content 
//                         tagName='p'
//                         value={ bodyText }
//                         className='action__item__body'
//                     />
//                 </div>
//                 <RichText.Content
//                     tagName="a"
//                     className={ classnames('btn', `btn-primary`) }
//                     value={ linkText }
//                     href={ url }
//                     title={ linkLabel }
//                     target={ linkTarget }
//                     rel="noopener"
//                 />
//             </div>
//         </div>
// 	);
// }
