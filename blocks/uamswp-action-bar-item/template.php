<?php
    $parentColumns = esc_attr( $attrs['parentColumns'] );
    $col = 12/$parentColumns;
?>
<div class="<?php echo esc_attr( $attrs['className'] ); ?> col-12 col-sm-<?php echo $col; ?> item">
    <div class="inner-container">
        <div class="text-container">
            <h3 class="h5" data-moduletitle="<?php echo wp_strip_all_tags( $attrs['headingText'] ); ?>">
                <?php echo wp_kses_post( $attrs['headingText'] ); ?>
            </h3>
            <p class="action__item__body">
                <?php echo wp_kses_post( $attrs['bodyText'] ); ?>
            </p>
        </div>
        <a class="btn btn-primary" href="<?php echo esc_attr( $attrs['url'] ); ?>" title="<?php echo esc_attr( $attrs['linkLabel'] ); ?>" target="<?php echo esc_attr( $attrs['linkTarget'] ); ?>" rel="noopener"><?php echo esc_attr( $attrs['linkText'] ); ?></a>
    </div>
</div>