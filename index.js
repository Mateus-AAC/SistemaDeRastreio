const app = require("./src/main");
const port = normalizaPort("3000");

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});