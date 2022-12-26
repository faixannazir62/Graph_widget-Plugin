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
 * Text Domain:       Graph-widget
 * Text Domain: localizationsample
*  Domain Path: /lang
 */

// database file
include_once("otherPHPFiles/DB_file.php");


// register hook
register_activation_hook(__FILE__,"DBP_tb_create");

//fetch data
include_once("otherPHPFiles/Fetch_custom_route.php");

 //  dashboard setup

function add_dashboard_widget(){
          wp_add_dashboard_widget(
                    'graph_widget',
                    'Graph Widget',
                    'wp_graph_widget_fun'
          );
}
add_action('wp_dashboard_setup','add_dashboard_widget' );
function wp_graph_widget_fun(){
     require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

// Enqueue scripts and styles on single page which is index.php

function GW_load_scripts($hook) {

	if( $hook != 'index.php' ) {
      return;
  }
    wp_enqueue_style( 'graph-widget-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'graph-widget-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
  
}
add_action('admin_enqueue_scripts', 'GW_load_scripts');

// Delete the table when plugin is deactived.
// we don't want duplicats of our data when we reactivate it again.
register_deactivation_hook(__FILE__, 'delete_plugin_database_table');