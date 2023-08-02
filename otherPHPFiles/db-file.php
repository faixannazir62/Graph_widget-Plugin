<?php
// Creating tabel inside the database
 
function gw_db_table_create() {
    global $wpdb;
    $table_name = $wpdb->prefix . "graph_data";
    $dbp_query = " CREATE TABLE  $table_name(
        days varchar(40),
        likes int(100),
        dislikes int(100)

                    
    )";
        
    require_once ABSPATH . "wp-admin/includes/upgrade.php";
        dbDelta( $dbp_query );

            
// Graph data insertion into database
    include_once "graph-data-insertion.php";

}

// Delete the table function 
// this fucntion will be executed on plugin Deactivation
function delete_plugin_database_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'graph_data';
    $sql = "DROP TABLE IF EXISTS $table_name";
    $wpdb -> query( $sql );
}

