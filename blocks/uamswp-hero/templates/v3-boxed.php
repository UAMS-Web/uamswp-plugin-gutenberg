<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<div class="uams-hero__background">
		<?php if ( ! empty( $attrs['imageSrc'] ) ) : ?>
		<img class="uams-image" src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
			srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
			sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
			alt="<?php echo esc_attr( $attrs['imageAlt'] ); ?>"
			style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
			/>
		<?php endif; ?>
	</div>
	<div class="uams-hero__overlay">
	</div>
	<div class="uams-hero__content-wrapper">
		<div class="uams-hero__inner-content-wrapper">
			<div class="uams-hero__title-wrapper">
				<?php if ( ! empty( $attrs['title'] ) ) : ?><div class="uams-hero__title"><?php echo wp_kses_post( $attrs['title'] ); ?></div><?php endif; ?>
				<?php if ( ! empty( $attrs['caption'] ) ) : ?><div class="uams-hero__caption"><?php echo wp_kses_post( $attrs['caption'] ); ?></div><?php endif; ?>
			</div>
			<div class="uams-hero__content">
			</div>
		</div>
	</div>
</div>
