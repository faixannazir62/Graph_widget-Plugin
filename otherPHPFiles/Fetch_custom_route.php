<?php
// creating a custom tables/endpoints for the WP REST API
add_action( "rest_api_init","wp_register_rest_route_GD" );
function wp_register_rest_route_GD(){
          register_rest_route('wp/v2','/graphdata',array(
                'methods' => 'GET',
                'callback'=> 'handle_rest_GD_request',
               
          ));
}
function handle_rest_GD_request(){
          global $wpdb;
                    $tableName=$wpdb->prefix."graph_data";
          $result = $wpdb->get_results("SELECT * FROM  $tableName");
          return $result;

}