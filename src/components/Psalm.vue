<template>
  <el-container>
    <el-row class="psalm-details" :gutter="10" v-if="psalm">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="psalm-name">
          <h1>{{ psalm.name }}</h1>
        </div>

        <div class="pslam-page-number">
          <h3>Strona: {{ psalm.page_number }}</h3>
        </div>

        <el-divider><i class="el-icon-s-grid"></i></el-divider>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <div class="psalm-recordings" v-if="psalm.recordings && psalm.recordings.length">
          <h3>Nagrania:</h3>
          <div class="recording" v-for="(recording, index) in psalm.recordings" :key="index">
            <div>#{{ index + 1 }}</div>
            <audio class="audio-player" controls controlsList="nodownload">
              <source :src="recording.audio" type="audio/mpeg">
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
        <div class="psalm-recordings" v-else>
          <h3>Nagrania:</h3>
          <p>Brak nagrań :(</p>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <div class="psalm-image">
          <h3>Zdjęcie:</h3>
          <div class="demo-image__error">
            <div class="block" :class="{'no-image': !psalm.default_image}">
              <el-image :src="psalm.default_image" :preview-src-list="[psalm.default_image]">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                  <div>Brak zdjęcia</div>
                </div>
              </el-image>
            </div>
          </div>

          <div class="other-psalm-images" v-if="psalm.images && psalm.images.length">
            <div class="demo-image__error"
              v-for="(psalm_image, index) in psalm.images" :key="index">
              <div class="block" :class="{'no-image': !psalm_image.image}">
                <el-image :src="psalm_image.image" :preview-src-list="[psalm_image.image]">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                    <div>Brak zdjęcia</div>
                  </div>
                </el-image>
              </div>
            </div>
          </div>

        </div>

      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Psalm',
  props: ['psalmID'],
  computed: {
    ...mapState('psalmsModule', ['psalm']),
  },
  metaInfo() {
    return {
      title: ((this.psalm !== undefined) ? this.psalm.name : 'Psalm'),
      titleTemplate: '%s | Neo Guide – Śpiewnik NEO',
    };
  },
  created() {
    this.getSinglePsalm(this.psalmID);

    if (!this.psalm) {
      this.$router.push({ name: 'notFound' });
    }
  },
  methods: {
    ...mapActions('psalmsModule', { getSinglePsalm: 'getSinglePsalm' }),
  },
};
</script>

<style scoped>
  .psalm-details {
    text-align: left;
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100%;
  }

  .divider {
    margin: 1rem 0;
    border: 1px solid #EBEEF5;
  }

  .audio-player {
    width: 80%;
  }

  .psalm-name h1 {
    font-size: 1.7rem;
    margin: 5px 0;
  }

  .pslam-page-number h3 {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  .recording {
    margin-bottom: 1rem;
  }

  .psalm-image .block {
    text-align: center;
  }

  .psalm-image .block .el-image {
    border: 1px solid #DCDFE6;
  }

  .demo-image__error .block.no-image {
    text-align: center;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .audio-player {
      width: 100%;
    }
  }
</style>
