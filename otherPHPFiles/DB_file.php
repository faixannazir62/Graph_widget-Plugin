<?php
// Creating tabel inside the database
 
function DBP_tb_create(){
          global $wpdb;

           $tableName = $wpdb->prefix."graph_data";

          $DBP_query= "CREATE TABLE  $tableName(
                    days varchar(40),
                    likes int(100),
                    dislikes int(100)

                    
          )";
        
          require_once( ABSPATH ."wp-admin/includes/upgrade.php" );
            dbDelta( $DBP_query );

            
// Graph data insertion into database
  include_once("Graph_data_insertion.php");

}

// Delete the table function 
// this fucntion will be executed on plugin Deactivation
function delete_plugin_database_table(){
    global $wpdb;
   $tableName = $wpdb->prefix . 'graph_data';
    $sql = "DROP TABLE IF EXISTS $tableName";
    $wpdb->query($sql);
}

