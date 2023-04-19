<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Note extends Block {

	protected static $block_name    = 'uamswp/note';
	protected static $default_attrs = array(
		'className'   => 'uams-note',
		'icon'        => '',
		'showTitle'   => true,
		'title'       => '',
		'titleTag'    => 'div',
		'useAsideTag' => false,
	);


	public static function render( $attrs, $content = '' ) {

		$note_tag = ( $attrs['useAsideTag'] ) ? 'aside' : $attrs['titleTag'];

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
