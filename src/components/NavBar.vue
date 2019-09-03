<template>
<div>
  <b-navbar class='bavBackground' toggleable="lg" variant="light">
    <b-navbar-brand href="#">My Compnay</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active> <router-link to="/company">{{ $t('company') }}</router-link></b-nav-item>
        <b-nav-item><router-link to="/company">{{ $t('service') }}</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">{{ $t('about') }}</router-link></b-nav-item>
        <b-nav-item><router-link to="/contact">{{ $t('contact') }}</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form -->

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item @click="handleLangChange('en')">EN</b-dropdown-item>
          <b-dropdown-item @click="handleLangChange('zh')">中文</b-dropdown-item>
        </b-nav-item-dropdown>


        <!-- b-nav-item-dropdown right>
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  methods: {
    ...mapActions('language', ['setLanguage']),
    handleLangChange(lang) {
      this.setLanguage(lang)
    },
  }
}
</script>