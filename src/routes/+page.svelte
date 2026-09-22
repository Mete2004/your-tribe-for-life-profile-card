<script>
  let { data } = $props();

  const profile = data.person;

  const birthdate = new Date(profile.birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();

  if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
</script>


<main class="profile-page">
  <section class="profile-card" id="bovenaan">
    <section class="profile-intro" aria-labelledby="profile-name">
        <div class="profile-heading">
            <figure class="avatar">
                <img
                  src={profile.avatar}
                  alt={`Profielfoto van ${profile.name}`}
                  height="200"
                  width="200"
                />
            </figure>
            
            <div class="profile-title">
                <h1 id="profile-name">{profile.name}</h1>
                <p>{age} jaar</p>
            </div>

            <a class="scroll-cue" href="#overzicht">
              <span>Scroll naar beneden</span>
              <span class="scroll-cue__icon">↓</span>
            </a>
        </div>
    </section>

    <section class="profile-details" id="overzicht" aria-labelledby="overview-title">
        <header class="section-heading">
          <p id="overview-title">Overzicht</p>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h2 class="info-card-name">Nickname</h2>
            <p>{profile.nickname}</p>
          </article>

          <article class="info-card">
             <h2 class="info-card-name">Favoriete dier</h2>
             <p>{profile.fav_animal}</p>
          </article>

          <article class="info-card">
            <h2 class="info-card-name">Woonplaats</h2>
            <p>{profile.residency}</p>
          </article>

          <article class="info-card">
            <h2 class="info-card-name">Github</h2>
            <p>{profile.github_handle}</p>
          </article>
        </div>

        <article class="bio">
          <h2>Korte biografie</h2>
          <p>{profile.bio}</p>
        </article>

        <a class="back-to-top" href="#bovenaan">↑ Terug naar boven</a>
      </section>
    </section>
</main>

<style>

  .profile-page{
    min-height: 100vh;
    padding: 3rem 2rem;
    background: #f1f1f1;

    @media (min-width: 768px) {
         padding: 3rem;
    }
  }

  .profile-card{
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 2rem;
    overflow: hidden;
  }

  .profile-intro {
    min-height: 100vh;
    padding: 2rem 1.5rem;

    @media (min-width: 768px) {
        padding: 3rem;
    }
}

.profile-heading {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.avatar {
    animation-name: profile-image-shrink;
    animation-timing-function: linear;
    animation-timeline: scroll(root block);
    /* Scrollt mee met de verticale scroll van de pagina */
    animation-range: 0 55%;

    width: 180px;
    height: 180px;
    margin: 0 0 1.5rem;

    @media (prefers-reduced-motion: no-preference) {
        animation-name: profile-image-shrink;
        animation-timing-function: linear;
        /* Scrollt mee met de verticale scroll van de pagina */
        animation-timeline: scroll(root block);
        animation-range: 0 55%;
    }

    @media (min-width: 768px) {
        width: 220px;
        height: 220px;
        animation-range: 0% 80%;
    }
}

@keyframes profile-image-shrink {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0.65);
    }
}

.avatar img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
}

.profile-title {

    text-align: center;

    @media (prefers-reduced-motion: no-preference) {
        animation-name: profile-title-move;
        animation-timing-function: linear;
        animation-timeline: scroll(root block);
        animation-range: 0 55%;
    }

    @media (min-width: 768px) {
        animation-range: 0% 90%;
    }
}

@keyframes profile-title-move {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: .3;
        transform: translateY(-40px);
    }
}

.profile-title h1 {
    margin: 0;
    font-size: 2rem;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
}

.profile-title p {
    margin: .75rem 0 0;
    color: #333333;
}

.scroll-cue {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 4rem;
    color: #313131;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;

     @media (prefers-reduced-motion: no-preference) {
        animation-name: scroll-cue-fade;
        animation-timing-function: linear;
        animation-timeline: scroll(root block);
        animation-range: 0 55%;
     }

    @media (min-width: 768px) {
        animation-range: 0% 80%;
    }
}

@keyframes scroll-cue-fade {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.scroll-cue__icon {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid #ddd;
    border-radius: 50%;
}

.profile-details {
    padding: 2rem 1.5rem 4rem;

    @media (prefers-reduced-motion: no-preference) {
        animation-name: details-reveal;
        animation-timing-function: linear;
        animation-timeline: scroll(root block);
        animation-range: 0% 50%;
    }

    @media (min-width: 768px) {
        padding: 3rem;
    }
}

@keyframes details-reveal {
    from {
        opacity: 0;
        transform: translateY(200px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section-heading {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ddd;
}

.section-heading p {
    margin: 0 0 0.75rem;
    color: #999;
    font-size: 0.8rem;
    text-transform: uppercase;
}

.info-grid {
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

.info-card {
    min-height: 100px;
    padding: 1.25rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.75rem;

    @media (prefers-reduced-motion: no-preference) {
        animation-name: info-card-reveal;
        animation-timing-function: linear;
        animation-timeline: scroll(root block);
        animation-range: 0% 60%;
    }

    @media (min-width: 768px) {
        animation-range: 0% 90%;
    }
}

@keyframes info-card-reveal {
    from {
        opacity: 0.2;
        transform: translateY(80px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.info-card-name {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    font-weight: 500;
}

.info-card p {
    margin: 0;
    color: #777;
}

.bio {
    margin-top: 3rem;
    padding: 1.25rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.75rem;
}

.bio h2 {
    margin: 0 0 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #777;
}

.bio p {
    margin: 0;
    line-height: 1.6;
    color: #666;
}

.back-to-top {
    display: block;
    width: fit-content;
    margin: 2.5rem auto 0;
    color: #aaa;
    text-decoration: none;
    font-size: 0.85rem;
}

</style>