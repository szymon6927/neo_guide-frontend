<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover" class="box-card" v-for="psalm in psalms" :key="psalm.id">
          <div class="psalm-name clearfix">
            <span>{{ psalm.name }}, s {{ psalm.page_number }}</span>
            <el-button class="open-button" type="primary"
              icon="el-icon-edit" round>Otwórz</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Psalms',
  data() {
    return {
      psalms: [
        {
          name: 'Test 1',
          page_number: 240,
          card_color: 'white',
          default_image: 'http://127.0.0.1:8000/media/psalms/1/images/Icona_maria_kiko.jpg',
        },
        {
          name: 'Test 2',
          page_number: 240,
          card_color: 'white',
          default_image: 'http://127.0.0.1:8000/media/psalms/1/images/Icona_maria_kiko.jpg',
        },
        {
          name: 'Test 3',
          page_number: 240,
          card_color: 'white',
          default_image: 'http://127.0.0.1:8000/media/psalms/1/images/Icona_maria_kiko.jpg',
        },
        {
          name: 'Test 4',
          page_number: 240,
          card_color: 'white',
          default_image: 'http://127.0.0.1:8000/media/psalms/1/images/Icona_maria_kiko.jpg',
        },
        {
          name: 'Test 5',
          page_number: 240,
          card_color: 'white',
          default_image: 'http://127.0.0.1:8000/media/psalms/1/images/Icona_maria_kiko.jpg',
        },
        {
          name: 'Test 6',
          page_number: 240,
          card_color: 'white',
          default_image: 'http://127.0.0.1:8000/media/psalms/1/images/Icona_maria_kiko.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .box-card {
    margin-bottom: 1rem;
  }

  .wrapper {
    padding: 0 20px;
    min-height: 75vh;
  }

  .open-button {
    float: right;
    margin-top: -7px;
  }

  .psalm-name {
    text-align: left;
  }
</style>
