const myList = document.querySelectorAll("li");
      myList.forEach((_, index) => {
        let btn = document.createElement("button");
        let iconDelete = document.createTextNode("\u00D7");
        btn.className = "close";
        btn.type = "button";
        btn.appendChild(iconDelete);
        myList[index].appendChild(btn);
      });

      const closesButton = document.querySelectorAll(".close");
      closesButton.forEach((_, index) => {
        closesButton[index].onClick = function () {
          const div = this.parentElement;
          div.style.display = "none";
        };
      });

      const todoList = document.querySelector("ul");
      todoList.addEventListener(
        "click",
        function ({ target }) {
          console.log(target);
          if (target.tagName === "LI") {
            target.classList.toggle("checked");
          }
        },
        false
      );

      function addNewTodo(e) {
        if (e && e.KeyCode !== 13) return;

        const todoItem = document.createElement("li");
        const inputTodo = document.getElementById("inputTodo").value;
        console.log(inputTodo);

        let tempVariable = document.createTextNode(inputTodo);
        todoItem.appendChild(tempVariable);

        console.log(todoItem);
        if (
          inputTodo === "" ||
          inputTodo === " " ||
          inputTodo === undefined ||
          inputTodo === null
        ) {
          alert("BURRO DO CARALHO");
        } else {
          document.getElementById("ulTodo").appendChild(todoItem);
        }

        document.getElementById("inputTodo").value = "";

        const btn = document.createElement("button");
        let iconDelete = document.createTextNode("\u00D7");
        btn.className = "close";
        btn.type = "button";
        btn.appendChild(iconDelete);
        todoItem.appendChild(btn);
        btn.onclick = function () {
          const div = this.parentElement;
          div.style.display = "none";
        };
      }