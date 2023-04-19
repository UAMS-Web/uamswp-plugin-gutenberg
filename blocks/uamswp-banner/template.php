<div class="<?php echo esc_attr( $attrs['className'] ); ?>" <?php if ( ! empty( $attrs['id'] ) ) :?>id="<?php echo esc_attr( $attrs['id'] ); ?>"<?php endif; ?>>
	<?php if ( $attrs['imageId'] ) : ?>
	<div class="uams-image-frame uams-image-frame--style-background">
		<img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
			srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
			sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
			alt="<?php echo esc_attr( $attrs['imageAlt']); ?>"
			style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
			/>
	</div>
    <?php endif; ?>
</div>
