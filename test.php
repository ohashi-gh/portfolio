<?php phpinfo(); ?>

<!-- <!DOCTYPE HTML>
<div class="test">
  <p><a href="anitv://live_broadcasts/247">test link<a></p>
</div>

<?php
$ua = $_SERVER['HTTP_USER_AGENT'];
if ((strpos($ua, 'Android') !== false) && (strpos($ua, 'Mobile') !== false) || (strpos($ua, 'iPhone') !== false) || (strpos($ua, 'Windows Phone') !== false)) {
?>

  //スマホの場合に読み込むソースを記述
<div class="sp">
  <p>test smart phone</p>
</div>
  
<?php } elseif ((strpos($ua, 'Android') !== false) || (strpos($ua, 'iPad') !== false)) { ?>

  //タブレットの場合に読み込むソースを記述
  <div class="sp">
    <p>test tablet</p>
  </div>


<?php } else { ?>

  //PCの場合に読み込むソースを記述
  <div class="sp">
    <p>pc</p>
  </div>
<?php } ?> -->