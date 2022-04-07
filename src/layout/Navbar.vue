<template>
  <div class="header-container">
    <div class="label">
      Rulex
    </div>
    <div class="action">
      <div class="action-icon">
        <svg-icon icon-class="database" />
        <span>资料库</span>
      </div>
      <div class="action-icon">
        <svg-icon icon-class="notification" />
        <span>告警</span>
      </div>
      <div class="action-icon">
        <svg-icon icon-class="environment" />
        <span>环境</span>
      </div>
      <div class="action-icon">
        <svg-icon icon-class="user" />
        <span>徐珍珍</span>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
  .header-container{
    height: 50px;
    width: 100vw;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .label{
      font-size: 20px;
      margin-left: 10px;
    }
    .action{
      display: flex;
      justify-content: space-between;
      &-icon{
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          font-size:12px;
        }

      }
    }


  }

</style>
