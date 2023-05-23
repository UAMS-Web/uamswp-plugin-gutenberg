import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
    TextControl,
    ToolbarButton,
    ToolbarGroup,
    Popover
} from '@wordpress/components';
import {
	RichText,
	InspectorControls,
    BlockControls,
    useBlockProps,
    __experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { link as linkIcon, linkOff as linkOffIcon } from '@wordpress/icons';
import { select } from "@wordpress/data";

export default function Edit( {
    attributes: { 
        headingText, 
        bodyText, 
        url,
		linkTarget,
        linkText,
		linkLabel, 
        parentColumns 
    },
	setAttributes,
    isSelected,
    clientId
} ) {
    const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( clientId ); 
    const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId ); //Pass the Parents CLient Id from above and get all Parent attributes
    const parentColumnsCount = parentAttributes.columns;
    setAttributes( { parentColumns: parentColumnsCount });
    
    const [isEditingUrl, setIsEditingUrl] = useState(false);
	const isUrlSet = !!url;
    const opensInNewTab = linkTarget === '_blank';

    function onToggleOpenInNewTab( value ) {
		const newLinkTarget = value ? '_blank' : undefined;

		// let updatedRel = rel;
		// if ( newLinkTarget && ! rel ) {
		// 	updatedRel = NEW_TAB_REL;
		// } else if ( ! newLinkTarget && rel === NEW_TAB_REL ) {
		// 	updatedRel = undefined;
		// }

		setAttributes( {
			linkTarget: newLinkTarget
        } );
	}
	const unlink = () => {
		setAttributes({
			url: null,
			linkTarget: null,
		});
		setIsEditingUrl(false);
	};
	const editUrl = (event) => {
		// event.preventDefault();
		setIsEditingUrl(true);
	};

	useEffect(() => {
		if (!isSelected) {
			setIsEditingUrl(false);
        }
	}, [isSelected]);
    return (
        <div { ...useBlockProps() } className={ classnames( 'col-12', 'item', {[ `col-sm-${ 12/parentColumns }` ]: parentColumns} ) }>
            <InspectorControls>
                    <PanelBody title={__('Link Settings')}>
                        <TextControl
                            label={__('Accessible label')}
                            value={ linkLabel }
                            onChange={ (newValue) =>
                                setAttributes({ linkLabel: newValue })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton
                            title={__('Button Link')}
                            name="link"
                            icon={linkIcon}
                            onClick={editUrl}
                        />
                        {isUrlSet && (
                            <ToolbarButton
                                title={__('Remove Button Link')}
                                name="link"
                                icon={linkOffIcon}
                                onClick={unlink}
                            />
                        )}
                    </ToolbarGroup>
                </BlockControls>
            <div class="inner-container">
                <div class="text-container">
                    <RichText
                        tagName='h3'
                        className='h5'
                        placeholder={ __( 'Title', 'uamswp-section-block' ) }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        disableLineBreaks
                        value={ headingText }
                        onChange={ ( newHeading ) =>
                            setAttributes( { headingText: newHeading } )
                        }
                        data-moduletitle={ headingText }
                    />
                    <RichText
                        placeholder={ __( 'Body text', 'uams-action-bar' ) }
                        tagName="p"
                        onChange={ ( newBodyText ) =>
                            setAttributes( { bodyText: newBodyText } )
                        }
                        value={ bodyText }
                    />
                </div>
                <RichText
						className={ classnames('btn', `btn-primary`) }
						tagName="a"
						placeholder={__('Button Text', 'gutenberg-lessons')}
						value={linkText}
						onChange={ ( newLinkText ) =>
                            setAttributes( { linkText: newLinkText } ) 
                        }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        multiline={ false }
                        onReplace={() => {}}
                        onSplit={() => {}}
                        onFocus={ () => setIsEditingUrl(true) }
                        rel="noopener"
					/>
                    {isEditingUrl && (
						<Popover
                            placement="bottom"
							onClose={() => setIsEditingUrl(false)}
							focusOnMount={isEditingUrl ? 'container' : false}
						>
							<LinkControl
								hasTextControl
                                value={ { url, opensInNewTab } }
                                onChange={ ( {
                                    url: newURL = '',
                                    opensInNewTab: newOpensInNewTab,
                                } ) => {
                                    setAttributes( { url: newURL } );
        
                                    if ( opensInNewTab !== newOpensInNewTab ) {
                                        onToggleOpenInNewTab( newOpensInNewTab );
                                    }
                                } }
								label={__('Card URL')}
							/>
						</Popover>
					)}
            </div>
        </div>
    );
}