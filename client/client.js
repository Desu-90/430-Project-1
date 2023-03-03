const handleResponse = async (response) => {
    const content = document.getElementById('content');

    switch(response.status) {
        case 200:
          content.innerHTML = `<b>Success</b>`;
          break;
        case 400:
          content.innerHTML = `<b>Bad Request</b>`;
          break;
        case 404:
          content.innerHTML = `<b>Not Found</b>`;
          break;
        default:
          content.innerHTML = `<p>Status Code not Implemented By Client</p>`;
          break;
      };
}

const sendPost = async (omniForm) => {
  //Grab all the info from the form
  const formAction = omniForm.getAttribute('action');
  const formMethod = omniForm.getAttribute('method');
  
  const carbField = omniForm.querySelector('#carbNum');
  const glucField = omniForm.querySelector('#glucNum');

  //Build a data string in the FORM-URLENCODED format.
  const formData = `carbs=${carbField.value}&glucose=${glucField.value}`;


  let response = await fetch(formAction, {
    method: formMethod,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: formData,
  });

  //Once we have a response, handle it.
  handleResponse(response, formMethod);
};

const sendFetch = async (userForm) => {
    const response = await fetch(url);
    handleResponse(response);
}

const init = () => {
    const confirmButton = document.querySelector('#bolusForm');

    const doSomething = (e) => {
        e.preventDefault();
        sendPost(confirmButton);
        return false;
    }
    console.log('bundled succesfully')
    confirmButton.addEventListener('submit', doSomething);
}

window.onload = init;