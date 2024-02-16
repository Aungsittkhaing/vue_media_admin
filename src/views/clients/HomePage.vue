<template>
  <div class="d-flex justify-content-end">
    <a class="btn bg-info btn-sm mr-2" v-if="!tokenStatus" @click="login()"
      >Login</a
    >
    <a class="btn bg-danger btn-sm" v-if="tokenStatus" @click="logout()"
      >LogOut</a
    >
  </div>
  <!-- Whats New Start -->
  <section class="whats-news-area pt-50 pb-20">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-3 col-md-3">
              <div class="section-tittle mb-30">
                <h3>Whats New</h3>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="properties__button">
                <!--Nav Button  -->
                <nav class="d-flex justify-content-between">
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="details.htmlnav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      @click="categorySearch('')"
                      >All</a
                    >
                    <a
                      class="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="details.htmlnav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      @click="categorySearch(category.title)"
                      v-for="(category, index) in categoryLists"
                      :key="index"
                      >{{ category.title }}</a
                    >
                  </div>
                  <div class="d-flex justify-content-end">
                    <input
                      type="text"
                      class="form-control"
                      v-model="searchKey"
                      v-on:keyup.enter="search()"
                    />
                    <i
                      class="fas fa-search special-tag mt-2 ml-2"
                      style="font-size: 25px"
                      @click="search()"
                    ></i>
                  </div>
                </nav>
                <!--End Nav Button  -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <!-- Nav Card -->
              <div class="tab-content" id="nav-tabContent">
                <!-- card one -->
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="whats-news-caption">
                    <div v-if="!tokenStatus">
                      <h2
                        class="text-white bg-danger d-flex justify-content-center my-5 p-5 rounded shadow"
                      >
                        you don't have permission
                      </h2>
                    </div>
                    <div v-else>
                      <div class="row">
                        <div
                          class="mx-auto mt-5 d-flex"
                          style="height: 200px"
                          v-if="postLists.length == 0"
                        >
                          <h1 class="text-danger">There is no data</h1>
                        </div>
                        <div
                          class="col-lg-6 col-md-6"
                          v-for="(post, index) in postLists"
                          :key="index"
                          v-else-if="postLists.length != 0"
                        >
                          <div
                            class="single-what-news mb-100"
                            @click="newsDetails(post.post_id)"
                          >
                            <div class="what-img">
                              <img :src="post.image" alt="" />
                            </div>
                            <div class="what-cap">
                              <span class="color1">{{ post.title }}</span>
                              <h4>
                                <a>{{
                                  post.description.substring(0, 50) + "..."
                                }}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Nav Card -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Whats New End -->

  <!--Start pagination -->
  <!-- <div class="pagination-area pb-45 text-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="single-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-start">
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow roted"></span
                  ></a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="details.html">01</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">02</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">03</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow right-arrow"></span
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- End pagination  -->
</template>

<script src="../../js/homePage.js"></script>
