<?php namespace WSUWP\Plugin\Gutenberg;

class Rest_API {


	public static function setup_classes() {

		Plugin::load_class( 'block' );
		Plugin::load_class( 'wsu-query' );
		Plugin::load_class( 'wsu-image' );

	}


	public static function init() {

		self::setup_classes();

		add_action( 'rest_api_init', array( __CLASS__, 'register_routes' ) );

	}


	public static function register_routes() {

		register_rest_route(
			'wsu-gutenberg/v1',
			'render-block/(?P<block_name>[a-zA-Z0-9-]+)',
			array(
				'methods'  => 'GET',
				'callback' => array( __CLASS__, 'render_endpoint' ),
				'permission_callback' => '__return_true' // https://wordpress.org/support/topic/missing-the-required-permission_callback-argument/
		 	)
		);

		register_rest_route(
			'wsu-gutenberg/v1',
			'search-posts',
			array(
				'methods'  => 'GET',
				'callback' => array( __CLASS__, 'search_posts' ),
			)
		);

		register_rest_route(
			'wsu-gutenberg/v1',
			'get-posts-by-id',
			array(
				'methods'  => 'GET',
				'callback' => array( __CLASS__, 'get_posts_by_id' ),
			)
		);

		register_rest_route(
			'wsu-gutenberg/v1',
			'get-latest-posts-for-post-types',
			array(
				'methods'  => 'GET',
				'callback' => array( __CLASS__, 'get_latest_posts_for_post_types' ),
			)
		);

	}


	public static function render_endpoint( $request ) {

		$block = array();

		$block_params = $request->get_params();

		// Check to make sure block_name exists
		if ( ! empty( $block_params['block_name'] ) ) {

			$registered_blocks = Blocks::get( 'register_blocks' );

			// Fix the block name to expected format
			$block_name = str_replace( '--', '/', $block_params['block_name'] );

			$block['name'] = $block_name;

			// Check if this is one of our registered blocks
			if ( array_key_exists( $block_name, $registered_blocks ) ) {

				$block_class = __NAMESPACE__ . '\\' . $registered_blocks[ $block_name ];

				$block['rendered'] = call_user_func( array( $block_class, 'render_block' ), $block_params );

			}
		}

		return wp_json_encode( $block, JSON_UNESCAPED_SLASHES );

	}


	public static function search_posts( $request ) {

		$posts = array();

		$params = $request->get_params();

		$results = get_posts(
			array(
				'numberposts' => 5,
				'post_type'   => explode( ',', $params['post_types'] ),
				'post_status' => array( 'publish', 'draft', 'private' ),
				's'           => $params['search_term'],
			)
		);

		foreach ( $results as $result ) {
			array_push(
				$posts,
				array(
					'id'    => $result->ID,
					'title' => $result->post_title,
					'date'  => date( 'm-d-Y', strtotime( $result->post_date ) ),
					'type'  => $result->post_type,
					'link'  => get_post_permalink( $result->ID ),
				)
			);
		}

		return wp_json_encode( $posts, JSON_UNESCAPED_SLASHES );

	}


	public static function get_posts_by_id( $request ) {

		$posts = array();

		$params = $request->get_params();

		$results = get_posts(
			array(
				'numberposts' => -1,
				'post__in'    => explode( ',', $params['ids'] ),
				'post_status' => array( 'publish', 'draft', 'private' ),
				'post_type'   => 'any',
				'orderby'     => 'post__in',
			)
		);

		foreach ( $results as $result ) {
			array_push(
				$posts,
				array(
					'id'    => $result->ID,
					'title' => $result->post_title,
					'date'  => date( 'm-d-Y', strtotime( $result->post_date ) ),
					'type'  => $result->post_type,
					'link'  => get_post_permalink( $result->ID ),
				)
			);
		}

		return wp_json_encode( $posts, JSON_UNESCAPED_SLASHES );

	}


	public static function get_latest_posts_for_post_types( $request ) {

		$grouped_posts = array();

		$params = $request->get_params();

		$post_types = explode( ',', $params['post_types'] );

		foreach ( $post_types as $post_type ) {
			$posts = array();

			$results = get_posts(
				array(
					'numberposts' => $params['count'] || 5,
					'post_status' => array( 'publish', 'draft', 'private' ),
					'post_type'   => $post_type,
					'orderby'     => 'post_date',
					'order'       => 'DESC',
				)
			);

			foreach ( $results as $result ) {
				array_push(
					$posts,
					array(
						'id'    => $result->ID,
						'title' => $result->post_title,
						'date'  => date( 'm-d-Y', strtotime( $result->post_date ) ),
						'type'  => $result->post_type,
						'link'  => get_post_permalink( $result->ID ),
					)
				);
			}

			$grouped_posts[ $post_type ] = $posts;
		}

		return wp_json_encode( $grouped_posts );

	}

}

Rest_API::init();
