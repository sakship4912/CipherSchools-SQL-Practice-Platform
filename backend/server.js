import express from "express";

const app = express();
app.use(express.json());

// assignment list api
app.get("/assignments", (req, res) => {
  res.json([
    {
      _id: "1",
      title: "Basic SELECT",
      question: "Write a query to fetch all records from the users table."
    }
  ]);
});

// query execution api
app.post("/query", (req, res) => {
  const { query } = req.body;

  // allow only select queries
  if (!query || !query.toLowerCase().startsWith("select")) {
    return res.json({ error: "Only SELECT queries are allowed" });
  }

  res.json({
    result: "Sample query executed successfully"
  });
});

// hint api
app.post("/hint", (req, res) => {
  res.json({
    hint: "Check table and column names used in your query."
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
