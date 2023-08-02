<?php
// creating a custom tables/endpoints for the data fetch from the database
add_action( "rest_api_init", "wp_register_rest_route_gd" );
function wp_register_rest_route_gd() {
      register_rest_route( 'wp/v2', '/graphdata', array(
            'methods' => 'GET',
            'callback' => 'handle_rest_gd_request',
               
      ));
}
function handle_rest_gd_request() {
      global $wpdb;
      $table_name = $wpdb->prefix . "graph_data";
      $result = $wpdb->get_results( "SELECT * FROM  $table_name" );
      return $result;

}