<?php 
?>
<article class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<div class="uams-card__inner">
		<?php echo wp_kses_post( $content ); ?>
	</div>
</article>
