<template>
  <section class="game center">
    <div class="game__block">
      <ul class="game-area">
        <li class="one">
          <!-- <input type="checkbox" /> -->
          <div
            class="ghost"
            v-on:click="doThis"
            :class="{ active: isActive }"
          ></div>
          <div class="shield"></div>
        </li>
        <li>
          <!-- <input type="checkbox" /> -->
          <div class="shield"></div>
        </li>
        <li>
          <!-- <input type="checkbox" /> -->
          <div class="shield"></div>
        </li>
        <li>
          <!-- <input type="checkbox" /> -->
          <div class="shield"></div>
        </li>
        <li>
          <!-- <input type="checkbox" /> -->
          <div class="shield"></div>
        </li>
        <li>
          <!-- <input type="checkbox" /> -->
          <div class="shield"></div>
        </li>
      </ul>

      <!-- <h3 class="total-count">Targets Hit: &nbsp;</h3> -->
      <h3 class="total-count">Targets Hit: &nbsp;{{ count }}</h3>

      <!-- <ul class="game__ul">
        <li class="game_li game_li_one">
          <input class="ghost-check" type="checkbox" id="ghost-1" />
          <label for="ghost-1 ghost__label">
            <img
              class="ghost__img ghost__img_1"
              src="../assets/img/ghost.png"
              alt="ghost one"
            />
          </label>
          <img
            class="ghost__monument"
            src="../assets/img/rip.png"
            alt="monument"
          />
        </li>
        <li class="game_li game_li_two">
          <input class="ghost-check" type="checkbox" id="ghost-2" />
          <label for="ghost-2 ghost__label">
            <img
              class="ghost__img ghost__img_2"
              src="../assets/img/ghost.png"
              alt="ghost two"
            />
          </label>
          <img
            class="ghost__monument"
            src="../assets/img/rip.png"
            alt="monument"
          />
        </li>
        <li class="game_li game_li_three">
          <input class="ghost-check" type="checkbox" id="ghost-3" />
          <label for="ghost-3 ghost__label">
            <img
              class="ghost__img ghost__img_3"
              src="../assets/img/ghost.png"
              alt="ghost three"
            />
          </label>
          <img
            class="ghost__monument"
            src="../assets/img/rip.png"
            alt="monument"
          />
        </li>
        <li class="game_li game_li_four">
          <input class="ghost-check" type="checkbox" id="ghost-4" />
          <label for="ghost-4 ghost__label">
            <img
              class="ghost__img ghost__img_4"
              src="../assets/img/ghost.png"
              alt="ghost four"
            />
          </label>
          <img
            class="ghost__monument"
            src="../assets/img/rip.png"
            alt="monument"
          />
        </li>
        <li class="game_li game_li_five">
          <input class="ghost-check" type="checkbox" id="ghost-5" />
          <label for="ghost-5 ghost__label">
            <img
              class="ghost__img ghost__img_5"
              src="../assets/img/ghost.png"
              alt="ghost five"
            />
          </label>
          <img
            class="ghost__monument"
            src="../assets/img/rip.png"
            alt="monument"
          />
        </li>
        <li class="game_li game_li_six">
          <input class="ghost-check" type="checkbox" id="ghost-6" />
          <label for="ghost-6 ghost__label">
            <img
              class="ghost__img ghost__img_6"
              src="../assets/img/ghost.png"
              alt="ghost six"
            />
          </label>
          <img
            class="ghost__monument"
            src="../assets/img/rip.png"
            alt="monument"
          />
        </li>
      </ul> -->
    </div>
    <div class="game-over">
      <h2 class="game-over__title game-over__title_up">Игра окончена!</h2>
      <h2 class="game-over__title game-over__title_down counte-info">
        Результат: {{ count }}
      </h2>
      <a class="hello__link" href="/">Play again</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      count: 0,
      Arr: [{ id: 0, name: "Finish", url: "/finish" }],
      ArrOne: [{ id: 0, name: "Play again", url: "/" }],
    };
  },
  methods: {
    doThis() {
      // const ghostElem = document.getElementById("ghost");
      this.isActive = true;
      this.count++;
      setTimeout(() => {
        this.isActive = false;
      }, 1000);
    },
  },
};
</script>
