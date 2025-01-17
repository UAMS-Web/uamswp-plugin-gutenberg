import { Panel, PanelBody, PanelRow } from '@wordpress/components';


const NestedAdvancedPanel = (props) => {


    return (

        <PanelBody title="Additional Advanced Settings" initialOpen={ false } className="uams-gutenberg-panel-nested-advanced">
            {props.children}
        </PanelBody>
    );

}

export default NestedAdvancedPanel; 