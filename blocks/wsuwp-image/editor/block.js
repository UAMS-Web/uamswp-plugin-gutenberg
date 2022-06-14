/**
 *
 * WordPress Dependencies
 *
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const {
     Icon
 } = wp.components;
 
 import edit from "./edit";
 
 registerBlockType(
     "wsuwp/image",
     {
         title: "WSU Image Block",
         apiVersion: 2,
         parent: [ 'wsuwp/card' ],
         category: "design",
         icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
         attributes: {
            imageId: {
                type: "integer",
                default: 0,
            },
            imageSrc: {
                type: "string",
                default: "",
            },
            imageAlt: {
                type: "string",
                default: "", 
            }
         },
         edit 
     }
 );