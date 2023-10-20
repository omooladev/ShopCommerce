const previewImageTemplate = async ({ src, alt, id }) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const button = document.createElement("button");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  image.src = src;
  image.alt = alt;
  image.id = id;

  //----------> add class
  button.classList.add("cancel");
  image.classList.add("preview_image");
  div.classList.add("preview_container");

  //----------> add text content to the button

  button.id = id;

  //----------> append children
  button.appendChild(span1);
  button.appendChild(span2);
  div.appendChild(button);
  div.appendChild(image);
  return previewImageContainer.appendChild(div);
};

export { previewImageTemplate };
