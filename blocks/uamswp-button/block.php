<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Button extends Block {

	protected static $block_name    = 'uamswp/button';
	protected static $default_attrs = array(
		'buttonClassName'  => '',
		'buttonAriaLabel'  => '',
		'className'        => '',
		'buttonText'       => '',
		'buttonUrl'        => '',
		'iconBefore'       => '',
		'iconAfter'        => '',
		'id'               => '',
	);

	protected static function render( $attrs, $content ) {

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
