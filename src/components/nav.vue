<template>
  <div id="nav">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Mr.G</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="./#/">首页<span class="sr-only">(current)</span></a></li>
            <li><a href="./#/blog">博客</a></li>
            <li><a href="#">音乐工具</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">我的作品<span class="caret"></span></a>
              <ul class="dropdown-menu dropdown-menu-inverse">
                <li><a href="http://yt.yt678.cn">早期作品</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/#/2048">2048小游戏</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">控制台</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">个人中心<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">我的信息</a></li>
                <li><a href="#">账号设置</a></li>
                <li><a href="#">退出登录</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="搜索">
            </div>
            <button type="submit" class="btn btn-inverse">提交</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted: function () {
    var navLi = $('#bs-example-navbar-collapse-1').children('ul').children('li')
    navLi.click(function (event) {
      navLi.each(function (index, el) {
        $(this).removeClass('active')
      })
      $(this).addClass('active')
    })
  }
}
</script>

<style scoped>
.navbar{border-radius: 0}
</style>
