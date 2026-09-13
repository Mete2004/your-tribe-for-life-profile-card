<script>
  let { data } = $props();

  const profile = data.person;
</script>


<main class="profile-page">
    <section class="profile-card" aria-labelledby="profile-name">
        <div class="profile-heading">
            <figure class="avatar">
                <img
                    src={profile.avatar}
                    alt={`Profielfoto van ${profile.name}`}
                />
            </figure>
            
            <div class="profile-title">
                <h1 id="profile-name">{profile.name}</h1>
                <p>00 jaar</p>
            </div>

            <a class="scroll-cue" href="#overzicht">
                <span>Scroll naar beneden</span>
                <span class="scroll-cue__icon" aria-hidden="true">↓</span>
            </a>
        </div>
    </section>

    <section class="profile-details" id="overzicht" aria-labelledby="overview-title">
        <header class="section-heading">
          <p id="overview-title">Overzicht</p>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <span class="info-card__number">01</span>
            <h2>Info 01</h2>
          </article>

          <article class="info-card">
            <span class="info-card__number">02</span>
            <h2>Info 02</h2>
          </article>

          <article class="info-card">
            <span class="info-card__number">03</span>
            <h2>Info 03</h2>
          </article>

          <article class="info-card">
            <span class="info-card__number">04</span>
            <h2>Info 04</h2>
          </article>
        </div>

        <article class="bio">
          <h2>Korte biografie</h2>
          <p>
            Korte voorbeeldtekst over dit profiel. Dit is een rustige en neutrale
            toelichting ontworpen voor demonstratie binnen een semantische
            schoolopdracht.
          </p>
        </article>

        <a class="back-to-top" href="#bovenaan">↑ Terug naar boven</a>
      </section>
</main>
