<div 
	class="uams-hero-slider uams-width--full swiper <?php echo esc_attr( $attrs['className'] ); ?>"
	data-autoplay=<?php echo $attrs['autoplay'] ? 'true' : 'false'; ?>
	data-autoplay-delay=<?php echo esc_attr( $attrs['autoplayDelay'] ); ?>>
	<div class="uams-hero-slider__wrapper swiper-wrapper">
		<?php echo $content; ?>
	</div>
	<div class="uams-hero-slider__slider-elements">
		<nav class="uams-hero-slider__navigation">
			<button class="uams-hero-slider__icon uams-i-arrow-left-carrot" aria-label="Previous"></button>
			<?php
			if ( true === $attrs['autoplay'] ) {
				?>
				<button class="uams-hero-slider__pause-btn uams-hero-slider__icon uams-i-pause play" id="slider-pause" aria-label="Pause"></button>
				<?php
			}
			?>
			<button class="uams-hero-slider__icon uams-i-arrow-right-carrot" aria-label="Next"></button>
		</nav>
		<div class="uams-hero-slider__pagination"></div>
	</div>
</div>
