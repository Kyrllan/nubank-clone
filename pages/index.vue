<template>
  <div>
    <section class="first-section d-flex align-center">
      <v-container>
        <v-row align="center">
          <v-col cols="5">
            <h1>
              Tenha N Possibilidades de produtos para N possibilidades na vida
            </h1>
            <div class="main-text">
              O que você precisa pra ficar no controle da sua vida financeira
              tem no app do Nubank
            </div>
          </v-col>
          <v-col cols="7" class="d-flex justify-end">
            <v-card class="pa-6 main-card" elevation="0" width="330">
              <span class="card-title">
                Peça sua conta e cartão de crédito do Nubank
              </span>
              <v-text-field
                class="pt-6"
                variant="underlined"
                label="Digite seu CPF"
              >
              </v-text-field>
              <v-btn
                :disabled="true"
                class="mt-6 btn"
                block
                rounded="xl"
                elevation="0"
                color="primary"
                height="48"
              >
                <span>Continuar</span>
                <v-spacer></v-spacer>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="second-section d-flex align-center">
      <v-container>
        <v-row align="center">
          <v-col cols="6">
            <div class="title">Conheça nosso Cartão de Crédito</div>
            <div class="subtitle">
              Pode chamar ele de roxinho. Além disso, pode chamar ele de
              moderno, gratuito e prático também.
            </div>
            <div class="text underline-animate">
              <span>Saiba mais</span>
              <v-icon class="pl-2" color="primary" size="18"
                >mdi-arrow-right</v-icon
              >
            </div>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <img
              style="min-width: 350px; max-width: 900px"
              src="/assets/images/credit-card.jpeg"
            />
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
  line-height: 1.32;
}

@mixin text-font {
  font-family: Graphik-Regular, Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: -0.03em;
  font-size: 18px;
  line-height: 1.16;
}

.underline-animate {
  position: relative;
  display: inline-block;
}

.underline-animate::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: rgb(var(--v-theme-primary));
  transition: width 0.3s ease-out;
}

.underline-animate:hover::before {
  width: 100%;
  animation: underline-animation 0.3s forwards;
}

@keyframes underline-animation {
  from {
    left: 0;
    width: 0;
  }
  to {
    left: 0;
    width: 100%;
  }
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
    padding: 0 0 0 16px;
  }

  .main-text {
    @include sub-title-font;
    color: rgb(var(--v-theme-primaryText));
    white-space: pre-line;
    padding: 16px 0 0 16px;
  }

  .main-card {
    border-radius: 1rem;
    .card-title {
      @include sub-title-font;
      color: rgb(var(--v-theme-secondaryText));
    }
  }
}

.second-section {
  background-color: rgb(var(--v-theme-primaryText));
  height: 100vh;
  padding-right: 64px;
  padding-left: 64px;

  .title {
    @include title-font;
    color: rgb(var(--v-theme-primary));
    white-space: pre-line;
    padding: 0 0 0 16px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .subtitle {
    @include title-font;
    color: rgb(var(--v-theme-secondaryText));
    white-space: pre-line;
    font-size: 40px;
    padding: 0 0 0 16px;
  }

  .text {
    display: flex;
    align-items: center;
    font-family: Graphik-Medium;
    color: rgb(var(--v-theme-primary));
    white-space: pre-line;
    margin: 20px 0 0 16px;
    font-size: 18px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
