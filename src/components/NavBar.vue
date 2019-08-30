<template>
 <div>
  <b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>{{msg}}</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>