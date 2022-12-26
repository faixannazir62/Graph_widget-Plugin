<?php
// Creating database table for the plugin
 
function DBP_tb_create(){
          global $wpdb;

          $DBP_tb_name=$wpdb->prefix."graph_data";

          $DBP_query= "CREATE TABLE $DBP_tb_name(
                    days varchar(40),
                    likes int(100),
                    dislikes int(100)

                    
          )";

          require_once( ABSPATH . "wp-admin\includes\upgrade.php" );
            dbDelta( $DBP_query );

            
// Graph data insertion into database
  include_once("Graph_data_insertion.php");

}

// Delete the table function 
// this fucntion will be executed on plugin Deactivation
function delete_plugin_database_table(){
    global $wpdb;
    $table_name = $wpdb->prefix . 'graph_data';
    $sql = "DROP TABLE IF EXISTS $table_name";
    $wpdb->query($sql);
}

