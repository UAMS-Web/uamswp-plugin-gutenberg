<div class="<?php echo esc_attr( $attrs['className'] ); ?>" data-desktop-columns="<?php echo esc_attr( $attrs['columns'] ); ?>">
    <button class="uams-carousel__button-prev" aria-label="Previous slide"></button>
        <div class="uams-carousel__wrapper swiper-wrapper">
            <?php echo $content; ?>
        </div>
    <button class="uams-carousel__button-next" aria-label="Next slide"></button>
    <div class="uams-carousel__pagination"></div>
</div>