import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL = "https://v2.jokeapi.dev/joke";

app.set("view engine", "ejs"); // Ensure your app knows to use EJS as the template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files if needed

app.get("/", (req, res) => {
  res.render("index", { content: "Waiting for data..." });
});

app.get("/joke", async (req, res) => {
  const { category, lang, contains } = req.query;
  let { type } = req.query;
  // If no type is selected, randomly choose between 'single' and 'twopart'
  if (!type) {
    const types = ["single", "twopart"];
    type = types[Math.floor(Math.random() * types.length)];
  }

  let apiUrl = `${API_URL}/any`;
  if (category) {
    apiUrl = `${API_URL}/${category}`;
  }
  try {
    const params = { lang, type, contains };
    const result = await axios.get(apiUrl, { params });

    const joke = result.data.setup
      ? `${result.data.setup} - ${result.data.delivery}`
      : result.data.joke;
    res.render("index", { content: joke });
  } catch (error) {
    console.error(error);
    res.status(500).render("index", { content: error.response.data.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
