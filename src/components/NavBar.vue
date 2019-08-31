<template>
 <div>
  <b-nav>
    <b-nav-item active>Company</b-nav-item>
    <b-nav-item>Service</b-nav-item>
    <b-nav-item>About</b-nav-item>
    <b-nav-item>Contact</b-nav-item>
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