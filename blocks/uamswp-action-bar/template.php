<section class="<?php echo esc_attr( $attrs['className'] ); ?>" aria-label="<?php echo esc_attr( $attrs['headingText'] ); ?>">
    <h2 class="sr-only">
        <?php echo esc_attr( $attrs['headingText'] ); ?>
    </h2>
    <div class="container-fluid">
        <div class="row">
            <?php echo $content; ?>
        </div>
    </div>
</section>