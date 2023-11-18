<?php
// Create table function
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

