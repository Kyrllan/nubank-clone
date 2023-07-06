<template>
  <v-app-bar height="56" elevation="0">
    <div style="border: 1px solid red">Nubank Icon</div>
    <ul>
      <li>
        <span>Página Inicial</span>
      </li>
      <li><span>Para você</span></li>
      <li><span>Para seu negócio</span></li>
      <li><span>O Nubank</span></li>
      <li><span>Perguntas</span></li>
    </ul>
    <v-spacer></v-spacer>
    <div>
      <v-btn>
        <span>Login</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  li {
    border: 1px solid red;
    padding: 4px;
    font-family: 'Graphik';
    font-weight: 600;
  }
}
</style>
