<template>
 <div>
  <b-nav>
    <b-nav-item active> <router-link to="/company">{{ $t('company') }}</router-link></b-nav-item>
    <b-nav-item><router-link to="/company">Services</router-link></b-nav-item>
    <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
    <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
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