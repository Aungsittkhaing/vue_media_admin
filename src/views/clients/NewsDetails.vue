<template>
  <div class="d-flex justify-content-end">
    <a class="btn bg-primary btn-sm mr-10" @click="home()">Home</a>
    <a class="btn bg-info btn-sm" @click="login()">Login</a>
  </div>
  <main>
    <!-- About US Start -->
    <div class="about-area">
      <div class="container">
        <!-- Hot Aimated News Tittle-->
        <div class="row">
          <div class="col-lg-12">
            <div class="trending-tittle">
              <strong>Trending now</strong>
              <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
              <div class="trending-animated">
                <ul id="js-news" class="js-hidden">
                  <li class="news-item">
                    Bangladesh dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li class="news-item">
                    Spondon IT sit amet, consectetur.......
                  </li>
                  <li class="news-item">
                    Rem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <!-- Trending Tittle -->
            <div class="about-right mb-10">
              <div class="about-img">
                <img :src="posts.image" />
              </div>
              <div class="section-tittle mb-30 pt-30">
                <h3>{{ posts.title }}</h3>
              </div>
              <div class="about-prea">
                <p class="about-pera1 mb-25">
                  {{ posts.description }}
                </p>
              </div>
              <div class="social-share">
                <div class="section-tittle">
                  <i class="fas fa-eye mt-1 mr-1"></i>
                  <p>{{ viewCount }}</p>
                </div>
              </div>
            </div>
            <!-- From -->
            <div class="row">
              <div class="col-lg-8 mb-5">
                <div class="form-group">
                  <button
                    type="submit"
                    class="button button-contactForm boxed-btn"
                    @click="back()"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <!-- Section Tittle -->
            <div class="section-tittle mb-40">
              <h3>Follow Us</h3>
            </div>
            <!-- Flow Socail -->
            <div class="single-follow mb-45">
              <div class="single-box">
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"
                      ><img src="/assets/img/news/icon-fb.png" alt=""
                    /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"
                      ><img src="/assets/img/news/icon-tw.png" alt=""
                    /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"
                      ><img src="/assets/img/news/icon-ins.png" alt=""
                    /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"
                      ><img src="/assets/img/news/icon-yo.png" alt=""
                    /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- New Poster -->
            <div class="news-poster d-none d-lg-block">
              <img src="/assets/img/news/news_card.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About US End -->
  </main>
</template>

<script src="../../js/newsDetails.js"></script>
