<template>
  <div>
    <section class="first-section d-flex align-center">
      <v-container>
        <v-row align="center">
          <v-col cols="6">
            <h1>
              Tenha N Possibilidades de produtos para N possibilidades na vida
            </h1>
            <span
              >O que você precisa pra ficar no controle da sua vida financeira
              tem no app do Nubank</span
            >
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-card class="pa-6 main-card" elevation="0" width="330">
              <span class="card-title">
                Peça sua conta e cartão de crédito do Nubank
              </span>
              <v-text-field class="pt-6" variant="underlined" label="Digite seu CPF">
              </v-text-field>
              <v-btn class="btn" block rounded="xl" elevation="0" color="primary" height="48">
                <span>Continuar</span>
                <v-spacer></v-spacer>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@mixin title-font {
  font-family: Graphik-Medium, Graphik-Regular, Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: -0.03em;
  font-size: 48px;
  line-height: 1.16;
}

@mixin sub-title-font {
  font-family: Graphik-Medium, Graphik-Regular, Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: -0.03em;
  font-size: 24px;
  line-height: 1.16;
}

@mixin text-font {
  font-family: Graphik-Regular, Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: -0.03em;
  font-size: 18px;
  line-height: 1.16;
}

.first-section {
  min-height: calc(100vh - 3.5rem);
  background-image: url(/assets/images/card-form-variant.jpg.webp);
  background-size: cover;
  background-position: center;
  margin-top: 3.5rem;

  h1 {
    @include title-font;
    color: rgb(var(--v-theme-primaryText));
    white-space: pre-line;
  }

  .main-card {
    border-radius: 1rem;
    .card-title {
      @include sub-title-font;
      color: rgb(var(--v-theme-secondaryText));
    }
    .btn{

    }
  }
}
</style>
