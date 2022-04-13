const emailForm = (formState) => {
  const endpoint =
    "https://d2e3jli240.execute-api.us-east-1.amazonaws.com/default/pizza-email-function";

  const body = JSON.stringify(formState);

  const requestOptions = {
    method: "POST",
    body
  };

  //console.log(body)

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      //console.log(response)
    })
}

export {emailForm}