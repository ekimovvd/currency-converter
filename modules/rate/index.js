import * as _ from "lodash";
import { resolve } from "path";

const RateModule = function () {
  const names = [
    {
      name: "rate",
      path: "/rate",
    },
  ];

  this.extendRoutes((routes) => {
    _.forEach(names, (item) => {
      routes.unshift({
        name: item.name,
        path: item.path,
        component: resolve(__dirname, "component/component.vue"),
      });
    });
  });
};

export default RateModule;
