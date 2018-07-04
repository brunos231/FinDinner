var vetorSexo = document.getElementsByName('rdsexo');
	var mensagem;

	if(vetorSexo[0].checked){
		mensagem = "Sexo Masculino escolhido";
	}
	else{
		if (vetorSexo[1].checked){
			mensagem = "Sexo Feminino escolhido";
		}
		else{
			mensagem = "Escolha o Sexo";
		}
			alert("Vetor = &" + vetorSexo[0].checked ",&" vetorSexo[1].checked + ",&" mensagem);
	}