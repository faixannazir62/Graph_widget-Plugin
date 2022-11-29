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
 */
function add_dashboard_widget(){
          wp_add_dashboard_widget(
                    'graph_widget',
                    'Graph Widget',
                    'wp_graph_widget_fun'
          );
}
/**
 *  dashboard setup
 */
add_action('wp_dashboard_setup','add_dashboard_widget' );
function wp_graph_widget_fun(){
     require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}
/**
 * Enqueue scripts and styles.
 */
add_action( 'admin_enqueue_scripts', 'load_scripts' );
function load_scripts(){
     wp_enqueue_style( 'graph-widget-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'graph-widget-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );

}