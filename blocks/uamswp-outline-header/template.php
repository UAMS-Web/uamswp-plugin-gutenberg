<<?php echo esc_attr( $attrs['tag'] ); ?> class="uams-header--style-outline">
    <?php if ( ! empty( $attrs['before'] ) ) : ?><span class="uams-header__before"><?php echo wp_kses_post( $attrs['before'] ); ?></span><?php endif; ?>
    <span class="uams-header__outline"><?php echo implode( ' ', $outlines ); ?></span>
    <?php if ( ! empty( $attrs['after'] ) ) : ?><span class="uams-header__after"><?php echo wp_kses_post( $attrs['after'] ); ?></span><?php endif; ?>
</<?php echo esc_attr( $attrs['tag'] ); ?>>