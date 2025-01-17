<article class="<?php echo esc_attr( $card_classes ); ?>">
	<?php if ( ! empty( $card['imageSrc'] ) ) : ?>
	<div class="uams-image-frame uams-image-frame--fixed-ratio">
		<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<img src="<?php echo esc_attr( $card['imageSrc'] );?>"
				srcset="<?php echo esc_attr( $card['imageSrcset'] ); ?>"
				sizes="<?php echo esc_attr( $card['imageSizes'] );?>"
				alt="<?php echo esc_attr( $card['imageAlt'] );?>" />
		<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
	<div class="uams-card__content">
		<?php if ( ! empty( $card['title'] ) ) : ?> 
		<h2 class="uams-title">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<?php echo wp_kses_post( $card['title'] ); ?>
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</h2>
		<?php endif; ?>
        <?php if ( ! empty( $card['date'] ) ) : ?>
		<div class="uams-meta-date">
			<time><?php echo wp_kses_post( $card['date'] ); ?></time>
		</div>
		<?php endif; ?>
		<?php if ( ! empty( $card['caption'] ) ) : ?>
		<div class="uams-caption">
			<?php echo wp_kses_post( $card['caption'] ); ?>
		</div>
		<?php endif; ?>
	</div>
</article>