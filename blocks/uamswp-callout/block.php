<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Callout extends Block {

	protected static $block_name    = 'uamswp/callout';
	protected static $default_attrs = array(
		'className'   => 'uams-callout',
		'id'          => '',
		'layout'      => 'title',
		'headingTag'  => 'h3',
		'useAsideTag' => false,
	);


	public static function render( $attrs, $content = '' ) {

		$callout_tag = ( $attrs['useAsideTag'] ) ? 'aside' : 'div';

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
