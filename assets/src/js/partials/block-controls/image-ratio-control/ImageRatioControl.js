import { Button, ButtonGroup, BaseControl } from "@wordpress/components";


const ImageRatioOption = (props) => {

    let isActive = ( props.value == props.currentValue ) ? true : false;
  return (
    <Button
        onClick={ () => props.onChange( props.value )}
        isPressed={ isActive }
        className=""
        aria-label={props.label}
        >
      {props.svg}
    </Button>
    );
};

const ImageRatioControl = (props) => {

    const defaultImageRatios = [
        {
            value:'16-9',
            label:'16-9',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M7.1,8.76V21.41H3.94V14.63a11.56,11.56,0,0,0-.07-1.77.63.63,0,0,0-.38-.45,4.06,4.06,0,0,0-1.41-.15H1.77V10.78a5.7,5.7,0,0,0,3.47-2Z" fill="#231f20"/><path d="M15.91,12.12H12.75c0-.59,0-1,0-1.11a.56.56,0,0,0-.19-.39.61.61,0,0,0-.45-.16.54.54,0,0,0-.4.15.55.55,0,0,0-.18.38c0,.16,0,.48,0,.95v2a1.71,1.71,0,0,1,.72-.76,2.36,2.36,0,0,1,1.15-.25,2.59,2.59,0,0,1,1.53.47,2.07,2.07,0,0,1,.85,1.12,7,7,0,0,1,.18,1.78v1a13.35,13.35,0,0,1-.11,2,2.51,2.51,0,0,1-.54,1.2,2.79,2.79,0,0,1-1.21.85,4.69,4.69,0,0,1-1.79.31,5.39,5.39,0,0,1-2.09-.35,2.81,2.81,0,0,1-1.25-1A3,3,0,0,1,8.4,18.9c-.05-.48-.07-1.42-.07-2.82V14.33c0-1.51,0-2.51.06-3a2.94,2.94,0,0,1,.55-1.44,2.89,2.89,0,0,1,1.3-1,4.88,4.88,0,0,1,1.9-.34,4.78,4.78,0,0,1,2.18.43,2.6,2.6,0,0,1,1.22,1.21A4.71,4.71,0,0,1,15.91,12.12Zm-3.16,3.94a2,2,0,0,0-.15-.92.53.53,0,0,0-.48-.25.52.52,0,0,0-.48.24,1.81,1.81,0,0,0-.16.93v2.29a2.6,2.6,0,0,0,.15,1.1.49.49,0,0,0,.48.25.63.63,0,0,0,.42-.2c.15-.13.22-.49.22-1.07Z" fill="#231f20"/><path d="M19.38,13.17v2.57H17V13.17Zm0,5.66v2.58H17V18.83Z" fill="#231f20"/><path d="M20.23,18.05h3.15q0,.89,0,1.11a.58.58,0,0,0,.19.39.64.64,0,0,0,.45.15.53.53,0,0,0,.4-.14.55.55,0,0,0,.18-.39c0-.15,0-.47,0-.94v-2A1.62,1.62,0,0,1,24,17a2.44,2.44,0,0,1-1.17.26,2.59,2.59,0,0,1-1.53-.47,2,2,0,0,1-.84-1.13,6.87,6.87,0,0,1-.18-1.77v-1a13.6,13.6,0,0,1,.1-2,2.44,2.44,0,0,1,.55-1.2,2.75,2.75,0,0,1,1.21-.86,4.9,4.9,0,0,1,1.79-.3A5.16,5.16,0,0,1,26,8.87a2.88,2.88,0,0,1,1.77,2.4c.05.48.07,1.42.07,2.81v1.76c0,1.5,0,2.51-.06,3a2.9,2.9,0,0,1-.54,1.44,3,3,0,0,1-1.3,1,5.07,5.07,0,0,1-1.9.34,4.89,4.89,0,0,1-2.18-.43A2.56,2.56,0,0,1,20.6,20,4.56,4.56,0,0,1,20.23,18.05Zm3.15-4q0,.8.21,1a.65.65,0,0,0,.43.18A.54.54,0,0,0,24.5,15a2,2,0,0,0,.15-.94V11.81a2.54,2.54,0,0,0-.15-1.09.5.5,0,0,0-.48-.26.67.67,0,0,0-.42.2,1.67,1.67,0,0,0-.22,1.08Z" fill="#231f20"/></svg>
        },
        {
            value:'6-4',
            label:'6-4',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M13.21,12.37H10.06c0-.58,0-1,0-1.11a.6.6,0,0,0-.19-.39.65.65,0,0,0-.46-.15.56.56,0,0,0-.57.53,9.27,9.27,0,0,0,0,.94v2a1.64,1.64,0,0,1,.71-.76,2.42,2.42,0,0,1,1.16-.26,2.59,2.59,0,0,1,1.53.47A2.09,2.09,0,0,1,13,14.79a7.54,7.54,0,0,1,.17,1.77v1a13.76,13.76,0,0,1-.1,2,2.6,2.6,0,0,1-.54,1.2,2.87,2.87,0,0,1-1.21.85,4.89,4.89,0,0,1-1.79.31,5.19,5.19,0,0,1-2.09-.36,2.74,2.74,0,0,1-1.25-1,3,3,0,0,1-.52-1.38c0-.49-.07-1.43-.07-2.83V14.58c0-1.5,0-2.51.06-3a3,3,0,0,1,.55-1.45,2.89,2.89,0,0,1,1.3-1,5.07,5.07,0,0,1,1.9-.34,5,5,0,0,1,2.18.43,2.58,2.58,0,0,1,1.22,1.22A4.67,4.67,0,0,1,13.21,12.37Zm-3.15,4a1.93,1.93,0,0,0-.15-.92.51.51,0,0,0-.48-.25.52.52,0,0,0-.48.24,1.78,1.78,0,0,0-.16.93v2.29a2.51,2.51,0,0,0,.15,1.09.5.5,0,0,0,.48.26.67.67,0,0,0,.42-.2c.15-.13.22-.49.22-1.07Z" fill="#231f20"/><path d="M16.68,13.43V16H14.3V13.43Zm0,5.65v2.58H14.3V19.08Z" fill="#231f20"/><path d="M24,9v8.27h.9v2.16H24v2.22H20.82V19.44H17.07V17.28L19.79,9Zm-3.15,8.27V11.9l-1.4,5.38Z" fill="#231f20"/></svg>
        },
        {
            value:'4-3',
            label:'4-3',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M12.14,9v8.27H13v2.16h-.9v2.22H9V19.44H5.24V17.28L8,9ZM9,17.28V11.9l-1.4,5.38Z" fill="#231f20"/><path d="M16.08,13.43V16H13.7V13.43Zm0,5.65v2.58H13.7V19.08Z" fill="#231f20"/><path d="M22.86,14.5a1.91,1.91,0,0,1,1.07.79,5.7,5.7,0,0,1,.36,2.58,6.26,6.26,0,0,1-.35,2.34,2.41,2.41,0,0,1-1.19,1.27,4.69,4.69,0,0,1-2.16.43,4.63,4.63,0,0,1-2.36-.5,2.45,2.45,0,0,1-1.12-1.24,8.15,8.15,0,0,1-.27-2.53v-1H20v2.05a3.65,3.65,0,0,0,.09,1,.43.43,0,0,0,.44.22.47.47,0,0,0,.48-.28,5.16,5.16,0,0,0,.12-1.47v-.88A2.55,2.55,0,0,0,21,16.27a.8.8,0,0,0-.48-.44,5,5,0,0,0-1.24-.12V13.87a6.35,6.35,0,0,0,1.39-.08.6.6,0,0,0,.38-.38,2.48,2.48,0,0,0,.12-.9V11.8a1.82,1.82,0,0,0-.14-.87.55.55,0,0,0-.87,0,2.4,2.4,0,0,0-.12,1v1H16.84V11.85a3,3,0,0,1,.83-2.45,4.36,4.36,0,0,1,2.63-.64,4.06,4.06,0,0,1,3.06.89,3.47,3.47,0,0,1,.81,2.45,3.06,3.06,0,0,1-.29,1.53A2.59,2.59,0,0,1,22.86,14.5Z" fill="#231f20"/></svg>
        },
        {
            value:'1-1',
            label:'1-1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M12.72,9V21.66H9.56V14.88a11.3,11.3,0,0,0-.07-1.76.63.63,0,0,0-.38-.45,4.06,4.06,0,0,0-1.41-.16H7.38V11a5.7,5.7,0,0,0,3.48-2Z" fill="#231f20"/><path d="M16.33,13.43V16H14V13.43Zm0,5.65v2.58H14V19.08Z" fill="#231f20"/><path d="M22.05,9V21.66H18.89V14.88a11.3,11.3,0,0,0-.07-1.76.67.67,0,0,0-.39-.45A4,4,0,0,0,17,12.51h-.31V11a5.73,5.73,0,0,0,3.48-2Z" fill="#231f20"/></svg>
        },
        {
            value:'3-4',
            label:'3-4',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M11.64,14.24a2,2,0,0,1,1.07.79,5.92,5.92,0,0,1,.35,2.59A6.33,6.33,0,0,1,12.71,20a2.41,2.41,0,0,1-1.18,1.26,4.76,4.76,0,0,1-2.17.44A4.58,4.58,0,0,1,7,21.15a2.42,2.42,0,0,1-1.13-1.23,8.22,8.22,0,0,1-.27-2.54v-1H8.77v2.06a3.13,3.13,0,0,0,.1,1,.42.42,0,0,0,.43.23.49.49,0,0,0,.49-.29A5.62,5.62,0,0,0,9.9,18v-.88A2.55,2.55,0,0,0,9.74,16a.79.79,0,0,0-.49-.44A4.93,4.93,0,0,0,8,15.46V13.62a6.09,6.09,0,0,0,1.39-.09.6.6,0,0,0,.39-.37,2.85,2.85,0,0,0,.11-.91v-.7a1.9,1.9,0,0,0-.13-.88.49.49,0,0,0-.43-.21.47.47,0,0,0-.45.23,2.31,2.31,0,0,0-.12.94v1H5.61V11.6a3,3,0,0,1,.83-2.45,4.29,4.29,0,0,1,2.63-.64,4.11,4.11,0,0,1,3.07.88,3.54,3.54,0,0,1,.8,2.45,3.13,3.13,0,0,1-.29,1.54A2.61,2.61,0,0,1,11.64,14.24Z" fill="#231f20"/><path d="M16.57,13.17v2.57H14.19V13.17Zm0,5.66v2.58H14.19V18.83Z" fill="#231f20"/><path d="M23.86,8.76V17h.9v2.15h-.9v2.23H20.71V19.18H17V17l2.72-8.27ZM20.71,17V11.64L19.31,17Z" fill="#231f20"/></svg>
        },
        {
            value:'auto',
            label:'none',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle cx="15" cy="15" r="9.11" fill="none" stroke="#58595b" stroke-miterlimit="10" stroke-width="3"/><line x1="8.43" y1="21.41" x2="21.05" y2="8.51" fill="none" stroke="#58595b" stroke-miterlimit="10" stroke-width="3"/></svg>
        }
    ]

    let { 
        attributes, 
        setAttributes, 
        currentValue, 
        label = 'Image Ratio',
        imageRatios = defaultImageRatios,
        onChange,
    } = props;

    return (
        <BaseControl
            className="wsu-gutenberg-svg-button-group-control"
            id="svg-button-group-control"
            label={label}
            help=""
            >
            <ButtonGroup>
                { imageRatios.map( ( buttonOption ) => {
                    return <ImageRatioOption {...props} {...buttonOption} />;
                })}
            </ButtonGroup>
        </BaseControl>
    );
};

export default ImageRatioControl;