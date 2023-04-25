<article class="uams-card uams-card--news <?php echo esc_attr( $attrs['cardClassName'] );?>">
	<?php if ( empty( $attrs['hideImage'] ) && ! empty( $post['imageSrc'] ) ) : ?>
	<div class="uams-image-frame uams-image-frame--fixed-ratio">
		<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?><a href="<?php echo esc_url( $post['link'] ); ?>"><?php endif; ?>
			<img src="<?php echo esc_attr( $post['imageSrc'] );?>"
				srcset="<?php //echo esc_attr( $post['imageSrcSet'] ); ?>"
				sizes="<?php //echo esc_attr( $post['imageSizes'] );?>"
				alt="<?php echo esc_attr( $post['imageAlt'] );?>" />
		<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
	<div class="uams-card__content">
		<?php if ( empty( $attrs['hideTitle'] ) && ! empty( $post['title'] ) ) : ?> 
		<<?php echo esc_attr( $attrs['headingTag'] ); ?> class="uams-title">
			<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?><a href="<?php echo esc_url( $post['link'] ); ?>"><?php endif; ?>
			<?php echo wp_kses_post( $post['title'] ); ?>
			<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?></a><?php endif; ?>
		</<?php echo esc_attr( $attrs['headingTag'] ); ?>>
		<?php endif; ?>
        <?php if ( empty( $attrs['hideDate'] ) && ! empty( $post['date'] ) ) : ?>
		<div class="uams-meta-date">
			<time><?php echo wp_kses_post( $post['date'] ); ?></time>
		</div>
		<?php endif; ?>
		<?php if ( empty( $attrs['hideCaption'] ) && ! empty( $post['caption'] ) ) : ?>
		<div class="uams-caption">
			<?php echo wp_kses_post( $post['caption'] ); ?>
		</div>
		<?php endif; ?>
	</div>
</article>