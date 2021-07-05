<template>
  <layout-container>
    <template #header>
      <header-container />
    </template>
    <template #sideBar>
      <side-bar />
    </template>
    <template #body>
        <router-view />
    </template>
  </layout-container>
</template>

<script>
import LayoutContainer from '@/components/LayoutContainer/Index'
import HeaderContainer from '@/components/Header/Index'
import SideBar from '@/components/SideBar/Index'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    LayoutContainer,
    HeaderContainer,
    SideBar
  },
  methods: {
    ...mapActions(['loadingProducts', 'loadingBrands'])
  },
  created() {
    this.loadingBrands()
    this.loadingProducts()
  }
}
</script>
