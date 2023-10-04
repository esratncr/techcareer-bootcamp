axios
  .get("https://northwind.vercel.app/api/products")
  .then((res) => {
    const posts = res.data;
    const tbody = document.querySelector("tbody");

    posts.forEach((post) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.name}</td>
        <td>${post.unitPrice}</td>
        <td>${post.unitsInStock}</td>
        <td><button class="delete-button" data-id="${post.id} onClick="deleteProduct"">Delete</button></td>
    `
      tbody.appendChild(row);
    });
    function deletePost(postId){
        axios.delete('https://northwind.vercel.app/api/products/')
    }
   

  })
  .catch((err) => {
    console.log("hata veriyor", err);
  });
