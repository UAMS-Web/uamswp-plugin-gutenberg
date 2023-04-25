const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
	SelectControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelStyleOptions,
	PanelAnimate,
} from "../../../assets/src/js/partials/block-panels/blockPanels";


import {
	hasBlockClassName,
	addBlockClassName,
	setBlockClassName,
	getBlockClassNameValue,
	setChildBlockClassName,
	setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'uams-decorator',
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

	/*const decoratorStyles = [
		{ label: 'Triangle: Crimson Right', value: 'triangle-crimson-right' },
		{ label: 'Triangle: Crimson Left', value: 'triangle-crimson-left' },
		{ label: 'Triangle: Crimson WSU Steep Right', value: 'triangle-crimson-uams-steep-right' },
		{ label: 'Triangle: Crimson WSU Steep Left', value: 'triangle-crimson-uams-steep-left' },
		{ label: 'Triangle: Crimson WSU Steep Top Right', value: 'triangle-crimson-uams-steep-top-right' },
		{ label: 'Triangle: Crimson WSU Steep Top Left', value: 'triangle-crimson-uams-steep-top-left' },
		{ label: 'Triangle: Gray Right', value: 'triangle-gray-right' },
		{ label: 'Triangle: Gray Left', value: 'triangle-gray-left' },
		{ label: 'Block: Gray', value: 'block-gray' },
		{ label: 'Block: Gray WSU', value: 'block-gray-uams' },
		{ label: 'Block: Gray Dark', value: 'block-gray-dark' },
		{ label: 'Block: Crimson', value: 'block-crimson' },
		{ label: 'Block: Crimson WSU', value: 'block-crimson-uams' },
		{ label: 'Block: Crimson Light', value: 'block-crimson-light' },
		{ label: 'None', value: '' },
	];*/


	const decoratorStyles = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="32 60 92 60 92 0 32 60" fill="#a61d2f"/></svg>,
			label: 'Triangle',
			value: 'triangle-crimson-right',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="32 0 32 60 92 60 32 0" fill="#a61d2f"/></svg>,
			label: 'Triangle',
			value: 'triangle-crimson-left',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="78.69 0 78.69 60 45.31 60 78.69 0" fill="#a61d2f"/></svg>,
			label: 'Triangle (UAMS)',
			value: 'triangle-crimson-uams-steep-right',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="45.31 0 45.31 60 78.69 60 45.31 0" fill="#a61d2f"/></svg>,
			label: 'Triangle (UAMS)',
			value: 'triangle-crimson-uams-steep-left',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="45.31 60 45.31 0 78.69 0 45.31 60" fill="#a61d2f"/></svg>,
			label: 'Triangle (UAMS)',
			value: 'triangle-crimson-uams-steep-top-left',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="78.69 60 78.69 0 45.31 0 78.69 60" fill="#a61d2f"/></svg>,
			label: 'Triangle (UAMS)',
			value: 'triangle-crimson-uams-steep-top-right',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="32 60 92 60 92 0 32 60" fill="#dad9d9"/></svg>,
			label: 'Triangle',
			value: 'triangle-gray-right',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><polygon points="32 0 32 60 92 60 32 0" fill="#dad9d9"/></svg>,
			label: 'Triangle',
			value: 'triangle-gray-left',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><rect x="25.92" width="72.17" height="60" fill="#dad9d9"/></svg>,
			label: 'Block',
			value: 'block-gray',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><rect x="25.92" width="72.17" height="60" fill="#dad9d9"/></svg>,
			label: 'Block (UAMS)',
			value: 'block-gray-uams',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><rect x="25.92" width="72.17" height="60" fill="gray"/></svg>,
			label: 'Block',
			value: 'block-gray-dark',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><rect x="25.92" width="72.17" height="60" fill="#a61d2f"/></svg>,
			label: 'Block',
			value: 'block-crimson',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><rect x="25.92" width="72.17" height="60" fill="#a61d2f"/></svg>,
			label: 'Block (UAMS)',
			value: 'block-crimson-uams',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><rect x="25.92" width="72.17" height="60" fill="#ca2039"/></svg>,
			label: 'Block',
			value: 'block-crimson-light',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><line x1="14.39" y1="51.39" x2="57.16" y2="8.61" fill="none" stroke="#a61d2f" stroke-miterlimit="10" stroke-width="3"/><line x1="25.91" y1="51.39" x2="68.68" y2="8.61" fill="none" stroke="#a61d2f" stroke-miterlimit="10" stroke-width="3"/><line x1="36.81" y1="51.39" x2="79.58" y2="8.61" fill="none" stroke="#a61d2f" stroke-miterlimit="10" stroke-width="3"/><line x1="46.91" y1="51.39" x2="89.68" y2="8.61" fill="none" stroke="#a61d2f" stroke-miterlimit="10" stroke-width="3"/><line x1="58.43" y1="51.39" x2="101.2" y2="8.61" fill="none" stroke="#a61d2f" stroke-miterlimit="10" stroke-width="3"/><line x1="69.33" y1="51.39" x2="112.1" y2="8.61" fill="none" stroke="#a61d2f" stroke-miterlimit="10" stroke-width="3"/></svg>,
			label: 'Lines Crimson',
			value: 'lines-crimson',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="none"/><line x1="14.39" y1="51.39" x2="57.16" y2="8.61" fill="none" stroke="#bfbfbf" stroke-miterlimit="10" stroke-width="3"/><line x1="25.91" y1="51.39" x2="68.68" y2="8.61" fill="none" stroke="#bfbfbf" stroke-miterlimit="10" stroke-width="3"/><line x1="36.81" y1="51.39" x2="79.58" y2="8.61" fill="none" stroke="#bfbfbf" stroke-miterlimit="10" stroke-width="3"/><line x1="46.91" y1="51.39" x2="89.68" y2="8.61" fill="none" stroke="#bfbfbf" stroke-miterlimit="10" stroke-width="3"/><line x1="58.43" y1="51.39" x2="101.2" y2="8.61" fill="none" stroke="#bfbfbf" stroke-miterlimit="10" stroke-width="3"/><line x1="69.33" y1="51.39" x2="112.1" y2="8.61" fill="none" stroke="#bfbfbf" stroke-miterlimit="10" stroke-width="3"/></svg>,
			label: 'Lines Gray',
			value: 'lines-gray',
		},
	]

	const getDecoratorName = () => {

		let value = getBlockClassNameValue( attributes,'uams-decorator--style-', '' );
		let name = 'None'

		decoratorStyles.forEach( ( style ) => {

			if ( style.value === value ) {
				name = style.label;
			}

		} );

		return name;

	}


    return (
		<>
		<InspectorControls>
			<PanelStyleOptions 
				{...props} 
				styles={decoratorStyles}
				prefix="uams-decorator--style-"  
				></PanelStyleOptions>
            <PanelDisplayOptions isOpen={true} >
				<TextControl
					label="Top"
					value={ attributes.top }
					onChange= { ( top ) => setAttributes( { top } ) }
				/>
				<TextControl
					label="Bottom"
					value={ attributes.bottom }
					onChange= { ( bottom ) => setAttributes( { bottom } ) }
				/>
				<TextControl
					label="Left"
					value={ attributes.left }
					onChange= { ( left ) => setAttributes( { left } ) }
				/>
				<TextControl
					label="Right"
					value={ attributes.right }
					onChange= { ( right ) => setAttributes( { right } ) }
				/>
				<TextControl
					label="width"
					value={ attributes.width }
					onChange= { ( width ) => setAttributes( { width } ) }
				/>
				<TextControl
					label="height"
					value={ attributes.height }
					onChange= { ( height ) => setAttributes( { height } ) }
				/>
				<SelectControl
					label="Z Index"
					value={ getBlockClassNameValue( attributes,'uams-z-index--', '' ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Content 1', value: '1-content' },
						{ label: 'Content 2', value: '2-content' },
						{ label: 'Content 3', value: '3-content' },
						{ label: 'Content 4', value: '4-content' },
						{ label: 'Content 5', value: '5-content' },
						{ label: 'Content 6', value: '6-content' },
					] } 
					onChange={ ( style ) => { setBlockClassName( attributes, setAttributes, 'uams-z-index--', style ) } }
				/>
            </PanelDisplayOptions>
			<PanelAnimate { ...props } ></PanelAnimate>
		</InspectorControls>
		<div { ...blockProps }  >Decorator: { getDecoratorName() }</div>
		</>
    )

}

export default Edit;