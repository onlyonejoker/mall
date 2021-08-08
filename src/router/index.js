const Home = () => import("views/home/Home.vue");
const Cart = () => import("views/cart/Cart.vue");
const Classify = () => import("views/classify/Classify.vue");
const Profile = () => import("views/profile/Profile.vue");
const Detail = () => import("views/detail/detail.vue");
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/cart",
		name: "cart",
		component: Cart,
	},
	{
		path: "/classify",
		name: "classify",
		component: Classify,
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
	},
	{
		path: "/detail",
		name: "detail",
		component: Detail,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
