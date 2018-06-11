const app = "I don't do much.";

const token = 'b439d55773b4a19ea374a797ee49b37fd6f9f511'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
