import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";

import { Carousel, CarouselItem, Input, Radio, Row, Col, Button, Pagination, Message } from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Pagination);

Message.install = function(Vue, options) {
  Vue.prototype.$message = Message;
};
Vue.use(Message);
