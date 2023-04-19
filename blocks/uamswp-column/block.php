<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Column extends Block {

	protected static $block_name    = 'uamswp/column';
	protected static $default_attrs = array(
		'className' => '',
		'id'        => '',
		'layout'    => 'single',
		'width'     => '',
	);


	public static function render( $attrs, $content = '' ) {

		$column_classes = 'uams-column';

		static::add_class( $column_classes, '', 'className', $attrs );

		$column_style = static::get_inline_style(
			array(
				'width' => 'width',
			),
			$attrs
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
