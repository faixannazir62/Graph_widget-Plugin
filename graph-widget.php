<?php
/**
 * Plugin Name:       Graph Widget
 * Description:        A Graph Widget assignment
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Faizan Nazir
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       graph-widget
*  Domain Path:       /languages/
*/

 // No Direct Access
if( !defined( 'ABSPATH' ) ) exit();

//translations functions
//Load Text Domain
add_action( 'plugins_loaded', 'graph_widget_load_text_domain' );
function graph_widget_load_text_domain() {
    load_plugin_textdomain( "graph-widget", false, 
    dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}


 
// database file
include_once "otherPHPFiles/db-file.php" ;


// register hook  for create table function
register_activation_hook( __FILE__, "gw_db_table_create" );

//fetch data from data base using  wp rest api, custom route file
include_once "otherPHPFiles/fetch-custom-route.php";


 //  dashboard setup
add_action( 'wp_dashboard_setup', 'add_dashboard_widget' );
function add_dashboard_widget() {
    wp_add_dashboard_widget(
        'graph_widget',
        __( 'Graph Widget', 'graph-widget' ),
        'wp_graph_widget_load_template'
    );
}
function wp_graph_widget_load_template() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

// Enqueue scripts and styles on single page which is index.php

function gw_load_scripts($hook) {
	  if( $hook != 'index.php' ) {
        return;
    }
    wp_enqueue_style( 'graph-widget-style', 
    plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'graph-widget-script', plugin_dir_url( __FILE__ ) .
     'build/index.js', array( 'wp-element', 'wp-i18n' ), '1.0.0', true );
    
    //load translation script file
    wp_set_script_translations( 'graph-widget-script', 'graph-widget', 
     plugin_dir_path( __FILE__ )  . 'languages' ); 

}
add_action( 'admin_enqueue_scripts', 'gw_load_scripts' );