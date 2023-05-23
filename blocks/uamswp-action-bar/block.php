<?php namespace UAMSWP\Plugin\Gutenberg;

/**
 * Render the block.
 *
 * @param  array  $attrs  Block attributes.
 * @param  string $content Block content.
 * @return string          Rendered block content.
 */
class Block_UAMSWP_Action_Bar extends Block {

	protected static $block_name    = 'uamswp/action-bar';
	protected static $default_attrs = array(
		'className' => '',
		'headingText'        => '',
		'backgroundColor'      => '',
		'columns'   => '',
	);

	/**
	 * Render the template.
	 *
	 * @param  array  $attrs
	 * @param  string $content
	 * @return string
	 */
	protected static function render( $attrs, $content ) {

		// render block
		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}