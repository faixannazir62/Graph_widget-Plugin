<?php
// Static data insertion into the database
// likes and dislikes per day on a single post

global $wpdb;
 $days = array('day1', 'day2','day3','day4','day5','day6','day7','day8','day9','day10','day11','day12','day13','day14','day15','day16','day17','day18','day19','day20','day21','day22','day23','day24','day25','day26','day27','day28','day29','day30');
    $likes = array('100','110','120','130','140','150','160','170','180','190','200','210','220','230','240','250','260','270','280','290','300','300','320','320','320','320','320','320','330','340');
     $dislikes = array('50','60','70','80','90','90','90','90','90','100','110','110','110','110','120','120','130','130','130','130','130','140','140','140','140','140','140','140','150','160');
     $tableName = $wpdb->prefix."graph_data";
     foreach( $days as $value=> $day ){
          $result=$wpdb->insert(
          $tableName,
          array(
           
          "days" => $day,
              "likes" => $likes[$value],
              "dislikes" =>  $dislikes[$value]
            
          )

);
}
