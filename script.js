setTimeout(() => {
  let div = document.createElement("div");
  const cl = div.classList.add("main");
  div.append(cl);
  div.innerHTML = "10";
  document.body.append(div);
  setTimeout(() => {
    div.innerHTML = "9";
    setTimeout(() => {
      div.innerHTML = "8";
      setTimeout(() => {
        div.innerHTML = "7";
        setTimeout(() => {
          div.innerHTML = "6";
          setTimeout(() => {
            div.innerHTML = "5";
            setTimeout(() => {
              div.innerHTML = "4";
              setTimeout(() => {
                div.innerHTML = "3";
                setTimeout(() => {
                  div.innerHTML = "2";
                  setTimeout(() => {
                    div.innerHTML = "1";
                    setTimeout(() => {
                      div.innerHTML = "0";
                      setTimeout(() => {
                        div.innerHTML = "Happy Independence Day ";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
