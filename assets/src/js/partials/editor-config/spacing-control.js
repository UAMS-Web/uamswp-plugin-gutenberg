import { InspectorControls } from "@wordpress/block-editor";
import { SpacingClassNameSelector } from "../block-controls/blockControls";

function insertSpacingControl(OriginalComponent) {
  return function (props) {
    const unsupportedBlockTypes = [
      "uamswp/banner",
      "core/image",
      "uamswp/card",
      "uamswp/image",
      "uamswp/row",
      "uamswp/column",
      "core/button",
      "core/paragraph",
      "uamswp/section",
      "uamswp/card-group",
      "uamswp/callout",
      "uamswp/container",
      "uamswp/button",
      "uamswp/sticky-nav",
    ];

    if (!unsupportedBlockTypes.includes(props.name)) {
      return (
        <>
          <OriginalComponent {...props} />

          <InspectorControls>
            <SpacingClassNameSelector
              spaceSettings={[
                {
                  label: "Outside Spacing (Margin)",
                  properties: [
                    {
                      label: "Top",
                      prefix: "uams-spacing-before--",
                      default: "none",
                    },
                    {
                      label: "Bottom",
                      prefix: "uams-spacing-after--",
                      default: "xmedium",
                    },
                  ],
                },
              ]}
              {...props}
            ></SpacingClassNameSelector>
          </InspectorControls>
        </>
      );
    }

    // return default
    return <OriginalComponent {...props} />;
  };
}

wp.hooks.addFilter(
  "editor.BlockEdit",
  "uamswp-plugin-gutenberg/insert-spacing-control",
  insertSpacingControl
);
