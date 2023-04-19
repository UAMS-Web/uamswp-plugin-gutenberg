<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Decorator extends Block {

	protected static $block_name    = 'uamswp/decorator';
	protected static $default_attrs = array(
		'className'   => 'uams-decorator',
		'top'      => '',
		'bottom'   => '',
		'left'     => '',
		'right'    => '',
		'height'   => '',
		'width'    => '',
	);


	public static function render( $attrs, $content = '' ) {

		$styles = array();

		$style_attrs = array( 'top', 'bottom', 'left', 'right', 'height', 'width' );

		foreach ( $style_attrs as $index => $style_key ) {

			if ( '' !== $attrs[ $style_key ] ) {

				$styles[] = $style_key . ':' . $attrs[ $style_key ];

			}
		}

		$styles = implode( ';', $styles );

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}