function chartBar() {
  const root = document.createElement("dl");
  Object.assign(root.style, {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
    maxWidth: "700px",
    position: "relative",
    padding: "20px",
  });

  function dd(child: HTMLElement, value: number) {
    const root = document.createElement("dd");
    const c: Partial<CSSStyleDeclaration> = {
      fontSize: ".8em",
      lineHeight: "1",
      textTransform: "uppercase",
      width: "100%",
      height: "40px",
      marginLeft: "130px",
      background: `repeating-linear-gradient(
        to right,
        #ddd,
        #ddd 1px,
        #fff 1px,
        #fff 5%
      );`,
    };
    Object.assign(root.style, c);
    root.style.setProperty("--data-percent", value + "%");

    root.classList.add("percentage");
    root.classList.add(`percentage-${value}`);
    root.innerHTML = `
    <style>
    .percentage-${value}:after {
      width: var(--data-percent);
      }
      </style>
    ${child.outerHTML}
    `;
    return root.outerHTML;
  }

  function Text(text: string) {
    const root = document.createElement("span");
    root.classList.add("text");
    root.innerText = text;
    return root;
  }

  root.innerHTML = `
    <style>
    dt {
  align-self: flex-start;
  width: 100%;
  font-weight: 700;
  display: block;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 130px;
}

.text {
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 40px;
  width: 130px;
  background-color: white;
  position: absolute;
  left: 0;
  justify-content: flex-end;
}

     
      .percentage:after {
    content: "";
    display: block;
    background-color: #3d9970;
    width: 50px;
    margin-bottom: 10px;
    height: 90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .3s ease;
    cursor: pointer;
  }
  .percentage:hover {
     .percentage:after {
       background-color: #aaa; 
    }
       }
  .percentage:focus {
    .percentage:after {
       background-color: #aaa; 
    }
  }
    </style>    
     <dt>A title of the graph</dt>
  ${dd(Text(" IE 11: 7%"), 7)}
  ${dd(Text("Chrome: 20%"), 20)}
  ${dd(Text(" Android 4.4: 2% "), 2)}
  ${dd(Text(" Android 4.4: 80% "), 80)}
    `;

  return {
    root,
  };
}

export { chartBar };
