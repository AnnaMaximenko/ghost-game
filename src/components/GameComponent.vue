<template>
  <section class="game center">
    <div class="game__block">
      <ul class="game__ul">
        <li class="game_li game_li_one">
          <input class="ghost-check" type="checkbox" id="ghost-1" />
          <label for="ghost-1">
            <img src="../assets/img/ghost.png" alt="ghost one" />
          </label>
          <img src="../assets/img/rip.png" alt="monument" />
        </li>
        <li class="game_li game_li_two">
          <input class="ghost-check" type="checkbox" id="ghost-2" />
          <label for="ghost-2">
            <img src="../assets/img/ghost.png" alt="ghost two" />
          </label>
          <img src="../assets/img/rip.png" alt="monument" />
        </li>
        <li class="game_li game_li_three">
          <input class="ghost-check" type="checkbox" id="ghost-3" />
          <label for="ghost-3">
            <img src="../assets/img/ghost.png" alt="ghost three" />
          </label>
          <img src="../assets/img/rip.png" alt="monument" />
        </li>
        <li class="game_li game_li_four">
          <input class="ghost-check" type="checkbox" id="ghost-4" />
          <label for="ghost-4">
            <img src="../assets/img/ghost.png" alt="ghost four" />
          </label>
          <img src="../assets/img/rip.png" alt="monument" />
        </li>
        <li class="game_li game_li_five">
          <input class="ghost-check" type="checkbox" id="ghost-5" />
          <label for="ghost-5">
            <img src="../assets/img/ghost.png" alt="ghost five" />
          </label>
          <img src="../assets/img/rip.png" alt="monument" />
        </li>
        <li class="game_li game_li_six">
          <input class="ghost-check" type="checkbox" id="ghost-6" />
          <label for="ghost-6">
            <img src="../assets/img/ghost.png" alt="ghost six" />
          </label>
          <img src="../assets/img/rip.png" alt="monument" />
        </li>
      </ul>
    </div>
    <div class="game-over">
      <h2 class="game-over__title game-over__title_up">Игра окончена!</h2>
      <h2 class="game-over__title game-over__title_down counte-info">
        Результат:
      </h2>
      <a class="hello__link" href="/">Play again</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Arr: [{ id: 0, name: "Finish", url: "/finish" }],
      ArrOne: [{ id: 0, name: "Play again", url: "/" }],
    };
  },
};
</script>
