<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Container extends Block {

	protected static $block_name    = 'uamswp/container';
	protected static $default_attrs = array(
		'className' => 'uams-container',
		'id'        => '',
        'tag'       => 'div',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}