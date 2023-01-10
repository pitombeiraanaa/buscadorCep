async function buscarDadosCep(event) {
  event.preventDefault()

  let loading = document.getElementById('loading')
  let cep = document.getElementById('cep').value

  if (cep.length < 8) {
    alert('Favor informar um CEP válido:')
    return
  }

  loading.style.display = 'flex'

  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

  document.getElementById('logradouro').value = data.logradouro
  document.getElementById('complemento').value = data.complemento
  document.getElementById('bairro').value = data.bairro
  document.getElementById('localidade').value = data.localidade
  document.getElementById('uf').value = data.uf

  loading.style.display = 'none'
}
