<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/" exact>Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'about'}" tag="button" exact>About</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'contacts'}" tag="button" exact>Contacts</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'users' }" tag="button" exact>User 123</nuxt-link>
      </li><li>
      <nuxt-link :to="{ name: 'users-detail', params: { id: '123' } }" tag="button" exact>User 123</nuxt-link>
    </li>
    </ul>
    <nuxt/>
  </div>
</template>


<style scoped>
ul{
  padding: 0;
    margin: 10px 0 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
}
    
</style>
