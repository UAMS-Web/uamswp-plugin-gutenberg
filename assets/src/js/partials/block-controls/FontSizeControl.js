import { SelectControl } from '@wordpress/components';
import { getBlockClassNameOption, setBlockClassName, getBlockClassNameValue } from '../block-utilities/blockUtilities';
import { ResetControl } from './blockControls';


const uamsFontSizes = [
    { label: 'Not Set', value: '' },
    { label: 'xxSmall', value: 'xxsmall' },
    { label: 'xSmall', value: 'xsmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'xMedium', value: 'xmedium' },
    { label: 'xxMedium', value: 'xxmedium' },
    { label: 'Large', value: 'large' },
    { label: 'xLarge', value: 'xlarge' },
    { label: 'xxLarge', value: 'xxlarge' },
    { label: 'Hero', value: 'hero' },
]


const FontSizeControl = ( props ) => {

    let { 
        attributes, 
        setAttributes, 
        sizes = uamsFontSizes, 
        elementClass ='className',
        label = 'Font Size',
        prefix = 'uams-font-size--',
    } = props;

    // console.log(attributes);

    //let value = getBlockClassNameOption( classNames, prefix );
    let value = getBlockClassNameValue( attributes, prefix, '', elementClass );

    const setFontSize = ( size ) => {

        if ( 'onChange' in attributes ) {

            attributes.onChange( size );

        } else {

            //setBlockClassName( attributes, setAttributes, prefix, size );
            setBlockClassName( attributes, setAttributes, prefix, size, elementClass )
        }
    }

    return (
        <>
            <SelectControl
                label={ label }
                value={ value }
                options={ sizes }
                onChange={ ( fontSize ) => setFontSize( fontSize ) }
            />
        </>
    )
    
} 

export default FontSizeControl;