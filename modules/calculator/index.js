import * as _ from "lodash";
import { resolve } from "path";

const CalculatorModule = function () {
  const names = [
    {
      name: "calculator",
      path: "/",
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

export default CalculatorModule;
