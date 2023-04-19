<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Overlap_Advanced extends Block {

	protected static $block_name    = 'uamswp/overlap-advanced';
	protected static $default_attrs = array(
		'className'   => 'uams-overlap',
	);

	

	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}