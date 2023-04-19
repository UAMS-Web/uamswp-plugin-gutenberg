<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <div class="uams-overlap__container">
        <div class="uams-overlap__column<?php if ( ! empty( $attrs['overlap'] ) ) : ?> uams-overlap--overlap-<?php echo esc_attr( $attrs['overlap'] ); ?><?php endif; ?>">
            <div class="uams-overlap__column-inner">
                <div class="uams-overlap-spotlight__image  <?php echo esc_attr( $attrs['imageClasses'] ); ?>">
                    <div class="uams-image-frame <?php if ( ! empty( $attrs['imageRatio'] ) && 'auto' !== $attrs['imageRatio'] ) : ?>uams-image--ratio-<?php echo esc_attr( $attrs['imageRatio'] ); ?><?php endif; ?>">
                        <img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
                        srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
                        sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
                        alt="<?php echo esc_attr( $attrs['imageAlt'] ); ?>"
                        style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="uams-overlap__column uams-overlap--surface-column<?php if ( ! empty( $attrs['overlap'] ) ) : ?> uams-overlap--overlap-<?php echo esc_attr( $attrs['overlap'] ); ?><?php endif; ?>">
            <div class="uams-overlap__column-inner">
                <div class="uams-overlap-spotlight__caption <?php echo esc_attr( $attrs['captionClasses'] ); ?>">
                    <?php echo $content ?>
                </div>
            </div>
        </div>
    </div>
</div>