<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<style>
    td {
        width: 50px;
        height: 50px;
    }

    tr:nth-child(odd) td:nth-child(even),
    tr:nth-child(even) td:nth-child(odd) {
        background-color: black;
    }

    .chess{
        margin: auto;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 5px;
        left: 5px;
        transition: all 1s ease;
    }

</style>
<?php
$array = [];
$array2 = [];
function cells()
{
    for ($i = 0; $i < 8; $i++) {
        $array[$i] = "<td></td>";
        echo $array[$i];
    }
}

function row()
{
    for ($j = 0; $j < 8; $j++) {
        $array2[$j] = "<tr>" . cells();
        echo $array2[$j];
    }
}
/*$array = [];
function board()
{
    for ($i = 0; $i < 8; $i++) {
        $array[$i] = "<tr>" . cells();
        echo $array[$i];
        function cells(){
            $array2 = [];
        for ($j = 0; $j < 8; $j++) {
            $array2[$j] = "<td>";
            echo $array2[$j];
        }
        return $array2;
    }
    }
}*/



?>

<table class="board" border="1" cellpadding="0" cellspacing="0">
    <?php row() ?>
</table>


</body>
</html>