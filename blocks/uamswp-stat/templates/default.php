<div class="uams-stat <?php echo esc_attr( $attrs['className'] ); ?>" <?php if ( ! empty( $attrs['id'] ) ) :?>id="<?php echo esc_attr( $attrs['id'] ); ?>"<?php endif; ?>>
	<span class="uams-stat__decorator"></span>
	<span class="uams-stat__value-wrapper">
		<span class="uams-stat__value"><?php echo esc_html( $attrs['stat'] ); ?></span>
		<?php if ( ! empty( $attrs['unit'] ) ) : ?>
			<span class="uams-stat__unit"><?php echo esc_attr( $attrs['unit'] ); ?></span>
		<?php endif; ?>
	</span>
	<?php if ( ! empty( $attrs['caption'] ) ) : ?>
		<span class="uams-stat__caption"><?php echo esc_attr( $attrs['caption'] ); ?></span>
	<?php endif; ?>
	<?php if ( ! empty( $attrs['citation'] ) ) : ?>
		<span class="uams-stat__citation"><?php echo esc_attr( $attrs['citation'] ); ?></span>
	<?php endif; ?>
	<?php if ( ! empty( $attrs['icon'] ) ) : ?>
		<i class="uams-stat__icon uams-i-<?php echo esc_attr( $attrs['icon'] ); ?>"></i>
	<?php endif; ?>
</div>
