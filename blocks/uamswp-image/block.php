<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Image extends Block {

	protected static $block_name    = 'uamswp/image';
	protected static $default_attrs = array(
		'className'        => 'uams-image',
        'link'             => '',
		'imageSize'        => 'large',
		'imageId'          => '',
		'imageSrc'         => '',
		'imageAlt'         => '',
		'imageSrcSet'      => '',
		'imageSizes'       => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}