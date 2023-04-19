<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Section extends Block {

	protected static $block_name    = 'uamswp/section';
	protected static $default_attrs = array(
		'className'   => 'uams-section',
		'id'          => '',
	);


	public static function render( $attrs, $content = '' ) {

		//var_dump( $attrs );

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}