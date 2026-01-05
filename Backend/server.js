const path = require('path');
const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get("/api/message",(req,res)=>{
    res.json({text:"hello from express world"});
})
// Catch-all for React Router
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
