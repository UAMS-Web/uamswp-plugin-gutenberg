<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Overlap_Spotlight extends Block {

	protected static $block_name    = 'uamswp/overlap-spotlight';
	protected static $default_attrs = array(
		'className' 		=> 'uams-overlap uams-overlap-spotlight',
		'captionClasses'    => '',
		'overlap'           => '',
		'imageClasses'      => '',
		'imageSize'         => 'large',
		'imageId'           => '0',
		'imageSrc'          => '',
		'imageAlt'          => '',
		'imageSrcSet'       => '',
		'imageSizes'        => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
		'customImageAlt'   => false,
	);


	public static function render( $attrs, $content = '' ) {

		static::set_image_id_attrs( $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
