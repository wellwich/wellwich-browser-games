import { Hono } from "hono";

const app = new Hono<{
	Bindings: {
		MY_VAR: string;
	};
	Variables: {
		MY_VAR_IN_VARIABLES: string;
	};
}>();

app.use(async (c) => {
	if (c.req.url.includes("workers.dev")) {
		c.res.headers.set("X-Robots-Tag", "noindex");
	}
});

app.get("/api", (c) => {
	return c.json({
		message: "Hello",
		var: c.env.MY_VAR,
	});
});

export default app;
