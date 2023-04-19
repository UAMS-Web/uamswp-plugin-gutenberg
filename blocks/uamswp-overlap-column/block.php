<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Overlap_Column extends Block {

	protected static $block_name    = 'uamswp/overlap-column';
	protected static $default_attrs = array(
		'className'   => 'uams-overlap__column',
	);

	

	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}