import React from "react";

import Layout from "../components/Layout";
import "../styles/Settings.scss";
const Settings = () => {
  return (
    <Layout>
      <div class="container mt-3">
        <div class="row align-items-center">
          {/* <div class="col-4">
              <div class="card card-body">Center</div>
            </div> */}
          <div class="col-6 mx-auto ">
            <div class="card text-info bg-light ">
              <div class="card-body d-flex flex-column align-items-center">
                <img
                  class="profile_image"
                  src={require("../assets/profile.jpg").default}
                />
                <hr></hr>
                <h1 class="card-title">Abrar Ahmad Shah</h1>
                <div class="px-4 py-3 col-10 ">
                  <h5 class="mb-0 card-label">Address</h5>
                  <div class="p-2 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">Srinagar Jk 190001</p>
                  </div>
                </div>
                <div class="px-4 py-3 col-10 ">
                  <h5 class="mb-0 card-label">Contact</h5>
                  <div class="p-2 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">7006349057</p>
                  </div>
                </div>
                <div class="px-4 py-3 col-10 ">
                  <h5 class="mb-0 card-label">Profession</h5>
                  <div class="p-2 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">Web Developer</p>
                  </div>
                </div>
                {/* <h3 class="card-label">Address</h3>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                  </p> */}
                <a href="#" class="btn text-white border-light">
                  Outline
                </a>
              </div>
            </div>
          </div>
          {/* <div class="col-4">
              <div class="card card-body">Center</div>
            </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
