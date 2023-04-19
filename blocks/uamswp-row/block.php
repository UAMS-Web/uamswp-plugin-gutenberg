<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Row extends Block {

	protected static $block_name    = 'uamswp/row';
	protected static $default_attrs = array(
		'layout'    => 'single',
		'className' => '',
		'id'        => '',
	);


	public static function render( $attrs, $content = '' ) {

		$wrapper_classes = 'uams-row';

		static::add_class( $wrapper_classes, '', 'className', $attrs );
		static::add_class( $wrapper_classes, 'uams-row--', 'layout', $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
