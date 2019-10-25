<template>
  <layout-container>
    <section id="layout-profile">
      <div class="layout-fluid-container">
        <div class="widget-items item-profile">
          <h2>Profile</h2>
          <ul>
            <li>Jin Hu, Baek</li>
            <li>mAKEkr</li>
            <li>Feb, 14, 1994</li>
            <li>Korea, Republic of.</li>
            <li>Web Front, Backend Developer</li>
          </ul>
        </div>
        <div class="widget-items item-works">
          <h2>Works</h2>
          <ul>
            <li>Programming</li>
            <li>Social Marketing Strategies</li>
            <li>Media Content Creator</li>
            <li>Media Startup Accelator</li>
          </ul>
        </div>
        <div class="widget-items item-hobby">
          <h2>Hobby</h2>
          <ul>
            <li>Arcade/PC/Video Game</li>
            <li>watching Animation/Comics/Movie</li>
            <li>Something else...?</li>
          </ul>
        </div>
      </div>
    </section>
  </layout-container>
</template>

<style lang="scss">
section#layout-profile {
  padding-bottom:114px;
  background-color:#000;

  .layout-fluid-container {
    display:flex;
  }

  .widget-items {
    width:100%;
    margin:-96px 24px 0;
    padding:24px;
    z-index:2;
    background-color:#fff;
    border-radius:12px;
    box-shadow:0 3px 3px $oc-gray-1;

    h2 {
      color:$oc-gray-6;
      margin:0 0 1em;
    }

    ul {
      list-style:none;
      margin:0;
      padding:0;
      font-family:'Roboto';
      font-weight:400;

      li {
        margin:0.5em 0;
        font-family:'Roboto';
      }
    }
  }
}

@media (max-width:640px) {
  section#layout-profile {
    padding:24px;

    .layout-fluid-container {
      flex-direction:column;
      margin-top:-128px;
    }

    .widget-items {
      margin:12px 0;
      box-sizing:border-box;
    }
  }
}
</style>
