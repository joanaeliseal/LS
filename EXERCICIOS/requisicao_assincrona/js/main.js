const campoCEP = document.querySelector('#cep')
const campoCEPerror = document.querySelector('#cepError')
const campoRua = document.querySelector('#street')
const numeroRua = document.querySelector('#number')
const campoVizinho = document.querySelector('#neighborhood')
const campoCidade = document.querySelector('#city')
const campoEstado = document.querySelector('#state')
const loadingField = document.querySelector('img#loading')
const formField = document.querySelector('form')

campoCEP.addEventListener('focus', () => {
  cleanCepError()
})

campoCEP.addEventListener('blur', () => {
  let cep = campoCEP.value

  if (/\d{5}-?\d{3}/.test(cep)) {
    loadCepInfo(cep)
  } else {
    showCepError()
  }
})

function loadCepInfo(cep) {
  loadingField.classList.toggle('hidden')
  formField.classList.toggle('loading')
  let url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(res => res.json())
    .then(cepInfo => {
      if(cepInfo.erro) {
        cleanAddressFields()
      } else {
        formField.classList.toggle('loading')
        loadingField.classList.toggle('hidden')
        campoRua.value = cepInfo.logradouro
        campoVizinho.value = cepInfo.bairro
        campoCidade.value = cepInfo.localidade
        campoEstado.value = cepInfo.uf
  
        numeroRua.focus()
        cleanCepError()
      }
    })
    .catch(error => {
      showCepError()
    })
}

function cleanCepError() {
  campoCEP.classList.remove('input-cep-error')
  campoCEPerror.classList.add('hidden')
}

function showCepError() {
  campoCEP.classList.add('input-cep-error')
  campoCEPerror.classList.remove('hidden')
  cleanAddressFields()
}

function cleanAddressFields() {
  campoRua.value = ''
  numeroRua.value = ''
  campoVizinho.value = ''
  campoCidade.value = ''
  campoEstado.value = ''
}