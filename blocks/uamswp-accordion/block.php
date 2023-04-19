<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Accordion extends Block {

	protected static $block_name    = 'uamswp/accordion';
	protected static $default_attrs = array(
		'className'  => 'uams-accordion',
		'title'      => '',
		'headingTag' => 'h3',
 	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		if ( ! empty( $attrs['title'] ) ) {

			include __DIR__ . '/template.php';

		}

		return ob_get_clean();

	}

}
