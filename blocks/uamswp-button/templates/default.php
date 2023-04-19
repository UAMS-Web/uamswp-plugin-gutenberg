<div class="uams-cta <?php echo esc_attr( $attrs['className'] ); ?>" <?php if ( ! empty( $attrs['id'] ) ) :?>id="<?php echo esc_attr( $attrs['id'] ); ?>"<?php endif; ?>>
	<a <?php if ( ! empty( $attrs['buttonAriaLabel'] ) ) :?>aria-label="<?php echo esc_attr( $attrs['buttonAriaLabel'] ); ?>"<?php endif; ?>
		<?php
		if ( ! empty( $attrs['buttonUrl'] ) ) :
			?>
			href="<?php echo esc_url( $attrs['buttonUrl'] ); ?>"<?php endif; ?>	
		class="uams-button <?php echo esc_attr( $attrs['buttonClassName'] ); ?>">
		<?php if ( ! empty( $attrs['iconBefore'] ) ) : ?>
			<i class="uams-icon uams-i-<?php echo esc_attr( $attrs['iconBefore'] ); ?>"></i>
		<?php endif; ?>	
		<?php echo esc_html( $attrs['buttonText'] ); ?>
		<?php if ( ! empty( $attrs['iconAfter'] ) ) : ?>
			<i class="uams-icon uams-i-<?php echo esc_attr( $attrs['iconAfter'] ); ?>"></i>
		<?php endif; ?>
	</a>
</div>
