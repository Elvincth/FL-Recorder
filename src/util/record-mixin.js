import { desktopCapturer } from "electron";

export default {
  data() {
    return {
      //For sources
      screenSources: [],
      windowSources: [],
      options: {
        thumbnailSize: {
          width: 350,
          height: 350,
        },
        fetchWindowIcons: true,
      },
    };
  },
  methods: {
    //Array purify (Sort and delete unsed window)
    purifyArray(array) {
      //Filter dragged window
      array = array.filter((item) => item.name !== "Drag");
      //Sort by id
      array = array.slice().sort(function(a, b) {
        return a.id.replace(/^\D+/g, "") > b.id.replace(/^\D+/g, "") ? 1 : -1;
      });
      return array;
    },

    async updateSources() {
      //Promise all to wait for all call return and store it in dedicated variables
      [this.screenSources, this.windowSources] = await Promise.all([
        this.getSources(["screen"]),
        this.getSources(["window"]),
      ]);

      //Get sources update per 1 second
      setTimeout(this.updateSources, 1000);
    },

    /**
     * @param {Array} type Get which type of source
     */
    getSources(type) {
      let vm = this;
      return desktopCapturer.getSources({ types: type, ...vm.options });
    },

    pngToB64(pngImage) {
      //source.thumbnail.toPNG()
      return "data:image/png;base64," + new Buffer(pngImage).toString("base64");
    },
  },
  mounted() {
    this.updateSources();
  },
};
