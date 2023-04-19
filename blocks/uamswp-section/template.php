<section  class="<?php echo esc_attr( $attrs['className'] ); ?>" <?php if ( ! empty( $attrs['id'] ) ) :?>id="<?php echo esc_attr( $attrs['id'] ); ?>"<?php endif; ?> >
    <?php if ( false !== strpos( $attrs['className'], 'uams-width--full' ) ) : ?><div class="uams-section__inner uams-width--content"><?php endif; ?>
    <?php echo $content; ?>
    <?php if ( false !== strpos( $attrs['className'], 'uams-width--full' ) ) : ?></div><?php endif; ?>
</section>