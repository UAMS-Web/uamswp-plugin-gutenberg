import { 
    Panel, 
    PanelBody, 
    PanelRow,
    BaseControl,
    Button, 
    ButtonGroup,
} from '@wordpress/components';

import {
    addBlockClassName, 
    hasBlockClassName,
    getBlockClassName,
    getBlockClassNameValue,
    removeBlockClassName 
} from '../../block-utilities/blockUtilities';

const PanelStyleOptions= ( props ) => {

    let {
        isOpen=false,
        styles=[],
        prefix,
        attributes,
        setAttributes,
        setKey = 'className',
    } = props

    let classString = attributes[setKey] ?? '';
    let currentValue = getBlockClassNameValue( classString, prefix );


    const setStyleClassNames = ( styleObj ) => {

            let itemPrefix = ( 'prefix' in styleObj ) ? styleObj.prefix : prefix;

            let updatedClasses = addBlockClassName( classString, itemPrefix, styleObj.value );
    
            setAttributes( { [setKey]: updatedClasses } );
    
    }


    const styleItem = ( styleObj ) => {

        return (
            <Button 
                key={styleObj.label}
                isPressed={ ( currentValue == styleObj.value ) }
                onClick={ () => setStyleClassNames( styleObj ) }
                >
                {styleObj.icon}
                <span>{styleObj.label}</span>
            </Button>
        )

    }


    return (
            <PanelBody title="Style Options" initialOpen={isOpen} >
                <BaseControl id="uams-block-style" className="uams-block-style">
                    <ButtonGroup>
                        { styles.map( ( styleObj ) => styleItem( styleObj ) ) }
                    </ButtonGroup>
                </BaseControl>
                {props.children}
            </PanelBody>

    )

}

export default PanelStyleOptions;