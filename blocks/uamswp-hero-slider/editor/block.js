/**
 *
 * WordPress Dependencies
 *
 */
import "./hooks";
const { registerBlockType } = wp.blocks;

import edit from "./edit";
import save from "./save";

registerBlockType("uamswp/hero-slider", {
  apiVersion: 2,
  title: "Hero Slider",
  category: "design",
  icon: "slides",
  attributes: {
    autoplay: {
      type: "boolean",
      default: false,
    },
    autoplayDelay: {
      type: "integer",
      default: 5000,
    },
  },
  innerBlocks: [
    {
      name: "uamswp/hero",
    },
  ],
  edit,
  save,
});
