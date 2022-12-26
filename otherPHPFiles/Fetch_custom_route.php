<?php
// creating a custom tables/endpoints to the WP REST API
add_action( "rest_api_init","wp_register_rest_route_GD" );
function wp_register_rest_route_GD(){
          register_rest_route('wp/v2','/graphdata',array(
                'methods' => 'GET',
                'callback'=> 'handle_rest_GD_request',
               
          ));
}
function handle_rest_GD_request(){
          global $wpdb;
          $result = $wpdb->get_results("SELECT * FROM wp_graph_data");
          return $result;

}