<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Banner extends Block {

	protected static $block_name    = 'uamswp/banner';
	protected static $default_attrs = array(
		'className'         => 'uams-page-banner',
		'id'                => '',
		'imageSize'         => 'full',
		'imageId'           => '0',
		'imageSrc'          => '',
		'imageAlt'          => '',
		'imageSrcSet'       => '',
		'imageSizes'        => '',
		'imageFocalPoint'   => '',
		'imageFocalPointX'  => '50%',
		'imageFocalPointY'  => '50%',
	);


	public static function render( $attrs, $content = '' ) {

		$attrs['imageId'] = (int) $attrs['imageId'];

		if ( is_array( $attrs['imageFocalPoint'] ) ) {

			$attrs['imageFocalPointX'] = ( isset( $attrs['imageFocalPoint']['x'] ) ) ? ( $attrs['imageFocalPoint']['x'] * 100 ) . '%' : '50%';
			
			$attrs['imageFocalPointY'] = ( isset( $attrs['imageFocalPoint']['y'] ) ) ? ( $attrs['imageFocalPoint']['y'] * 100 ) . '%' : '50%';
		
		}

		if ( $attrs['imageId'] ) {

			$image_src_array = wp_get_attachment_image_src( $attrs['imageId'], $attrs['imageSize'] );

			$attrs['imageSrc']    = $image_src_array[0];
			$attrs['imageSizes']  = wp_get_attachment_image_sizes( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageSrcSet'] = wp_get_attachment_image_srcset( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageAlt']    = wp_get_attachment_caption( $attrs['imageId'] );
			
		}

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}