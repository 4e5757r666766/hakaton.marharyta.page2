function showHeart() {
    const input = document.getElementById("textInput").value;//викликаю елемент
    //прописую якщо до того щоб після введення чогось з'являлося серденько а якщо пусто то нічого
    if (input.trim() !== "") {
      document.getElementById("output").textContent = `Ти написав(ла): "${input}"`;
      document.getElementById("heart-img").style.display = "block";
    }
  }

  const image = document.getElementById("heart");
  let scale = 1;
  let growing = true;

  function animate() {
    if (growing) {
      scale += 0.01;
      if (scale >= 1.3) growing = false;
    } else {
      scale -= 0.01;
      if (scale <= 1.0) growing = true;
    }

    image.style.transform = `scale(${scale})`;
    requestAnimationFrame(animate);
  }

  animate(); // запуск анімації