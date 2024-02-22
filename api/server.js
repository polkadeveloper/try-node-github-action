import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/api/server", (req, res) => {
  res.json({ message: "Hello Manyu" });
});

app.listen(PORT, () => {
  console.log(`Servidor is running on http://localhost:${PORT}`);
});

export default app;
