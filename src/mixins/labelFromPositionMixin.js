import { mapState } from 'vuex';

export const labelFormPositionMixin = {
  computed: {
    ...mapState(['isMobile']),
  },
  created() {
    this.setLabelPosition();
  },
  data() {
    return {
      labelPosition: '',
    };
  },
  methods: {
    setLabelPosition() {
      if (this.isMobile) {
        this.labelPosition = 'top';
      } else {
        this.labelPosition = 'right';
      }
    },
  },
};
