<div class="uams-video-frame uams-video-frame--position-fill">
	<iframe class="uams-video-frame__video-background" src="https://player.vimeo.com/video/<?php echo esc_attr( $attrs['videoId'] ); ?>?background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="<?php echo esc_attr( $attrs['videoTitle'] ); ?>"></iframe>
	<button class="uams-button-pause-background uams-video-frame--action-pause-background" aria-label="Pause Animation"></button>
	<div class="uams-visibility-hidden">
		<?php echo wp_kses_post( $attrs['videoDescription'] ); ?>
	</div>
</div>
