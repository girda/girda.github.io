let promise = new Promise((resolve, reject) => {

const request = new XMLHttpRequest();

request.open('GET', './buildings.json');
request.onreadystatechange = function(e) {
    if (this.readyState == 4) {
        if (this.status == 200) {
            const response = JSON.parse(this.responseText);
            console.log('success')
            resolve(response)
        }
        else {
            console.log('error')
        }
    }
}
request.send(null)
});

promise
  .then(
    result => {
      renderRadio(result);
      openField();
    },
    error => {
      console.log(error);
    }
  );


function renderRadio(arg) {
  const data = arg;
  const form = document.querySelector('.form');
  const templateLabel = document.createElement('label');
  const templateInput = document.createElement('input');
  const templateRadioWrapper = document.createElement('div');

  console.log(data)

  data.forEach(el => {
    const radioWrapper = templateRadioWrapper.cloneNode(true);
    const input = templateInput.cloneNode(true);
    const label = templateLabel.cloneNode(true);

    radioWrapper.setAttribute('data-id', el.buildingId);
    radioWrapper.classList.add('radio');
    input.type = 'radio';
    input.name = 'test';
    input.value = el.buildingCode;
    input.id = el.buildingId;
    input.classList.add('radio__input')
    label.setAttribute('for', el.buildingId);
    label.innerText = el.buildingName;
    label.classList.add('radio__label', 'radio__title')

    radioWrapper.appendChild(input);
    radioWrapper.appendChild(label);

    if (el.buildingParentId) {
      let parent = document.querySelector(`[data-id="${el.buildingParentId}"]`);
      let parentText = parent.querySelector(`label`).innerText
      let parentTitle = document.createElement('h2');
      parentTitle.classList.add('radio__title')
      parentTitle.innerText = parentText;

      parent.childNodes.forEach(el => {
        if ( el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'label' ) {
          parent.removeChild(el);
          parent.prepend(parentTitle);
        }

      });

      parent.classList.add('have-children');
      parent.appendChild(radioWrapper);

    } else {
      form.appendChild(radioWrapper);
    }

  });
}

function openField() {
  const parentsArray = document.querySelectorAll('.have-children h2');

  parentsArray.forEach(el => {
    el.addEventListener('click', function(e) {
      e.target.parentNode.classList.toggle('is-show')
    });
  });
}

// document.addEventListener('click', function(e) {
//   console.log(e.target )
// })
