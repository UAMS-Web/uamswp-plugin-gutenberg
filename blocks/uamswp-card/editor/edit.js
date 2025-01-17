const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
    InspectorAdvancedControls,
	useBlockProps,
    RichText,
    URLInputButton,
} = wp.blockEditor;

const {
    SelectControl,
	TextControl,
	ToggleControl,
    PanelBody,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
    ImageFrameControl,
    HeadingTagControl,
	FontSizeControl,
    DisplayFieldControl,
	DeveloperToolsControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelAnimate,
	PanelStyleOptions,
	PanelDeveloperTools,
	PanelImageOptions,
	PanelContentOptions,
	PanelLinkOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
	getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

const { MediaPlaceholder, MediaUpload } = wp.editor;

const cardStyles = [
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="32.2" y="2.34" width="59.6" height="31.32" fill="#373737"/><rect x="32.2" y="37.66" width="59.6" height="6.58" rx="1.96"/><rect x="32.2" y="47.01" width="59.6" height="3.91" rx="1.96"/><rect x="32.2" y="53.7" width="59.6" height="3.91" rx="1.96"/></svg>,
		label: 'Default',
		value: '',
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="4.34" y="2.52" width="56.06" height="53.06" fill="#373737"/><rect x="66.07" y="11.16" width="53.59" height="6.58" rx="1.96"/><rect x="66.07" y="23.68" width="48.5" height="3.91" rx="1.96"/><rect x="66.07" y="29.93" width="48.5" height="3.91" rx="1.96"/><rect x="66.07" y="36.19" width="48.5" height="3.91" rx="1.96"/><rect x="66.07" y="42.26" width="48.5" height="3.91" rx="1.96"/></svg>,
		label: 'Horizontal 50%',
		value: 'horizontal-50',
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="4.34" y="3.86" width="41.73" height="53.06" fill="#373737"/><rect x="52.68" y="11.16" width="66.98" height="6.58" rx="1.96"/><rect x="52.68" y="23.68" width="61.9" height="3.91" rx="1.96"/><rect x="52.68" y="29.93" width="61.9" height="3.91" rx="1.96"/><rect x="52.68" y="36.19" width="61.9" height="3.91" rx="1.96"/><rect x="52.68" y="42.26" width="61.9" height="3.91" rx="1.96"/></svg>,
		label: 'Horizontal 33%',
		value: 'horizontal-33',
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="4.34" y="12.66" width="38.65" height="31.32" fill="#373737"/><rect x="50.26" y="14.71" width="69.4" height="6.58" rx="1.96"/><rect x="50.26" y="26.48" width="64.32" height="3.91" rx="1.96"/><rect x="50.26" y="32.74" width="64.32" height="3.91" rx="1.96"/><rect x="50.26" y="39" width="64.32" height="3.91" rx="1.96"/><rect x="50.26" y="45.06" width="64.32" height="3.91" rx="1.96"/></svg>,
		label: 'Horizontal 25%',
		value: 'horizontal-25',
	},
]




const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes,
		clientId
	} = props;

	const blockProps = useBlockProps( {
        className: 'uams-card',
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

    let displayFields = attributes.displayFields;

	if ( '2' === attributes.version ) {

		return (
			<>
				<InspectorControls>
					<PanelStyleOptions 
						{...props} 
						styles={cardStyles}
						prefix="uams-card--style-"  
						>
					</PanelStyleOptions>
					<PanelImageOptions {...props} ></PanelImageOptions>
					<PanelColorOptions>
						<ColorClassControl
							{ ...props }
							colors={backgroundColors}
							label='Background Color'
							value='#f2f2f2'
							/>
						<ColorClassControl
							{ ...props }
							colors={borderColors}
							label='Border Color'
							value='#e6e6e6'
							prefix='uams-border-top--color-'
							/>
					</PanelColorOptions>
					<PanelAnimate { ...props } ></PanelAnimate>
					<SpacingClassNameSelector                        
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
						label={ 'Use Version 2' }
						checked={ ( '2' === attributes.version ) }
						onChange={ ( checked) => { 
							let cardVersion = ( checked ) ? '2' : '1';
							setAttributes( {  version: cardVersion } ) } 
						}
						help={ 'Use Version 2 of the Card.'}
					/>
				</InspectorAdvancedControls>
				<div { ...blockProps }  >
					<InnerBlocks
					template={[ [ 'uamswp/image',{} ],[ 'core/heading',{className:'uams-title'} ],[ 'core/paragraph',{} ] ] }
							templateLock={ false }
						/>
				</div>
			</>
		)

	} else {

		return (
			<>
			<InspectorControls>
				<PanelImageOptions {...props}
					showControl={ true }
					altControl={ true }
					ratioControl={ true }
					></PanelImageOptions>
				<PanelContentOptions {...props}
					showImageControl={true}
					showCaptionControl={true}
					showHeadingControl={true}
					showCustomControl={true}
					headingTagControl={true}
					headingFontSizeControl={true}
					>
				</PanelContentOptions>
				<PanelLinkOptions {...props} >
					<ToggleControl
						label="Link Full Card"
						checked={attributes.linkCard}
						onChange={ ( linkCard ) => setAttributes( { linkCard } ) }
						/>
				</PanelLinkOptions>
				<PanelStyleOptions 
					{...props} 
					styles={cardStyles}
					prefix="uams-card--style-"  
						>
						{ getBlockClassNameValue( attributes, 'uams-card--style-horizontal-', false ) && <ToggleControl
						label="Reverse Layout"
						checked={ getBlockClassNameValue( attributes, 'uams-card--layout-', false ) ? true : false }
						onChange={ ( isReversed ) => setBlockClassNameBool( attributes, setAttributes, 'uams-card--layout-reversed', isReversed ) }
						/> }
						</PanelStyleOptions> 
				<PanelColorOptions>
					<ColorClassControl
						{ ...props }
						colors={backgroundColors}
						label='Background Color'
						value='#f2f2f2'
						/>
					<ColorClassControl
						{ ...props }
						colors={borderColors}
						label='Border Color'
						value='#e6e6e6'
						prefix='uams-border-top--color-'
						/>
				</PanelColorOptions>
				<SpacingClassNameSelector                        
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
				{attributes.developerTools && <PanelDeveloperTools 
					{ ...props}
					maxWidth={ true }
					alignItem={ true }
					positionElement={ true } 
					>
						<ToggleControl
						label={ 'Use Version 2' }
						checked={ ( '2' === attributes.version ) }
						onChange={ ( checked) => { 
							let cardVersion = ( checked ) ? '2' : '1';
							setAttributes( {  version: cardVersion } ) } 
						}
						help={ 'Use Version 2 of the Card.'}
					/></PanelDeveloperTools>}
			</InspectorControls>
			<InspectorAdvancedControls>
					<DeveloperToolsControl { ...props } />
				</InspectorAdvancedControls>
			<div { ...blockProps }  >
				{ attributes.showImage && <ImageFrameControl { ...props } /> }
				<div className="uams-card__content">
					{ attributes.showHeading && <RichText
						tagName="h2" // The tag here is the element output and editable in the admin
						value={ attributes.title } // Any existing content, either from the database or an attribute default
						className={`uams-title ${attributes.headingClass}`}
						allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
						placeholder={ 'Add a Card Heading...' } // Display this text before any content has been added by the user
					/> }
					{ attributes.showCaption && <RichText
						tagName="div" // The tag here is the element output and editable in the admin
						value={ attributes.caption } // Any existing content, either from the database or an attribute default
						className="uams-caption"
						//allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( caption ) => setAttributes( { caption } ) } // Store updated content as a block attribute
						placeholder={ 'Add a card caption...' } // Display this text before any content has been added by the user
					/> }
					{ attributes.showContent && <InnerBlocks
						templateLock={ false }
					/> }
				</div>
			</div>
			</> 
		)
	}

}

export default Edit;