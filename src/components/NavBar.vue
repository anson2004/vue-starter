<template>
 <div>
  <b-nav>
    <b-nav-item active> <router-link to="/company">{{ $t('company') }}</router-link></b-nav-item>
    <b-nav-item><router-link to="/company">{{ $t('service') }}</router-link></b-nav-item>
    <b-nav-item><router-link to="/about">{{ $t('about') }}</router-link></b-nav-item>
    <b-nav-item><router-link to="/contact">{{ $t('contact') }}</router-link></b-nav-item>
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